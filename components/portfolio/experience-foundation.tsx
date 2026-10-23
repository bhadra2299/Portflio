"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const VERIFIED_CERTIFICATIONS = [
  {
    code: "CERT // 01",
    title: "DataMites — Data Scientist Training",
    issuer: "DataMites",
    focus:
      "Hands-on end-to-end Data Science training covering Python, SQL, statistics, exploratory data analysis, feature engineering, machine learning (Scikit-learn, XGBoost, LightGBM), deep learning, and applied capstone projects.",
  },
  {
    code: "CERT // 02",
    title: "IBM SkillsBuild — Python for Data Science",
    issuer: "IBM SkillsBuild",
    focus:
      "Python programming fundamentals, data structures, Pandas, NumPy, data manipulation, and analytical scripting for data science workflows.",
  },
];

const ADDITIONAL_LEARNING_AREAS = [
  "Generative AI & LLMs",
  "AI Agents & RAG",
  "AWS (S3, EC2, Lambda)",
  "Google Cloud",
  "IBM AI Technologies",
  "edX Learning Programs",
];

const PROFESSIONAL_STRENGTHS = [
  "Analytical Problem Solving",
  "Software Development Mindset",
  "ML Workflow Design",
  "Data-Driven Decision Making",
  "Debugging & Troubleshooting",
  "AI Application & API Development",
  "System Design Thinking",
  "Technical Documentation",
];

export function EducationSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".edu-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.14,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
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
      id="education"
      className="relative w-full py-28 md:py-40 overflow-hidden"
      aria-label="Academic Education and Verified Certifications"
    >
      <div className="mx-auto max-w-7xl px-[max(5.6vw,2rem)]">
        <div className="mb-16 md:mb-24">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-900 text-white font-mono text-[11px] uppercase tracking-[0.18em]">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              Education, Verified Certifications & Strengths
            </span>
            <span className="font-mono text-xs text-gray-500 tracking-widest">
              B.TECH ECE (GRADUATED 2025) · DATAMITES & IBM SKILLSBUILD
            </span>
          </div>

          <h2 className="max-w-5xl font-albert font-light text-[clamp(2.35rem,4.5vw,4.5rem)] leading-[1.05] tracking-[-0.04em] text-gray-900">
            Engineering taught me how systems behave.
            <br />
            <span className="text-sky-700">Data taught me how systems learn.</span>
          </h2>
        </div>

        {/* Gapless 12-Column Bento: 5 Col B.Tech Degree + 7 Col Verified Certifications & Strengths */}
        <div className="grid grid-cols-1 lg:grid-cols-12 grid-flow-dense gap-6 items-stretch">
          {/* Left 5 Columns: B.Tech ECE Degree Card */}
          <div
            onMouseMove={handlePointerSpot}
            className="edu-card lg:col-span-5 obsidian-surface rounded-[2.25rem] p-8 md:p-10 text-white flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-6">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-sky-400">
                  BACHELOR OF TECHNOLOGY
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15 font-mono text-xs text-emerald-300">
                  Graduated 2025
                </span>
              </div>

              <h3 className="font-albert text-2xl md:text-4xl font-light tracking-tight text-white mb-3 leading-[1.12]">
                Electronics & Communication Engineering
              </h3>

              <p className="font-albert text-base text-sky-200 mb-6">
                Annamacharya Institute of Technology & Sciences, Andhra Pradesh
              </p>

              <div className="rounded-2xl bg-white/[0.06] border border-white/10 p-5 mb-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-gray-400 mb-2">
                  CORE ACADEMIC FOUNDATION
                </p>
                <p className="text-sm text-gray-200 leading-relaxed">
                  Engineering Mathematics, Programming Fundamentals, Electronics, Communication Systems, Digital Systems, Technical Problem Solving, Analytical Thinking, and Engineering Design.
                </p>
              </div>

              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                Provides the mathematical, signal-processing, and systems-engineering foundation behind my sensor-based obstacle detection, computer vision, and machine learning pipelines.
              </p>
            </div>

            <div className="pt-5 border-t border-white/10 flex flex-wrap gap-2">
              {[
                "Engineering Mathematics",
                "Programming Fundamentals",
                "Digital & Communication Systems",
                "Analytical Problem Solving",
                "Engineering Design",
              ].map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-full font-mono text-[11px] bg-white/10 text-gray-200 border border-white/15"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right 7 Columns: Verified Certifications + Additional Learning & Professional Strengths */}
          <div className="edu-card lg:col-span-7 glass rounded-[2.25rem] p-8 md:p-10 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 pb-5 mb-6 border-b border-gray-900/10">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-sky-800">
                    VERIFIED CERTIFICATIONS & TRAINING
                  </p>
                  <h3 className="font-albert text-xl md:text-2xl font-medium text-gray-900 mt-1">
                    DataMites Data Scientist Training & IBM SkillsBuild
                  </h3>
                </div>
                <span className="font-mono text-xs px-3 py-1 rounded-full bg-gray-900 text-white">
                  VERIFIED CREDENTIALS
                </span>
              </div>

              <div className="grid grid-cols-1 gap-4 mb-6">
                {VERIFIED_CERTIFICATIONS.map((cert) => (
                  <div
                    key={cert.code}
                    className="rounded-2xl bg-white/80 border border-white/90 p-5 hover:bg-white transition-all"
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-sky-800 font-semibold">
                        {cert.code} · {cert.issuer}
                      </span>
                      <span className="font-mono text-[10px] text-emerald-700">● VERIFIED</span>
                    </div>
                    <h4 className="font-albert text-lg font-semibold text-gray-900 mb-1.5">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {cert.focus}
                    </p>
                  </div>
                ))}
              </div>

              {/* Additional Learning & Professional Strengths */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white/75 border border-white/90 p-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-sky-800 font-semibold mb-2.5">
                    ADDITIONAL LEARNING AREAS
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {ADDITIONAL_LEARNING_AREAS.map((area) => (
                      <span
                        key={area}
                        className="px-2.5 py-1 rounded-full font-mono text-[11px] bg-gray-900/[0.06] text-gray-800 border border-gray-900/10"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-white/75 border border-white/90 p-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-emerald-800 font-semibold mb-2.5">
                    PROFESSIONAL & ENGINEERING STRENGTHS
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {PROFESSIONAL_STRENGTHS.map((str) => (
                      <span
                        key={str}
                        className="px-2.5 py-1 rounded-full font-mono text-[11px] bg-gray-900/[0.06] text-gray-800 border border-gray-900/10"
                      >
                        {str}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-gray-900/10 flex flex-wrap items-center justify-between gap-3 font-mono text-xs text-gray-600">
              <span>COMMUNICATION · COLLABORATION · SELF-LEARNING · ATTENTION TO DETAIL</span>
              <a href="#contact" className="text-gray-900 font-semibold hover:text-sky-700">
                Connect or Download Resume →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
