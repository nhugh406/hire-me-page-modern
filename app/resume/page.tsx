"use client";
import Nav from "@/components/Nav";
import { EXPERIENCE, SKILLS, PROJECTS, EMAIL, LINKEDIN_URL, GITHUB_URL, LOCATION } from "@/constants/data";

export default function ResumePage() {
  return (
    <div className="resume-page">
      <Nav />
      <div className="resume-sheet">
        <div className="resume-top">
          <div>
            <h1>Nolan Hughes</h1>
            <p style={{ margin: "6px 0 0", fontWeight: 650 }}>
              Senior / Principal Frontend Engineer · AI-Augmented Systems &amp; Developer Experience
            </p>
            <p style={{ margin: "4px 0 0" }}>
              {LOCATION} · {EMAIL}
              <br />
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">LinkedIn</a> ·{" "}
              <a href={GITHUB_URL} target="_blank" rel="noreferrer">GitHub</a> ·{" "}
              <a href="https://nolan-hughes.vercel.app">nolan-hughes.vercel.app</a>
            </p>
          </div>
          <div className="resume-actions">
            <a href="/">← Portfolio</a>
            <button className="primary" onClick={() => window.print()}>Print / Save PDF</button>
          </div>
        </div>

        <h2>Summary</h2>
        <p>
          Senior/Principal Frontend Engineer with 10+ years building enterprise web applications,
          specializing in agentic AI product surfaces: agent-generated dashboards, generative UI,
          real-time collaboration and voice, and the LLM reliability layer that makes tool use hold
          up in production. Deep expertise in React/TypeScript architecture, micro frontends, Nx
          monorepos, and MCP-based tool integrations; ships AI-native features to GA and raises
          engineering standards through mentorship, architecture documentation, and code review.
        </p>

        <h2>Core Skills</h2>
        {Object.entries(SKILLS).map(([group, skills]) => (
          <p key={group} style={{ margin: "6px 0" }}>
            <strong>{group}:</strong> {skills.join(", ")}
          </p>
        ))}

        <h2>Professional Experience</h2>
        {EXPERIENCE.map((job) => (
          <div key={job.company} style={{ marginBottom: 20 }}>
            <p style={{ margin: "0 0 2px" }}>
              <strong>{job.title}, {job.company}</strong> · {job.period} · {job.location}
            </p>
            <p style={{ margin: "0 0 6px", fontStyle: "italic" }}>{job.summary}</p>
            <ul style={{ margin: 0 }}>
              {job.achievements.map((a) => (<li key={a}>{a}</li>))}
            </ul>
          </div>
        ))}

        <h2>Featured Projects</h2>
        <ul>
          {PROJECTS.map((p) => (
            <li key={p.name}><strong>{p.name}</strong> ({p.stack}): {p.text}</li>
          ))}
        </ul>

        <h2>Education</h2>
        <p>B.S. Business Administration &amp; Management, Kutztown University of Pennsylvania</p>
      </div>
    </div>
  );
}
