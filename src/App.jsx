import { useEffect, useState } from "react";
import About from "./components/About";
import AnimatedBackground from "./components/AnimatedBackground";
import Blog from "./components/Blog";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import GithubSection from "./components/GithubSection";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import RecruiterSnapshot from "./components/RecruiterSnapshot";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Thesis from "./components/Thesis";
import Timeline from "./components/Timeline";

function getInitialTheme() {
  const saved = localStorage.getItem("theme");
  if (saved === "dark" || saved === "light") {
    return saved;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#06110f]">
      <AnimatedBackground />
      <a
        href="#main"
        className="focus-ring fixed left-4 top-4 z-[60] -translate-y-24 rounded-lg bg-white px-4 py-2 font-semibold text-ink shadow-soft transition focus:translate-y-0"
      >
        Skip to content
      </a>
      <Header theme={theme} onToggleTheme={() => setTheme((current) => (current === "dark" ? "light" : "dark"))} />
      <main id="main" className="relative z-10">
        <Hero />
        <About />
        <RecruiterSnapshot />
        <Skills />
        <Experience />
        <Education />
        <Thesis />
        <Projects />
        <Certifications />
        <Resume />
        <GithubSection />
        <Blog />
        <Timeline />
        <Contact />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
