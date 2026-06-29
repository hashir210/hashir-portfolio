"use client";

import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="py-16 sm:py-24 px-6 sm:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 border-b border-editorial-border"
    >
      {/* Left Column: Headline, Stats, CTAs */}
      <div className="flex-1 flex flex-col max-w-2xl">
        {/* Editorial Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] text-editorial-dark mb-6">
          I build full-stack systems that hold up in production.
        </h1>

        {/* Headline Subtitle */}
        <p className="font-sans text-sm sm:text-base text-editorial-muted leading-relaxed mb-10 max-w-lg">
          I am Shahmeer Irfan, a Software Engineer focusing on backend architecture, database reliability, and responsive client interfaces.
        </p>

        {/* Stats Table (Bordered Grid) */}
        <div className="border-t border-editorial-border mb-10 flex flex-col font-mono text-xs tracking-wider">
          <div className="py-4 border-b border-editorial-border flex justify-between items-center">
            <span className="uppercase text-editorial-dark font-bold">3+ Years</span>
            <span className="uppercase text-editorial-muted">in software development</span>
          </div>
          <div className="py-4 border-b border-editorial-border flex justify-between items-center">
            <span className="uppercase text-editorial-dark font-bold">20+ Projects</span>
            <span className="uppercase text-editorial-muted">delivered to production</span>
          </div>
          <div className="py-4 border-b border-editorial-border flex justify-between items-center">
            <span className="uppercase text-editorial-dark font-bold">100% Client</span>
            <span className="uppercase text-editorial-muted">satisfaction rate</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="px-8 py-4 bg-[#4F5568] hover:bg-[#3B3F50] text-warm-bg text-xs font-mono uppercase tracking-widest text-center transition-colors"
          >
            Contact me
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-editorial-dark hover:bg-editorial-dark/5 text-editorial-dark text-xs font-mono uppercase tracking-widest text-center transition-all"
          >
            Read my resume
          </a>
        </div>
      </div>

      {/* Right Column: Polaroid Image Placeholder (Empty as requested) */}
      <div className="w-full sm:w-[380px] flex justify-center items-center lg:self-start">
        <div className="w-full bg-[#FAF8F5] border border-editorial-border shadow-xl p-5 pb-8 rotate-2 hover:rotate-0 transition-transform duration-300 flex flex-col gap-4 select-none">
          {/* Polaroid Image Space (Empty styled block) */}
          <div className="aspect-[4/3] w-full bg-[#ECE7E1] border border-dashed border-[#D5CDC3] flex flex-col items-center justify-center text-editorial-muted gap-2 text-xs font-mono p-4">
            <svg
              className="w-8 h-8 opacity-40"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>[photo space]</span>
          </div>

          {/* Cursive / Cursive-sans caption */}
          <div className="text-center font-serif italic text-editorial-muted text-sm mt-2">
            me in my workspace
          </div>
        </div>
      </div>
    </section>
  );
}
