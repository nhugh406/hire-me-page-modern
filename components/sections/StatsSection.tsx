"use client";
import { Card, Title, Text, Grid } from "@mantine/core";
import { motion } from "framer-motion";

interface StatCardProps {
  value: string;
  label: string;
  borderColor: string;
  bgColor: string;
  color: string;
}

const StatCard = ({
  value,
  label,
  borderColor,
  bgColor,
  color,
}: StatCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Card
        withBorder
        radius="md"
        p="lg"
        className="stat-card"
        style={{
          border: `1px solid ${borderColor}`,
          background: bgColor,
        }}
      >
        <Title order={2} c={color} className="stat-title">
          {value}
        </Title>
        <Text c="dimmed" size="sm" mt="xs">
          {label}
        </Text>
      </Card>
    </motion.div>
  );
};

export const StatsSection = () => {
  const stats = [
    {
      value: "10+",
      label: "Years Experience",
      color: "cyan",
      borderColor: "rgba(34, 211, 238, 0.3)",
      bgColor: "rgba(34, 211, 238, 0.08)",
    },
    {
      value: "35%+",
      label: "Performance Gains",
      color: "teal",
      borderColor: "rgba(20, 184, 166, 0.3)",
      bgColor: "rgba(20, 184, 166, 0.08)",
    },
    {
      value: "100+",
      label: "Engineers Mentored",
      color: "blue",
      borderColor: "rgba(59, 130, 246, 0.3)",
      bgColor: "rgba(59, 130, 246, 0.08)",
    },
    {
      value: "100%",
      label: "Remote First",
      color: "violet",
      borderColor: "rgba(139, 92, 246, 0.3)",
      bgColor: "rgba(139, 92, 246, 0.08)",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Grid gutter="lg">
        {stats.map((stat, idx) => (
          <Grid.Col key={idx} span={{ base: 6, sm: 3 }}>
            <StatCard {...stat} />
          </Grid.Col>
        ))}
      </Grid>
    </motion.div>
  );
};
