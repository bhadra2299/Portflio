"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const EMAIL = "bhadrakudum@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/kudum-veerabhadraiah";
const GITHUB_URL = "https://github.com/bhadra2299";

function useLiveISTClock() {
  const [time, setTime] = useState<string>("");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone: "Asia/Kolkata",
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export function ContactClosingSection() {
  const [copied, setCopied] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const magneticWrapRef = useRef<HTMLDivElement>(null);
  const magneticRef = useRef<HTMLAnchorElement>(null);
  const clock = useLiveISTClock();

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference) and (hover: hover)", () => {
        const btn = magneticRef.current;
        const wrap = magneticWrapRef.current;
        if (!btn || !wrap) return;
        const onMove = (e: MouseEvent) => {
          const rect = btn.getBoundingClientRect();
          const relX = e.clientX - (rect.left + rect.width / 2);
          const relY = e.clientY - (rect.top + rect.height / 2);
          gsap.to(btn, { x: relX * 0.25, y: relY * 0.25, duration: 0.45, ease: "power3.out" });
        };
        const onLeave = () => {
          gsap.to(btn, { x: 0, y: 0, duration: 0.65, ease: "elastic.out(1, 0.4)" });
        };
        btn.addEventListener("mousemove", onMove);
        wrap.addEventListener("mouseleave", onLeave);
        return () => {
          btn.removeEventListener("mousemove", onMove);
          wrap.removeEventListener("mouseleave", onLeave);
        };
      });
    },
    { scope: cardRef }
  );

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      window.location.href = "mailto:" + EMAIL;
    }
  };

  const handlePointerSpot = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--spot-x", (e.clientX - rect.left) + "px");
    e.currentTarget.style.setProperty("--spot-y", (e.clientY - rect.top) + "px");
  };

  return (
    <footer
      id="contact"
      className="relative w-full pt-20 pb-28 md:pt-32 md:pb-32 px-[max(5.6vw,2rem)] overflow-hidden"
      aria-label="Contact Kudum Veerabhadraiah"
    >
      <div className="mx-auto max-w-7xl">
        <div
          ref={cardRef}
          onMouseMove={handlePointerSpot}
          className="obsidian-surface rounded-[2.5rem] text-white p-9 md:p-14 relative overflow-hidden"
        >
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-12">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 font-mono text-xs text-emerald-300 mb-8">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                OPEN TO DATA SCIENTIST, ML ENGINEER, MLOPS & AI ENGINEER ROLES
              </div>
              <h2 className="font-albert font-light text-[clamp(2.5rem,5vw,4.8rem)] leading-[1.03] tracking-[-0.04em] text-white mb-6">
                Let&#39;s connect and build what comes next.
              </h2>
              <p className="text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed mb-8">
                Always open to discussing Data Science, MLOps, LLM orchestration, or full-time engineering opportunities in Bangalore or remote.
              </p>

              {/* Direct Social & Contact Pills */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={"mailto:" + EMAIL}
                  className="px-4 py-2 rounded-full bg-white/10 border border-white/15 font-mono text-xs text-sky-300 hover:bg-white/20 transition-colors"
                >
                  {EMAIL}
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-white/10 border border-white/15 font-mono text-xs text-white hover:bg-white/20 transition-colors"
                >
                  LinkedIn ↗
                </a>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-white/10 border border-white/15 font-mono text-xs text-white hover:bg-white/20 transition-colors"
                >
                  GitHub (bhadra2299) ↗
                </a>
              </div>
            </div>

            <div ref={magneticWrapRef} className="flex flex-col sm:flex-row lg:flex-col gap-4 shrink-0">
              <a
                ref={magneticRef}
                href={"mailto:" + EMAIL + "?subject=Opportunity%20for%20Kudum%20Veerabhadraiah"}
                className="inline-flex items-center justify-center h-16 px-10 rounded-full bg-white text-gray-900 font-albert text-base font-medium tracking-tight hover:bg-sky-50 transition-colors will-change-transform"
              >
                Start a Conversation →
              </a>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center h-12 px-5 rounded-full bg-white/10 border border-white/20 text-xs font-mono text-white hover:bg-white/20 transition-colors"
                >
                  {copied ? "✓ COPIED: " + EMAIL : "COPY EMAIL ADDRESS"}
                </button>
                <a
                  href="/Kudum_Veerabhadraiah_Resume.pdf"
                  download="Kudum_Veerabhadraiah_Resume.pdf"
                  className="inline-flex items-center justify-center h-12 px-5 rounded-full bg-sky-500/20 border border-sky-400/40 text-xs font-mono text-sky-200 hover:bg-sky-500/30 transition-colors"
                >
                  DOWNLOAD RESUME PDF ↓
                </a>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 font-mono text-xs text-gray-400">
            <div>
              <p className="text-white font-medium">KUDUM VEERABHADRAIAH</p>
              <p className="mt-0.5">DATA SCIENTIST · MLOPS · AI ENGINEERING // BANGALORE, INDIA</p>
            </div>
            <div className="flex flex-wrap items-center gap-5">
              <a href="#about" className="hover:text-white transition-colors">ABOUT</a>
              <a href="#projects" className="hover:text-white transition-colors">PROJECTS</a>
              <a href="#skills" className="hover:text-white transition-colors">SKILLS</a>
              <a href="#education" className="hover:text-white transition-colors">EDUCATION</a>
              <span className="text-sky-300">BANGALORE {clock} IST</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
