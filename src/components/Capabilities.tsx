"use client";

import React from "react";
import { motion } from "framer-motion";

const capabilitiesList = [
  {
    title: "Interactive SaaS Dashboards",
    description:
      "High-performance client-facing platforms built with Next.js App Router, React Server Components, and modern state management. Powered by dynamic charts, interactive filters, and fluid transitions.",
  },
  {
    title: "Scalable APIs & Backend Services",
    description:
      "Secure, fast, and documented server-side architectures built on Node.js/TypeScript. Features rate-limiting, relational database integration (PostgreSQL/Supabase), and optimized query execution.",
  },
  {
    title: "Multi-Agent AI & LLM Systems",
    description:
      "Orchestrated multi-agent workflows using frameworks like LangGraph and CrewAI. Integrates advanced LLMs (Claude, GPT) to analyze raw data, automate operations, and generate reliable predictions.",
  },
  {
    title: "Real-time Synchronization",
    description:
      "Event-driven applications utilizing WebSockets, push notifications, and webhook handlers to keep user interfaces responsive and synchronized with server states in real time.",
  },
  {
    title: "Performance & SEO Optimization",
    description:
      "Fast, search-engine-friendly Progressive Web Apps (PWAs) with optimized image assets, server-side rendering (SSR), offline support, and high performance scores.",
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-20 px-6 sm:px-12 max-w-7xl mx-auto border-b border-editorial-border">
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* Left Side: Number & Header */}
        <div className="w-full lg:w-1/4 flex items-baseline gap-4 select-none">
          <span className="font-serif text-5xl sm:text-6xl font-black text-editorial-dark opacity-15">
            03
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-editorial-muted">
            What I Can Build
          </span>
        </div>

        {/* Right Side: Detailed List */}
        <div className="w-full lg:w-3/4 flex flex-col border-t border-editorial-border">
          {capabilitiesList.map((cap, idx) => (
            <motion.div
              key={idx}
              className="py-10 border-b border-editorial-border flex flex-col md:flex-row gap-6 md:gap-12 justify-between items-start"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: idx * 0.05 }}
            >
              {/* Capability Title */}
              <div className="md:w-1/3">
                <h3 className="font-serif text-2xl font-bold text-editorial-dark">
                  {cap.title}
                </h3>
              </div>

              {/* Description */}
              <div className="md:w-2/3 flex flex-col gap-3">
                <p className="font-sans text-sm sm:text-base text-editorial-muted leading-relaxed">
                  {cap.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
