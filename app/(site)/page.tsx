import Link from "next/link";
import {
  EMAIL,
  EXPERIENCE,
  GITHUB_URL,
  HERO,
  LINKEDIN_URL,
  LOCATION,
  PILLARS,
  PROFILE_IMAGE,
  PROJECTS,
  REPO_BLURBS,
  SELECTED_REPOS,
  SKILLS,
  SPOTLIGHT,
  STATS,
  TICKER,
} from "@/constants/data";

export default function Home() {
  return (
    <main className="ed">
      <header className="ed-top">
        <span className="ed-top-brand">NH® — PORTFOLIO, VOL. 2026</span>
        <nav className="ed-top-nav">
          <a href="#work">Work</a>
          <a href="#experience">Track record</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
        </nav>
        <a className="ed-top-cta" href="#contact">Hire me →</a>
      </header>

      <div className="ed-marquee" aria-hidden="true">
        <div className="ed-marquee-track">
          {[...TICKER, ...TICKER].map((t, i) => (
            <span key={i}>{t} <b>✦</b></span>
          ))}
        </div>
      </div>

      <section className="ed-hero">
        <div className="ed-hero-main">
          <p className="ed-kicker">★ {HERO.eyebrow} — {LOCATION}</p>
          <h1 className="ed-name">NOLAN<br />HUGHES<span className="ed-dot">.</span></h1>
          <p className="ed-headline">
            I build interfaces where <mark>people &amp; AI agents</mark> work together.
          </p>
          <p className="ed-lede">{HERO.lede}</p>
          <div className="ed-cta-row">
            <a className="ed-btn ed-btn-solid" href={`mailto:${EMAIL}`}>Email me</a>
            <Link className="ed-btn ed-btn-outline" href="/resume">Résumé</Link>
            <a className="ed-btn ed-btn-outline" href={LINKEDIN_URL} target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a className="ed-btn ed-btn-outline" href={GITHUB_URL} target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
          <ul className="ed-proof">
            {HERO.proof.map((p) => (<li key={p}>{p}</li>))}
          </ul>
        </div>
        <div className="ed-hero-photo">
          <div className="ed-photo-frame">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={PROFILE_IMAGE} alt="Nolan Hughes" />
          </div>
          <p className="ed-photo-cap">FIG. 01 — THE ENGINEER IN QUESTION. PARRISH, FL.</p>
        </div>
      </section>

      <section className="ed-stats" aria-label="By the numbers">
        {STATS.map((s, i) => (
          <div className="ed-stat" key={s.label}>
            <span className="ed-stat-idx">{String(i + 1).padStart(2, "0")}</span>
            <span className="ed-stat-value">{s.value}</span>
            <span className="ed-stat-label">{s.label}</span>
          </div>
        ))}
      </section>

      <section className="ed-spotlight" id="work">
        <p className="ed-section-tag ed-section-tag-dark">■ {SPOTLIGHT.kicker}</p>
        <h2 className="ed-spotlight-title">{SPOTLIGHT.title}</h2>
        <p className="ed-spotlight-desc">{SPOTLIGHT.description}</p>
        <div className="ed-features">
          {SPOTLIGHT.features.map((f, i) => (
            <article className="ed-feature" key={f.title}>
              <span className="ed-feature-num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </article>
          ))}
        </div>
        <div className="ed-pillars">
          {PILLARS.map((p) => (
            <article className="ed-pillar" key={p.title}>
              <p className="ed-pillar-tag">{p.tag}</p>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ed-exp" id="experience">
        <p className="ed-section-tag">■ Track record</p>
        <h2 className="ed-h2">WHERE I&apos;VE<br />DONE IT.</h2>
        {EXPERIENCE.map((job) => (
          <article className="ed-job" key={job.company}>
            <div className="ed-job-meta">
              <p className="ed-job-period">{job.period}</p>
              <p className="ed-job-loc">{job.location}</p>
              <p className="ed-job-tech">{job.technologies.join(" / ")}</p>
            </div>
            <div className="ed-job-body">
              <h3>{job.title} <span className="ed-job-company">@ {job.company}</span></h3>
              <p className="ed-job-summary">{job.summary}</p>
              <ul>
                {job.achievements.map((a) => (<li key={a}>{a}</li>))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="ed-projects" id="projects">
        <p className="ed-section-tag">■ Side projects &amp; open source</p>
        <h2 className="ed-h2">BUILT AFTER<br />HOURS.</h2>
        <div className="ed-proj-grid">
          {PROJECTS.map((p) => (
            <article className="ed-proj ed-proj-featured" key={p.name}>
              <p className="ed-proj-badge">{p.badge}</p>
              <h3>{p.name}</h3>
              <p>{p.text}</p>
              <p className="ed-proj-stack">{p.stack}</p>
            </article>
          ))}
          {SELECTED_REPOS.map((name) => (
            <a
              className="ed-proj"
              key={name}
              href={`${GITHUB_URL}/${name}`}
              target="_blank"
              rel="noreferrer"
            >
              <p className="ed-proj-badge">GitHub · TypeScript · Public repo</p>
              <h3>{name} ↗</h3>
              <p>{REPO_BLURBS[name]}</p>
              <p className="ed-proj-stack">View on GitHub →</p>
            </a>
          ))}
        </div>
      </section>

      <section className="ed-skills" id="skills">
        <p className="ed-section-tag">■ The toolkit</p>
        {Object.entries(SKILLS).map(([group, items]) => (
          <div className="ed-skill-row" key={group}>
            <h3>{group}</h3>
            <p>{items.join("  /  ")}</p>
          </div>
        ))}
      </section>

      <section className="ed-contact" id="contact">
        <p className="ed-contact-tag">LAST PAGE. BEST PAGE.</p>
        <h2 className="ed-contact-big">HIRE<br />NOLAN.</h2>
        <p className="ed-contact-sub">
          Staff / Principal frontend roles, remote US. Fastest reply by email — I read everything.
        </p>
        <div className="ed-cta-row">
          <a className="ed-btn ed-btn-ink" href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <a className="ed-btn ed-btn-outline-light" href={LINKEDIN_URL} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <Link className="ed-btn ed-btn-outline-light" href="/resume">Résumé</Link>
        </div>
      </section>

      <footer className="ed-footer">
        <span>© 2026 Nolan Hughes — Parrish, FL</span>
        <span>Set in Archivo Black &amp; Space Mono. No glass was blurred in this design.</span>
      </footer>
    </main>
  );
}
