"use client";
import { motion } from "framer-motion";
import { HERO, EMAIL, LINKEDIN_URL, LOCATION, PROFILE_IMAGE } from "@/constants/data";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fade = (delay: number): any => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay },
});

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-glow hero-glow-a" />
      <div className="hero-glow hero-glow-b" />
      <div className="hero-grid-bg" />
      <div className="hero-inner">
        <div className="hero-copy">
          <motion.div {...fade(0)}>
            <span className="pill pill-live"><span className="dot" />{HERO.eyebrow} · {LOCATION}</span>
          </motion.div>
          <motion.h1 {...fade(0.08)}>
            {HERO.titleA} <span className="grad">{HERO.titleB}</span> {HERO.titleC}
          </motion.h1>
          <motion.div {...fade(0.18)}>
            <p className="hero-lede">{HERO.lede}</p>
          </motion.div>
          <motion.div {...fade(0.28)}>
            <div className="hero-ctas">
              <a className="btn btn-primary" href={`mailto:${EMAIL}`}>Let&apos;s talk →</a>
              <a className="btn btn-ghost" href={LINKEDIN_URL} target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="btn btn-ghost" href="/resume">Résumé</a>
            </div>
          </motion.div>
          <motion.div {...fade(0.38)}>
            <ul className="hero-proof">
              {HERO.proof.map((p) => (<li key={p}>✓ {p}</li>))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          style={{ position: "relative", maxWidth: 430, width: "100%", justifySelf: "end" }}
        >
          <div className="hero-portrait">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={PROFILE_IMAGE} alt="Nolan Hughes" />
            <div className="hero-portrait-plate">
              <strong>Nolan Hughes</strong>
              <span>Staff / Principal Frontend Engineer</span>
              <span className="plate-sub">AI-Driven UI · LLM &amp; MCP Agent Tooling</span>
            </div>
          </div>
          <div className="chip-pos chip-a">
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity }}>
              <div className="chip"><strong>Mojo</strong><span>Agentic AI workspace</span></div>
            </motion.div>
          </div>
          <div className="chip-pos chip-b">
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 6, repeat: Infinity, delay: 0.6 }}>
              <div className="chip"><strong>900+ files</strong><span>tests added / updated</span></div>
            </motion.div>
          </div>
          <div className="chip-pos chip-c">
            <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 5.5, repeat: Infinity, delay: 1.1 }}>
              <div className="chip"><strong>Canvases → Slides</strong><span>agent output, shipped</span></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
