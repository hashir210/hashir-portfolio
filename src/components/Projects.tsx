"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const leadProject = {
  title: "Sila",
  subtitle: "2026 • CURRENTLY BUILDING",
  category: "LEAD CASE",
  description:
    "A zero-commission Zakat directory connecting donors directly to verified families across Pakistan. Real need is checked through documents, then donors are routed to the family's WhatsApp and EasyPaisa — Sila holds no money and takes no cut.",
  tech: "NEXT.JS • TYPESCRIPT • TAILWIND • FRAMER MOTION",
  github: "https://github.com/hashir210",
  live: "https://example.com",
};

const otherProjects = [
  {
    title: "Ustaad AI",
    date: "2025",
    description:
      "A recruitment platform that connects Pakistan's blue-collar workers with employers. Smart job matching, escrow payments, ID and skills verification, plus a reputation system to keep both sides accountable. Built end-to-end solo.",
    tech: "NEXT.JS 16 • REACT 19 • TYPESCRIPT • POSTGRESQL",
    github: "https://github.com/hashir210",
    live: "https://example.com",
  },
  {
    title: "BAQI AI",
    date: "2026",
    description:
      "A multi-agent investment tool that reads raw bank transactions to figure out spending behaviour, then forecasts 21-day stock moves. Five AI agents extract behavioural signals; a machine-learning ensemble drives the predictions.",
    tech: "CREWAI • CLAUDE SONNET 3.5 • SCIKIT-LEARN",
    github: "https://github.com/hashir210",
    live: "https://example.com",
  },
  {
    title: "Waasta",
    date: "2025",
    description:
      "An AI emergency response system that dispatches Karachi ambulances in under 30 seconds. Understands Urdu speech, triages with an LLM, and broadcasts to nearby responders in real time.",
    tech: "LANGGRAPH • GROQ WHISPER • LLAMA 3.3 70B • WEB RTC",
    github: "https://github.com/hashir210",
    live: "https://example.com",
  },
  {
    title: "FastSwype",
    date: "2025",
    description:
      "A Tinder-style PWA for FAST University students to connect by skills, campus, and city. Hit 3,000+ views in week one and 100+ monthly active users at launch.",
    tech: "NEXT.JS 16 • REACT 19 • SUPABASE • FIREBASE FCM",
    github: "https://github.com/hashir210",
    live: "https://example.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 sm:px-12 max-w-7xl mx-auto border-b border-editorial-border">
      {/* Top Header Row */}
      <div className="flex justify-between items-center pb-4 border-b border-editorial-border font-mono text-[10px] uppercase tracking-widest text-editorial-muted mb-12">
        <span>Recent Shipped Work</span>
        <span>05 Projects</span>
      </div>

      {/* 1. Lead Project (Sila) - Fullscreen/Full-width Layout */}
      <motion.div
        className="border border-editorial-border p-6 sm:p-8 bg-[#FAF8F5] flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ y: -4, transition: { duration: 0.2 } }}
      >
        {/* Left: Mockup Placeholder */}
        <div className="flex-[3] min-h-[260px] sm:min-h-[360px] bg-[#ECE7E1] border border-dashed border-[#D5CDC3] flex flex-col items-center justify-center text-editorial-muted gap-2 text-xs font-mono p-4">
          <svg className="w-8 h-8 opacity-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span>[Sila Project Screenshot Space]</span>
        </div>

        {/* Right: Sila Info */}
        <div className="flex-[2] flex flex-col justify-between py-2">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-editorial-muted mb-3">
              {leadProject.category}
            </div>
            <h3 className="font-serif text-4xl sm:text-5xl font-bold text-editorial-dark mb-2">
              {leadProject.title}
            </h3>
            <div className="font-mono text-[9px] uppercase tracking-widest text-editorial-muted mb-6">
              {leadProject.subtitle}
            </div>
            <p className="font-sans text-sm sm:text-base text-editorial-muted leading-relaxed mb-6">
              {leadProject.description}
            </p>
          </div>

          <div className="border-t border-editorial-border/60 pt-6">
            <div className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-editorial-dark mb-6">
              {leadProject.tech}
            </div>
            {/* Sila Action Links */}
            <div className="flex items-center gap-6 font-mono text-xs uppercase tracking-widest">
              <a
                href={leadProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-editorial-dark hover:text-editorial-muted flex items-center gap-1 transition-colors"
              >
                View Code <span className="text-[10px]">→</span>
              </a>
              <a
                href={leadProject.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-editorial-dark hover:text-editorial-muted flex items-center gap-1 transition-colors"
              >
                View Project <span className="text-[10px]">→</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 2. Grid of other 4 projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {otherProjects.map((project, idx) => (
          <motion.div
            key={project.title}
            className="border border-editorial-border p-5 bg-[#FAF8F5] flex flex-col justify-between"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <div>
              {/* Project Card Mockup Space */}
              <div className="aspect-[4/3] w-full bg-[#ECE7E1] border border-dashed border-[#D5CDC3] flex flex-col items-center justify-center text-editorial-muted gap-1 text-[10px] font-mono p-2 mb-4">
                <svg className="w-6 h-6 opacity-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>[mockup space]</span>
              </div>

              {/* Title & Date */}
              <div className="flex justify-between items-baseline mb-3 gap-2">
                <h4 className="font-serif text-xl font-bold text-editorial-dark">
                  {project.title}
                </h4>
                <span className="font-mono text-[10px] text-editorial-muted">
                  {project.date}
                </span>
              </div>

              {/* Description */}
              <p className="font-sans text-xs text-editorial-muted leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            <div>
              {/* Tech list */}
              <div className="font-mono text-[9px] uppercase tracking-wider text-editorial-muted mb-4 border-t border-editorial-border/40 pt-4">
                {project.tech}
              </div>

              {/* Button Links Row */}
              <div className="flex items-center gap-2">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-editorial-border hover:bg-editorial-dark hover:text-warm-bg text-editorial-muted rounded-sm transition-all flex items-center justify-center cursor-pointer"
                  aria-label="Live Demo"
                >
                  <ArrowUpRight size={12} />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-editorial-border hover:bg-editorial-dark hover:text-warm-bg text-editorial-muted rounded-sm transition-all flex items-center justify-center cursor-pointer"
                  aria-label="GitHub Code"
                >
                  <svg
                    className="w-3 h-3 fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
