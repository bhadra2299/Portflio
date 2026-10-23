"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ORIGINAL_PROJECTS, type OriginalProject } from "@/lib/portfolio-data";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function computeSimulatorOutput(project: OriginalProject, values: number[]): { output: number; confidence: number } {
  const sim = project.simulator;
  let raw = 0;
  if (project.slug === "crop-yield-prediction-system") {
    raw = 1.4 + values[0] * sim.controls[0].weight + values[1] * sim.controls[1].weight + values[2] * sim.controls[2].weight;
    raw = Math.max(1.5, Math.min(6.8, raw));
  } else if (project.slug === "real-time-obstacle-detection-system") {
    raw = 25 + values[0] * sim.controls[0].weight + values[1] * sim.controls[1].weight + values[2] * sim.controls[2].weight;
    raw = Math.max(55, Math.min(97.5, raw));
  } else if (project.slug === "rice-leaf-disease-detection") {
    raw = 12 + values[0] * sim.controls[0].weight + values[1] * sim.controls[1].weight + values[2] * sim.controls[2].weight;
    raw = Math.max(50, Math.min(98.5, raw));
  } else if (project.slug === "portuguese-bank-marketing-analysis") {
    raw = 8 + values[0] * sim.controls[0].weight + values[1] * sim.controls[1].weight + values[2] * sim.controls[2].weight;
    raw = Math.max(25, Math.min(96.0, raw));
  } else if (project.slug === "maxi-ai-assistant") {
    raw = 18 + values[0] * sim.controls[0].weight + values[1] * sim.controls[1].weight + values[2] * sim.controls[2].weight;
    raw = Math.max(55, Math.min(99.2, raw));
  } else {
    raw = values[0] * sim.controls[0].weight + values[1] * sim.controls[1].weight + values[2] * sim.controls[2].weight;
    raw = Math.max(42, Math.min(99.2, raw));
  }
  const confidence =
    project.slug === "real-time-obstacle-detection-system"
      ? 88.0
      : project.slug === "crop-yield-prediction-system"
      ? 85.0
      : Math.min(96.5, Math.max(78.0, raw));
  return { output: raw, confidence };
}

export function ProjectsShowcaseSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeSlug, setActiveSlug] = useState<string>(ORIGINAL_PROJECTS[0].slug);
  const [activeStageIdx, setActiveStageIdx] = useState<number>(2);
  const [drawerProject, setDrawerProject] = useState<OriginalProject | null>(null);
  const [sliderValues, setSliderValues] = useState<Record<string, number[]>>(() => {
    const init: Record<string, number[]> = {};
    for (const p of ORIGINAL_PROJECTS) {
      init[p.slug] = p.simulator.controls.map((c) => c.initial);
    }
    return init;
  });

  const activeProject = ORIGINAL_PROJECTS.find((p) => p.slug === activeSlug) ?? ORIGINAL_PROJECTS[0];
  const currentValues = sliderValues[activeProject.slug] ?? activeProject.simulator.controls.map((c) => c.initial);
  const { output, confidence } = computeSimulatorOutput(activeProject, currentValues);

  useEffect(() => {
    const syncFromHash = () => {
      const h = window.location.hash;
      if (h.startsWith("#case-study-")) {
        const slug = h.replace("#case-study-", "");
        const found = ORIGINAL_PROJECTS.find((p) => p.slug === slug);
        if (found) {
          setActiveSlug(found.slug);
          setDrawerProject(found);
        }
      }
    };
    syncFromHash();
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDrawerProject(null);
    };
    window.addEventListener("hashchange", syncFromHash);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("hashchange", syncFromHash);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useGSAP(
    () => {
      gsap.fromTo(
        ".project-bento-item",
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  const handlePointerSpot = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--spot-x", (e.clientX - rect.left) + "px");
    e.currentTarget.style.setProperty("--spot-y", (e.clientY - rect.top) + "px");
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative w-full py-28 md:py-40 overflow-hidden"
      aria-label="Original Projects and Deep-Dive Case Studies"
    >
      <div className="mx-auto max-w-7xl px-[max(5.6vw,2rem)]">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-900 text-white font-mono text-[11px] uppercase tracking-[0.18em]">
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                Projects & Full Case Studies
              </span>
              <span className="font-mono text-xs text-gray-500 tracking-widest">
                6 REAL RESUME PROJECTS · ML · COMPUTER VISION · EDA · AI AGENTS · SAAS
              </span>
            </div>
            <h2 className="max-w-5xl font-albert font-light text-[clamp(2.35rem,4.5vw,4.5rem)] leading-[1.05] tracking-[-0.04em] text-gray-900">
              Real projects across predictive ML, computer vision, data analytics, and agentic AI.
            </h2>
          </div>

          {/* Project Chapter Selector Tabs */}
          <div
            className="glass rounded-2xl p-1.5 flex flex-wrap gap-1.5"
            role="tablist"
            aria-label="Select a project to inspect"
          >
            {ORIGINAL_PROJECTS.map((proj) => {
              const isSelected = proj.slug === activeSlug;
              return (
                <button
                  key={proj.slug}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => {
                    setActiveSlug(proj.slug);
                    setActiveStageIdx(2);
                  }}
                  className={
                    "px-3.5 py-2 rounded-xl font-mono text-xs transition-all duration-200 " +
                    (isSelected
                      ? "bg-gray-900 text-white shadow-md"
                      : "text-gray-700 hover:text-gray-900 hover:bg-white/75")
                  }
                >
                  <span className="opacity-60 mr-1.5">{proj.index}</span>
                  {proj.title.split(" ").slice(0, 2).join(" ")}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Flagship Spotlight Studio (12-Column Gapless Bento) */}
        <div className="project-bento-item obsidian-surface rounded-[2.5rem] text-white p-7 md:p-12 mb-10">
          {/* Top Title & Action Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 mb-8 border-b border-white/10">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span
                  className="font-mono text-xs px-3 py-1 rounded-full text-gray-900 font-semibold"
                  style={{ backgroundColor: activeProject.accent }}
                >
                  PROJECT {activeProject.index} · {activeProject.role}
                </span>
                <span className="font-mono text-xs text-gray-300">
                  {activeProject.status}
                </span>
              </div>
              <h3 className="font-albert text-3xl md:text-5xl font-light tracking-tight text-white">
                {activeProject.title}
              </h3>
            </div>

            {/* Dual CTA: Open Interactive Case Study Modal OR GitHub */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => setDrawerProject(activeProject)}
                className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-white text-gray-900 font-albert text-sm font-medium hover:bg-sky-100 transition-colors shadow-lg"
              >
                View Full Case Study →
              </button>
              <a
                href={activeProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-12 px-5 rounded-full bg-white/10 border border-white/20 text-xs font-mono text-white hover:bg-white/20 transition-colors"
              >
                GitHub Source ↗
              </a>
            </div>
          </div>

          {/* 12-Column Inner Grid: Left 7 Col Case Study Breakdown + Right 5 Col Schematic & Live Sandbox */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <p className="text-base md:text-lg text-gray-200 leading-relaxed">
                {activeProject.summary}
              </p>

              {/* Measured Outcomes Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                {activeProject.measuredOutcomes.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-2xl bg-white/[0.05] border border-white/10 p-4"
                  >
                    <p
                      className="font-albert text-2xl md:text-3xl font-light tracking-tight mb-1"
                      style={{ color: activeProject.accent }}
                    >
                      {m.metric}
                    </p>
                    <p className="font-mono text-xs font-semibold text-white mb-1">
                      {m.label}
                    </p>
                    <p className="text-xs text-gray-400 leading-snug">
                      {m.detail}
                    </p>
                  </div>
                ))}
              </div>

              {/* Engineering Highlights */}
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-sky-300 mb-3">
                  KEY ENGINEERING HIGHLIGHTS
                </p>
                <ul className="space-y-2.5">
                  {activeProject.engineeringApproach.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-300 leading-relaxed">
                      <span
                        className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                        style={{ backgroundColor: activeProject.accent }}
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Pills */}
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-gray-400 mb-2.5">
                  TECHNOLOGY STACK
                </p>
                <div className="flex flex-wrap gap-2">
                  {activeProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full font-mono text-xs bg-white/10 text-white border border-white/15"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Illustration + Interactive Parameter Sandbox */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-5 flex flex-col items-center justify-center min-h-[12rem] relative overflow-hidden group">
                <img
                  src={encodeURI(activeProject.svgPath)}
                  alt={activeProject.title + " schematic"}
                  className="max-h-44 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Interactive Sandbox */}
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="font-mono text-[10px] uppercase tracking-[0.18em]"
                      style={{ color: activeProject.accent }}
                    >
                      {activeProject.simulator.title}
                    </span>
                    <span className="font-mono text-[10px] text-emerald-300">
                      ● INTERACTIVE
                    </span>
                  </div>

                  <div className="space-y-4 mb-5">
                    {activeProject.simulator.controls.map((ctrl, cIdx) => {
                      const val = currentValues[cIdx] ?? ctrl.initial;
                      const pct = ((val - ctrl.min) / (ctrl.max - ctrl.min)) * 100;
                      return (
                        <div key={ctrl.label}>
                          <div className="flex items-center justify-between mb-1">
                            <label
                              htmlFor={activeProject.slug + "-ctrl-" + cIdx}
                              className="font-mono text-[11px] text-gray-300"
                            >
                              {ctrl.label}
                            </label>
                            <span className="font-mono text-[11px] text-white">
                              {val} {ctrl.unit}
                            </span>
                          </div>
                          <input
                            id={activeProject.slug + "-ctrl-" + cIdx}
                            type="range"
                            min={ctrl.min}
                            max={ctrl.max}
                            step={ctrl.step}
                            value={val}
                            onChange={(e) => {
                              const next = [...currentValues];
                              next[cIdx] = parseFloat(e.target.value);
                              setSliderValues((prev) => ({ ...prev, [activeProject.slug]: next }));
                            }}
                            className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
                            style={{
                              background: "linear-gradient(90deg, " + activeProject.accent + " " + pct + "%, rgba(255,255,255,0.12) " + pct + "%)",
                              accentColor: activeProject.accent,
                            }}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="rounded-xl bg-gray-900/80 border border-white/10 p-4 flex items-center justify-between">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-gray-400">
                      {activeProject.simulator.outputLabel}
                    </p>
                    <p className="font-albert text-2xl font-light text-white mt-0.5">
                      {output.toFixed(activeProject.simulator.outputUnit === "t/ha" ? 2 : 1)}{" "}
                      <span className="font-mono text-xs text-gray-400">
                        {activeProject.simulator.outputUnit}
                      </span>
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-[10px] text-gray-400">BENCHMARK</p>
                    <p className="font-mono text-xs font-semibold mt-0.5" style={{ color: activeProject.accent }}>
                      {confidence.toFixed(1)}% CONF
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 5-Stage Living Architecture Pipeline */}
          <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-5">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-gray-400">
                SYSTEM ARCHITECTURE PIPELINE · CLICK ANY STAGE TO INSPECT
              </p>
              <span className="font-mono text-xs" style={{ color: activeProject.accent }}>
                {activeProject.pipeline[activeStageIdx]?.title}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5">
              {activeProject.pipeline.map((node, i) => {
                const isCurrent = i === activeStageIdx;
                const isPassed = i <= activeStageIdx;
                return (
                  <button
                    key={node.stage}
                    type="button"
                    onClick={() => setActiveStageIdx(i)}
                    className={
                      "text-left rounded-xl p-3.5 border transition-all duration-200 " +
                      (isCurrent
                        ? "bg-white text-gray-900 border-white shadow-md"
                        : isPassed
                        ? "bg-white/10 text-white border-white/25"
                        : "bg-white/[0.03] text-gray-400 border-white/10 hover:bg-white/[0.08]")
                    }
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-[10px] opacity-75">0{i + 1} · {node.stage}</span>
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: isPassed ? activeProject.accent : "#475569" }}
                      />
                    </div>
                    <p className="font-albert text-xs font-semibold mb-0.5">{node.title}</p>
                    <p className={"text-[11px] leading-snug " + (isCurrent ? "text-gray-600" : "opacity-75")}>
                      {node.detail}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* All 6 Real Resume Projects Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ORIGINAL_PROJECTS.map((proj) => {
            const isCurrent = proj.slug === activeSlug;
            return (
              <div
                key={proj.slug}
                onMouseMove={handlePointerSpot}
                className={
                  "project-bento-item rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 border " +
                  (isCurrent
                    ? "bg-white border-gray-900 shadow-[0_20px_50px_rgba(15,23,42,0.1)]"
                    : "glass-card")
                }
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="font-mono text-xs font-semibold text-gray-500">
                      PROJECT {proj.index} · {proj.role.split("/")[0].trim()}
                    </span>
                    <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-gray-900 text-white">
                      {proj.headlineMetric}
                    </span>
                  </div>

                  <h3 className="font-albert text-xl font-medium text-gray-900 mb-2">
                    {proj.title}
                  </h3>

                  <p className="font-mono text-[11px] text-sky-800 mb-3">
                    {proj.category}
                  </p>

                  <p className="text-xs text-gray-600 leading-relaxed mb-5 line-clamp-3">
                    {proj.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {proj.technologies.slice(0, 6).map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 rounded-full font-mono text-[10px] bg-gray-900/5 text-gray-700 border border-gray-900/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-900/10 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setActiveSlug(proj.slug);
                      setDrawerProject(proj);
                    }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gray-900 text-white font-mono text-xs hover:bg-gray-800 transition-colors"
                  >
                    View Case Study →
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveSlug(proj.slug)}
                    className="font-mono text-xs text-gray-600 hover:text-gray-900 px-3 py-1.5"
                  >
                    {isCurrent ? "● Active Above" : "Load in Studio ↑"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Full-Screen Interactive Case Study Deep-Dive Modal Drawer */}
      {drawerProject && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-md flex items-center justify-center p-4 md:p-8 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label={drawerProject.title + " Full Case Study"}
          onClick={() => setDrawerProject(null)}
        >
          <div
            className="obsidian-surface text-white rounded-[2.25rem] max-w-5xl w-full max-h-[90vh] overflow-y-auto p-7 md:p-12 border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-wrap items-start justify-between gap-4 pb-6 mb-8 border-b border-white/10">
              <div>
                <div className="flex flex-wrap items-center gap-2.5 mb-2">
                  <span
                    className="font-mono text-xs px-3 py-1 rounded-full text-gray-900 font-semibold"
                    style={{ backgroundColor: drawerProject.accent }}
                  >
                    CASE STUDY {drawerProject.index} · {drawerProject.role}
                  </span>
                  <span className="font-mono text-xs text-gray-300">
                    {drawerProject.category}
                  </span>
                </div>
                <h2 className="font-albert text-3xl md:text-5xl font-light text-white">
                  {drawerProject.title}
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setDrawerProject(null)}
                className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-xs font-mono text-white border border-white/15"
              >
                ✕ CLOSE ESC
              </button>
            </div>

            {/* 3 Measured Benchmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {drawerProject.measuredOutcomes.map((m) => (
                <div key={m.label} className="rounded-2xl bg-white/[0.05] border border-white/10 p-5">
                  <p className="font-albert text-3xl font-light mb-1" style={{ color: drawerProject.accent }}>
                    {m.metric}
                  </p>
                  <p className="font-mono text-xs font-semibold text-white mb-1">{m.label}</p>
                  <p className="text-xs text-gray-300">{m.detail}</p>
                </div>
              ))}
            </div>

            {/* Problem & System Architecture */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-6">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-rose-300 mb-2">
                  01 // PROBLEM STATEMENT
                </p>
                <p className="text-sm text-gray-200 leading-relaxed">
                  {drawerProject.problemStatement}
                </p>
              </div>
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-6">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-sky-300 mb-2">
                  02 // END-TO-END SYSTEM ARCHITECTURE
                </p>
                <p className="text-sm text-gray-200 leading-relaxed">
                  {drawerProject.systemArchitecture}
                </p>
              </div>
            </div>

            {/* Engineering Implementation & Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-6">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-emerald-300 mb-4">
                  03 // ENGINEERING APPROACH & METHODOLOGY
                </p>
                <ul className="space-y-3">
                  {drawerProject.engineeringApproach.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-200 leading-relaxed">
                      <span className="font-mono text-xs text-emerald-400 mt-0.5">0{idx + 1}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-6">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-amber-300 mb-4">
                  04 // CORE CAPABILITIES & ROADMAP
                </p>
                <ul className="space-y-2.5 mb-6">
                  {drawerProject.keyFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-200">
                      <span className="text-sky-400">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                {drawerProject.roadmap.length > 0 && (
                  <div className="pt-4 border-t border-white/10">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-gray-400 mb-2">
                      UPCOMING ROADMAP
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {drawerProject.roadmap.map((r) => (
                        <span key={r} className="px-2.5 py-1 rounded-lg bg-white/10 font-mono text-[11px] text-gray-200">
                          {r}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Skills Demonstrated & Full Tech Stack */}
            <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-gray-400 mb-2.5">
                    SKILLS DEMONSTRATED
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {drawerProject.skillsDemonstrated.map((s) => (
                      <span key={s} className="px-3 py-1 rounded-full bg-sky-500/15 border border-sky-400/30 font-mono text-xs text-sky-200">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-gray-400 mb-2.5">
                    COMPLETE TECHNOLOGY STACK
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {drawerProject.technologies.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-full bg-white/10 border border-white/15 font-mono text-xs text-white">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
              <div className="flex flex-wrap gap-3">
                <a
                  href={drawerProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-gray-900 font-mono text-xs font-semibold hover:bg-sky-100 transition-colors"
                >
                  GitHub Repository ↗
                </a>
                <a
                  href="#contact"
                  onClick={() => setDrawerProject(null)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/20 font-mono text-xs text-white hover:bg-white/20 transition-colors"
                >
                  Discuss This Project →
                </a>
              </div>
              <button
                type="button"
                onClick={() => setDrawerProject(null)}
                className="font-mono text-xs text-gray-400 hover:text-white"
              >
                Back to Portfolio
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
