export const GITHUB_USERNAME = "nhugh406";
export const LINKEDIN_URL =
  "https://www.linkedin.com/in/nolan-hughes-532b0721/";
export const EMAIL = "nhugh406@gmail.com";
export const CALENDLY = ""; // optional
export const PROFILE_IMAGE = "/avatar.jpg";
export const SELECTED_REPOS = ["notesmith", "absence-request", "realtime-chat"];

// Experience data from LinkedIn profile
export const EXPERIENCE = [
  {
    company: "Demandbase",
    title: "Senior Software Engineer",
    period: "March 2025 - Present",
    location: "Remote",
    achievements: [
      "Leading frontend development initiatives for enterprise account-based marketing platform",
      "Architecting scalable, performant user interfaces for complex B2B marketing workflows",
      "Mentoring junior engineers and establishing coding standards and best practices",
      "Implementing modern React patterns and optimizing application performance",
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
      "Architecture",
    ],
  },
  {
    company: "Planet Depos",
    title: "Senior Software Engineer",
    period: "January 2024 - February 2025",
    location: "Remote",
    achievements: [
      "Founded and built the engineering team from the ground up, establishing coding standards and best practices",
      "Architected and designed frontend infrastructure with reusable component patterns and UI/UX foundation",
      "Built a fully functional file management system with Vue3 and Quasar mirroring Dropbox, Google Drive, and OneDrive functionality",
      "Migrated legacy CI/CD pipelines and feature flag implementation, increasing adoption by 75%",
      "Served as primary point of contact for coding standards and infrastructure patterns in the frontend",
      "Enforced code quality via peer reviews, unit tests, and e2e automated tests",
    ],
    technologies: [
      "Vue.js",
      "Vue3",
      "Quasar",
      "TypeScript",
      "JavaScript",
      "CI/CD",
    ],
  },
  {
    company: "Newfold Digital",
    title: "Principal Software Engineer",
    period: "January 2021 - December 2023",
    location: "Remote",
    achievements: [
      "Conceptualized, built, and implemented standardized functional React Components",
      "Architected, developed, and deployed a standardized Design System and reusable component library",
      "Utilized front-end data caching libraries (react-query) to optimize performance with clear data state indication",
      "Maintained existing Class-Based and Functional React codebases",
      "Grew a new Micro Frontend using Webpack Module Federation",
      "Built and maintained React Testing Library/Jest unit tests",
      "Served as Front End/JavaScript/React/Vue Subject Matter Expert",
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
    period: "January 2017 - January 2021",
    location: "King of Prussia, Pennsylvania",
    achievements: [
      "Managed a team of 12 full-stack software engineers throughout the SDLC",
      "Wrote complex PLSQL queries, functions, and procedures to support the backend",
      "Built comprehensive front ends using Vue.js, React, and jQuery",
      "Served as Subject Matter Expert for Vue.js and Front End technologies",
      "Operated as technical liaison to internal/external clients",
      "Introduced and standardized Vue.js in client-facing tools and applications",
      "Refactored existing monoliths to smaller, reusable Vue.js/JavaScript components",
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
