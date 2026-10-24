"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "hero", label: "HERO" },
  { id: "about", label: "ABOUT" },
  { id: "projects", label: "PROJECTS" },
  { id: "skills", label: "SKILLS" },
  { id: "education", label: "EDUCATION" },
  { id: "contact", label: "CONTACT" },
];

export function CommandDock() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      const y = window.scrollY;
      const nextProgress = docH > 0 ? Math.min(1, Math.max(0, y / docH)) : 0;
      let current = "hero";
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.45) current = s.id;
      }
      // This runs on every animation frame while scrolling. Returning the
      // previous value lets React bail out instead of re-rendering per frame.
      setProgress((prev) => (prev === nextProgress ? prev : nextProgress));
      setActiveSection((prev) => (prev === current ? prev : current));
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const circumference = 2 * Math.PI * 17;
  const dashOffset = circumference * (1 - progress);

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 hidden md:block" aria-label="Command dock">
      <nav className="glass rounded-full px-3 py-2 flex items-center gap-1 shadow-[0_20px_60px_rgba(15,23,42,0.18)]">
        <div className="relative w-9 h-9 flex items-center justify-center mr-1" title={Math.round(progress * 100) + "% scrolled"}>
          <svg viewBox="0 0 40 40" className="w-9 h-9 -rotate-90" aria-hidden="true">
            <circle cx="20" cy="20" r="17" fill="none" stroke="rgba(15,23,42,0.12)" strokeWidth="3" />
            <circle
              cx="20"
              cy="20"
              r="17"
              fill="none"
              stroke="#0284c7"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={dashOffset}
              style={{ transition: "stroke-dashoffset 120ms linear" }}
            />
          </svg>
          <span className="absolute font-mono text-[9px] font-semibold text-gray-800">%</span>
        </div>

        {SECTIONS.map((s) => {
          const isActive = activeSection === s.id;
          return (
            <a
              key={s.id}
              href={"#" + s.id}
              className={
                "px-3.5 py-2 rounded-full font-mono text-[11px] tracking-[0.14em] transition-all duration-300 " +
                (isActive
                  ? "bg-gray-900 text-white shadow-md"
                  : "text-gray-600 hover:text-gray-900 hover:bg-white/70")
              }
              aria-current={isActive ? "true" : undefined}
            >
              {s.label}
            </a>
          );
        })}

      </nav>
    </div>
  );
}
