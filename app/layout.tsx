import "@mantine/core/styles.css";
import "./globals.scss";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nolan Hughes — Senior Frontend Engineer",
  description:
    "Senior Frontend Engineer with 10+ years building scalable, performant web applications. Specializing in React, Vue.js, TypeScript, AI/LLM integration, and frontend modernization. Currently at Demandbase.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider defaultColorScheme="dark">{children}</MantineProvider>
      </body>
    </html>
  );
}
