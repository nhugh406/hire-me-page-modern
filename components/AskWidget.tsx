"use client";

import { useEffect, useRef, useState } from "react";

type Msg = { role: "user" | "assistant"; content: string; error?: boolean };

/** Starter quick questions: shown as chips on the first interaction, then
 *  relegated to the composer's quick-questions menu. */
const STARTER_CHIPS = [
  "What does he build at Demandbase?",
  "Show me the numbers",
  "What's on his GitHub?",
  "How do I hire him?",
];

const GREETING: Msg = {
  role: "assistant",
  content:
    "I'm Nolan's agent. Ask me anything about his work — Mojo, his numbers, his GitHub, his track record — or how to hire him.",
};

const MARKER = "[[FOLLOWUPS]]";

/** Split a finished reply into its answer text and the agent's follow-ups. */
function splitFollowups(full: string): { answer: string; followups: string[] } {
  const i = full.indexOf(MARKER);
  if (i === -1) return { answer: full.trim(), followups: [] };
  const answer = full.slice(0, i).trim();
  const followups = full
    .slice(i + MARKER.length)
    .split("\n")
    .map((s) => s.replace(/^[-•*\d.)\s]+/, "").replace(/^["']|["']$/g, "").trim())
    .filter((s) => s.length > 2 && s.length <= 80)
    .slice(0, 3);
  return { answer, followups };
}

/** What to show mid-stream: everything up to the marker (or a partial one). */
function visiblePart(acc: string): string {
  const i = acc.indexOf(MARKER);
  if (i !== -1) return acc.slice(0, i);
  for (let k = Math.min(MARKER.length - 1, acc.length); k > 0; k--) {
    if (acc.endsWith(MARKER.slice(0, k))) return acc.slice(0, acc.length - k);
  }
  return acc;
}

export default function AskWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([GREETING]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [draft, setDraft] = useState<string | null>(null);
  const [followups, setFollowups] = useState<string[] | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, busy, draft, followups, open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open ]);

  const pushMsg = (msg: Msg) => setMessages((m) => [...m, msg]);

  const send = async (text: string) => {
    const q = text.trim();
    if (!q || busy) return;
    const next: Msg[] = [...messages, { role: "user", content: q }];
    setMessages(next);
    setInput("");
    setMenuOpen(false);
    setBusy(true);
    setDraft(null);
    setFollowups(null);
    try {
      const r = await fetch("/api/ask", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ messages: next.map((m) => ({ role: m.role, content: m.content })) }),
      });

      const contentType = r.headers.get("content-type") || "";

      // JSON responses: config errors, upstream errors, and the rate-limit reply.
      if (!r.ok || contentType.includes("application/json") || !r.body) {
        const data = await r.json().catch(() => ({}));
        if (r.status === 503 || data?.error === "not_configured") {
          pushMsg({
            role: "assistant",
            error: true,
            content:
              "The agent isn't switched on yet — but Nolan is. Email him at nhugh406@gmail.com and he'll answer personally.",
          });
        } else if (typeof data?.reply === "string" && data.reply) {
          pushMsg({ role: "assistant", content: data.reply });
        } else {
          pushMsg({
            role: "assistant",
            error: true,
            content: "Something hiccuped on my end. Email Nolan at nhugh406@gmail.com — fastest route anyway.",
          });
        }
        return;
      }

      // Streaming plain-text reply: render tokens as they arrive.
      // The thinking animation gets a minimum on-screen beat (~0.9s) so it
      // actually registers before the first token lands.
      const reader = r.body.getReader();
      const decoder = new TextDecoder();
      const startedAt = Date.now();
      let acc = "";
      let revealed = false;
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        if (!revealed) {
          const wait = 900 - (Date.now() - startedAt);
          if (wait > 0) await new Promise((res) => setTimeout(res, wait));
          revealed = true;
        }
        setDraft(acc);
      }
      if (!revealed) setDraft(acc);
      const { answer, followups: fu } = splitFollowups(acc);
      setDraft(null);
      pushMsg({
        role: "assistant",
        content: answer || "I don't have that in his record — try me on Mojo, his numbers, or how to hire him.",
      });
      if (fu.length) setFollowups(fu);
    } catch {
      setDraft(null);
      pushMsg({
        role: "assistant",
        error: true,
        content: "Couldn't reach the agent just now. Email Nolan at nhugh406@gmail.com — fastest route anyway.",
      });
    } finally {
      setBusy(false);
    }
  };

  if (!open) {
    return (
      <button type="button" className="ask-fab" onClick={() => setOpen(true)} aria-label="Ask Nolan's agent">
        Ask ✦
      </button>
    );
  }

  const askedQuestions = new Set(
    messages.filter((m) => m.role === "user").map((m) => m.content.trim().toLowerCase())
  );
  const chipsToShow: string[] =
    followups ??
    STARTER_CHIPS.filter((c) => !askedQuestions.has(c.trim().toLowerCase()));

  return (
    <section className="ask-panel" aria-label="Ask Nolan's agent">
      <div className="ask-head">
        <div className="ask-head-title">
          Ask Nolan&apos;s Agent
          <span className="ask-head-sub">Answers from his record, his GitHub, and this page</span>
        </div>
        <button type="button" className="ask-close" onClick={() => setOpen(false)} aria-label="Close chat">
          ×
        </button>
      </div>

      <div className="ask-body" ref={bodyRef}>
        {messages.map((m, i) => (
          <div
            key={i}
            className={`ask-msg ${m.role === "user" ? "ask-msg-user" : m.error ? "ask-msg-error" : "ask-msg-agent"}`}
          >
            {m.content}
          </div>
        ))}
        {draft !== null && (
          <div className="ask-msg ask-msg-agent">
            {visiblePart(draft)}
            <span className="ask-cursor" aria-hidden="true" />
          </div>
        )}
        {busy && draft === null && (
          <div className="ask-thinking" role="status" aria-label="Agent is thinking">
            <span className="ask-blocks" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span className="ask-thinking-label">Agent at work</span>
          </div>
        )}
      </div>

      {chipsToShow.length > 0 && (
        <div className="ask-chips">
          {chipsToShow.map((c) => (
            <button key={c} type="button" className="ask-chip" onClick={() => send(c)} disabled={busy}>
              {c}
            </button>
          ))}
        </div>
      )}

      <form
        className="ask-inputrow"
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
      >
        <button
          type="button"
          className="ask-menu-btn"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Quick questions"
          aria-expanded={menuOpen}
          title="Quick questions"
        >
          ✦
        </button>
        <input
          ref={inputRef}
          className="ask-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about Nolan…"
          maxLength={600}
          aria-label="Ask about Nolan"
        />
        <button type="submit" className="ask-send" disabled={busy || !input.trim()}>
          Ask →
        </button>

        {menuOpen && (
          <div className="ask-menu" role="menu" aria-label="Quick questions">
            <p className="ask-menu-title">Quick questions</p>
            {STARTER_CHIPS.map((c) => (
              <button
                key={c}
                type="button"
                className="ask-menu-item"
                onClick={() => send(c)}
                disabled={busy}
              >
                {c}
              </button>
            ))}
          </div>
        )}
      </form>
    </section>
  );
}
