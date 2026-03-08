export interface HackNight {
  id: number;
  theme: string;
  date: string;
  stack: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
}

export interface Project {
  name: string;
  creator: string;
  tags: string[];
  github: string;
}

export interface Testimonial {
  name: string;
  quote: string;
}

export const upcomingNights: HackNight[] = [
  {
    id: 1,
    theme: "The Agentic Web",
    date: "March 14",
    stack: "LangChain, Next.js",
    difficulty: "Intermediate",
  },
  {
    id: 2,
    theme: "Creative Coding",
    date: "March 28",
    stack: "Canvas, Three.js",
    difficulty: "Beginner",
  },
  {
    id: 3,
    theme: "Hardware Sync",
    date: "April 11",
    stack: "MQTT, ESP32",
    difficulty: "Advanced",
  },
  {
    id: 4,
    theme: "AI at the Edge",
    date: "April 25",
    stack: "TensorFlow Lite, Raspberry Pi",
    difficulty: "Advanced",
  },
  {
    id: 5,
    theme: "The Open Source Sprint",
    date: "May 9",
    stack: "Any",
    difficulty: "Beginner",
  },
];

export const projects: Project[] = [
  {
    name: "LED-Synced Rubik's Cube",
    creator: "Akhil",
    tags: ["Arduino", "WebSockets", "Hardware"],
    github: "#",
  },
  {
    name: "AI Sentiment Bot",
    creator: "Meera",
    tags: ["Python", "LLM", "FastAPI"],
    github: "#",
  },
  {
    name: "Smart Water Monitor",
    creator: "Rajan",
    tags: ["ESP32", "MQTT", "React"],
    github: "#",
  },
  {
    name: "Campus Lost & Found",
    creator: "Divya",
    tags: ["Next.js", "Supabase", "AI"],
    github: "#",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Abhijith",
    quote:
      "I built my first deployed app in 6 hours. The vibe is unmatched.",
  },
  {
    name: "Sara",
    quote: "TinkerSpace Kochi felt like a second home during the finale.",
  },
  {
    name: "Rohan",
    quote: "SHN pushed me to stop procrastinating and actually ship.",
  },
];

export const REGISTER_URL = "https://hub.tinkerhub.org"; // Placeholder — replace with actual hub.app event link
export const DISCORD_URL = "https://discord.gg/tinkerhub"; // Placeholder

export function getNextSaturdayAt6PM(): Date {
  const now = new Date();
  const dayOfWeek = now.getDay(); // 0=Sun, 6=Sat
  const daysUntilSaturday = ((6 - dayOfWeek + 7) % 7) || 7;
  const nextSat = new Date(now);
  nextSat.setDate(now.getDate() + daysUntilSaturday);
  nextSat.setHours(18, 0, 0, 0); // 6:00 PM local time
  return nextSat;
}
