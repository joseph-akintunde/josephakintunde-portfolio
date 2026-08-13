export interface Project {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  repo?: string;
  demo?: string;
  featured?: boolean;
  status?: string;
}

export const projects: Project[] = [
  {
    title: "garet.ai (AI Study Buddy)",
    description:
      "Senior thesis project: an AI study companion that recommends compatible study partners through a hybrid recommender over course data, stated preferences, behavioral signals, and schedule availability. Uses embeddings, similarity metrics, and constraint-aware scheduling to rank candidate matches, evaluated on precision, recall, and F1 against a profile-based baseline. Also adds Q&A, plain-language topic explanation, and study planning with reminders.",
    tags: ["React", "Node.js", "Firebase", "Python"],
    status: "In Progress · Aug. 2026 – Present",
    featured: true,
  },
  {
    title: "FeedPlanner",
    description:
      "Full-stack capstone app built during Meta University: recommends personalized recipes from pantry contents, ingredient freshness, and user behavior to reduce food waste. Includes drag-and-drop meal scheduling, automatic grocery lists, timezone-aware expiration alerts, and adaptive recommendation/substitution algorithms. Reduced recommendation latency by 18% and improved recommendation accuracy by 24%.",
    tags: ["React", "Express.js", "Firebase", "Firestore", "Google Cloud Functions"],
    repo: "https://github.com/Joseph-Akintunde-MetaU/capstone",
    demo: "https://www.loom.com/share/4b264830c7e04807bd28383be4bdc393",
    status: "June 2025 – August 2025",
    featured: true,
  },
  {
    title: "AI Plan Assistance Chatbot",
    description:
      "Built with a 6-person team for the Alegeus challenge at the VISTA Hackathon: an AI chatbot answering customer questions about financial benefits, including COBRA enrollment. Integrated a conversational Chat API and designed JSON response handling so plan details returned as clear, structured answers rather than raw policy text.",
    tags: ["C#", "TypeScript", "HTML", "CSS", "Chat API"],
    repo: "https://github.com/zabidinAlegeus/AlegeusVistaHackathon2024",
    status: "July 2024",
  },
];
