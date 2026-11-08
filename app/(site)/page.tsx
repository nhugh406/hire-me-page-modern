"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  EMAIL,
  EXPERIENCE,
  GITHUB_URL,
  LINKEDIN_URL,
  PROFILE_IMAGE,
  PROJECTS,
  REPO_BLURBS,
  SELECTED_REPOS,
  SKILLS,
} from "@/constants/data";

// framer-motion v11 + @types/react 19 typing workaround (same as elsewhere in this repo)
const MotionDiv = motion.div as any;

type WinId = "readme" | "mojo" | "monitor" | "experience" | "projects" | "skills" | "contact";

const WINDOWS: { id: WinId; title: string; icon: string; cls: string }[] = [
  { id: "readme", title: "README.txt — start here", icon: "📄", cls: "win-readme" },
  { id: "mojo", title: "Mojo.app — current work", icon: "🪟", cls: "win-mojo" },
  { id: "monitor", title: "Activity Monitor — career processes", icon: "📊", cls: "win-monitor" },
  { id: "experience", title: "experience.log", icon: "🗂️", cls: "win-exp" },
  { id: "projects", title: "Projects — Finder", icon: "📁", cls: "win-projects" },
  { id: "skills", title: "skills.txt", icon: "🧰", cls: "win-skills" },
  { id: "contact", title: "Contact.vcf", icon: "✉️", cls: "win-contact" },
];

const BARS = [
  { label: "tickets_shipped", detail: "~290 across 10+ codebases · 18 mo", pct: 92 },
  { label: "tests_touched", detail: "900+ files added or updated", pct: 97 },
  { label: "merge_requests_reviewed", detail: "~80 in one 5-week span", pct: 78 },
  { label: "architecture_docs", detail: "~30 written / co-written", pct: 64 },
  { label: "monorepo_contributors", detail: "~90 engineers shipping together", pct: 84 },
  { label: "years_on_the_web", detail: "10+ and counting", pct: 70 },
];

function useClock() {
  const [now, setNow] = useState("");
  useEffect(() => {
    const tick = () =>
      setNow(
        new Date().toLocaleString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
        })
      );
    tick();
    const t = setInterval(tick, 20000);
    return () => clearInterval(t);
  }, []);
  return now;
}

export default function Home() {
  const clock = useClock();
  const desktopRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<Record<WinId, boolean>>({
    readme: true,
    mojo: true,
    monitor: true,
    experience: false,
    projects: false,
    skills: false,
    contact: false,
  });
  const [order, setOrder] = useState<WinId[]>(["readme", "mojo", "monitor"]);

  const focus = (id: WinId) => setOrder((o) => [...o.filter((w) => w !== id), id]);
  const openWin = (id: WinId) => {
    setOpen((s) => ({ ...s, [id]: true }));
    focus(id);
  };
  const closeWin = (id: WinId) => setOpen((s) => ({ ...s, [id]: false }));
  const zOf = (id: WinId) => 10 + order.indexOf(id);

  return (
    <main className="os">
      <div className="os-menubar">
        <span className="os-menu-logo"> NolanOS</span>
        <span className="os-menu-item os-menu-strong">Nolan Hughes</span>
        <span className="os-menu-item">File</span>
        <span className="os-menu-item">Edit</span>
        <span className="os-menu-item">Window</span>
        <span className="os-menu-item">Help</span>
        <span className="os-menu-right">
          <span className="os-open-dot" /> Open to Staff / Principal roles
          <span className="os-clock">{clock}</span>
        </span>
      </div>

      <div className="os-desktop" ref={desktopRef}>
        <p className="os-wallpaper-title">
          The desktop is the demo.
          <span>I build windowing workspaces for people &amp; AI agents — so my portfolio is one. Drag the windows. Close things. The dock brings them back.</span>
        </p>

        <div className="os-icons">
          {WINDOWS.map((w) => (
            <button key={w.id} className="os-icon" onClick={() => openWin(w.id)}>
              <span className="os-icon-glyph">{w.icon}</span>
              <span className="os-icon-label">{w.title.split(" — ")[0]}</span>
            </button>
          ))}
          <Link className="os-icon" href="/resume">
            <span className="os-icon-glyph">📕</span>
            <span className="os-icon-label">Resume.pdf</span>
          </Link>
        </div>

        {WINDOWS.filter((w) => open[w.id]).map((w) => (
          <MotionDiv
            key={w.id}
            className={`os-window ${w.cls} ${order[order.length - 1] === w.id ? "os-window-active" : ""}`}
            style={{ zIndex: zOf(w.id) }}
            drag
            dragConstraints={desktopRef}
            dragMomentum={false}
            onMouseDown={() => focus(w.id)}
            onTouchStart={() => focus(w.id)}
          >
            <div className="os-titlebar">
              <span className="os-lights">
                <button aria-label={`Close ${w.title}`} className="os-light os-light-close" onClick={() => closeWin(w.id)}>×</button>
                <span className="os-light os-light-min" />
                <span className="os-light os-light-max" />
              </span>
              <span className="os-title">{w.icon} {w.title}</span>
            </div>
            <div className="os-body">
              {w.id === "readme" && (
                <div className="os-readme">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={PROFILE_IMAGE} alt="Nolan Hughes" className="os-avatar" />
                  <h1>Hi, I&apos;m Nolan. Go ahead — drag this window around.</h1>
                  <p>
                    That&apos;s basically my job. I build the layer where <strong>people and AI agents work side
                    by side</strong>: canvases an agent can write and publish, apps that open in windows, teams
                    collaborating live — even talking to the agent out loud.
                  </p>
                  <p>
                    For the last 18 months I&apos;ve been a core engineer on <strong>Mojo</strong>, Demandbase&apos;s
                    agentic AI workspace. Before that: founding frontend engineer at a legal-tech startup, and
                    principal engineer running design systems and micro frontends for a 50+ engineer org.
                  </p>
                  <p className="os-readme-sign">
                    I&apos;m looking for a Staff / Principal frontend seat, remote US. Everything on this desktop
                    is the evidence — start with <button className="os-inline-link" onClick={() => openWin("mojo")}>Mojo.app</button>,
                    or check the <button className="os-inline-link" onClick={() => openWin("monitor")}>Activity Monitor</button> for the numbers.
                  </p>
                </div>
              )}

              {w.id === "mojo" && (
                <div className="os-mojo">
                  <p className="os-mojo-head">
                    <strong>Mojo</strong> — an agentic AI marketing workspace. Not a chatbot in a trench coat:
                    the agent writes real product, in the product, while the team watches.
                  </p>
                  <ul className="os-app-list">
                    <li>
                      <span>▦</span>
                      <div><strong>Canvases — mine, end to end.</strong> The agent writes and publishes interactive dashboards with live data. I built the compile/publish pipeline, the self-repair loops, sharing, version history, and the one-click trip from canvas to Google Slides.</div>
                    </li>
                    <li>
                      <span>◧</span>
                      <div><strong>The Apps layer — the UI/UX pass.</strong> A desktop-style windowing shell inside the product (yes, like this page). I helped improve how it feels: the catalog, how windows open and move, how apps notify — usability and polish across the surface.</div>
                    </li>
                    <li>
                      <span>≋</span>
                      <div><strong>Multiplayer &amp; voice.</strong> Shared chats, AI-coordinated project rooms, presence, typing indicators — and live voice conversations with the agent.</div>
                    </li>
                    <li>
                      <span>⚙</span>
                      <div><strong>Reliability, the unglamorous layer.</strong> Recovering from corrupted tool-call history, keeping deferred tool references alive across turns, escalating to a stronger model for build tasks, fixing long-thread crashes. Tool use that holds up in production.</div>
                    </li>
                  </ul>
                </div>
              )}

              {w.id === "monitor" && (
                <div className="os-monitor">
                  {BARS.map((b) => (
                    <div className="os-proc" key={b.label}>
                      <div className="os-proc-top">
                        <span className="os-proc-name">{b.label}</span>
                        <span className="os-proc-detail">{b.detail}</span>
                      </div>
                      <div className="os-bar"><span style={{ width: `${b.pct}%` }} /></div>
                    </div>
                  ))}
                  <p className="os-monitor-foot">Uptime: 10+ years. Zero plans to reboot into management — Staff-level IC, on purpose.</p>
                </div>
              )}

              {w.id === "experience" && (
                <div className="os-log">
                  {EXPERIENCE.map((job) => (
                    <div className="os-log-entry" key={job.company}>
                      <p className="os-log-line">
                        <span className="os-log-date">[{job.period}]</span> <strong>{job.company}</strong> — {job.title} · {job.location}
                      </p>
                      <p className="os-log-sum">{job.summary}</p>
                      {job.achievements.slice(0, 3).map((a) => (
                        <p className="os-log-ach" key={a}>→ {a}</p>
                      ))}
                    </div>
                  ))}
                  <p className="os-log-foot">Full log in <Link href="/resume">Resume.pdf</Link> — it prints nicely, promise.</p>
                </div>
              )}

              {w.id === "projects" && (
                <div className="os-finder">
                  {PROJECTS.map((p) => (
                    <div className="os-file os-file-app" key={p.name}>
                      <span className="os-file-glyph">🚀</span>
                      <strong>{p.name}</strong>
                      <small>{p.badge} · {p.stack}</small>
                      <p>{p.text}</p>
                    </div>
                  ))}
                  {SELECTED_REPOS.map((name) => (
                    <a className="os-file" key={name} href={`${GITHUB_URL}/${name}`} target="_blank" rel="noreferrer">
                      <span className="os-file-glyph">📁</span>
                      <strong>{name}</strong>
                      <small>GitHub · TypeScript</small>
                      <p>{REPO_BLURBS[name]}</p>
                    </a>
                  ))}
                </div>
              )}

              {w.id === "skills" && (
                <div className="os-skills">
                  {Object.entries(SKILLS).map(([group, items]) => (
                    <div key={group} className="os-skill-group">
                      <h3>{group}</h3>
                      <div className="os-chips">
                        {items.map((s) => (<span key={s} className="os-chip">{s}</span>))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {w.id === "contact" && (
                <div className="os-vcard">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={PROFILE_IMAGE} alt="Nolan Hughes" className="os-avatar" />
                  <h2>Nolan Hughes</h2>
                  <p>Staff / Principal Frontend Engineer · Parrish, FL · Remote (US)</p>
                  <a className="os-vcard-btn" href={`mailto:${EMAIL}`}>✉ {EMAIL}</a>
                  <div className="os-vcard-rows">
                    <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">LinkedIn — /in/nolanhughes ↗</a>
                    <a href={GITHUB_URL} target="_blank" rel="noreferrer">GitHub — @nhugh406 ↗</a>
                    <Link href="/resume">Résumé — printable / PDF ↗</Link>
                  </div>
                  <p className="os-vcard-note">Fastest reply: email. I read everything, recruiters included.</p>
                </div>
              )}
            </div>
          </MotionDiv>
        ))}

        <p className="os-hint">Tip: every window drags by its title bar. Red dot closes — dock and desktop icons reopen.</p>
      </div>

      <nav className="os-dock" aria-label="Dock">
        {WINDOWS.map((w) => (
          <button
            key={w.id}
            className={`os-dock-item ${open[w.id] ? "os-dock-open" : ""}`}
            onClick={() => (open[w.id] ? focus(w.id) : openWin(w.id))}
            title={w.title}
          >
            <span>{w.icon}</span>
          </button>
        ))}
        <span className="os-dock-sep" />
        <a className="os-dock-item" href={`mailto:${EMAIL}`} title="Mail — nhugh406@gmail.com"><span>✉️</span></a>
        <Link className="os-dock-item" href="/resume" title="Resume.pdf"><span>📕</span></Link>
      </nav>
    </main>
  );
}
