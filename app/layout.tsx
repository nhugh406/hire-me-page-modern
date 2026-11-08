import "@mantine/core/styles.css";
import "./globals.scss";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { Analytics } from "@vercel/analytics/react";
import { Archivo_Black, Space_Grotesk, Space_Mono } from "next/font/google";
import type { Metadata } from "next";

const display = Archivo_Black({ subsets: ["latin"], weight: "400", variable: "--font-display" });
const bodyFont = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-body" });
const mono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://nolan-hughes.vercel.app"),
  title: "Nolan Hughes — Staff / Principal Frontend Engineer | AI-Driven UI",
  description:
    "Staff-level frontend engineer building interfaces where people and AI agents work together. Core engineer on Mojo, Demandbase's agentic AI workspace. React, TypeScript, generative UI, LLM & MCP tooling, micro frontends.",
  openGraph: {
    title: "Nolan Hughes — Staff / Principal Frontend Engineer",
    description:
      "I build interfaces where people & AI agents work together. Core engineer on Mojo @ Demandbase. Generative UI · LLM reliability · Real-time collaboration & voice.",
    url: "https://nolan-hughes.vercel.app",
    siteName: "Nolan Hughes",
    images: [{ url: "/api/avatar", width: 852, height: 852, alt: "Nolan Hughes" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nolan Hughes — Staff / Principal Frontend Engineer",
    description:
      "Generative UI, agentic product surfaces, and the LLM reliability layer that makes tool use hold up in production.",
    images: ["/api/avatar"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${bodyFont.variable} ${mono.variable}`}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider defaultColorScheme="light">{children}</MantineProvider>
        <Analytics />
      </body>
    </html>
  );
}
