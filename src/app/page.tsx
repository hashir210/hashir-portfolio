import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Capabilities from "@/components/Capabilities";
import Skills from "@/components/Skills";
import ContactBanner from "@/components/ContactBanner";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-warm-bg text-editorial-dark font-sans selection:bg-[#E5DCD2] selection:text-editorial-dark">
      <Navbar />
      <main className="relative">
        <Hero />
        <Projects />
        <Capabilities />
        <Skills />
        <ContactBanner />
      </main>
    </div>
  );
}
