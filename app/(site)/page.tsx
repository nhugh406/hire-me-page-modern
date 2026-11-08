"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { EMAIL, PROFILE_IMAGE } from "@/constants/data";

/**
 * CONCEPT: Agent-First — there is no page. There's an agent.
 * Visitors interview Nolan's AI rep (Claude, fed only his record).
 */

type Msg = { role: "user" | "assistant"; content: string };

const STARTER_CHIPS = [
  "What is he building at Demandbase?",
  "Show me the numbers",
  "Why is he still an IC?",
  "Side projects?",
  "How do I hire him?",
];

const FOLLOWUPS = [
  "Tell me about Canvases",
  "What about the Apps layer?",
  "What's his stack?",
  "Where else has he worked?",
  "How do I hire him?",
];

const GREETING =
  "Hi — I'm Nolan's agent. Not a chatbot demo bolted onto a portfolio; I *am* the portfolio. Everything I know is his actual record: Mojo at Demandbase, the numbers, the side projects. Ask me anything a hiring manager would — or tap a question below.";

export default function Home() {
  const [msgs, setMsgs] = useState<Msg[]>([{ role: "assistant", content: GREETING }]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [asked, setAsked] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs, busy]);

  async function ask(text: string) {
    const q = text.trim();
    if (!q || busy) return;
    const next: Msg[] = [...msgs, { role: "user", content: q }];
    setMsgs(next);
    setInput("");
    setBusy(true);
    try {
      const r = await fetch("/api/ask", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await r.json().catch(() => ({}));
      const reply =
        typeof data?.reply === "string" && data.reply
          ? data.reply
          : `My line to the model just dropped — but Nolan's never does. Email him directly: ${EMAIL}.`;
      setMsgs([...next, { role: "assistant", content: reply }]);
    } catch {
      setMsgs([
        ...next,
        { role: "assistant", content: `Connection hiccup on my end. The human is more reliable: ${EMAIL}.` },
      ]);
    } finally {
      setBusy(false);
      setAsked((n) => n + 1);
      inputRef.current?.focus();
    }
  }

  const chips = asked === 0 ? STARTER_CHIPS : FOLLOWUPS.filter((c) => c !== "How do I hire him?").concat("How do I hire him?");

  return (
    <main className="ag">
      <header className="ag-header">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={PROFILE_IMAGE} alt="Nolan Hughes" className="ag-avatar" />
        <div className="ag-header-meta">
          <strong>Nolan&apos;s Agent</strong>
          <span><i className="ag-dot" /> Live · Claude, briefed on one engineer</span>
        </div>
        <nav className="ag-header-links">
          <Link href="/resume">Résumé</Link>
          <a href={`mailto:${EMAIL}`}>Email the human</a>
        </nav>
      </header>

      <div className="ag-scroll" ref={scrollRef}>
        <div className="ag-thread">
          <p className="ag-preamble">
            <strong>No hero section. No scroll.</strong> Nolan builds interfaces where people work with AI
            agents — so his portfolio skips the brochure and hands you the agent. Interview it.
          </p>
          {msgs.map((m, i) =>
            m.role === "assistant" ? (
              <div className="ag-row ag-row-agent" key={i}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={PROFILE_IMAGE} alt="" className="ag-row-avatar" />
                <div className="ag-bubble ag-bubble-agent">
                  {m.content.split("\n").map((line, j) => (
                    <p key={j}>{line.replaceAll("*", "")}</p>
                  ))}
                </div>
              </div>
            ) : (
              <div className="ag-row ag-row-user" key={i}>
                <div className="ag-bubble ag-bubble-user">{m.content}</div>
              </div>
            )
          )}
          {busy ? (
            <div className="ag-row ag-row-agent">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={PROFILE_IMAGE} alt="" className="ag-row-avatar" />
              <div className="ag-bubble ag-bubble-agent ag-typing"><span /><span /><span /></div>
            </div>
          ) : null}
          {!busy ? (
            <div className="ag-chips">
              {chips.map((c) => (
                <button key={c} onClick={() => ask(c)}>{c}</button>
              ))}
            </div>
          ) : null}
        </div>
      </div>

      <form
        className="ag-composer"
        onSubmit={(e) => {
          e.preventDefault();
          ask(input);
        }}
      >
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about Mojo, his numbers, his stack…"
          maxLength={600}
          aria-label="Ask Nolan's agent"
        />
        <button type="submit" disabled={busy || !input.trim()} aria-label="Send">↑</button>
      </form>
      <p className="ag-foot">
        This agent runs on Claude with Nolan&apos;s résumé as its only source. It can&apos;t negotiate salary — that&apos;s above its pay grade. · Parrish, FL · Remote (US)
      </p>
    </main>
  );
}
