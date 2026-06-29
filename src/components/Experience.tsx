"use client";

import React from "react";

const experienceList = [
  {
    role: "Lead Full Stack Engineer",
    company: "Freelance & Startups",
    period: "2024 - Present",
    description:
      "Architecting reliable web systems utilizing Next.js, TypeScript, and Node.js. Designing clean relational database schemas and optimizing query performance under production loads.",
  },
  {
    role: "Software Engineer",
    company: "TechCorp Inc.",
    period: "2023 - 2024",
    description:
      "Maintained core transactional APIs and microservices. Collaborated with UI designers to build fast, responsive user workflows using React and Tailwind CSS.",
  },
  {
    role: "Software Developer Intern",
    company: "DevHouse LLC",
    period: "2022 - 2023",
    description:
      "Developed frontend layout panels and conducted system migration checks from JavaScript to TypeScript.",
  },
];

export default function Experience() {
  return (
    <section id="about" className="py-20 px-6 sm:px-12 max-w-7xl mx-auto border-b border-editorial-border">
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* Left Side: Number & Header */}
        <div className="w-full lg:w-1/4 flex items-baseline gap-4 select-none">
          <span className="font-serif text-5xl sm:text-6xl font-black text-editorial-dark opacity-15">
            04
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-editorial-muted">
            Work Experience
          </span>
        </div>

        {/* Right Side: Detailed List */}
        <div className="w-full lg:w-3/4 flex flex-col border-t border-editorial-border">
          {experienceList.map((exp, idx) => (
            <div
              key={idx}
              className="py-10 border-b border-editorial-border flex flex-col md:flex-row gap-6 md:gap-12 justify-between items-start"
            >
              {/* Role & Company */}
              <div className="md:w-1/3">
                <h3 className="font-serif text-2xl font-bold text-editorial-dark">
                  {exp.role}
                </h3>
                <span className="font-mono text-[10px] uppercase tracking-wider text-editorial-muted mt-2 block">
                  {exp.company}
                </span>
              </div>

              {/* Date & Description */}
              <div className="md:w-2/3 flex flex-col gap-3">
                <span className="font-mono text-xs font-semibold text-editorial-dark w-fit px-3 py-1 bg-[#FAF8F5] border border-editorial-border">
                  {exp.period}
                </span>
                <p className="font-sans text-sm sm:text-base text-editorial-muted leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
