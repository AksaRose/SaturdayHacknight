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
  team?: string[];
  tags: string[];
  github: string;
  description?: string;
  liveUrl?: string;
}

export interface Mentor {
  name: string;
  role: string;
  github?: string;
  twitter?: string;
}

export interface Resource {
  title: string;
  url: string;
  type: "docs" | "video" | "repo" | "article";
}

export interface PastHackNight {
  id: number;
  slug: string;
  theme: string;
  date: string;
  stack: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  participants: number;
  submittedCount: number;
  about: string;
  mentors: Mentor[];
  resources: Resource[];
  bestProject: Project;
  allProjects: Project[];
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

export const pastHackNights: PastHackNight[] = [
  {
    id: 1,
    slug: "shn-001-local-first-apps",
    theme: "Local-First Apps",
    date: "February 1, 2025",
    stack: "CRDTs, SQLite, PGlite",
    difficulty: "Advanced",
    participants: 42,
    submittedCount: 18,
    about:
      "Local-first software works offline, syncs when connected, and keeps your data on your device. This hack night explored CRDTs, embedded databases like PGlite and SQLite-Wasm, and patterns for building apps that don't depend on a server to function.",
    mentors: [
      {
        name: "Aravind Balla",
        role: "Full-stack dev, local-first advocate",
        github: "aravindballa",
        twitter: "aravindballa",
      },
      {
        name: "Sathya Gunasekaran",
        role: "Engineer, distributed systems",
        github: "gsathya",
      },
    ],
    resources: [
      {
        title: "Local-First Software — Ink & Switch",
        url: "https://www.inkandswitch.com/local-first/",
        type: "article",
      },
      {
        title: "PGlite — Postgres in WebAssembly",
        url: "https://pglite.dev",
        type: "docs",
      },
      {
        title: "Yjs — CRDT Framework",
        url: "https://docs.yjs.dev",
        type: "docs",
      },
      {
        title: "SQLite WASM Official Docs",
        url: "https://sqlite.org/wasm/doc/trunk/index.md",
        type: "docs",
      },
    ],
    bestProject: {
      name: "OfflineNotes",
      creator: "Akhil R",
      team: ["Akhil R", "Meera K"],
      tags: ["PGlite", "React", "CRDTs"],
      github: "https://github.com/akhilr/offlinenotes",
      description:
        "A fully offline-first notes app with real-time sync when connectivity is restored. Uses CRDTs for conflict-free merging.",
      liveUrl: "#",
    },
    allProjects: [
      {
        name: "OfflineNotes",
        creator: "Akhil R",
        team: ["Akhil R", "Meera K"],
        tags: ["PGlite", "React", "CRDTs"],
        github: "https://github.com/akhilr/offlinenotes",
        description: "Offline-first notes app with CRDT-based sync.",
      },
      {
        name: "LocalCart",
        creator: "Divya S",
        tags: ["SQLite", "Vue.js", "PWA"],
        github: "https://github.com/divyas/localcart",
        description: "Shopping cart that works without internet, syncs when online.",
      },
      {
        name: "PeerDocs",
        creator: "Rohan M",
        team: ["Rohan M", "Arjun T"],
        tags: ["Y.js", "Next.js", "WebRTC"],
        github: "https://github.com/rohanm/peerdocs",
        description: "Peer-to-peer collaborative document editor, no server needed.",
      },
      {
        name: "OfflineBoard",
        creator: "Priya V",
        tags: ["IndexedDB", "Canvas", "TypeScript"],
        github: "https://github.com/priyav/offlineboard",
        description: "Kanban board that persists locally and syncs across tabs.",
      },
      {
        name: "SyncWeather",
        creator: "Arun J",
        tags: ["Service Worker", "Cache API", "React"],
        github: "https://github.com/arunj/syncweather",
        description: "Weather app that caches forecasts for offline access.",
      },
      {
        name: "LocalLedger",
        creator: "Fatima N",
        team: ["Fatima N", "Sanjay P"],
        tags: ["SQLite", "Electron", "Chart.js"],
        github: "https://github.com/fatiman/localledger",
        description: "Personal finance tracker built entirely local-first.",
      },
    ],
  },
  {
    id: 2,
    slug: "shn-002-build-your-cli",
    theme: "Build Your CLI",
    date: "February 15, 2025",
    stack: "Node.js, Python, Go",
    difficulty: "Beginner",
    participants: 56,
    submittedCount: 24,
    about:
      "Command-line tools are the backbone of every developer's workflow. This hack night challenged builders to create a CLI tool that solves a real problem — anything from productivity apps to dev tools to fun utilities. Stack was completely open: Node.js, Python, Go, Rust — your call.",
    mentors: [
      {
        name: "Kailash Nadh",
        role: "CTO at Zerodha, open source builder",
        github: "knadh",
        twitter: "kailashnadh",
      },
      {
        name: "Ananya Krishnan",
        role: "DevTools engineer",
        github: "ananyak",
      },
    ],
    resources: [
      {
        title: "Building CLI tools with Node.js — Commander.js",
        url: "https://github.com/tj/commander.js",
        type: "repo",
      },
      {
        title: "Python Click — CLI creation kit",
        url: "https://click.palletsprojects.com",
        type: "docs",
      },
      {
        title: "Build a CLI with Go — Cobra",
        url: "https://cobra.dev",
        type: "docs",
      },
      {
        title: "12 Factor CLI Apps",
        url: "https://medium.com/@jdxcode/12-factor-cli-apps-dd3c227a0e46",
        type: "article",
      },
    ],
    bestProject: {
      name: "gitmind",
      creator: "Sara T",
      team: ["Sara T"],
      tags: ["Go", "Git", "CLI"],
      github: "https://github.com/sarat/gitmind",
      description:
        "A CLI tool that reads your git history and generates a visual summary of what you've been building — weekly digests, streak tracking, and contribution heatmaps in the terminal.",
      liveUrl: "#",
    },
    allProjects: [
      {
        name: "gitmind",
        creator: "Sara T",
        tags: ["Go", "Git", "CLI"],
        github: "https://github.com/sarat/gitmind",
        description: "Git history visualizer and weekly digest generator.",
      },
      {
        name: "quicknote",
        creator: "Abhijith P",
        tags: ["Node.js", "Markdown", "CLI"],
        github: "https://github.com/abhijithp/quicknote",
        description: "Zero-friction markdown notes from the terminal.",
      },
      {
        name: "envguard",
        creator: "Nadia K",
        team: ["Nadia K", "Vikram S"],
        tags: ["Python", "Security", "CLI"],
        github: "https://github.com/nadiak/envguard",
        description: "Scans .env files for secrets accidentally committed to git.",
      },
      {
        name: "taskr",
        creator: "Kiran B",
        tags: ["Rust", "CLI", "Productivity"],
        github: "https://github.com/kiranb/taskr",
        description: "Minimal task manager that lives in your terminal.",
      },
      {
        name: "logwatch",
        creator: "Anjali R",
        tags: ["Python", "Log Parsing", "CLI"],
        github: "https://github.com/anjali/logwatch",
        description: "Real-time log parser with color-coded error highlighting.",
      },
      {
        name: "portman",
        creator: "Dev C",
        tags: ["Node.js", "Networking", "CLI"],
        github: "https://github.com/devc/portman",
        description: "CLI port manager — find, kill, and monitor running processes.",
      },
      {
        name: "dotfiles-sync",
        creator: "Aryan G",
        team: ["Aryan G", "Preethi L"],
        tags: ["Bash", "Git", "CLI"],
        github: "https://github.com/aryag/dotfiles-sync",
        description: "One-command dotfiles backup and restore across machines.",
      },
    ],
  },
  {
    id: 3,
    slug: "shn-003-browser-extensions",
    theme: "Browser Extensions",
    date: "March 1, 2025",
    stack: "Web Extensions API, JavaScript",
    difficulty: "Beginner",
    participants: 61,
    submittedCount: 27,
    about:
      "Browser extensions let you modify and enhance the web for yourself. This hack night was about building real browser extensions using the Web Extensions API — tools that solve your own problems, run in Chrome or Firefox, and can be shipped to others in hours.",
    mentors: [
      {
        name: "Jithin Zach",
        role: "Frontend engineer, extension developer",
        github: "jithinjithu",
        twitter: "jithinjithu",
      },
      {
        name: "Meera Pillai",
        role: "Web platform developer",
        github: "meerap",
      },
    ],
    resources: [
      {
        title: "MDN Web Extensions Documentation",
        url: "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions",
        type: "docs",
      },
      {
        title: "Chrome Extension Developer Guide",
        url: "https://developer.chrome.com/docs/extensions/",
        type: "docs",
      },
      {
        title: "Plasmo — Browser extension framework",
        url: "https://www.plasmo.com",
        type: "docs",
      },
      {
        title: "How I built my first Chrome Extension in an afternoon",
        url: "https://dev.to",
        type: "article",
      },
    ],
    bestProject: {
      name: "FocusLens",
      creator: "Manu S",
      team: ["Manu S", "Lekha R"],
      tags: ["Chrome Extension", "JavaScript", "AI"],
      github: "https://github.com/manus/focuslens",
      description:
        "A browser extension that blurs distracting content on social media feeds and replaces it with your own goals. Uses local AI to detect distraction patterns.",
      liveUrl: "#",
    },
    allProjects: [
      {
        name: "FocusLens",
        creator: "Manu S",
        team: ["Manu S", "Lekha R"],
        tags: ["Chrome Extension", "JavaScript", "AI"],
        github: "https://github.com/manus/focuslens",
        description: "Blocks distracting content using local AI pattern detection.",
      },
      {
        name: "TabMapper",
        creator: "Rohit V",
        tags: ["Firefox Extension", "D3.js", "JavaScript"],
        github: "https://github.com/rohitv/tabmapper",
        description: "Visualizes your open tabs as a mind map.",
      },
      {
        name: "PageSumm",
        creator: "Keerthi J",
        tags: ["Chrome Extension", "LLM", "JavaScript"],
        github: "https://github.com/keerthij/pagesumm",
        description: "One-click page summarizer powered by a local LLM.",
      },
      {
        name: "PriceAlert",
        creator: "Sruthi M",
        team: ["Sruthi M", "Aditya K"],
        tags: ["Chrome Extension", "Scraping", "Notifications"],
        github: "https://github.com/sruthim/pricealert",
        description: "Tracks Amazon prices and alerts you when they drop.",
      },
      {
        name: "ReadingMode+",
        creator: "Ashwin T",
        tags: ["Browser Extension", "CSS", "Typography"],
        github: "https://github.com/ashwint/readingmode",
        description: "Enhanced reader mode with font, spacing, and color controls.",
      },
    ],
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

export const REGISTER_URL = "https://hub.tinkerhub.org";
export const DISCORD_URL = "https://discord.gg/tinkerhub";

export function getNextSaturdayAt6PM(): Date {
  const now = new Date();
  const dayOfWeek = now.getDay();
  const daysUntilSaturday = ((6 - dayOfWeek + 7) % 7) || 7;
  const nextSat = new Date(now);
  nextSat.setDate(now.getDate() + daysUntilSaturday);
  nextSat.setHours(18, 0, 0, 0);
  return nextSat;
}
