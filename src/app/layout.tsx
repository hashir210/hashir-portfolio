import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Hashir | Full Stack Engineer",
  description: "Professional portfolio of Muhammad Hashir, a Full Stack Engineer building high-performance web products that hold up in production.",
  keywords: ["Muhammad Hashir", "Full Stack Engineer", "Developer", "Portfolio", "Next.js", "React", "TypeScript"],
  authors: [{ name: "Muhammad Hashir" }],
  creator: "Muhammad Hashir",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased bg-warm-bg text-editorial-dark min-h-screen">
        {children}
      </body>
    </html>
  );
}
