export interface Project {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  repo?: string;
  demo?: string;
  featured?: boolean;
  status?: string;
  /** A screenshot under public/, shown on the project's card. */
  image?: string;
  imageAlt?: string;
}

export const projects: Project[] = [
  {
    title: "garet.ai (AI Study Buddy)",
    description:
      "Senior thesis project: an AI study partner that works from a student's own lecture notes. It splits a lecture into topics, writes practice quizzes with an explanation for every answer, answers questions with citations to the exact passage, and tracks mastery per topic after every answer. Weak topics get focused practice and more sessions in a spaced study plan. React and TypeScript front end, a Node.js/Express API, and a Python FastAPI service on the Claude API, with Firebase Authentication.",
    tags: ["React", "TypeScript", "Node.js", "Express", "Python", "FastAPI", "Claude API", "Firebase"],
    status: "In Progress · Aug. 2026 – Present",
    featured: true,
    image: "/projects/garet-ai.jpg",
    imageAlt:
      "garet.ai quiz screen: a question written from a recursion lecture, the correct answer highlighted, and the explanation below it",
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
