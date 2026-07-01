"use client";

import React from "react";
import { Mail, Phone, FileText } from "lucide-react";

export default function ContactBanner() {
  return (
    <section className="py-24 px-6 sm:px-12 max-w-7xl mx-auto text-center border-t border-editorial-border bg-warm-bg">
      {/* Subheading */}
      <span className="font-mono text-[10px] uppercase tracking-widest text-editorial-muted mb-6 block">
        Get in touch
      </span>

      {/* Main Serif Headline */}
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-editorial-dark mb-4">
        Want to ship something real?
      </h2>

      {/* Description */}
      <p className="font-serif italic text-sm sm:text-base text-editorial-muted mb-8">
        Open for freelance work and full-time roles. Reply within 24 hours.
      </p>

      {/* Email Link */}
      <a
        href="mailto:hashir284284@gmail.com"
        className="font-serif text-lg sm:text-2xl font-bold text-editorial-dark hover:underline mb-12 block"
      >
        hashir284284@gmail.com
      </a>

      {/* Action Buttons Row 1 */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
        <a
          href="https://wa.me/923434569199"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto px-8 py-3.5 bg-[#67728B] hover:bg-[#535C71] text-warm-bg text-[10px] font-mono uppercase tracking-widest flex items-center justify-center gap-2 transition-colors rounded-sm"
        >
          <Phone size={12} />
          WhatsApp
        </a>
        <a
          href="mailto:hashir284284@gmail.com"
          className="w-full sm:w-auto px-8 py-3.5 border border-editorial-border hover:bg-editorial-dark/5 text-editorial-dark text-[10px] font-mono uppercase tracking-widest flex items-center justify-center gap-2 transition-all rounded-sm"
        >
          <Mail size={12} />
          Email
        </a>
        <a
          href="#"
          className="w-full sm:w-auto px-8 py-3.5 border border-editorial-border hover:bg-editorial-dark/5 text-editorial-dark text-[10px] font-mono uppercase tracking-widest flex items-center justify-center gap-2 transition-all rounded-sm"
        >
          <FileText size={12} />
          Resume
        </a>
      </div>

      {/* Action Buttons Row 2: Github / LinkedIn Icons */}
      <div className="flex justify-center items-center gap-4 mb-16">
        <a
          href="https://github.com/hashir210"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 border border-editorial-border hover:bg-editorial-dark/5 text-editorial-dark rounded-sm transition-all flex items-center justify-center"
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
          className="p-3 border border-editorial-border hover:bg-editorial-dark/5 text-editorial-dark rounded-sm transition-all flex items-center justify-center"
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
      </div>

      {/* Footer Divider & Signature */}
      <div className="w-full h-[1px] bg-editorial-border mb-12" />
      <div className="w-full text-center font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-editorial-muted">
        Muhammad Hashir &bull; Full Stack Engineer &bull; &copy; {new Date().getFullYear()}
      </div>
    </section>
  );
}
