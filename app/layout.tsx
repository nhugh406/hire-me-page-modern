import "@mantine/core/styles.css";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nolan Hughes — Front-End Engineer",
  description: "Senior Front-End Engineer. I build fast, maintainable UIs with React/Next.js, ship AI-powered features, and optimize performance where it matters.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider defaultColorScheme="dark">
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
