"use client";

import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import { useGitHubRepos } from "@/hooks/useGitHubRepos";
import {
  EMAIL,
  LINKEDIN_URL,
  GITHUB_URL,
  TICKER,
  STATS,
  SPOTLIGHT,
  PILLARS,
  EXPERIENCE,
  PROJECTS,
  SKILLS,
  REPO_BLURBS,
} from "@/constants/data";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const reveal: any = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6 },
};

function SectionHead({
  kicker,
  title,
  sub,
}: {
  kicker: string;
  title: string;
  sub?: string;
}) {
  return (
    <motion.div {...reveal}>
      <p className="kicker">{kicker}</p>
      <h2>{title}</h2>
      {sub ? <p className="section-sub">{sub}</p> : null}
    </motion.div>
  );
}

export default function Page() {
  const { repos, loading } = useGitHubRepos();
  const tickerItems = [...TICKER, ...TICKER];

  return (
    <>
      <Nav />
      <Hero />

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {tickerItems.map((t, i) => (
            <span key={`${t}-${i}`}>{t}</span>
          ))}
        </div>
      </div>

      <main className="wrap">
        {/* Impact */}
        <section className="section" style={{ paddingTop: 64 }}>
          <SectionHead
            kicker="Proof, not adjectives"
            title="The numbers behind the headline."
            sub="Recent work at Demandbase, measured the way hiring managers actually ask about it — scope shipped, quality enforced, and systems other engineers build on."
          />
          <div className="stats">
            {STATS.map((s, i) => (
              <motion.div key={s.label} {...reveal} transition={{ duration: 0.6, delay: i * 0.06 }}>
                <div className="stat">
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Spotlight: Mojo */}
        <section className="section" id="spotlight">
          <SectionHead kicker={SPOTLIGHT.kicker} title={SPOTLIGHT.title} sub={SPOTLIGHT.description} />
          <motion.div {...reveal}>
            <div className="spotlight">
              <div className="grid2" style={{ marginTop: 0 }}>
                {SPOTLIGHT.features.map((f) => (
                  <div key={f.title} className="feature">
                    <h4>{f.title}</h4>
                    <p>{f.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Pillars */}
        <section className="section">
          <SectionHead
            kicker="What I do best"
            title="Three things teams hire me for."
          />
          <div className="grid3">
            {PILLARS.map((p, i) => (
              <motion.div key={p.title} {...reveal} transition={{ duration: 0.6, delay: i * 0.08 }}>
                <article className="card">
                  <span className="tag">{p.tag}</span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </article>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="section" id="experience">
          <SectionHead
            kicker="Experience"
            title="10+ years. Founding engineer to Staff-level IC."
            sub="Every role below added a layer: leading teams, founding a frontend practice, owning design systems and platforms — and now building agentic product surfaces end to end."
          />
          <div className="timeline">
            {EXPERIENCE.map((job, i) => (
              <motion.div key={job.company} {...reveal} transition={{ duration: 0.6, delay: Math.min(i * 0.05, 0.15) }}>
                <article className="job">
                  <div className="job-head">
                    <div>
                      <h3>{job.title}</h3>
                      <div className="company">{job.company}</div>
                    </div>
                    <div className="meta">
                      {job.period}
                      <br />
                      {job.location}
                    </div>
                  </div>
                  <p className="summary">{job.summary}</p>
                  <ul>
                    {job.achievements.map((a) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ul>
                  <div className="badges">
                    {job.technologies.map((t) => (
                      <span key={t} className="badge">{t}</span>
                    ))}
                  </div>
                </article>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="section" id="projects">
          <SectionHead
            kicker="Featured projects"
            title="Built because I wanted the thing to exist."
            sub="Side projects in the same lanes as my day job: LLM pipelines with structured output, and tooling that makes large codebases easier to test."
          />
          <div className="grid2">
            {PROJECTS.map((p, i) => (
              <motion.div key={p.name} {...reveal} transition={{ duration: 0.6, delay: i * 0.08 }}>
                <article className="card">
                  <span className="tag">{p.badge}</span>
                  <h3>{p.name}</h3>
                  <p>{p.text}</p>
                  <div className="badges">
                    {p.stack.split(" · ").map((s) => (
                      <span key={s} className="badge hot">{s}</span>
                    ))}
                  </div>
                </article>
              </motion.div>
            ))}
          </div>

          <div className="grid2">
            {loading
              ? [0, 1, 2, 3].map((n) => (
                  <div key={n} className="card"><span className="tag">GitHub</span><h3>Loading…</h3><p>Fetching repositories.</p></div>
                ))
              : repos.map((r, i) => (
                  <motion.div key={r.url} {...reveal} transition={{ duration: 0.6, delay: i * 0.06 }}>
                    <article className="card">
                      <span className="tag">GitHub · {r.language ?? "Code"}</span>
                      <h3>{r.name}</h3>
                      <p>{REPO_BLURBS[r.name] || r.description || "Open-source work on GitHub."}</p>
                      <div className="repo-meta">
                        <span className="badge">★ {r.stars} stars</span>
                        <span className="badge">⑂ {r.forks} forks</span>
                      </div>
                      <a className="repo-link" href={r.url} target="_blank" rel="noreferrer">View on GitHub →</a>
                    </article>
                  </motion.div>
                ))}
          </div>
          {!loading && repos.length === 0 ? (
            <p className="section-sub" style={{ marginTop: 20 }}>
              More on <a href={GITHUB_URL} target="_blank" rel="noreferrer" style={{ color: "var(--cyan)" }}>GitHub →</a>
            </p>
          ) : null}
        </section>

        {/* Skills */}
        <section className="section" id="skills">
          <SectionHead kicker="Core skills" title="A stack built around AI product surfaces." />
          <div className="grid2">
            {Object.entries(SKILLS).map(([group, skills], i) => (
              <motion.div key={group} {...reveal} transition={{ duration: 0.6, delay: i * 0.06 }}>
                <div className="card skill-group">
                  <h3>{group}</h3>
                  <div className="badges" style={{ marginTop: 0 }}>
                    {skills.map((s) => (
                      <span key={s} className="badge">{s}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <div id="contact">
          <motion.div {...reveal}>
            <section className="footer-cta">
              <p className="kicker">Next step</p>
              <h2>Let&apos;s build what&apos;s next — <span className="grad">together.</span></h2>
              <p>
                I&apos;m exploring Staff / Principal frontend roles where AI product surfaces,
                platform architecture, and real craft matter. The fastest way to reach me is email —
                I read everything myself.
              </p>
              <div className="hero-ctas" style={{ justifyContent: "center" }}>
                <a className="btn btn-primary" href={`mailto:${EMAIL}`}>{EMAIL}</a>
                <a className="btn btn-ghost" href={LINKEDIN_URL} target="_blank" rel="noreferrer">LinkedIn</a>
                <a className="btn btn-ghost" href={GITHUB_URL} target="_blank" rel="noreferrer">GitHub</a>
                <a className="btn btn-ghost" href="/resume">Résumé</a>
              </div>
            </section>
          </motion.div>
        </div>

        <footer className="site">
          <span>© 2026 Nolan Hughes · Parrish, FL · Remote (US)</span>
          <span>Built with Next.js · Deployed on Vercel</span>
        </footer>
      </main>
    </>
  );
}
