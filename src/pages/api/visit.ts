import type { APIRoute } from "astro";

// "Last visitor from …": swaps the previous visitor's approximate location for this visitor's and
// returns the previous one. The location is what Vercel derives from the visitor's IP address: city,
// region, country, and coordinates for the map, rounded to 0.1° (about 10 km) so they say no more
// than the city does. The time of the visit is kept too, for "12 mins ago". Nothing else is stored,
// and each visit overwrites the last: no IP address, nothing that identifies anyone.
//
// Storage is a Redis database connected to the Vercel project (Storage → Upstash for Redis), which
// adds the KV_REST_API_* variables. Without it the endpoint answers {last: null} and the page shows
// nothing.
export const prerender = false;

const KEY = "last-visitor";
const BOT = /bot|crawl|spider|slurp|preview|monitor|headless|lighthouse/i;

/** `at` is when the visit happened, in milliseconds since 1970. */
type Place = { city: string; region: string; country: string; lat?: number; lon?: number; at?: number };

export const POST: APIRoute = async ({ request }) => {
  const url = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return answer(null);

  const headers = request.headers;
  const city = decode(headers.get("x-vercel-ip-city"));
  const lat = coordinate(headers.get("x-vercel-ip-latitude"), 90);
  const lon = coordinate(headers.get("x-vercel-ip-longitude"), 180);
  const here: Place | null =
    city && !BOT.test(headers.get("user-agent") ?? "")
      ? {
          city,
          region: headers.get("x-vercel-ip-country-region") ?? "",
          country: headers.get("x-vercel-ip-country") ?? "",
          ...(lat !== null && lon !== null ? { lat, lon } : {}),
          at: Date.now(),
        }
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

/** A latitude or longitude from Vercel, rounded to 0.1°; null when missing or out of range. */
function coordinate(value: string | null, limit: number): number | null {
  const degrees = Number(value);
  return value && Number.isFinite(degrees) && Math.abs(degrees) <= limit ? Math.round(degrees * 10) / 10 : null;
}

/** Vercel URL-encodes the city ("San%20Francisco"). */
function decode(value: string | null): string {
  try {
    return value ? decodeURIComponent(value) : "";
  } catch {
    return "";
  }
}
