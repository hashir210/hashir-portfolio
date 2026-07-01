"use client";

import React, { useState } from "react";
import { Mail, Phone, FileText, Copy, Check, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const contactItems = [
    {
      label: "Email",
      value: "hashir284284@gmail.com",
      href: "mailto:hashir284284@gmail.com",
      icon: <Mail size={18} />,
      copyable: true,
    },
    {
      label: "Phone",
      value: "+923434569199",
      href: "tel:+923434569199",
      icon: <Phone size={18} />,
      copyable: true,
    },
    {
      label: "LinkedIn",
      value: "www.linkedin.com/in/shahmeer-irfan-423175301",
      href: "https://www.linkedin.com/in/shahmeer-irfan-423175301",
      icon: (
        <svg
          className="w-[18px] h-[18px] fill-current"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path fillRule="evenodd" clipRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764 0-.973.784-1.763 1.75-1.763s1.75.79 1.75 1.763c0 .974-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      copyable: false,
    },
    {
      label: "GitHub",
      value: "github.com/shahmeer-irfan",
      href: "https://github.com/shahmeer-irfan",
      icon: (
        <svg
          className="w-[18px] h-[18px] fill-current"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
      ),
      copyable: false,
    },
    {
      label: "Resume",
      value: "Resume",
      href: "#",
      icon: <FileText size={18} />,
      copyable: false,
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 sm:px-12 max-w-7xl mx-auto border-b border-editorial-border">
      {/* Contact Section Top Header */}
      <div className="flex justify-between items-center pb-4 border-b border-editorial-border font-mono text-xs uppercase tracking-widest text-editorial-muted mb-12">
        <span>Contact</span>
        <span>Replies in 24h</span>
      </div>

      {/* Main Title & Description */}
      <div className="max-w-2xl mb-16">
        <h2 className="font-serif text-5xl sm:text-6xl font-bold text-editorial-dark mb-6">
          Let&apos;s talk.
        </h2>
        <p className="font-sans text-sm sm:text-base text-editorial-muted leading-relaxed">
          Open for freelance projects and full-time roles. Fastest way to reach me is email or LinkedIn.
        </p>
      </div>

      {/* Contact Rows */}
      <div className="flex flex-col border-t border-editorial-border">
        {contactItems.map((item) => (
          <div
            key={item.label}
            className="py-6 border-b border-editorial-border flex justify-between items-center group gap-4 flex-wrap"
          >
            {/* Left part: Icon & value */}
            <div className="flex items-center gap-4 min-w-[240px]">
              <span className="text-editorial-muted group-hover:text-editorial-dark transition-colors flex items-center justify-center">
                {item.icon}
              </span>
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="font-mono text-xs sm:text-sm text-editorial-dark hover:underline"
              >
                {item.value}
              </a>
            </div>

            {/* Right part: Actions */}
            <div className="flex items-center gap-3">
              {item.copyable && (
                <button
                  onClick={() => handleCopy(item.value, item.label)}
                  className="p-2 border border-editorial-border hover:bg-editorial-dark hover:text-warm-bg text-editorial-muted rounded-sm transition-all cursor-pointer"
                  aria-label={`Copy ${item.label}`}
                >
                  {copiedText === item.label ? (
                    <Check size={14} className="text-emerald-600" />
                  ) : (
                    <Copy size={14} />
                  )}
                </button>
              )}
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="p-2 border border-editorial-border hover:bg-editorial-dark hover:text-warm-bg text-editorial-muted rounded-sm transition-all flex items-center justify-center"
                aria-label={`Open ${item.label}`}
              >
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-6 font-mono text-[10px] text-editorial-muted uppercase tracking-wider">
        Working with clients globally • Remote friendly • Replies in 24 hours.
      </div>
    </section>
  );
}
