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
      <Card p="xl" radius="xl" className="contact-card">
        <Title order={2} mb="md" ta="center">
          Let's Connect
        </Title>
        <Text size="lg" ta="center" c="dimmed" mb="xl">
          Always interested in discussing technology, architecture, and innovative solutions.
        </Text>
        <Group justify="center" gap="md">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              component="a"
              href={`mailto:${email}`}
              size="lg"
              leftSection={<IconExternalLink size={20} />}
              className="contact-button-primary"
            >
              Email Me
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              component="a"
              href={linkedinUrl}
              target="_blank"
              variant="light"
              size="lg"
              leftSection={<IconExternalLink size={20} />}
              className="contact-button-secondary"
            >
              Connect on LinkedIn
            </Button>
          </motion.div>
        </Group>
      </Card>
    </motion.div>
  );
};
