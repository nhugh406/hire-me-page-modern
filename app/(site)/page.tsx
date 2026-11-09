"use client";

import { useEffect, useRef, useState } from "react";
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
  { label: "tickets_shipped", detail: "~290 · 10+ codebases · 18 mo", pct: 92 },
  { label: "tests_touched", detail: "900+ files with tests", pct: 97 },
  { label: "merge_requests_reviewed", detail: "~80 in 5 weeks", pct: 78 },
  { label: "architecture_docs", detail: "~30 written", pct: 64 },
  { label: "monorepo_contributors", detail: "~90 engineers", pct: 84 },
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

function useHomeClock() {
  const [parts, setParts] = useState({ time: "", date: "" });
  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setParts({
        time: d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" }).replace(/\s?[AP]M/i, ""),
        date: d.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" }),
      });
    };
    tick();
    const t = setInterval(tick, 20000);
    return () => clearInterval(t);
  }, []);
  return parts;
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 900px)");
    const apply = () => setIsMobile(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);
  return isMobile;
}

export default function Home() {
  const clock = useClock();
  const homeClock = useHomeClock();
  const isMobile = useIsMobile();
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
  const [pos, setPos] = useState<Partial<Record<WinId, { x: number; y: number }>>>({});
  const dragRef = useRef<{ id: WinId; startX: number; startY: number; baseX: number; baseY: number } | null>(null);
  const [mobileActive, setMobileActive] = useState<WinId | null>(null);
  const [switcherOpen, setSwitcherOpen] = useState(false);

  const focus = (id: WinId) => setOrder((o) => [...o.filter((w) => w !== id), id]);
  const openWin = (id: WinId) => {
    setOpen((s) => ({ ...s, [id]: true }));
    focus(id);
    if (isMobile) {
      setMobileActive(id);
      setSwitcherOpen(false);
    }
  };
  const closeWin = (id: WinId) => {
    setOpen((s) => ({ ...s, [id]: false }));
    if (mobileActive === id) setMobileActive(null);
  };
  const goHome = () => {
    setMobileActive(null);
    setSwitcherOpen(false);
  };
  const zOf = (id: WinId) => 10 + order.indexOf(id);

  // Desktop dragging lives on the title bar only, via pointer events — the
  // window body keeps normal behavior, so content scrolls instead of dragging.
  const onTitlePointerDown = (id: WinId) => (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== undefined && e.button !== 0) return;
    if ((e.target as HTMLElement).closest("button")) return; // let the close light click
    focus(id);
    const base = pos[id] ?? { x: 0, y: 0 };
    dragRef.current = { id, startX: e.clientX, startY: e.clientY, baseX: base.x, baseY: base.y };
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onTitlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const d = dragRef.current;
    if (!d) return;
    const maxX = window.innerWidth - 160;
    const maxY = window.innerHeight - 120;
    const x = Math.min(Math.max(d.baseX + (e.clientX - d.startX), -560), maxX);
    const y = Math.min(Math.max(d.baseY + (e.clientY - d.startY), -80), maxY);
    setPos((p) => ({ ...p, [d.id]: { x, y } }));
  };
  const onTitlePointerUp = () => {
    dragRef.current = null;
  };

  const renderBody = (id: WinId) => (
    <>
      {id === "readme" && (
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

      {id === "mojo" && (
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

      {id === "monitor" && (
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
          <p className="os-monitor-foot">Uptime: 10+ years. Still shipping.</p>
        </div>
      )}

      {id === "experience" && (
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

      {id === "projects" && (
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

      {id === "skills" && (
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

      {id === "contact" && (
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
    </>
  );

  const menuBar = (
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
  );

  /* ================= Mobile: a phone OS ================= */
  if (isMobile) {
    const activeWin = WINDOWS.find((w) => w.id === mobileActive);
    const recentOpen = [...order].reverse().filter((id) => open[id]);
    return (
      <main className="os os-mobile">
        {menuBar}

        {mobileActive === null && !switcherOpen && (
          <div className="os-home">
            <div className="os-home-clock">
              <span className="os-home-date">{homeClock.date}</span>
              <span className="os-home-time">{homeClock.time}</span>
              <span className="os-home-tag">NolanOS, pocket edition. Every app below is a piece of the portfolio — tap one.</span>
            </div>
            <div className="os-appgrid">
              {WINDOWS.map((w) => (
                <button key={w.id} className="os-appicon" onClick={() => openWin(w.id)}>
                  <span className="os-appicon-glyph">{w.icon}</span>
                  <span className="os-appicon-label">{w.title.split(" — ")[0]}</span>
                  {open[w.id] && <span className="os-appicon-dot" />}
                </button>
              ))}
              <Link className="os-appicon" href="/resume">
                <span className="os-appicon-glyph">📕</span>
                <span className="os-appicon-label">Resume.pdf</span>
              </Link>
            </div>
            <p className="os-home-note">Apps stay open in the background — hit ⧉ in the dock (or inside any app) to multitask between them.</p>
          </div>
        )}

        {activeWin && !switcherOpen && (
          <section className="os-appview" aria-label={activeWin.title}>
            <div className="os-appbar">
              <button className="os-appbar-btn" onClick={goHome}>‹ Home</button>
              <span className="os-appbar-title">{activeWin.icon} {activeWin.title.split(" — ")[0]}</span>
              <button className="os-appbar-btn" onClick={() => setSwitcherOpen(true)} aria-label="App switcher">⧉</button>
            </div>
            <div className="os-body os-appbody">{renderBody(activeWin.id)}</div>
            <button className="os-homebar" onClick={goHome} aria-label="Go home"><span /></button>
          </section>
        )}

        {switcherOpen && (
          <div className="os-switcher">
            <div className="os-switcher-head">
              <h2>Open apps</h2>
              <button className="os-appbar-btn" onClick={() => setSwitcherOpen(false)}>Done</button>
            </div>
            {recentOpen.length === 0 && (
              <p className="os-switcher-empty">Nothing running. Head home and tap an icon to launch an app.</p>
            )}
            <div className="os-switcher-grid">
              {recentOpen.map((id) => {
                const w = WINDOWS.find((x) => x.id === id)!;
                return (
                  <div className="os-switcher-card" key={id}>
                    <button className="os-switcher-main" onClick={() => openWin(id)}>
                      <span className="os-switcher-glyph">{w.icon}</span>
                      <span className="os-switcher-title">{w.title}</span>
                      <span className="os-switcher-sub">Tap to jump back in</span>
                    </button>
                    <button
                      className="os-switcher-close"
                      aria-label={`Close ${w.title}`}
                      onClick={() => closeWin(id)}
                    >×</button>
                  </div>
                );
              })}
            </div>
            <button className="os-homebar" onClick={goHome} aria-label="Go home"><span /></button>
          </div>
        )}

        {mobileActive === null && !switcherOpen && (
          <nav className="os-dock os-dock-mobile" aria-label="Dock">
            {(["readme", "mojo", "projects", "contact"] as WinId[]).map((id) => {
              const w = WINDOWS.find((x) => x.id === id)!;
              return (
                <button key={id} className={`os-dock-item ${open[id] ? "os-dock-open" : ""}`} onClick={() => openWin(id)} title={w.title}>
                  <span>{w.icon}</span>
                </button>
              );
            })}
            <span className="os-dock-sep" />
            <button className="os-dock-item" onClick={() => setSwitcherOpen(true)} title="App switcher">
              <span>⧉</span>
            </button>
          </nav>
        )}
      </main>
    );
  }

  /* ================= Desktop: the windowed OS ================= */
  return (
    <main className="os">
      {menuBar}

      <div className="os-desktop" ref={desktopRef}>
        <p className="os-wallpaper-title">
          The desktop is the demo.
          <span>I build windowing workspaces for people &amp; AI agents — so my portfolio is one. Poke around: windows drag by their title bars on desktop, and stack like apps on mobile. Close things freely — the dock brings them back.</span>
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
          <div
            key={w.id}
            data-win={w.id}
            className={`os-window ${w.cls} ${order[order.length - 1] === w.id ? "os-window-active" : ""}`}
            style={{
              zIndex: zOf(w.id),
              transform: pos[w.id] ? `translate(${pos[w.id]!.x}px, ${pos[w.id]!.y}px)` : undefined,
            }}
            onPointerDown={() => focus(w.id)}
          >
            <div
              className="os-titlebar"
              onPointerDown={onTitlePointerDown(w.id)}
              onPointerMove={onTitlePointerMove}
              onPointerUp={onTitlePointerUp}
              onPointerCancel={onTitlePointerUp}
            >
              <span className="os-lights">
                <button aria-label={`Close ${w.title}`} className="os-light os-light-close" onClick={() => closeWin(w.id)}>×</button>
                <span className="os-light os-light-min" />
                <span className="os-light os-light-max" />
              </span>
              <span className="os-title">{w.icon} {w.title}</span>
            </div>
            <div className="os-body">{renderBody(w.id)}</div>
          </div>
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
