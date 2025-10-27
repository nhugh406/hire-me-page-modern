"use client";

import {
  Container,
  Title,
  Text,
  Group,
  Card,
  Badge,
  Grid,
  List,
  ThemeIcon,
  Divider,
  Stack,
  Accordion,
  Button,
} from "@mantine/core";
import {
  IconExternalLink,
  IconCheck,
  IconBolt,
  IconTools,
  IconRobot,
  IconGauge,
  IconRefresh,
  IconDatabase,
  IconBug,
  IconCodeDots,
} from "@tabler/icons-react";
import Hero from "@/components/Hero";
import { StatsSection } from "@/components/sections/StatsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { GradientBackground } from "@/components/sections/GradientBackground";
import { useGitHubRepos } from "@/hooks/useGitHubRepos";
import {
  EMAIL,
  LINKEDIN_URL,
  PROFILE_IMAGE,
  CALENDLY,
  EXPERIENCE,
  SKILLS,
  SELECTED_REPOS,
  HOVER_COLORS,
} from "@/constants/data";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText";

export default function Page() {
  const { repos, loading } = useGitHubRepos();

  const subtitle =
    "🎯 Principal Software Engineer | Frontend Expert | React, Vue.js, TypeScript | Leadership & Mentorship";
  const intro =
    "As a Principal Software Engineer with over a decade of experience in web development, I specialize in building intuitive, high-performance front-end applications using modern JavaScript frameworks like React and Vue. I architect scalable solutions, establish coding standards, and mentor growing teams of engineers. Currently leading frontend initiatives at Demandbase, building enterprise account-based marketing platforms. Throughout my career, I've founded engineering teams, architected design systems, introduced micro frontends, and driven innovation through leadership and hands-on development. Based in Parrish, FL—bringing that same passion for excellence to everything I build.";

  const handleHover = (e: React.MouseEvent<HTMLDivElement>) => {
    const randomColor =
      HOVER_COLORS[Math.floor(Math.random() * HOVER_COLORS.length)];
    e.currentTarget.style.transform = "translateY(-4px)";
    e.currentTarget.style.borderColor = randomColor;
    e.currentTarget.style.boxShadow = `0 8px 32px ${randomColor.replace(
      "0.5",
      "0.2"
    )}`;
  };

  const handleHoverLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
    e.currentTarget.style.boxShadow = "none";
  };

  return (
    <>
      <Hero
        name="Nolan Hughes"
        subtitle={subtitle}
        intro={intro}
        avatarUrl={PROFILE_IMAGE}
        ctaUrl={CALENDLY || undefined}
        email={EMAIL}
        linkedin={LINKEDIN_URL}
      />

      <Container size="lg" pt="xl" pb="xl" className="gradient-container">
        <GradientBackground />
        <Stack gap="md" className="content-overlay">
          <StatsSection />

          <Divider my="xl" />

          <Group mb="xl" gap="xs" align="center">
            <Title order={2} style={{ flex: 1 }}>
              <AnimatedText text="Technical strengths" />
            </Title>
            <Badge size="xl" variant="light" color="grape">
              Core Expertise
            </Badge>
          </Group>
          <Grid>
            <Grid.Col span={{ base: 12, md: 4 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card
                  withBorder
                  radius="md"
                  p="lg"
                  className="card-hoverable tech-card"
                  onMouseEnter={handleHover}
                  onMouseLeave={handleHoverLeave}
                >
                  <ThemeIcon
                    size={48}
                    radius="md"
                    color="grape"
                    mb="md"
                    variant="light"
                    className="icon-glow"
                  >
                    <IconBolt size={28} />
                  </ThemeIcon>
                  <Title order={4}>Performance & architecture</Title>
                  <List
                    spacing="xs"
                    icon={
                      <ThemeIcon
                        size={20}
                        radius="xl"
                        color="grape"
                        variant="light"
                      >
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
              </motion.div>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 4 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card
                  withBorder
                  radius="md"
                  p="lg"
                  className="card-hoverable tech-card"
                  onMouseEnter={handleHover}
                  onMouseLeave={handleHoverLeave}
                >
                  <ThemeIcon
                    size={48}
                    radius="md"
                    color="grape"
                    mb="md"
                    variant="light"
                    className="icon-glow"
                  >
                    <IconTools size={28} />
                  </ThemeIcon>
                  <Title order={4}>Modernization & DX</Title>
                  <List
                    spacing="xs"
                    icon={
                      <ThemeIcon
                        size={20}
                        radius="xl"
                        color="grape"
                        variant="light"
                      >
                        <IconCheck size={14} />
                      </ThemeIcon>
                    }
                  >
                    <List.Item>
                      Class → hooks, composable state, design tokens
                    </List.Item>
                    <List.Item>
                      Playwright/RTL coverage & CI guardrails
                    </List.Item>
                    <List.Item>
                      Clean abstractions for tables, modals, settings
                    </List.Item>
                  </List>
                </Card>
              </motion.div>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 4 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card
                  withBorder
                  radius="md"
                  p="lg"
                  className="card-hoverable tech-card"
                  onMouseEnter={handleHover}
                  onMouseLeave={handleHoverLeave}
                >
                  <ThemeIcon
                    size={48}
                    radius="md"
                    color="grape"
                    mb="md"
                    variant="light"
                    className="icon-glow"
                  >
                    <IconRobot size={28} />
                  </ThemeIcon>
                  <Title order={4}>AI & product acceleration</Title>
                  <List
                    spacing="xs"
                    icon={
                      <ThemeIcon
                        size={20}
                        radius="xl"
                        color="grape"
                        variant="light"
                      >
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
              </motion.div>
            </Grid.Col>
          </Grid>

          <Divider my="xl" />

          <Group mb="xl" gap="xs" align="center">
            <Title order={2} style={{ flex: 1 }}>
              <AnimatedText text="Core Skills" />
            </Title>
            <Badge size="xl" variant="light" color="grape">
              Full Stack (FrontEnd Focused)
            </Badge>
          </Group>
          <Grid>
            {Object.entries(SKILLS).map(([category, skills], idx) => (
              <Grid.Col key={category} span={{ base: 12, sm: 6 }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Card
                    withBorder
                    radius="md"
                    p="lg"
                    style={{ height: "100%", transition: "all 0.3s ease" }}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleHoverLeave}
                  >
                    <Title order={4} mb="md" size="h5">
                      {category}
                    </Title>
                    <Group gap="xs" wrap="wrap">
                      {skills.map((skill) => (
                        <Badge
                          key={skill}
                          size="lg"
                          variant="light"
                          color="grape"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </Group>
                  </Card>
                </motion.div>
              </Grid.Col>
            ))}
          </Grid>

          <Divider my="xl" />

          <Group mb="xl" gap="xs" align="center">
            <Title order={2} style={{ flex: 1 }}>
              <AnimatedText text="Professional Experience" />
            </Title>
            <Badge size="xl" variant="light" color="grape">
              10+ Years
            </Badge>
          </Group>

          {/* Show most recent position */}
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
                className="experience-card border-purple-left"
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
                      <ThemeIcon
                        size={20}
                        radius="xl"
                        color="grape"
                        variant="light"
                        mt={2}
                      >
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
                    <Badge key={tech} size="sm" variant="dot" color="grape">
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
                control: { padding: "16px" },
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
                                  color="grape"
                                  variant="light"
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
                                color="grape"
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

          <Group mb="xl" gap="xs" align="center">
            <Title order={2} style={{ flex: 1 }}>
              <AnimatedText text="Featured projects" />
            </Title>
            <Badge size="xl" variant="light" color="grape">
              GitHub
            </Badge>
          </Group>
          <Grid>
            {loading ? (
              SELECTED_REPOS.map((_, idx) => (
                <Grid.Col key={`skeleton-${idx}`} span={{ base: 12, md: 6 }}>
                  <Card withBorder radius="md" p="lg">
                    Loading...
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
                        border: "1px solid rgba(255,255,255,0.1)",
                        background:
                          "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
                        transition: "transform 0.2s ease",
                        cursor: "pointer",
                      }}
                      onMouseEnter={handleHover}
                      onMouseLeave={handleHoverLeave}
                    >
                      <Group justify="space-between" align="flex-start" mb="md">
                        <Title order={4} size="h3">
                          {r.name}
                        </Title>
                        <Badge size="lg" variant="light" color="grape">
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
                        <Badge variant="filled" color="grape" size="lg">
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
                Add your GitHub repos to showcase them here.
              </Text>
            )}
          </Grid>

          <Divider my="lg" />
          <Divider my="lg" />

          <Group mb="xl" gap="xs" align="center">
            <Title order={2} style={{ flex: 1 }}>
              <AnimatedText text="Services" />
            </Title>
            <Badge size="xl" variant="light" color="grape">
              Available Now
            </Badge>
          </Group>
          <Grid>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card
                  withBorder
                  radius="md"
                  p="lg"
                  style={{ height: "100%", transition: "all 0.3s ease" }}
                  onMouseEnter={handleHover}
                  onMouseLeave={handleHoverLeave}
                >
                  <ThemeIcon size={48} radius="md" color="blue" mb="md">
                    <IconGauge size={28} />
                  </ThemeIcon>
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
                    <List.Item>
                      Lighthouse, RUM, and profiler analysis
                    </List.Item>
                    <List.Item>
                      Actionable plan (quick wins + roadmap)
                    </List.Item>
                    <List.Item>Async Q&A follow-up</List.Item>
                  </List>
                </Card>
              </motion.div>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card
                  withBorder
                  radius="md"
                  p="lg"
                  style={{ height: "100%", transition: "all 0.3s ease" }}
                  onMouseEnter={handleHover}
                  onMouseLeave={handleHoverLeave}
                >
                  <ThemeIcon size={48} radius="md" color="violet" mb="md">
                    <IconRefresh size={28} />
                  </ThemeIcon>
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
              </motion.div>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card
                  withBorder
                  radius="md"
                  p="lg"
                  style={{ height: "100%", transition: "all 0.3s ease" }}
                  onMouseEnter={handleHover}
                  onMouseLeave={handleHoverLeave}
                >
                  <ThemeIcon size={48} radius="md" color="blue" mb="md">
                    <IconDatabase size={28} />
                  </ThemeIcon>
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
              </motion.div>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Card
                  withBorder
                  radius="md"
                  p="lg"
                  style={{ height: "100%", transition: "all 0.3s ease" }}
                  onMouseEnter={handleHover}
                  onMouseLeave={handleHoverLeave}
                >
                  <ThemeIcon size={48} radius="md" color="orange" mb="md">
                    <IconBug size={28} />
                  </ThemeIcon>
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
                    <List.Item>
                      Regression harnesses for critical flows
                    </List.Item>
                    <List.Item>Performance checks integrated with CI</List.Item>
                    <List.Item>
                      Developer UX improvements (lint, type gates)
                    </List.Item>
                  </List>
                </Card>
              </motion.div>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 12 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Card
                  withBorder
                  radius="md"
                  p="lg"
                  style={{ transition: "all 0.3s ease" }}
                  onMouseEnter={handleHover}
                  onMouseLeave={handleHoverLeave}
                >
                  <ThemeIcon size={48} radius="md" color="violet" mb="md">
                    <IconRobot size={28} />
                  </ThemeIcon>
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
              </motion.div>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 12 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Card
                  withBorder
                  radius="md"
                  p="lg"
                  style={{
                    border: "2px solid rgba(59, 130, 246, 0.3)",
                    background:
                      "linear-gradient(135deg, rgba(59,130,246,0.05) 0%, rgba(168,85,247,0.05) 100%)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={handleHover}
                  onMouseLeave={handleHoverLeave}
                >
                  <ThemeIcon size={48} radius="md" color="grape" mb="md">
                    <IconCodeDots size={28} />
                  </ThemeIcon>
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
              </motion.div>
            </Grid.Col>
          </Grid>

          <Divider my="xl" />

          <ContactSection email={EMAIL} linkedinUrl={LINKEDIN_URL} />
        </Stack>
      </Container>
    </>
  );
}
