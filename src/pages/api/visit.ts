import type { APIRoute } from "astro";

// "Last visitor from …": swaps the previous visitor's approximate location for this visitor's and
// returns the previous one. The location is the city, region and country that Vercel derives from
// the visitor's IP address. Only those three are stored, and each visit overwrites the last: no IP
// address, no time, nothing that identifies anyone.
//
// Storage is a Redis database connected to the Vercel project (Storage → Upstash for Redis), which
// adds the KV_REST_API_* variables. Without it the endpoint answers {last: null} and the page shows
// nothing.
export const prerender = false;

const KEY = "last-visitor";
const BOT = /bot|crawl|spider|slurp|preview|monitor|headless|lighthouse/i;

type Place = { city: string; region: string; country: string };

export const POST: APIRoute = async ({ request }) => {
  const url = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return answer(null);

  const headers = request.headers;
  const city = decode(headers.get("x-vercel-ip-city"));
  const here: Place | null =
    city && !BOT.test(headers.get("user-agent") ?? "")
      ? { city, region: headers.get("x-vercel-ip-country-region") ?? "", country: headers.get("x-vercel-ip-country") ?? "" }
      : null;

  try {
    // GETSET stores this visit and returns the previous one in a single step. A visit without a
    // location (or from a crawler) only reads, so it never erases the last real visitor.
    const command = here ? ["GETSET", KEY, JSON.stringify(here)] : ["GET", KEY];
    const response = await fetch(url, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: JSON.stringify(command),
    });
    if (!response.ok) return answer(null);
    const { result } = (await response.json()) as { result: string | null };
    return answer(result ? (JSON.parse(result) as Place) : null);
  } catch {
    return answer(null);
  }
};

function answer(last: Place | null) {
  return new Response(JSON.stringify({ last }), {
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
}

/** Vercel URL-encodes the city ("San%20Francisco"). */
function decode(value: string | null): string {
  try {
    return value ? decodeURIComponent(value) : "";
  } catch {
    return "";
  }
}
