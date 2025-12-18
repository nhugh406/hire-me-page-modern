"use client";
import { motion } from "framer-motion";
import { Container, Group, Title, Text, Button, Image, Paper } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";

type Props = {
  name: string;
  subtitle: string;
  intro: string;
  avatarUrl: string;
  ctaUrl?: string;
  email?: string;
  linkedin?: string;
};

export default function Hero({ name, subtitle, intro, avatarUrl, ctaUrl, email, linkedin }: Props) {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      {/* Animated background with gradient */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 1200px 600px at 10% -10%, rgba(59,130,246,0.3), transparent), radial-gradient(ellipse 1000px 500px at 90% 10%, rgba(168,85,247,0.25), transparent)",
          zIndex: 0
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
          backgroundSize: ["100% 100%", "150% 150%"]
        }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
      />
      
      {/* Floating particles effect */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            width: Math.random() * 100 + 20,
            height: Math.random() * 100 + 20,
            borderRadius: "50%",
            background: `rgba(${59 + i * 2}, 130, 246, ${0.03 + i * 0.01})`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: Math.random() * 5,
          }}
        />
      ))}

      <Container size="lg" style={{ paddingTop: 80, paddingBottom: 80, position: "relative", zIndex: 1 }}>
        <Group align="flex-start" gap="xl" wrap="wrap" style={{ flexDirection: "row" }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            style={{ flexShrink: 0 }}
          >
            <Paper
              withBorder
              radius="xl"
              p="xs"
              style={{
                backdropFilter: "blur(10px)",
                background: "rgba(0,0,0,0.4)",
                boxShadow: "0 8px 32px rgba(59, 130, 246, 0.3), 0 4px 16px rgba(168, 85, 247, 0.2)",
              }}
            >
              <Image
                src={avatarUrl}
                alt={`${name} headshot`}
                radius="xl"
                w={140}
                h={140}
                style={{ objectFit: "cover" }}
              />
            </Paper>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ flex: 1, minWidth: 300 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Title
                order={1}
                style={{
                  letterSpacing: -1,
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  fontWeight: 700,
                  background: "linear-gradient(135deg, #fff 0%, rgba(59,130,246,0.8) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  marginBottom: 8,
                }}
              >
                {name}
              </Title>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Text
                c="dimmed"
                size="xl"
                fw={500}
                mt={4}
                style={{ letterSpacing: 0.5 }}
              >
                {subtitle}
              </Text>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Text size="lg" mt="md" style={{ maxWidth: 700, lineHeight: 1.7 }}>
                {intro}
              </Text>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Group mt="xl" gap="md">
                {ctaUrl && (
                  <Button
                    component="a"
                    href={ctaUrl}
                    size="lg"
                    rightSection={<IconArrowRight size={18} />}
                    style={{
                      background: "linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)",
                      boxShadow: "0 4px 14px rgba(59, 130, 246, 0.4)",
                    }}
                  >
                    Get in Touch
                  </Button>
                )}
                {email && (
                  <Button
                    variant="light"
                    component="a"
                    href={`mailto:${email}`}
                    size="lg"
                    style={{ border: "1px solid rgba(255,255,255,0.2)" }}
                  >
                    Email
                  </Button>
                )}
                {linkedin && (
                  <Button
                    variant="subtle"
                    component="a"
                    href={linkedin}
                    target="_blank"
                    size="lg"
                  >
                    LinkedIn
                  </Button>
                )}
              </Group>
            </motion.div>
          </motion.div>
        </Group>
      </Container>
    </div>
  );
}
