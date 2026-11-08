export const GITHUB_USERNAME = "nhugh406";
export const GITHUB_URL = "https://github.com/nhugh406";
export const LINKEDIN_URL =
  "https://www.linkedin.com/in/nolan-hughes-532b0721/";
export const EMAIL = "nhugh406@gmail.com";
export const LOCATION = "Parrish, FL · Remote (US)";
export const PROFILE_IMAGE = "/api/avatar";

export const NAME = "Nolan Hughes";
export const HEADLINE =
  "Staff / Principal Frontend Engineer | AI-Driven UI, LLM & MCP Agent Tooling | React, Next.js, TypeScript, Micro Frontends";

export const HERO = {
  eyebrow: "Open to Staff / Principal roles",
  titleA: "I build interfaces where",
  titleB: "people & AI agents",
  titleC: "work together.",
  lede: "I'm Nolan Hughes — a Staff-level frontend engineer with 10+ years shipping enterprise web apps. Right now I'm a core engineer on Mojo, Demandbase's agentic AI workspace: the agent writes live dashboards, runs tasks, and collaborates with whole teams in real time — including by voice.",
  proof: [
    "Core engineer · Mojo @ Demandbase",
    "~290 tickets · 10+ codebases · 18 months",
    "Tests in 900+ files",
  ],
};

export const SELECTED_REPOS = [
  "notesmith",
  "HelixSuite",
  "gralena",
  "realtime-chat",
];

export const TICKER = [
  "React",
  "TypeScript",
  "Generative UI",
  "Next.js",
  "LLM Integration",
  "MCP Tooling",
  "Micro Frontends",
  "Nx Monorepos",
  "Real-Time Collaboration",
  "Playwright",
  "Design Systems",
  "Vue 3",
];

export const STATS = [
  { value: "10+", label: "Years building for the web" },
  { value: "~290", label: "Tickets shipped · 10+ codebases · 18 mo" },
  { value: "900+", label: "Files with tests added or updated" },
  { value: "~80", label: "Merge requests reviewed in 5 weeks" },
  { value: "~30", label: "Architecture docs written / co-written" },
  { value: "~90", label: "Contributors in my Nx monorepo" },
];

export const SPOTLIGHT = {
  kicker: "Current spotlight",
  title: "Mojo — an agentic AI workspace, not a chatbot bolted on.",
  description:
    "At Demandbase I went from leading a flagship sales feature to GA, to building core parts of a public agentic AI marketing workspace — React/TypeScript up front, Python agent & API services behind it, Temporal orchestration underneath.",
  features: [
    {
      title: "Canvases, owned end-to-end",
      text: "The agent writes and publishes interactive React dashboards with live data. I built the compile/publish pipeline — self-repair loops, timeout & 5xx handling, and repair when a data source's schema drifts — plus sharing, version history, a template gallery, and canvas → Google Slides.",
    },
    {
      title: "The Apps layer — UI/UX",
      text: "I helped improve the UI/UX and overall experience of the platform's Apps layer — the in-product catalog, desktop-style windowing shell, and how apps open, move, and notify — tightening usability and polish across the surface.",
    },
    {
      title: "Real-time collaboration & voice",
      text: "Shared chats, AI-coordinated project rooms, presence and typing indicators — and live voice conversations with the agent. Multiplayer isn't a demo feature here; it's how teams actually work in the product.",
    },
    {
      title: "LLM reliability in production",
      text: "Recovery from corrupted tool-call history, deferred tool references kept across turns, automatic escalation to a stronger model for build tasks, and fixes for out-of-memory crashes on long threads. The unglamorous layer that makes tool use hold up.",
    },
  ],
};

export const PILLARS = [
  {
    title: "Generative UI",
    tag: "Agentic product surfaces",
    text: "Systems that turn LLM output into safe, interactive product — agent-written canvases, structured-output renderers for tables, cards and confirmation actions, and embeddable AI chat other apps import instead of rebuilding.",
  },
  {
    title: "Platforms & micro frontends",
    tag: "Architecture at scale",
    text: "Micro-frontend platforms in Nx monorepos (~90 contributors), design systems adopted across business units, and Module Federation deployments that let teams ship independently without forking the experience.",
  },
  {
    title: "Quality that ships",
    tag: "Reliability & DX",
    text: "Playwright suites enforced as merge gates, tests in 900+ files, agent-ready codebase conventions (AGENTS.md), and reusable AI coding-agent skills published to a company-wide catalog. Habits that outlast any one feature.",
  },
];

export const EXPERIENCE = [
  {
    company: "Demandbase",
    title: "Senior Software Engineer — Staff-Level IC",
    period: "Mar 2025 – Present",
    location: "Remote",
    summary:
      "Core engineer on Mojo, an agentic AI marketing workspace. ~170 tickets in 4 months across frontend, agent, and API layers.",
    achievements: [
      "Owned Canvases end to end: agent-written, live-data React dashboards with a compile/publish pipeline, self-repair, sharing, version history, and export to Google Slides",
      "Helped improve the UI/UX and overall experience of the platform's Apps layer — app catalog, windowing shell, and in-product app flows",
      "Built real-time collaboration (shared chats, AI-coordinated rooms, presence) and live voice conversations with the agent",
      "Hardened LLM behavior in production: corrupted tool-call recovery, model escalation, and long-thread crash fixes",
      "Re-architected the sales AI experience as a micro frontend in an Nx monorepo (~90 contributors) — embeddable AI chat + Canvas Mode other apps import",
      "Lead frontend engineer for Sales Playbooks, from build to general availability (Dec 2025), with Playwright suites as merge gates",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Python",
      "Temporal",
      "LLM APIs",
      "MCP Integrations",
      "Nx",
      "Playwright",
      "WebSockets",
    ],
  },
  {
    company: "Planet Depos",
    title: "Senior Software Engineer — Founding Frontend Engineer",
    period: "Jan 2024 – Feb 2025",
    location: "Remote",
    summary:
      "First frontend hire. Set the standards, component strategy, and architecture everyone after me built on.",
    achievements: [
      "Established engineering standards and component/architecture strategy from greenfield; onboarded the team",
      "Architected Vue 3 + Quasar systems for legal workflows, including a Drive/Dropbox-class file manager with real-time WebSocket updates",
      "Automated Vue composable generation via Orval + Swagger, eliminating manual endpoint boilerplate",
      "Modernized CI/CD (+75% adoption) and cut rework 80% through test coverage and review culture",
    ],
    technologies: ["Vue 3", "Quasar", "TypeScript", "WebSockets", "Orval", "CI/CD"],
  },
  {
    company: "Newfold Digital",
    title: "Principal Software Engineer",
    period: "Jan 2021 – Dec 2023",
    location: "Remote",
    summary:
      "Design systems and micro frontends adopted across business units; SME for React, Vue, and JavaScript in a 50+ engineer org.",
    achievements: [
      "Designed and shipped a React design system adopted across multiple business units",
      "Built micro frontends with Webpack Module Federation for independent deployments",
      "Modernized legacy React apps, improving developer efficiency by 85%",
    ],
    technologies: ["React", "TypeScript", "Module Federation", "Design Systems", "Jest"],
  },
  {
    company: "Benefit Allocation Systems",
    title: "Director of Programming → Manager → Senior Analyst",
    period: "2015 – 2021",
    location: "Pennsylvania",
    summary:
      "Grew from analyst to leading a cross-functional team of 12 through the full SDLC for enterprise benefits software.",
    achievements: [
      "Led 12 engineers; standardized Vue.js and refactored monoliths into modular components (+90% scalability)",
      "Introduced code-review standards that reduced defect rates across the team",
      "Translated complex benefits requirements into specs, data models, and automations (+60% processing accuracy)",
    ],
    technologies: ["Vue.js", "JavaScript", "Team Leadership", "Agile / Scrum"],
  },
];

export const PROJECTS = [
  {
    name: "AI-Powered Personal Finance Forecaster",
    stack: "Next.js · TypeScript · Claude API · Supabase",
    text: "Ingests bank CSV exports, uses Claude to categorize spending patterns, and predicts account balances across future time horizons — engineered prompt pipelines with structured JSON output.",
    badge: "AI · Full-stack",
  },
  {
    name: "React Test Generation CLI",
    stack: "Node.js · TypeScript · Jest · React Testing Library",
    text: "Statically analyzes React components and auto-generates test scaffolding via LLM-assisted code generation, enforcing consistent coverage patterns across large monorepo component libraries.",
    badge: "DevTools · LLM",
  },
];

export const SKILLS: Record<string, string[]> = {
  "AI & Frontend": [
    "LLM Integration",
    "Agentic Workflows",
    "Generative UI",
    "MCP-Based Tool Integrations",
    "Claude API",
    "OpenAI APIs",
    "React",
    "TypeScript",
    "Next.js",
    "Vue 3",
  ],
  Architecture: [
    "Micro Frontends",
    "Nx Monorepos",
    "Design Systems",
    "Component Architecture",
    "React Query / RTK Query",
    "Real-Time Collaboration",
    "Module Federation",
  ],
  "Testing & Platform": [
    "Playwright",
    "Jest",
    "Cypress",
    "CI/CD",
    "Feature Flags",
    "Python",
    "Temporal",
    "WebSockets / SSE",
    "AWS Lambda",
    "Supabase",
  ],
  Leadership: [
    "Staff-Level IC",
    "Mentoring",
    "Architectural Review",
    "Cross-Functional Collaboration",
    "DX Strategy",
    "Architecture Docs",
  ],
};

export const REPO_BLURBS: Record<string, string> = {
  notesmith:
    "Full-stack notes app — Next.js, Supabase, Mantine. Auth, real-time updates, search, and a polished UX.",
  HelixSuite:
    "Enterprise-grade application suite demonstrating advanced architecture patterns and production-ready implementation.",
  gralena:
    "Modern web app showcasing cutting-edge frontend tech, responsive design, and intuitive UX patterns.",
  "realtime-chat":
    "Minimal, fast real-time chat — WebSocket / Supabase realtime patterns with smooth UI interactions.",
};

// Back-compat for older imports
export const CALENDLY = "";
export const HOVER_COLORS: string[] = [];
export const getRandomHoverColor = () => "#6366f1";
