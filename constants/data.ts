export const GITHUB_USERNAME = "nhugh406";
export const LINKEDIN_URL =
  "https://www.linkedin.com/in/nolan-hughes-532b0721/";
export const EMAIL = "nhugh406@gmail.com";
export const CALENDLY = ""; // optional
export const PROFILE_IMAGE = "/avatar.jpg";
export const SELECTED_REPOS = [
  "notesmith",
  "HelixSuite",
  "gralena",
  "realtime-chat",
];

// Experience data from resume
export const EXPERIENCE = [
  {
    company: "Demandbase",
    title: "Senior Software Engineer",
    period: "March 2025 – Present",
    location: "Remote",
    achievements: [
      "Modernizing frontend architecture for Sales Intelligence / Sales Insights Cloud platform to improve performance and maintainability",
      "Designing and integrating AI-driven workflows including LLM-assisted UI flows and automation tooling",
      "Developing AI agents and MCP-based tool invocations that enhance debugging, testing, and development workflows",
      "Collaborating cross-functionally to deliver intuitive, data-rich user experiences at enterprise scale",
      "Optimizing rendering performance and reducing UI latency across complex application surfaces",
      "Expanding Playwright and integration test coverage to minimize regressions and strengthen CI/CD",
      "Mentoring engineers and guiding architectural best practices through reviews and technical planning",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Material UI",
      "Redux",
      "RTK Query",
      "TanStack",
      "AWS Lambda",
      "Bedrock Agents/Models",
      "API Gateway",
      "Playwright",
      "MCP",
      "LLMs",
    ],
  },
  {
    company: "Planet Depos",
    title: "Senior Software Engineer",
    period: "January 2024 – February 2025",
    location: "Remote",
    achievements: [
      "Established frontend engineering standards as founding engineer; onboarded and mentored team members",
      "Architected Vue3 + Quasar component systems and frontend foundations for scalable feature development",
      "Built a full-featured file management system replicating Google Drive/Dropbox workflows",
      "Automated Vue Composable generation using Orval + Swagger, eliminating manual endpoint boilerplate",
      "Modernized CI/CD pipelines and increased adoption by 75%",
      "Reduced rework by 80% through improved testing and code quality controls",
    ],
    technologies: [
      "Vue.js",
      "Vue3",
      "Quasar",
      "TypeScript",
      "JavaScript",
      "CI/CD",
      "Orval",
      "Swagger",
    ],
  },
  {
    company: "Newfold Digital",
    title: "Principal Software Engineer",
    period: "January 2021 – December 2023",
    location: "Remote",
    achievements: [
      "Designed and implemented a React-based design system used across multiple business units",
      "Developed micro frontends using Webpack Module Federation for modular deployment",
      "Modernized React applications, improving developer efficiency by 85%",
      "Served as SME for React, Vue, and JavaScript; led peer reviews and engineering standards",
      "Enhanced performance through optimized rendering and caching patterns",
    ],
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "Webpack Module Federation",
      "Jest",
      "React Query",
      "Jira",
      "BitBucket",
    ],
  },
  {
    company: "Benefit Allocation Systems, LLC",
    title: "Director of Programming → Programming Manager",
    period: "January 2018 – January 2021",
    location: "King of Prussia, Pennsylvania",
    achievements: [
      "Led a team of 12 engineers across full SDLC, overseeing delivery of enterprise-grade solutions",
      "Standardized Vue.js adoption, modernizing client-facing application architecture",
      "Refactored monolithic systems into modular Vue/JavaScript components, improving scalability by 90%",
      "Acted as technical liaison between engineering leadership and client stakeholders",
    ],
    technologies: ["Vue.js", "React", "JavaScript", "jQuery", "PLSQL"],
  },
];

// Skills categorized for better presentation
export const SKILLS = {
  Frontend: [
    "React",
    "Next.js",
    "Vue.js",
    "Vue3",
    "TypeScript",
    "JavaScript",
    "Redux",
    "RTK Query",
    "Zustand",
    "Material UI",
    "Tailwind CSS",
    "Framer Motion",
    "Vite",
    "Webpack",
    "Storybook",
    "HTML5",
    "CSS3",
    "Quasar",
    "Design Systems",
    "Performance Optimization",
  ],
  "Backend & APIs": [
    "REST APIs",
    "Database Design",
    "Cube",
    "Node.js",
    "Next.js API Routes",
    "Prisma",
    "PostgreSQL",
    "React Query",
  ],
  "Tools & DevOps": [
    "Git",
    "CI/CD",
    "Feature Flags",
    "AWS Lambda",
    "AWS API Gateway",
    "AWS S3",
    "Jest",
    "React Testing Library",
    "E2E Testing",
    "Jira",
    "BitBucket",
  ],
  "Leadership & Process": [
    "Team Building",
    "Code Reviews",
    "Mentoring",
    "Agile/Scrum",
    "SDLC Management",
    "Accessibility (a11y)",
  ],
};

// Color palette for hover effects - modern purple & pink theme
export const HOVER_COLORS = [
  "rgba(168, 85, 247, 0.5)", // purple primary
  "rgba(139, 92, 246, 0.5)", // violet
  "rgba(236, 72, 153, 0.5)", // pink
  "rgba(217, 70, 239, 0.5)", // fuchsia
  "rgba(192, 132, 252, 0.5)", // light purple
  "rgba(224, 158, 181, 0.5)", // light pink
  "rgba(147, 51, 234, 0.5)", // deep purple
  "rgba(251, 113, 133, 0.5)", // rose
];

// Helper function for random hover color
export const getRandomHoverColor = () => {
  return HOVER_COLORS[Math.floor(Math.random() * HOVER_COLORS.length)];
};
