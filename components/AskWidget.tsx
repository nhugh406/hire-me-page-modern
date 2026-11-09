"use client";

import { useEffect, useRef, useState } from "react";

type Msg = { role: "user" | "assistant"; content: string; error?: boolean };

const CHIPS = [
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

export default function AskWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([GREETING]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, busy, open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open ]);

  const send = async (text: string) => {
    const q = text.trim();
    if (!q || busy) return;
    const next: Msg[] = [...messages, { role: "user", content: q }];
    setMessages(next);
    setInput("");
    setBusy(true);
    try {
      const r = await fetch("/api/ask", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ messages: next.map((m) => ({ role: m.role, content: m.content })) }),
      });
      const data = await r.json().catch(() => ({}));
      if (r.status === 503 || data?.error === "not_configured") {
        setMessages((m) => [
          ...m,
          {
            role: "assistant",
            error: true,
            content:
              "The agent isn't switched on yet — but Nolan is. Email him at nhugh406@gmail.com and he'll answer personally.",
          },
        ]);
      } else if (typeof data?.reply === "string" && data.reply) {
        setMessages((m) => [...m, { role: "assistant", content: data.reply }]);
      } else {
        setMessages((m) => [
          ...m,
          {
            role: "assistant",
            error: true,
            content: "Something hiccuped on my end. Email Nolan at nhugh406@gmail.com — fastest route anyway.",
          },
        ]);
      }
    } catch {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          error: true,
          content: "Couldn't reach the agent just now. Email Nolan at nhugh406@gmail.com — fastest route anyway.",
        },
      ]);
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
        {busy && <div className="ask-typing">agent is typing…</div>}
      </div>

      <div className="ask-chips">
        {CHIPS.map((c) => (
          <button key={c} type="button" className="ask-chip" onClick={() => send(c)} disabled={busy}>
            {c}
          </button>
        ))}
      </div>

      <form
        className="ask-inputrow"
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
      >
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
      </form>
    </section>
  );
}
