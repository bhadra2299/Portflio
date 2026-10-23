"use client";

import { useRef, useEffect } from "react";

const DESKTOP_RADIUS = 235;
const MOBILE_RADIUS = 150;
const POS_LERP = 0.14;
const RADIUS_LERP = 0.12;

export function GlassHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);

  const rawX = useRef(-999);
  const rawY = useRef(-999);
  const smoothX = useRef(-999);
  const smoothY = useRef(-999);
  const currentRadius = useRef(0);
  const targetRadius = useRef(0);
  const isTouch = useRef(false);
  const rafId = useRef(0);

  const name = "Kudum Veerabhadraiah";
  const summary = "AI Engineer & Data Scientist building systems that understand. Specialized in machine learning, deep learning, NLP, computer vision, MLOps, and full-stack AI integrations.";
  const targetRoles = ["ML Engineer", "AI Engineer", "Data Scientist", "MLOps Engineer"];
  const navLinks = ["About", "Projects", "Skills", "Education", "Contact"];

  useEffect(() => {
    const hero = heroRef.current;
    const reveal = revealRef.current;
    if (!hero || !reveal) return;

    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const reduced = mql.matches;
    const posFactor = reduced ? 1 : POS_LERP;
    const radFactor = reduced ? 1 : RADIUS_LERP;

    let running = true;

    function tick() {
      if (!running || !reveal) return;

      smoothX.current += (rawX.current - smoothX.current) * posFactor;
      smoothY.current += (rawY.current - smoothY.current) * posFactor;
      currentRadius.current +=
        (targetRadius.current - currentRadius.current) * radFactor;

      reveal.style.setProperty("--reveal-x", `${smoothX.current}px`);
      reveal.style.setProperty("--reveal-y", `${smoothY.current}px`);
      reveal.style.setProperty("--reveal-radius", `${currentRadius.current}px`);

      rafId.current = requestAnimationFrame(tick);
    }

    rafId.current = requestAnimationFrame(tick);

    function onPointerEnter(e: PointerEvent) {
      rawX.current = e.clientX;
      rawY.current = e.clientY;
      targetRadius.current =
        e.pointerType === "touch" ? MOBILE_RADIUS : DESKTOP_RADIUS;
    }

    function onPointerMove(e: PointerEvent) {
      rawX.current = e.clientX;
      rawY.current = e.clientY;
    }

    function onPointerLeave(e: PointerEvent) {
      if (e.pointerType === "mouse") {
        targetRadius.current = 0;
      }
    }

    function onTouchStart(e: TouchEvent) {
      isTouch.current = true;
      const t = e.touches[0];
      rawX.current = t.clientX;
      rawY.current = t.clientY;
      targetRadius.current = MOBILE_RADIUS;
    }

    function onTouchMove(e: TouchEvent) {
      const t = e.touches[0];
      rawX.current = t.clientX;
      rawY.current = t.clientY;
    }

    function onTouchEnd() {
      targetRadius.current = 0;
    }

    hero.addEventListener("pointerenter", onPointerEnter as EventListener);
    hero.addEventListener("pointermove", onPointerMove as EventListener);
    hero.addEventListener("pointerleave", onPointerLeave as EventListener);
    hero.addEventListener("touchstart", onTouchStart, { passive: true });
    hero.addEventListener("touchmove", onTouchMove, { passive: true });
    hero.addEventListener("touchend", onTouchEnd);

    return () => {
      running = false;
      cancelAnimationFrame(rafId.current);
      hero.removeEventListener("pointerenter", onPointerEnter as EventListener);
      hero.removeEventListener("pointermove", onPointerMove as EventListener);
      hero.removeEventListener("pointerleave", onPointerLeave as EventListener);
      hero.removeEventListener("touchstart", onTouchStart);
      hero.removeEventListener("touchmove", onTouchMove);
      hero.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[100dvh] w-full overflow-hidden bg-[#e8ecf0]"
      aria-label="Hero"
    >
      {/* Reveal portrait - visible by default */}
      <div
        className="portrait-layer absolute inset-0 z-0"
        style={{ backgroundImage: "url(/images/Reveal_image_desktop.png)" }}
        aria-hidden="true"
      />

      {/* Base portrait - revealed through cursor mask */}
      <div
        ref={revealRef}
        className="reveal-layer portrait-layer absolute inset-0 z-[1]"
        style={{ backgroundImage: "url(/images/Base_image_desktop.png)" }}
        aria-hidden="true"
      />

      {/* Technical grid overlay */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none opacity-[0.06]"
        aria-hidden="true"
      >
        {[...Array(9)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute left-0 right-0 h-px bg-gray-900"
            style={{ top: `${(i + 1) * 10}%` }}
          />
        ))}
        {[...Array(9)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute top-0 bottom-0 w-px bg-gray-900"
            style={{ left: `${(i + 1) * 10}%` }}
          />
        ))}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(50vw,50vh)] h-[min(50vw,50vh)] rounded-full border border-gray-900" />
      </div>

      {/* Text content - left column */}
      <div className="absolute inset-0 z-[3] pointer-events-none">
        <div
          className="absolute top-0 left-0 h-full flex flex-col justify-center px-[max(5.6vw,2rem)] lg:w-[42%]"
          style={{
            animation: "fade-up 0.8s cubic-bezier(0.16,1,0.3,1) 0.35s both",
          }}
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-gray-500 mb-4">
            Data Scientist / AI Engineer
          </p>

          <h1
            className="font-albert font-light text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.02] tracking-[-0.06em] text-gray-900 mb-6"
            style={{
              animation: "line-up 0.7s cubic-bezier(0.16,1,0.3,1) 0.5s both",
            }}
          >
            {name}
          </h1>

          <p
            className="text-sm leading-relaxed text-gray-600 max-w-[42ch] mb-8"
            style={{
              animation: "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) 0.9s both",
            }}
          >
            {summary}
          </p>

          {targetRoles && targetRoles.length > 0 && (
            <div
              className="flex flex-wrap gap-2 mb-8"
              style={{
                animation: "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) 1s both",
              }}
            >
              {targetRoles.map((role) => (
                <span
                  key={role}
                  className="inline-block text-xs font-medium text-gray-700 bg-white/60 backdrop-blur-sm border border-gray-200/60 px-3 py-1.5 rounded-full"
                >
                  {role}
                </span>
              ))}
            </div>
          )}

          <div
            className="flex gap-3"
            style={{
              animation: "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) 1.1s both",
            }}
          >
            <a
              href="#contact"
              className="pointer-events-auto inline-flex items-center justify-center h-11 px-6 rounded-full bg-gray-900 text-sm font-medium text-white transition-all duration-200 hover:bg-gray-800 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 focus-visible:ring-offset-[#e8ecf0]"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="pointer-events-auto inline-flex items-center justify-center h-11 px-6 rounded-full bg-white/70 backdrop-blur-sm border border-gray-200 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-white hover:border-gray-300 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#e8ecf0]"
            >
              View Projects
            </a>
          </div>
        </div>

        <div
          className="absolute bottom-[max(4rem,env(safe-area-inset-bottom,4rem))] left-0 right-0 px-[max(5.6vw,2rem)] lg:hidden"
          style={{
            animation: "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) 1s both",
          }}
        >
          <a
            href="#contact"
            className="pointer-events-auto inline-flex items-center justify-center h-11 px-6 rounded-full bg-gray-900 text-sm font-medium text-white w-full sm:w-auto"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Navigation */}
      <header
        className="absolute top-0 left-0 right-0 z-[4] flex items-center justify-between px-[max(5.6vw,2rem)] border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.6)]"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.65), rgba(255,255,255,0.45))",
          backdropFilter: "blur(24px) saturate(180%)",
          WebkitBackdropFilter: "blur(24px) saturate(180%)",
          paddingTop: "max(2.5rem, env(safe-area-inset-top, 2.5rem))",
          paddingBottom: "1rem",
          animation: "nav-fade 0.7s cubic-bezier(0.16,1,0.3,1) 0.15s both",
        }}
      >
        <a
          href="/"
          className="flex items-center gap-2.5 text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 rounded"
          aria-label="Home"
        >
          <VMark />
          <span className="text-base font-medium tracking-tight">
            {name.split(" ").pop()}
          </span>
        </a>

        <nav
          className="hidden lg:flex items-center gap-6"
          aria-label="Main navigation"
        >
          {navLinks.map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 rounded py-2"
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="pointer-events-auto inline-flex items-center justify-center h-10 px-4 rounded-full bg-white/70 backdrop-blur-sm border border-gray-200 text-sm font-medium text-gray-800 transition-all duration-200 hover:bg-white hover:border-gray-300 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#e8ecf0]"
        >
          Contact Me
        </a>
      </header>
    </section>
  );
}

function VMark() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 4L14 24L24 4"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      <path
        d="M11 18L14 24L17 18"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="square"
        strokeLinejoin="miter"
        opacity="0.35"
      />
    </svg>
  );
}