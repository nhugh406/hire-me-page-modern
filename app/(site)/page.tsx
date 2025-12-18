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
    "Senior Frontend Engineer | 10+ Years Building Scalable Web Applications | React, Vue.js, TypeScript | AI/LLM Integration";
  const intro =
    "I'm a Senior Frontend Engineer with 10+ years of experience building scalable, performant, and user-centric web applications. I specialize in frontend modernization, architectural leadership, design systems, and integration of AI/LLM workflows—including agent-based automation using the Model Context Protocol (MCP). My focus is on clean architecture, developer experience improvement, and delivering intuitive, enterprise-grade solutions. Currently at Demandbase, I'm modernizing frontend architecture for Sales Intelligence platforms and designing AI-driven workflows that enhance both user experience and developer productivity. Throughout my career, I've founded engineering teams, architected design systems, introduced micro frontends, and consistently delivered measurable impact—from 85% developer efficiency improvements to 90% scalability gains. Based in Parrish, FL.";

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
            <Badge size="xl" variant="light" color="violet">
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
                    color="cyan"
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
                        color="cyan"
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
                    color="blue"
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
                        color="blue"
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
                    color="violet"
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
                        color="violet"
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
            <Badge size="xl" variant="light" color="violet">
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
                          color="violet"
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
            <Badge size="xl" variant="light" color="violet">
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
                        color="violet"
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
                    <Badge key={tech} size="sm" variant="dot" color="violet">
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
                                  color="violet"
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
                                color="violet"
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
            <Badge size="xl" variant="light" color="violet">
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
                        <Badge size="lg" variant="light" color="violet">
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
                        {r.name === "HelixSuite" &&
                          "🔧 Enterprise-grade application suite demonstrating advanced architecture patterns, scalable design, and production-ready implementations."}
                        {r.name === "gralena" &&
                          "🎨 Modern web application showcasing cutting-edge frontend technologies, responsive design, and intuitive user experience patterns."}
                        {r.name === "realtime-chat" &&
                          "💬 Minimal, fast real-time chat interface demonstrating WebSocket integration, Supabase realtime patterns, and smooth UI interactions."}
                      </Text>
                      <Group mt="md" gap="xs" mb="md">
                        <Badge variant="filled" color="violet" size="lg">
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
              <AnimatedText text="Areas of Expertise" />
            </Title>
            <Badge size="xl" variant="light" color="violet">
              Specializations
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
                  <Title order={4}>Performance & Optimization</Title>
                  <Text c="dimmed" mt="xs">
                    Delivering measurable performance improvements
                  </Text>
                  <List
                    mt="sm"
                    spacing="xs"
                    icon={
                      <ThemeIcon
                        size={20}
                        radius="xl"
                        color="cyan"
                        variant="light"
                      >
                        <IconCheck size={14} />
                      </ThemeIcon>
                    }
                  >
                    <List.Item>
                      Optimized rendering performance and reduced UI latency
                      across complex enterprise surfaces
                    </List.Item>
                    <List.Item>
                      Leveraged RUM, Lighthouse, and profiling tools to identify
                      and fix bottlenecks
                    </List.Item>
                    <List.Item>
                      Implemented advanced caching patterns (React Query) with
                      clear data state indication
                    </List.Item>
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
                  <Title order={4}>Frontend Modernization</Title>
                  <Text c="dimmed" mt="xs">
                    Transforming legacy codebases into modern, maintainable
                    systems
                  </Text>
                  <List
                    mt="sm"
                    spacing="xs"
                    icon={
                      <ThemeIcon
                        size={20}
                        radius="xl"
                        color="violet"
                        variant="light"
                      >
                        <IconCheck size={14} />
                      </ThemeIcon>
                    }
                  >
                    <List.Item>
                      Modernized React applications, improving developer
                      efficiency by 85%
                    </List.Item>
                    <List.Item>
                      Migrated class components to hooks with composable state
                      patterns
                    </List.Item>
                    <List.Item>
                      Architected design systems and reusable component
                      libraries used across multiple business units
                    </List.Item>
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
                  <Title order={4}>Enterprise Data Interfaces</Title>
                  <Text c="dimmed" mt="xs">
                    Building intuitive, data-rich user experiences at scale
                  </Text>
                  <List
                    mt="sm"
                    spacing="xs"
                    icon={
                      <ThemeIcon
                        size={20}
                        radius="xl"
                        color="blue"
                        variant="light"
                      >
                        <IconCheck size={14} />
                      </ThemeIcon>
                    }
                  >
                    <List.Item>
                      Designed and built complex data management systems (file
                      management, tables, dashboards)
                    </List.Item>
                    <List.Item>
                      Created enterprise-grade interfaces for Sales Intelligence
                      and account-based marketing platforms
                    </List.Item>
                    <List.Item>
                      Delivered intuitive UX for high-volume, complex data
                      workflows
                    </List.Item>
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
                  <Title order={4}>Quality & Automation</Title>
                  <Text c="dimmed" mt="xs">
                    Building robust, reliable systems through testing and
                    automation
                  </Text>
                  <List
                    mt="sm"
                    spacing="xs"
                    icon={
                      <ThemeIcon
                        size={20}
                        radius="xl"
                        color="orange"
                        variant="light"
                      >
                        <IconCheck size={14} />
                      </ThemeIcon>
                    }
                  >
                    <List.Item>
                      Expanded Playwright and integration test coverage to
                      minimize regressions
                    </List.Item>
                    <List.Item>
                      Reduced rework by 80% through improved testing and code
                      quality controls
                    </List.Item>
                    <List.Item>
                      Modernized CI/CD pipelines and increased adoption by 75%
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
                  <Title order={4}>AI & LLM Integration</Title>
                  <Text c="dimmed" mt="xs">
                    Pioneering AI-driven workflows and automation
                  </Text>
                  <List
                    mt="sm"
                    spacing="xs"
                    icon={
                      <ThemeIcon
                        size={20}
                        radius="xl"
                        color="violet"
                        variant="light"
                      >
                        <IconCheck size={14} />
                      </ThemeIcon>
                    }
                  >
                    <List.Item>
                      Designing and integrating AI-driven workflows including
                      LLM-assisted UI flows
                    </List.Item>
                    <List.Item>
                      Developing AI agents and MCP-based tool invocations for
                      enhanced debugging and development
                    </List.Item>
                    <List.Item>
                      Building secure, production-ready AI integrations with AWS
                      Bedrock, Lambda, and API Gateway
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
                  <ThemeIcon size={48} radius="md" color="violet" mb="md">
                    <IconCodeDots size={28} />
                  </ThemeIcon>
                  <Title order={4}>Architecture & Leadership</Title>
                  <Text c="dimmed" mt="xs">
                    Building teams, systems, and scalable solutions
                  </Text>
                  <List
                    mt="sm"
                    spacing="xs"
                    icon={
                      <ThemeIcon
                        size={20}
                        radius="xl"
                        color="violet"
                        variant="light"
                      >
                        <IconCheck size={14} />
                      </ThemeIcon>
                    }
                  >
                    <List.Item>
                      Founded and built engineering teams from the ground up,
                      establishing standards and best practices
                    </List.Item>
                    <List.Item>
                      Architected micro frontends using Webpack Module
                      Federation for modular deployment
                    </List.Item>
                    <List.Item>
                      Led teams of 12+ engineers, mentoring and guiding
                      architectural decisions
                    </List.Item>
                    <List.Item>
                      Refactored monolithic systems into modular components,
                      improving scalability by 90%
                    </List.Item>
                    <List.Item>
                      Served as technical liaison and SME for React, Vue, and
                      JavaScript across organizations
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
