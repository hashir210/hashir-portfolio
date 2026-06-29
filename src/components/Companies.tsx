"use client";

import React from "react";

export default function Companies() {
  return (
    <section className="py-12 px-6 sm:px-12 max-w-7xl mx-auto border-b border-editorial-border">
      <div className="text-center mb-6">
        <span className="font-mono text-[10px] uppercase tracking-widest text-editorial-muted">
          Worked with companies like
        </span>
      </div>
      
      {/* Grid of placeholders */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="h-16 bg-[#ECE7E1]/50 border border-dashed border-[#D5CDC3] rounded-sm flex items-center justify-center text-xs font-mono text-editorial-muted select-none"
          >
            [Company {i} Logo]
          </div>
        ))}
      </div>
    </section>
  );
}
