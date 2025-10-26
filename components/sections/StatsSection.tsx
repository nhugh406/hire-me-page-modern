"use client";
import { Card, Title, Text, Grid } from "@mantine/core";
import { motion } from "framer-motion";

export const StatsSection = () => {
  const stats = [
    {
      value: "10+",
      label: "Years Experience",
      color: "blue",
      borderColor: "rgba(59, 130, 246, 0.2)",
      bgColor: "rgba(59, 130, 246, 0.05)",
    },
    {
      value: "35%+",
      label: "Performance Gains",
      color: "violet",
      borderColor: "rgba(168, 85, 247, 0.2)",
      bgColor: "rgba(168, 85, 247, 0.05)",
    },
    {
      value: "100+",
      label: "Engineers Mentored",
      color: "blue",
      borderColor: "rgba(59, 130, 246, 0.2)",
      bgColor: "rgba(59, 130, 246, 0.05)",
    },
    {
      value: "100%",
      label: "Remote First",
      color: "violet",
      borderColor: "rgba(168, 85, 247, 0.2)",
      bgColor: "rgba(168, 85, 247, 0.05)",
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
            <Card
              withBorder
              radius="md"
              p="lg"
              style={{
                textAlign: "center",
                border: `1px solid ${stat.borderColor}`,
                background: stat.bgColor,
              }}
            >
              <Title order={2} c={stat.color} style={{ fontSize: "2.5rem" }}>
                {stat.value}
              </Title>
              <Text c="dimmed" size="sm" mt="xs">
                {stat.label}
              </Text>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </motion.div>
  );
};
