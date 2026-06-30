"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="py-20 px-6 sm:px-12 max-w-7xl mx-auto flex flex-col items-center justify-center gap-12 bg-warm-bg select-none">
      {/* Editorial Quote Block */}
      <div className="max-w-4xl text-center flex flex-col gap-6">
        <blockquote className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-editorial-dark font-medium leading-relaxed">
          &ldquo;If you&apos;ve got a full-stack idea that needs to stop being a slide deck and start being a thing your customers actually use, that&apos;s the part I love most.&rdquo;
        </blockquote>
        <cite className="font-serif text-sm sm:text-base text-editorial-muted not-italic block mt-2">
          &mdash; Muhammad Hashir
        </cite>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-editorial-border" />

      {/* Bottom Credits Strip */}
      <div className="w-full text-center font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-editorial-muted">
        Muhammad Hashir &bull; Full Stack Engineer &bull; &copy; {new Date().getFullYear()}
      </div>
    </footer>
  );
}
