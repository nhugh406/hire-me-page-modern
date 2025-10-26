import "@mantine/core/styles.css";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nolan Hughes — Principal Software Engineer",
  description:
    "Principal Software Engineer with 10+ years of experience in React, Vue.js, and TypeScript. I architect scalable solutions, mentor teams, and optimize performance where it matters. Currently at Demandbase.",
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
