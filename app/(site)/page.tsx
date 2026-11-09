import Link from "next/link";
import { EMAIL, GITHUB_URL, LINKEDIN_URL, PROFILE_IMAGE } from "@/constants/data";

/**
 * CONCEPT: The Thread — the whole portfolio is one text conversation.
 * A hiring manager asks; Nolan answers. Every section is a message.
 */

function In({ children, label }: { children: React.ReactNode; label?: boolean }) {
  return (
    <div className="th-row th-row-in">
      <span className="th-avatar th-avatar-hm">HM</span>
      <div className="th-stack">
        {label ? <span className="th-sender">Hiring Manager</span> : null}
        <div className="th-bubble th-bubble-in">{children}</div>
      </div>
    </div>
  );
}

function Out({ children, react }: { children: React.ReactNode; react?: string }) {
  return (
    <div className="th-row th-row-out">
      <div className="th-stack th-stack-out">
        <div className="th-bubble th-bubble-out">{children}</div>
        {react ? <span className="th-react">{react}</span> : null}
      </div>
    </div>
  );
}

function Card({ title, sub, children, href }: { title: string; sub: string; children?: React.ReactNode; href?: string }) {
  const inner = (
    <>
      <span className="th-card-kicker">{sub}</span>
      <strong className="th-card-title">{title}</strong>
      {children}
    </>
  );
  return href ? (
    <a className="th-card" href={href} target="_blank" rel="noreferrer">{inner}</a>
  ) : (
    <div className="th-card">{inner}</div>
  );
}

export default function Home() {
  return (
    <main className="th">
      <header className="th-header">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={PROFILE_IMAGE} alt="Nolan Hughes" className="th-header-avatar" />
        <div className="th-header-meta">
          <strong>Nolan Hughes</strong>
          <span><i className="th-dot" /> Staff / Principal Frontend Engineer · usually replies fast</span>
        </div>
        <div className="th-header-actions">
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" title="LinkedIn">in</a>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" title="GitHub">gh</a>
          <Link href="/resume" title="Résumé">cv</Link>
        </div>
      </header>

      <div className="th-thread">
        <p className="th-divider">Today · The whole portfolio, as one conversation</p>

        <In label>Hi! We&apos;re hiring a Staff Frontend Engineer and your name came up. Mind if I ask a few things?</In>
        <Out>Please do. Short version first: I&apos;m Nolan — 10+ years of frontend, currently a core engineer on <strong>Mojo</strong> at Demandbase, where people and AI agents work in the same workspace. I build the interfaces they share.</Out>

        <In>What does that actually look like day to day?</In>
        <Out>
          The agent writes and publishes <strong>live, interactive dashboards</strong> — called Canvases. That pipeline is mine end to end: self-repair when generation breaks, recovery when a data source changes shape, sharing, version history…
        </Out>
        <Out>
          <Card title="Canvas → Google Slides" sub="SHIPPED · MOJO">
            <span className="th-card-text">One click turns an agent-built canvas into a deck. Recruiters love this one; sales teams love it more.</span>
          </Card>
        </Out>
        <Out>There&apos;s also a whole Apps layer — apps that open in windows inside the product. I led the UI/UX improvement pass on it: the catalog, how windows open and move, how apps notify. Plus real-time collaboration (shared chats, presence, project rooms) and live voice conversations with the agent.</Out>
        <Out>
          <span className="th-voice">
            <span className="th-voice-play">▶</span>
            <span className="th-voice-bars">{[10, 18, 8, 22, 14, 26, 12, 20, 9, 16, 24, 11, 19, 7, 15, 21, 10, 17].map((h, i) => (<i key={i} style={{ height: h }} />))}</span>
            <span className="th-voice-time">0:42</span>
          </span>
          <span className="th-voice-cap">Yes — actual voice. I helped build the live-voice layer, so the demo is the job.</span>
        </Out>

        <In>Okay, that&apos;s the fun stuff. What about the unglamorous parts?</In>
        <Out react="❤️">Fair question — that&apos;s where I live. LLM reliability in production: recovering from corrupted tool-call history, keeping tool references alive across long conversations, escalating to a stronger model when a build task needs it, fixing the crashes nobody else wanted. Agentic products survive on this layer.</Out>

        <In>Got receipts?</In>
        <Out>
          <span className="th-stats">
            <span><strong>~290</strong> tickets shipped in 18 months, across <strong>10+ codebases</strong></span>
            <span><strong>900+</strong> files with tests added or updated</span>
            <span><strong>~80</strong> merge requests reviewed in a single 5-week span</span>
            <span><strong>~30</strong> architecture docs written or co-written</span>
            <span><strong>~90</strong> engineers shipping in my Nx monorepo</span>
          </span>
        </Out>

        <In>And before Demandbase?</In>
        <Out>
          <span className="th-roles">
            <span><strong>Planet Depos</strong> — founding frontend engineer. First hire, set the standards, built Vue 3 systems for legal workflows. Cut rework 80%.</span>
            <span><strong>Newfold Digital</strong> — Principal Engineer. React design system adopted across business units; micro frontends via Module Federation.</span>
            <span><strong>Benefit Allocation Systems</strong> — analyst → director. Grew into leading a team of 12 on enterprise benefits software.</span>
          </span>
        </Out>

        <In>Do you build anything for fun?</In>
        <Out>
          <Card title="AI Finance Forecaster" sub="SIDE PROJECT · NEXT.JS + CLAUDE API" href={GITHUB_URL}>
            <span className="th-card-text">Feeds bank exports to Claude, predicts future balances. Structured-output prompt pipelines, not vibes.</span>
          </Card>
        </Out>
        <Out>
          <Card title="Open source on GitHub" sub="@NHUGH406" href={GITHUB_URL}>
            <span className="th-card-text">notesmith (notes app, Supabase realtime) · HelixSuite · gralena · realtime-chat — all public, all TypeScript.</span>
          </Card>
        </Out>

        <In>Stack, quickly?</In>
        <Out>
          <span className="th-stack-list">
            React · TypeScript · Next.js · Vue 3<br />
            Micro frontends · Nx · Module Federation · Design systems<br />
            LLM integration · MCP tooling · Generative UI<br />
            Playwright · Jest · CI/CD · WebSockets · Temporal · Python (enough to be dangerous)
          </span>
        </Out>

        <In>Last one — why you, over the other Staff candidates?</In>
        <Out>Because I&apos;ve already shipped the thing most teams are about to attempt: real product where an AI agent does work next to humans — with the reliability scars to prove it. And I&apos;ve sat in both chairs: I led a team of 12 before going back to deep IC work. Depth is my home base — leadership&apos;s in range when a role calls for it.</Out>

        <In>When can you start the conversation?</In>
        <Out>
          <span className="th-contact">
            <strong>Right now works.</strong>
            <span>Email is fastest — I read everything, recruiters included.</span>
            <span className="th-contact-btns">
              <a href={`mailto:${EMAIL}`}>✉ {EMAIL}</a>
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <Link href="/resume">Résumé ↗</Link>
            </span>
          </span>
        </Out>
        <p className="th-receipt">Delivered · Read</p>
      </div>

      <div className="th-inputbar" aria-hidden="true">
        <span className="th-input-plus">+</span>
        <a className="th-input-field" href={`mailto:${EMAIL}`}>Say the word — I&apos;ll send the résumé</a>
        <a className="th-input-send" href={`mailto:${EMAIL}`}>↑</a>
      </div>

      <p className="th-foot">Portfolio of Nolan Hughes · Parrish, FL · Remote (US) · This page is a concept — the live site may differ</p>
    </main>
  );
}
