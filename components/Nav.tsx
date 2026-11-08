"use client";
import { EMAIL, LINKEDIN_URL, GITHUB_URL } from "@/constants/data";

export default function Nav() {
  return (
    <header className="nav">
      <a href="#top" className="nav-brand" aria-label="Nolan Hughes — home">
        <span className="nav-monogram">NH</span>
        <span className="nav-name">
          Nolan Hughes
          <small>Staff / Principal Frontend Engineer</small>
        </span>
      </a>
      <nav className="nav-links" aria-label="Sections">
        <a href="#spotlight">Mojo</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="/resume">Résumé</a>
      </nav>
      <div className="nav-actions">
        <a className="nav-icon" href={GITHUB_URL} target="_blank" rel="noreferrer" aria-label="GitHub">GH</a>
        <a className="nav-icon" href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
        <a className="btn btn-primary btn-sm" href={`mailto:${EMAIL}`}>Hire me →</a>
      </div>
    </header>
  );
}
