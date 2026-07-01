"use client";

import React from "react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Backend Development",
    skills: "FastAPI, Node.js, Express, Python, TypeScript, REST & GraphQL APIs, WebSockets, Microservices, Serverless architectures, Server-side logic",
  },
  {
    category: "Frontend Development",
    skills: "React, Next.js, Tailwind CSS, Framer Motion, HTML5, CSS3, JavaScript, Responsive UI, Core Web Vitals optimization",
  },
  {
    category: "Databases & Caching",
    skills: "PostgreSQL, MongoDB, Redis, Prisma ORM, Supabase, Relational schema design, Query optimization, Transactional safety",
  },
  {
    category: "AI & Intelligent Workflows",
    skills: "LangGraph, CrewAI, OpenAI / Claude APIs, LlamaIndex, Vector databases, RAG (Retrieval-Augmented Generation) systems",
  },
  {
    category: "DevOps & Cloud Tools",
    skills: "Docker, Git, GitHub Actions, Vercel, AWS, Linux systems, CI/CD automated build pipelines, Containerized environments",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 sm:px-12 max-w-7xl mx-auto border-b border-editorial-border">
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* Left Side: Header */}
        <div className="w-full lg:w-1/4 select-none">
          <span className="font-mono text-xs uppercase tracking-widest text-editorial-muted">
            Technical Skills
          </span>
        </div>

        {/* Right Side: Detailed List */}
        <div className="w-full lg:w-3/4 flex flex-col border-t border-editorial-border">
          {skillCategories.map((skill, idx) => (
            <motion.div
              key={idx}
              className="py-8 border-b border-editorial-border flex flex-col md:flex-row gap-6 md:gap-12 justify-between items-start"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: idx * 0.05 }}
            >
              {/* Category Name */}
              <div className="md:w-1/3">
                <h3 className="font-serif text-2xl font-bold text-editorial-dark">
                  {skill.category}
                </h3>
              </div>

              {/* Technologies / Skills */}
              <div className="md:w-2/3">
                <p className="font-sans text-sm sm:text-base text-editorial-muted leading-relaxed">
                  {skill.skills}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
