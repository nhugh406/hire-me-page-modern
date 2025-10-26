"use client";
import { Card, Title, Text, Group, Button } from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";
import { motion } from "framer-motion";

interface ContactSectionProps {
  email: string;
  linkedinUrl: string;
}

export const ContactSection = ({ email, linkedinUrl }: ContactSectionProps) => {
  return (
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
            href={`mailto:${email}`}
            size="lg"
            leftSection={<IconExternalLink size={20} />}
            style={{
              background: "linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)",
              boxShadow: "0 4px 14px rgba(59, 130, 246, 0.4)",
            }}
          >
            Email Me
          </Button>
          <Button
            component="a"
            href={linkedinUrl}
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
  );
};
