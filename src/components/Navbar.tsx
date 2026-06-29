"use client";

import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full py-5 px-6 sm:px-12 border-b border-editorial-border bg-warm-bg sticky top-0 z-50 flex flex-col sm:flex-row justify-between items-center gap-4">
      {/* Left status badge */}
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse"></span>
        <span className="font-mono text-xs uppercase tracking-widest text-editorial-muted">
          Available for Work
        </span>
      </div>

      {/* Right navigation links and icons */}
      <div className="flex items-center gap-6 sm:gap-8 flex-wrap justify-center">
        <nav className="flex items-center gap-6 sm:gap-8 font-mono text-xs uppercase tracking-widest">
          <Link
            href="/#about"
            className="text-editorial-dark hover:text-editorial-muted transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-editorial-dark hover:text-editorial-muted transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Social Icons & Contact Button */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/shahmeer-irfan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-editorial-dark hover:text-editorial-muted transition-colors"
            aria-label="GitHub"
          >
            <svg
              className="w-4.5 h-4.5 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/shahmeer-irfan-423175301"
            target="_blank"
            rel="noopener noreferrer"
            className="text-editorial-dark hover:text-editorial-muted transition-colors"
            aria-label="LinkedIn"
          >
            <svg
              className="w-4.5 h-4.5 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path fillRule="evenodd" clipRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764 0-.973.784-1.763 1.75-1.763s1.75.79 1.75 1.763c0 .974-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <Link
            href="/contact"
            className="px-5 py-2.5 bg-[#4F5568] hover:bg-[#3B3F50] text-warm-bg text-[10px] font-mono uppercase tracking-widest flex items-center gap-2 transition-colors"
          >
            Contact Me <span className="text-xs">→</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
