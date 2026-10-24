"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { CLASSIFIED_SKILL_GROUPS } from "@/lib/portfolio-data";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const COMPLETE_RESUME_SKILLS = [
  "Python",
  "SQL",
  "R",
  "Object-Oriented Programming",
  "Data Structures & Algorithms",
  "Functions & Modules",
  "Exception Handling",
  "File Handling",
  "API Integration",
  "REST API Development",
  "JSON",
  "Async Programming",
  "Backend Development",
  "Debugging",
  "Virtual Environments",
  "Package Management",
  "Flask",
  "FastAPI",
  "Uvicorn",
  "Pydantic",
  "Pandas",
  "NumPy",
  "Scikit-learn",
  "XGBoost",
  "LightGBM",
  "Random Forest",
  "SVM",
  "PCA",
  "Regression & Classification",
  "Clustering",
  "TensorFlow",
  "Keras",
  "CNN",
  "OpenCV",
  "Pillow",
  "NLTK",
  "TF-IDF & Word2Vec",
  "Transformers",
  "Sentence Transformers",
  "ChromaDB",
  "FAISS",
  "BeautifulSoup",
  "PyPDF2",
  "python-docx",
  "openpyxl",
  "HTTPX",
  "Machine Learning",
  "Deep Learning",
  "NLP",
  "Computer Vision",
  "LLMs",
  "Generative AI",
  "RAG",
  "Embeddings",
  "AI Agents",
  "AWS S3",
  "Amazon EC2",
  "AWS Lambda",
  "Docker",
  "MLflow",
  "CI/CD",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "SQLite",
  "Supabase",
  "Neon",
  "Aiven",
  "Power BI",
  "Tableau",
  "Matplotlib",
  "Seaborn",
  "Plotly",
  "Git",
  "GitHub",
  "Playwright",
  "Browser Automation",
  "PyAutoGUI",
  "React / Next.js",
];

export function SkillsClassifiedSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeId, setActiveId] = useState<string>(CLASSIFIED_SKILL_GROUPS[0].id);

  const activeGroup = CLASSIFIED_SKILL_GROUPS.find((g) => g.id === activeId) ?? CLASSIFIED_SKILL_GROUPS[0];

  useGSAP(
    () => {
      gsap.fromTo(
        ".skill-cat-card",
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
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
      id="skills"
      className="relative w-full py-28 md:py-40 tech-grid-bg overflow-hidden"
      aria-label="Classified Technical Skills and Capabilities"
    >
      <div className="mx-auto max-w-7xl px-[max(5.6vw,2rem)]">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-900 text-white font-mono text-[11px] uppercase tracking-[0.18em]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Skills · 8 Engineering Domains · 75+ Real Tools
            </span>
            <span className="font-mono text-xs text-gray-500 tracking-widest">
              PYTHON · FASTAPI · ML/DL · OPENCV · RAG & AGENTS · POSTGRESQL · DOCKER & AWS
            </span>
          </div>
          <h2 className="max-w-5xl font-albert font-light text-[clamp(2.35rem,4.5vw,4.5rem)] leading-[1.05] tracking-[-0.04em] text-gray-900">
            Complete technical inventory, structured by engineering responsibility.
          </h2>
        </div>

        {/* Top Interactive Inspector: 12-Column Gapless Bento (5 Col Domain Selector + 7 Col Deep Skill Matrix) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 grid-flow-dense gap-6 mb-12 items-stretch">
          {/* Left 5 Columns: 8 Classified Category Buttons */}
          <div className="lg:col-span-5 glass rounded-[2.25rem] p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-900/10">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-sky-800">
                  SELECT SKILL CLASSIFICATION
                </span>
                <span className="font-mono text-xs text-gray-500">
                  {activeGroup.index} / 08
                </span>
              </div>

              <div className="space-y-2">
                {CLASSIFIED_SKILL_GROUPS.map((group) => {
                  const isSelected = group.id === activeId;
                  return (
                    <button
                      key={group.id}
                      type="button"
                      onClick={() => setActiveId(group.id)}
                      onMouseEnter={() => setActiveId(group.id)}
                      className={
                        "w-full text-left rounded-2xl px-4 py-3.5 transition-all duration-200 flex items-center justify-between border " +
                        (isSelected
                          ? "bg-gray-900 text-white border-gray-900 shadow-lg"
                          : "bg-white/70 text-gray-800 border-white/80 hover:bg-white")
                      }
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={
                            "font-mono text-xs " + (isSelected ? "text-sky-400" : "text-gray-400")
                          }
                        >
                          {group.index}
                        </span>
                        <span className="font-albert text-sm font-medium">
                          {group.category}
                        </span>
                      </div>
                      <span
                        className={
                          "font-mono text-[10px] px-2.5 py-0.5 rounded-full " +
                          (isSelected ? "bg-white/15 text-white" : "bg-gray-900/5 text-gray-600")
                        }
                      >
                        {group.skills.length} areas
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-900/10 flex items-center justify-between font-mono text-[11px] text-gray-500">
              <span>HOVER OR CLICK ANY DOMAIN</span>
              <span className="text-sky-800">{COMPLETE_RESUME_SKILLS.length} VERIFIED SKILLS</span>
            </div>
          </div>

          {/* Right 7 Columns: Active Category Detailed Skill Breakdown */}
          <div
            onMouseMove={handlePointerSpot}
            className="lg:col-span-7 obsidian-surface rounded-[2.25rem] p-7 md:p-10 text-white flex flex-col justify-between"
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-6 border-b border-white/10">
                <div>
                  <span
                    className="font-mono text-xs uppercase tracking-[0.18em]"
                    style={{ color: activeGroup.accent }}
                  >
                    CLASSIFICATION {activeGroup.index} · {activeGroup.proficiencyTag}
                  </span>
                  <h3 className="font-albert text-2xl md:text-4xl font-light text-white mt-1">
                    {activeGroup.category}
                  </h3>
                </div>
                <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 font-mono text-xs text-white">
                  {activeGroup.highlightMetric}
                </span>
              </div>

              <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-8">
                {activeGroup.summary}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {activeGroup.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="rounded-2xl bg-white/[0.05] border border-white/10 p-4 hover:border-white/25 transition-colors"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="font-albert text-sm font-semibold text-white">
                        {skill.name}
                      </span>
                      <span
                        className="font-mono text-[10px] px-2 py-0.5 rounded-full"
                        style={{
                          backgroundColor: activeGroup.accent + "22",
                          color: activeGroup.accent,
                        }}
                      >
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-xs text-gray-300 leading-snug">
                      {skill.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-gray-400">
              <span>APPLIED ACROSS 6 REAL PROJECTS</span>
              <a href="#projects" className="text-white hover:text-sky-300 transition-colors">
                See Projects Using {activeGroup.category} ↑
              </a>
            </div>
          </div>
        </div>

        {/* Complete 8-Category At-a-Glance Classified Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {CLASSIFIED_SKILL_GROUPS.map((group) => {
            const isCurrent = group.id === activeId;
            return (
              <div
                key={group.id}
                onClick={() => setActiveId(group.id)}
                className={
                  "skill-cat-card cursor-pointer rounded-3xl p-6 transition-all duration-300 border flex flex-col justify-between " +
                  (isCurrent
                    ? "bg-white border-gray-900 shadow-lg"
                    : "glass-card")
                }
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs text-gray-500">
                      {group.index} // DOMAIN
                    </span>
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: group.accent }} />
                  </div>
                  <h4 className="font-albert text-lg font-medium text-gray-900 mb-3">
                    {group.category}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((s) => (
                      <span
                        key={s.name}
                        className="px-2.5 py-1 rounded-full font-mono text-[11px] bg-gray-900/[0.06] text-gray-800 border border-gray-900/10"
                      >
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
