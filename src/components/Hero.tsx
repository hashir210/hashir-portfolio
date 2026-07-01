"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as any, // Premium easeOutExpo curve
      },
    },
  };

  return (
    <section
      id="home"
      className="py-16 sm:py-24 px-6 sm:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 border-b border-editorial-border"
    >
      {/* Left Column: Headline, Stats, CTAs */}
      <motion.div
        className="flex-1 flex flex-col max-w-2xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Editorial Headline */}
        <motion.h1
          className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] text-editorial-dark mb-6"
          variants={itemVariants}
        >
          I build full-stack systems that hold up in production.
        </motion.h1>

        {/* Headline Subtitle */}
        <motion.p
          className="font-sans text-sm sm:text-base text-editorial-muted leading-relaxed mb-10 max-w-lg"
          variants={itemVariants}
        >
          I am Muhammad Hashir, a Software Engineer focusing on backend architecture, database reliability, and responsive client interfaces.
        </motion.p>

        {/* Stats Table (Bordered Grid) */}
        <motion.div
          className="border-t border-editorial-border mb-10 flex flex-col font-mono text-xs tracking-wider"
          variants={itemVariants}
        >
          <div className="py-4 border-b border-editorial-border flex justify-between items-center">
            <span className="uppercase text-editorial-dark font-bold">1.5+ Years</span>
            <span className="uppercase text-editorial-muted">in software development</span>
          </div>
          <div className="py-4 border-b border-editorial-border flex justify-between items-center">
            <span className="uppercase text-editorial-dark font-bold">10+ Projects</span>
            <span className="uppercase text-editorial-muted">delivered to production</span>
          </div>
          <div className="py-4 border-b border-editorial-border flex justify-between items-center">
            <span className="uppercase text-editorial-dark font-bold">100% Client</span>
            <span className="uppercase text-editorial-muted">satisfaction rate</span>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
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
        </motion.div>
      </motion.div>

      {/* Right Column: Polaroid Image Placeholder */}
      <motion.div
        className="w-full sm:w-[380px] flex justify-center items-center lg:self-start"
        initial={{ opacity: 0, scale: 0.95, y: 30, rotate: -2 }}
        animate={{ opacity: 1, scale: 1, y: 0, rotate: 2 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        whileHover={{ rotate: 0, scale: 1.02, transition: { duration: 0.3 } }}
      >
        <div className="w-full bg-[#FAF8F5] border border-editorial-border shadow-xl p-5 pb-8 flex flex-col gap-4 select-none">
          {/* Polaroid Image Space (Actual Image) */}
          <div className="aspect-[4/3] w-full overflow-hidden border border-[#D5CDC3]">
            <img
              src="/workspace.png"
              alt="My workspace"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Cursive / Cursive-sans caption */}
          <div className="text-center font-serif italic text-editorial-muted text-sm mt-2">
            me in my workspace
          </div>
        </div>
      </motion.div>
    </section>
  );
}
