import React from "react";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-warm-bg text-editorial-dark font-sans selection:bg-[#E5DCD2] selection:text-editorial-dark">
      <Navbar />
      <main className="relative">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
