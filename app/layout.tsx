import "@mantine/core/styles.css";
import "./globals.scss";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";

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
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var t=localStorage.getItem('nh-theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.dataset.theme=t;}catch(e){}})();",
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Space+Grotesk:wght@400;500;700&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <MantineProvider defaultColorScheme="light">{children}</MantineProvider>
        <Analytics />
      </body>
    </html>
  );
}
