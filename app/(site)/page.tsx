"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Container,
  Title,
  Text,
  Button,
  Group,
  Card,
  Badge,
  Grid,
  Anchor,
  List,
  ThemeIcon,
  Divider,
  Stack,
  Kbd,
  Skeleton,
  Accordion,
} from "@mantine/core";
import {
  IconExternalLink,
  IconCheck,
  IconChevronDown,
} from "@tabler/icons-react";
import Hero from "@/components/Hero";

type Repo = {
  name: string;
  url: string;
  description: string | null;
  stars: number;
  forks: number;
  language: string | null;
  updated_at: string;
};

const GITHUB_USERNAME = "nhugh406";
const LINKEDIN_URL = "https://www.linkedin.com/in/nolan-hughes-532b0721/";
const EMAIL = "nhugh406@gmail.com";
const CALENDLY = ""; // optional
const PROFILE_IMAGE = "/avatar.jpg"; // Place your LinkedIn headshot here. You can also override with ?img=<url>

const SELECTED_REPOS = ["notesmith", "absence-request", "realtime-chat"];

// Experience data from LinkedIn profile
const EXPERIENCE = [
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
      "Automation",
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
    technologies: [
      "Vue.js",
      "React",
      "JavaScript",
      "jQuery",
      "PLSQL",
      "Full Stack",
    ],
  },
];

// Skills categorized for better presentation
const SKILLS = {
  Frontend: [
    "React",
    "Vue.js",
    "Vue3",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Quasar",
    "Design Systems",
  ],
  "Backend & Architecture": [
    "PLSQL",
    "Micro Frontends",
    "Webpack Module Federation",
    "REST APIs",
    "Database Design",
    "React Query",
  ],
  "Tools & DevOps": [
    "Git",
    "CI/CD",
    "Feature Flags",
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

export default function Page() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [avatar, setAvatar] = useState<string>(PROFILE_IMAGE);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const gh = params.get("gh");
    const img = params.get("img");
    const reposParam = params.get("repos"); // allow override: ?repos=a,b,c
    if (img) setAvatar(img);
    const username = gh || GITHUB_USERNAME;
    const list = reposParam
      ? reposParam
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean)
      : SELECTED_REPOS;

    const apiUrl = `/api/github-selected?username=${username}&repos=${list.join(
      ","
    )}`;
    fetch(apiUrl)
      .then((r) => r.json())
      .then(async (d) => {
        if (Array.isArray(d?.repos) && d.repos.length > 0) {
          setRepos(d.repos);
          setLoading(false);
          return;
        }
        // Fallback: fetch each repo client-side directly from GitHub if server route failed or rate-limited
        const results: any[] = [];
        for (const name of list) {
          try {
            const res = await fetch(
              `https://api.github.com/repos/${username}/${name}`,
              { headers: { "User-Agent": "hire-me-page" } }
            );
            if (!res.ok) continue;
            const r = await res.json();
            results.push({
              name: r.name,
              url: r.html_url,
              description: r.description,
              stars: r.stargazers_count,
              forks: r.forks_count,
              language: r.language,
              updated_at: r.updated_at,
            });
          } catch {}
        }
        setRepos(results);
        setLoading(false);
      })
      .catch(async () => {
        // If the route itself failed, try the direct client fetch path
        const list = SELECTED_REPOS;
        const results: any[] = [];
        for (const name of list) {
          try {
            const res = await fetch(
              `https://api.github.com/repos/${gh || GITHUB_USERNAME}/${name}`,
              { headers: { "User-Agent": "hire-me-page" } }
            );
            if (!res.ok) continue;
            const r = await res.json();
            results.push({
              name: r.name,
              url: r.html_url,
              description: r.description,
              stars: r.stargazers_count,
              forks: r.forks_count,
              language: r.language,
              updated_at: r.updated_at,
            });
          } catch {}
        }
        setRepos(results);
        setLoading(false);
      });
  }, []);

  const subtitle =
    "🎯 Principal Software Engineer | Frontend Expert | React, Vue.js, TypeScript | Leadership & Mentorship";
  const intro =
    "As a Principal Software Engineer with over a decade of experience in web development, I specialize in building intuitive, high-performance front-end applications using modern JavaScript frameworks like React and Vue. I architect scalable solutions, establish coding standards, and mentor growing teams of engineers. Currently leading frontend initiatives at Demandbase, building enterprise account-based marketing platforms. Throughout my career, I've founded engineering teams, architected design systems, introduced micro frontends, and driven innovation through leadership and hands-on development. Based in Parrish, FL—bringing that same passion for excellence to everything I build.";

  return (
    <>
      <Hero
        name="Nolan Hughes"
        subtitle={subtitle}
        intro={intro}
        avatarUrl={avatar}
        ctaUrl={CALENDLY || undefined}
        email={EMAIL}
        linkedin={LINKEDIN_URL}
      />

      <Container size="lg" pt="xl" pb="xl">
        <Stack gap="md">
          <Title order={2}>Technical strengths</Title>
          <Grid>
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Card withBorder radius="md" p="lg">
                <Title order={4}>Performance & architecture</Title>
                <List
                  spacing="xs"
                  icon={
                    <ThemeIcon size={20} radius="xl">
                      <IconCheck size={14} />
                    </ThemeIcon>
                  }
                >
                  <List.Item>
                    Code-splitting, memoization, SSR/CSR tradeoffs
                  </List.Item>
                  <List.Item>
                    React Query caching, server components pragmatism
                  </List.Item>
                  <List.Item>
                    RUM/Lighthouse/Profiling with actionable plans
                  </List.Item>
                </List>
              </Card>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Card withBorder radius="md" p="lg">
                <Title order={4}>Modernization & DX</Title>
                <List
                  spacing="xs"
                  icon={
                    <ThemeIcon size={20} radius="xl">
                      <IconCheck size={14} />
                    </ThemeIcon>
                  }
                >
                  <List.Item>
                    Class → hooks, composable state, design tokens
                  </List.Item>
                  <List.Item>Playwright/RTL coverage & CI guardrails</List.Item>
                  <List.Item>
                    Clean abstractions for tables, modals, settings
                  </List.Item>
                </List>
              </Card>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Card withBorder radius="md" p="lg">
                <Title order={4}>AI & product acceleration</Title>
                <List
                  spacing="xs"
                  icon={
                    <ThemeIcon size={20} radius="xl">
                      <IconCheck size={14} />
                    </ThemeIcon>
                  }
                >
                  <List.Item>
                    LLM-assisted flows (prompt/tooling, evals)
                  </List.Item>
                  <List.Item>Serverless integrations (Vercel/AWS)</List.Item>
                  <List.Item>Human-in-the-loop UX for reliability</List.Item>
                </List>
              </Card>
            </Grid.Col>
          </Grid>

          <Divider my="xl" />

          {/* Skills Section - Modern Badge Style */}
          <Title order={2} mb="xl">
            Core Skills
          </Title>
          <Grid>
            {Object.entries(SKILLS).map(([category, skills]) => (
              <Grid.Col key={category} span={{ base: 12, sm: 6 }}>
                <Card withBorder radius="md" p="lg" style={{ height: "100%" }}>
                  <Title order={4} mb="md" size="h5">
                    {category}
                  </Title>
                  <Group gap="xs" wrap="wrap">
                    {skills.map((skill) => (
                      <Badge key={skill} size="lg" variant="light" color="blue">
                        {skill}
                      </Badge>
                    ))}
                  </Group>
                </Card>
              </Grid.Col>
            ))}
          </Grid>

          <Divider my="xl" />

          {/* Experience Section */}
          <Title order={2} mb="xl">
            Professional Experience
          </Title>

          {/* Show most recent position prominently */}
          {EXPERIENCE.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{ marginBottom: "1rem" }}
            >
              <Card
                withBorder
                radius="md"
                p="xl"
                style={{
                  borderLeft: "4px solid var(--mantine-color-blue-6)",
                  borderWidth: "1px 1px 1px 4px",
                }}
              >
                <Group justify="space-between" mb="xs" wrap="wrap">
                  <div>
                    <Title order={4} size="h3" mb={4}>
                      {EXPERIENCE[0].title}
                    </Title>
                    <Text c="dimmed" size="lg" fw={500}>
                      {EXPERIENCE[0].company}
                    </Text>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <Text size="sm" c="dimmed" mb={4}>
                      {EXPERIENCE[0].period}
                    </Text>
                    <Badge variant="light">{EXPERIENCE[0].location}</Badge>
                  </div>
                </Group>

                <Stack gap="sm" mt="md">
                  {EXPERIENCE[0].achievements.map((achievement, i) => (
                    <Group key={i} gap="xs" align="flex-start" wrap="nowrap">
                      <ThemeIcon size={20} radius="xl" color="blue" mt={2}>
                        <IconCheck size={14} />
                      </ThemeIcon>
                      <Text size="sm" style={{ flex: 1, lineHeight: 1.6 }}>
                        {achievement}
                      </Text>
                    </Group>
                  ))}
                </Stack>

                <Group gap="xs" mt="lg" wrap="wrap">
                  {EXPERIENCE[0].technologies.map((tech) => (
                    <Badge key={tech} size="sm" variant="dot" color="blue">
                      {tech}
                    </Badge>
                  ))}
                </Group>
              </Card>
            </motion.div>
          )}

          {/* Older positions in accordion */}
          {EXPERIENCE.length > 1 && (
            <Accordion
              styles={{
                item: {
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "8px",
                  marginBottom: "12px",
                },
                control: {
                  padding: "16px",
                },
              }}
            >
              <Accordion.Item value="previous-positions">
                <Accordion.Control>
                  <Text size="lg" fw={500}>
                    Previous Experience ({EXPERIENCE.length - 1} positions)
                  </Text>
                </Accordion.Control>
                <Accordion.Panel>
                  <Stack gap="lg" mt="md">
                    {EXPERIENCE.slice(1).map((exp, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                      >
                        <Card
                          withBorder
                          radius="md"
                          p="xl"
                          style={{
                            borderLeft: "4px solid rgba(59, 130, 246, 0.3)",
                          }}
                        >
                          <Group justify="space-between" mb="xs" wrap="wrap">
                            <div>
                              <Title order={4} size="h3" mb={4}>
                                {exp.title}
                              </Title>
                              <Text c="dimmed" size="lg" fw={500}>
                                {exp.company}
                              </Text>
                            </div>
                            <div style={{ textAlign: "right" }}>
                              <Text size="sm" c="dimmed" mb={4}>
                                {exp.period}
                              </Text>
                              <Badge variant="light">{exp.location}</Badge>
                            </div>
                          </Group>

                          <Stack gap="sm" mt="md">
                            {exp.achievements.map((achievement, i) => (
                              <Group
                                key={i}
                                gap="xs"
                                align="flex-start"
                                wrap="nowrap"
                              >
                                <ThemeIcon
                                  size={20}
                                  radius="xl"
                                  color="blue"
                                  mt={2}
                                >
                                  <IconCheck size={14} />
                                </ThemeIcon>
                                <Text
                                  size="sm"
                                  style={{ flex: 1, lineHeight: 1.6 }}
                                >
                                  {achievement}
                                </Text>
                              </Group>
                            ))}
                          </Stack>

                          <Group gap="xs" mt="lg" wrap="wrap">
                            {exp.technologies.map((tech) => (
                              <Badge
                                key={tech}
                                size="sm"
                                variant="dot"
                                color="blue"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </Group>
                        </Card>
                      </motion.div>
                    ))}
                  </Stack>
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          )}

          <Divider my="lg" />

          <Title order={2} mb="xl">
            Featured projects
          </Title>
          <Grid>
            {loading ? (
              SELECTED_REPOS.map((_, idx) => (
                <Grid.Col key={`skeleton-${idx}`} span={{ base: 12, md: 6 }}>
                  <Card withBorder radius="md" p="lg">
                    <Group justify="space-between" align="baseline" mb="xs">
                      <Skeleton height={28} width="40%" />
                      <Skeleton height={24} width={60} />
                    </Group>
                    <Skeleton height={16} mt="sm" mb="xs" />
                    <Skeleton height={16} width="90%" mb="xs" />
                    <Skeleton height={16} width="75%" />
                    <Group mt="md" gap="xs">
                      <Skeleton height={24} width={50} />
                      <Skeleton height={24} width={50} />
                    </Group>
                    <Skeleton height={36} mt="md" />
                  </Card>
                </Grid.Col>
              ))
            ) : repos.length > 0 ? (
              repos.map((r, idx) => (
                <Grid.Col key={r.url} span={{ base: 12, md: 6 }}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <Card
                      withBorder
                      radius="md"
                      p="xl"
                      style={{
                        height: "100%",
                        border: "1px solid rgba(255,255,255,0.1)",
                        background:
                          "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
                        transition: "transform 0.2s ease",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                        e.currentTarget.style.transform = "translateY(-4px)";
                        e.currentTarget.style.borderColor =
                          "rgba(59, 130, 246, 0.5)";
                        e.currentTarget.style.boxShadow =
                          "0 8px 32px rgba(59, 130, 246, 0.2)";
                      }}
                      onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.borderColor =
                          "rgba(255,255,255,0.1)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <Group justify="space-between" align="flex-start" mb="md">
                        <Title order={4} size="h3">
                          {r.name}
                        </Title>
                        <Badge size="lg" variant="light" color="blue">
                          {r.language ?? "Code"}
                        </Badge>
                      </Group>

                      <Text
                        c="dimmed"
                        size="sm"
                        mb="md"
                        style={{ minHeight: 40 }}
                      >
                        {r.description || "No description provided."}
                      </Text>

                      <Text size="sm" mt="xs" mb="md" c="dimmed">
                        {r.name === "notesmith" &&
                          "✅ Full-stack notes app built with Next.js, Supabase, and Mantine. Features include authentication, real-time updates, search functionality, and a polished UX."}
                        {r.name === "absence-request" &&
                          "📝 CRUD application for managing absence requests with clean Mantine UI patterns, form validation, and intuitive workflows."}
                        {r.name === "realtime-chat" &&
                          "💬 Minimal, fast real-time chat interface demonstrating WebSocket integration, Supabase realtime patterns, and smooth UI interactions."}
                      </Text>

                      <Group mt="md" gap="xs" mb="md">
                        <Badge variant="filled" color="blue" size="lg">
                          ⭐ {r.stars} stars
                        </Badge>
                        <Badge variant="light" size="lg">
                          🍴 {r.forks} forks
                        </Badge>
                      </Group>

                      <Button
                        fullWidth
                        mt="md"
                        component="a"
                        href={r.url}
                        target="_blank"
                        rightSection={<IconExternalLink size={18} />}
                        size="lg"
                        variant="light"
                      >
                        View on GitHub
                      </Button>
                    </Card>
                  </motion.div>
                </Grid.Col>
              ))
            ) : (
              <Text c="dimmed">
                Add your GitHub repos in <Kbd>SELECTED_REPOS</Kbd> to showcase
                them here.
              </Text>
            )}
          </Grid>

          <Divider my="lg" />
          <Divider my="lg" />

          <Title order={2}>Services</Title>
          <Grid>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Card withBorder radius="md" p="lg">
                <Title order={4}>Frontend Performance Audit</Title>
                <Text c="dimmed" mt="xs">
                  1-week engagement · fixed scope
                </Text>
                <List
                  mt="sm"
                  spacing="xs"
                  icon={
                    <ThemeIcon size={20} radius="xl">
                      <IconCheck size={14} />
                    </ThemeIcon>
                  }
                >
                  <List.Item>Lighthouse, RUM, and profiler analysis</List.Item>
                  <List.Item>Actionable plan (quick wins + roadmap)</List.Item>
                  <List.Item>Async Q&A follow-up</List.Item>
                </List>
              </Card>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Card withBorder radius="md" p="lg">
                <Title order={4}>React Modernization Sprint</Title>
                <Text c="dimmed" mt="xs">
                  2-week engagement
                </Text>
                <List
                  mt="sm"
                  spacing="xs"
                  icon={
                    <ThemeIcon size={20} radius="xl">
                      <IconCheck size={14} />
                    </ThemeIcon>
                  }
                >
                  <List.Item>Class → hooks with composable state</List.Item>
                  <List.Item>Design tokens & Mantine systemization</List.Item>
                  <List.Item>Refactors with tests & docs</List.Item>
                </List>
              </Card>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Card withBorder radius="md" p="lg">
                <Title order={4}>Data UI & Tables</Title>
                <Text c="dimmed" mt="xs">
                  AG Grid / TanStack Table expertise
                </Text>
                <List
                  mt="sm"
                  spacing="xs"
                  icon={
                    <ThemeIcon size={20} radius="xl">
                      <IconCheck size={14} />
                    </ThemeIcon>
                  }
                >
                  <List.Item>
                    Virtualization, infinite scroll, bulk actions
                  </List.Item>
                  <List.Item>
                    Filtering, grouping, role-based features
                  </List.Item>
                  <List.Item>Ergonomic UX for high-volume data</List.Item>
                </List>
              </Card>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Card withBorder radius="md" p="lg">
                <Title order={4}>Testing & CI Hardening</Title>
                <Text c="dimmed" mt="xs">
                  Playwright / RTL / GitLab CI
                </Text>
                <List
                  mt="sm"
                  spacing="xs"
                  icon={
                    <ThemeIcon size={20} radius="xl">
                      <IconCheck size={14} />
                    </ThemeIcon>
                  }
                >
                  <List.Item>Regression harnesses for critical flows</List.Item>
                  <List.Item>Performance checks integrated with CI</List.Item>
                  <List.Item>
                    Developer UX improvements (lint, type gates)
                  </List.Item>
                </List>
              </Card>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 12 }}>
              <Card withBorder radius="md" p="lg">
                <Title order={4}>AI Feature Prototyping</Title>
                <Text c="dimmed" mt="xs">
                  Vercel/AWS serverless · Bedrock/Gemini/OpenAI
                </Text>
                <List
                  mt="sm"
                  spacing="xs"
                  icon={
                    <ThemeIcon size={20} radius="xl">
                      <IconCheck size={14} />
                    </ThemeIcon>
                  }
                >
                  <List.Item>LLM prompt/tool design and evals</List.Item>
                  <List.Item>Human-in-the-loop review flows</List.Item>
                  <List.Item>Secure integration patterns</List.Item>
                </List>
              </Card>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 12 }}>
              <Card
                withBorder
                radius="md"
                p="lg"
                style={{
                  border: "2px solid rgba(59, 130, 246, 0.3)",
                  background:
                    "linear-gradient(135deg, rgba(59,130,246,0.05) 0%, rgba(168,85,247,0.05) 100%)",
                }}
              >
                <Title order={4}>Custom Solutions & Consulting</Title>
                <Text c="dimmed" mt="xs">
                  Flexible engagement · Let's discuss your unique needs
                </Text>
                <List
                  mt="sm"
                  spacing="xs"
                  icon={
                    <ThemeIcon size={20} radius="xl" color="blue">
                      <IconCheck size={14} />
                    </ThemeIcon>
                  }
                >
                  <List.Item>
                    Custom architecture design and implementation
                  </List.Item>
                  <List.Item>
                    Team augmentation and technical leadership
                  </List.Item>
                  <List.Item>
                    Code reviews, mentoring, and best practices
                  </List.Item>
                  <List.Item>Emergency fixes and troubleshooting</List.Item>
                  <List.Item>
                    Anything else you might need — let's talk!
                  </List.Item>
                </List>
              </Card>
            </Grid.Col>
          </Grid>

          <Divider my="xl" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card
              p="xl"
              radius="xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(59,130,246,0.1) 0%, rgba(168,85,247,0.1) 100%)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <Title order={2} mb="md" ta="center">
                Let's Work Together
              </Title>
              <Text size="lg" ta="center" c="dimmed" mb="xl">
                I'm open to new opportunities and collaborations.
              </Text>
              <Group justify="center" gap="md">
                <Button
                  component="a"
                  href={`mailto:${EMAIL}`}
                  size="lg"
                  leftSection={<IconExternalLink size={20} />}
                  style={{
                    background:
                      "linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)",
                    boxShadow: "0 4px 14px rgba(59, 130, 246, 0.4)",
                  }}
                >
                  Email Me
                </Button>
                <Button
                  component="a"
                  href={LINKEDIN_URL}
                  target="_blank"
                  variant="light"
                  size="lg"
                  leftSection={<IconExternalLink size={20} />}
                >
                  Connect on LinkedIn
                </Button>
              </Group>
            </Card>
          </motion.div>
        </Stack>
      </Container>
    </>
  );
}
