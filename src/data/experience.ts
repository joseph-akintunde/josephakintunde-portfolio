export interface ExperienceEntry {
  role: string;
  org: string;
  start: string;
  end: string;
  location?: string;
  bullets: string[];
}

export const education = {
  school: "Claflin University",
  location: "Orangeburg, SC",
  degree: "Bachelor of Science in Computer Science",
  start: "Aug. 2023",
  end: "May 2027",
  gpa: "3.89",
  honors: "Dean's List, Honors Scholar",
};

/** Offers accepted and not started yet, listed first. */
export const incoming = [{ role: "Software Engineer", org: "Facebook" }];

export const experience: ExperienceEntry[] = [
  {
    role: "Software Engineering Intern, Monetization & AI-Enhanced Ads",
    org: "Meta",
    start: "June 2026",
    end: "August 2026",
    location: "Menlo Park, CA",
    bullets: [
      "Built and deployed an ad-surface optimization application in Hack and TypeScript on an internal FaaS platform, launched behind a feature gate to the Feed Ads team following accuracy validation.",
      "Generated prioritized monetization opportunities for any Facebook ad surface, using an LLM reasoning layer on Meta's internal AI platform (Claude Opus 4.8) to rank findings and project revenue impact as an estimated percentage lift.",
      "Instrumented live benchmarking of emerging surfaces against mature surfaces such as Mobile Feed, comparing ads delivery and topline metrics to expose feature gaps blocking monetization parity.",
      "AI-Enhanced Ads: contextualized shared ad notifications in Messenger by attaching advertiser and product metadata, rendering it in push notification copy and as an in-chat call-to-action button beneath the shared reel.",
    ],
  },
  {
    role: "Software Engineering Intern, Instagram Core Ads",
    org: "Meta",
    start: "June 2025",
    end: "August 2025",
    location: "Menlo Park, CA",
    bullets: [
      "Architected FeedPlanner, a full-stack capstone application in React, Express.js, and Firebase/Firestore that recommends personalized recipes from pantry contents, ingredient freshness, and user behavior to reduce food waste.",
      "Engineered a meal planner with drag-and-drop scheduling, automatic grocery list generation, and timezone-aware pantry expiration alerts, using Google Cloud Functions with the Java SDK for Pub/Sub scheduling.",
      "Designed adaptive recommendation and substitution algorithms driven by user interaction logs and weighted scoring (rating, recency, frequency, match, urgency), with a nutrition-based similarity model for expiring-ingredient alternatives.",
      "Optimized database queries and caching strategies, reducing recommendation latency by 18% and cache expiration time by 37%.",
      "Improved recommendation accuracy by 24% and interactions per session by 12% through scoring optimizations and real-time notifications.",
    ],
  },
];

export const leadership: ExperienceEntry[] = [
  {
    role: "Academic Tutor",
    org: "Claflin University",
    start: "September 2023",
    end: "May 2025",
    location: "Orangeburg, SC",
    bullets: [
      "Organized and led tutoring and study sessions for student-athletes under the Athletic Director, increasing participation by 61% and raising overall athlete GPA by 0.8.",
    ],
  },
  {
    role: "Senator, Student Government Association",
    org: "School of Natural Sciences & Mathematics",
    start: "September 2025",
    end: "May 2026",
    bullets: ["Elected by peers to represent the School of Natural Sciences and Mathematics in university governance."],
  },
];
