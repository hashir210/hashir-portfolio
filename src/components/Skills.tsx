"use client";

import React from "react";

const skillCategories = [
  {
    category: "Backend & APIs",
    technologies: "Node.js • FastAPI • Express • Python • TypeScript",
    description:
      "Designing scalable server-side systems, robust REST and GraphQL APIs, and custom middleware. Experienced in handling asynchronous tasks, rate-limiting, and microservices architecture.",
  },
  {
    category: "Frontend & Interfaces",
    technologies: "React 19 • Next.js 16 • Tailwind CSS • Framer Motion",
    description:
      "Crafting highly responsive, semantic, and fluid user experiences. Specialized in Next.js App Router, React Server Components (RSC), page speed optimization, and dynamic animations.",
  },
  {
    category: "Databases & Caching",
    technologies: "PostgreSQL • MongoDB • Redis • Prisma • Supabase",
    description:
      "Architecting transactional schemas, database indexing, writing raw SQL queries, and optimizing relational schemas for complex data models and low-latency cache storage.",
  },
  {
    category: "AI & Intelligent Workflows",
    technologies: "LangGraph • CrewAI • OpenAI / Claude APIs • Vector DBs",
    description:
      "Building stateful multi-agent systems, integrating LLMs into backend pipelines, setting up Retrieval-Augmented Generation (RAG) structures, and building conversational AI interfaces.",
  },
  {
    category: "Cloud, DevOps & Tools",
    technologies: "Docker • Git & GitHub Actions • Vercel • AWS • Linux",
    description:
      "Configuring automated CI/CD build scripts, containerizing environments with Docker, setting up server environments, and managing cloud deployments with continuous monitoring.",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 sm:px-12 max-w-7xl mx-auto border-b border-editorial-border">
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* Left Side: Number & Header */}
        <div className="w-full lg:w-1/4 flex items-baseline gap-4 select-none">
          <span className="font-serif text-5xl sm:text-6xl font-black text-editorial-dark opacity-15">
            04
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-editorial-muted">
            Technical Skills
          </span>
        </div>

        {/* Right Side: Detailed List */}
        <div className="w-full lg:w-3/4 flex flex-col border-t border-editorial-border">
          {skillCategories.map((skill, idx) => (
            <div
              key={idx}
              className="py-10 border-b border-editorial-border flex flex-col md:flex-row gap-6 md:gap-12 justify-between items-start"
            >
              {/* Category Name */}
              <div className="md:w-1/3">
                <h3 className="font-serif text-2xl font-bold text-editorial-dark">
                  {skill.category}
                </h3>
                <span className="font-mono text-[9px] uppercase tracking-wider text-editorial-muted mt-2 block font-semibold">
                  {skill.technologies}
                </span>
              </div>

              {/* Description & Technologies */}
              <div className="md:w-2/3 flex flex-col gap-3">
                <p className="font-sans text-sm sm:text-base text-editorial-muted leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
