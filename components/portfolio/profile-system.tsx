"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const MARQUEE_ITEMS = [
  "SOFTWARE ENGINEER · AI ENGINEER · DATA SCIENTIST · AI PRODUCT ENGINEER",
  "01 · CROP YIELD PREDICTION SYSTEM · R² ≈ 0.85 · -23% RMSE · 50K+ RECORDS",
  "02 · REAL-TIME OBSTACLE DETECTION · ~88% ACCURACY · -20% FALSE POSITIVES",
  "03 · RICE LEAF DISEASE DETECTION & MNIST · TENSORFLOW · KERAS · CNN · OPENCV",
  "04 · PORTUGUESE BANK MARKETING ANALYSIS · PYTHON · PANDAS · SCIKIT-LEARN · EDA",
  "05 · MAXI AI ASSISTANT · MULTI-MODEL LLMS · OPENROUTER · PLAYWRIGHT AGENTS",
  "06 · CAREERFLUX AI · FASTAPI · NEXT.JS · POSTGRESQL · SUPABASE",
];

const BIO_PARAGRAPHS = [
  "I'm a Data Scientist, AI Engineer, and AI Product Engineer with a B.Tech in Electronics & Communication Engineering (2025) and hands-on Data Science training (Datamites). I work across the full AI lifecycle — from data collection, EDA and feature engineering to model training, REST APIs, cloud deployment and agentic AI workflows.",
  "Beyond models, I build complete products: AI-powered apps and websites, agentic assistants and clean, usable interfaces — turning machine learning into tools people actually use.",
];

const WORKFLOW_STAGES = [
  "01 Problem Definition",
  "02 Requirements Analysis",
  "03 Data / System Design",
  "04 Data Collection",
  "05 Data Validation",
  "06 Data Cleaning",
  "07 Exploratory Data Analysis",
  "08 Feature Engineering",
  "09 Model / Algorithm Selection",
  "10 Implementation",
  "11 Testing & Evaluation",
  "12 API / App Integration",
  "13 Containerization (Docker)",
  "14 Cloud Deployment (AWS)",
  "15 Monitoring & Improvement",
];

const CORE_CAPABILITY_HIGHLIGHTS = [
  {
    metric: "R² ≈ 0.85 / -23% RMSE",
    label: "Crop Yield Prediction (50K+ Records)",
    detail:
      "Processed 50,000+ agricultural records using Python, Pandas, NumPy, PCA dimensionality reduction, XGBoost regression, AWS S3, and Power BI.",
  },
  {
    metric: "~88% Acc / -20% FP",
    label: "Real-Time Obstacle Detection & Edge AI",
    detail:
      "Built a Random Forest classifier on IoT sensor observations with a Flask REST API and AWS Lambda execution for smart mobility.",
  },
  {
    metric: "CNN · OpenCV · MNIST",
    label: "Computer Vision & Deep Learning",
    detail:
      "Developed Rice Leaf Disease Detection and Handwritten Digit (MNIST) image classification pipelines in TensorFlow, Keras, and OpenCV.",
  },
  {
    metric: "LLMs · RAG · Agents",
    label: "Maxi AI Assistant & CareerFlux AI",
    detail:
      "Architected multi-model AI workflows with OpenRouter, Playwright browser automation, FastAPI, PostgreSQL/Supabase, ChromaDB, and FAISS.",
  },
];

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const wordsContainerRef = useRef<HTMLDivElement>(null);
  const paragraphWords = BIO_PARAGRAPHS.map((p) => p.split(" "));

  useGSAP(
    () => {
      const wordSpans = wordsContainerRef.current?.querySelectorAll(".gsap-word");
      if (wordSpans && wordSpans.length > 0) {
        gsap.fromTo(
          wordSpans,
          { opacity: 0.16, y: 8 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.035,
            ease: "power2.out",
            scrollTrigger: {
              trigger: wordsContainerRef.current,
              start: "top 84%",
              end: "bottom 46%",
              scrub: 0.5,
            },
          }
        );
      }

      gsap.fromTo(
        ".about-bento-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.14,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-bento-grid",
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
      id="about"
      className="relative w-full pb-28 md:pb-40 tech-grid-bg overflow-hidden"
      aria-label="About Kudum Veerabhadraiah and Engineering Workflow"
    >
      {/* Top Infinite Telemetry Marquee */}
      <div className="w-full border-y border-gray-900/10 bg-white/65 backdrop-blur-md py-4 mb-24 md:mb-36 overflow-hidden">
        <div className="animate-marquee flex items-center gap-10">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <div key={i} className="flex items-center gap-10 shrink-0">
              <span className="font-mono text-[11px] tracking-[0.22em] text-gray-800 uppercase">
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-sky-600" />
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-[max(5.6vw,2rem)]">
        {/* Wide Editorial Intro + GSAP Word Scrub */}
        <div className="mb-20 md:mb-28">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-gray-900 text-white font-mono text-[11px] uppercase tracking-[0.18em]">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              About · Identity & End-to-End Engineering
            </div>
            <span className="font-mono text-xs text-gray-500 tracking-widest">
              BANGALORE, INDIA · B.TECH ECE 2025 · DATAMITES DATA SCIENCE
            </span>
          </div>

          <h2 className="max-w-6xl font-albert font-light text-[clamp(2.4rem,4.7vw,4.65rem)] leading-[1.05] tracking-[-0.04em] text-gray-900 mb-10">
            Combining software engineering discipline with
            <span
              className="inline-block w-24 md:w-32 h-9 md:h-12 rounded-full align-middle bg-cover bg-center mx-3 border-2 border-white shadow-[0_8px_24px_rgba(15,23,42,0.14)]"
              style={{
                backgroundImage: "url(/images/Reveal_image_desktop.png)",
                filter: "contrast(1.15) saturate(1.1)",
              }}
              aria-hidden="true"
            />
            measurable machine learning & AI systems.
          </h2>

          <div
            ref={wordsContainerRef}
            className="max-w-5xl font-albert font-normal text-[clamp(1.3rem,2.2vw,1.95rem)] leading-[1.44] tracking-[-0.02em] text-gray-900"
          >
            {paragraphWords.map((para, pIdx) => (
              <p key={pIdx} className={pIdx > 0 ? "mt-6" : ""}>
                {para.map((word, idx) => (
                  <span
                    key={idx}
                    className="gsap-word inline-block mr-[0.3em] will-change-[opacity,transform]"
                  >
                    {word}
                  </span>
                ))}
              </p>
            ))}
          </div>
        </div>

        {/* Gapless 12-Column Bento Grid: 5 Col Career Focus & Workflow + 7 Col Verified Project & Training Proof */}
        <div className="about-bento-grid grid grid-cols-1 lg:grid-cols-12 grid-flow-dense gap-6 items-stretch">
          {/* Left 5 Columns: Career Focus & 15-Stage Engineering + Data Science Workflow */}
          <div
            onMouseMove={handlePointerSpot}
            className="about-bento-card lg:col-span-5 glass rounded-[2.25rem] p-8 md:p-10 flex flex-col justify-between"
          >
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-sky-800">
                HOW I BUILD · 15-STAGE WORKFLOW
              </span>
              <h3 className="font-albert text-2xl md:text-3xl font-normal tracking-tight text-gray-900 mt-2 mb-4">
                From problem definition to API integration & cloud deployment
              </h3>
              <p className="text-sm leading-relaxed text-gray-700 mb-6">
                Strong foundation in Python, SQL, REST APIs, Flask, FastAPI, Docker, AWS, MLflow, Scikit-learn, XGBoost, LightGBM, TensorFlow/Keras, OpenCV, NLP, RAG, ChromaDB/FAISS, and AI Agents.
              </p>

              <div className="rounded-2xl bg-white/75 border border-white/90 p-4 mb-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-sky-700 mb-2.5">
                  ENGINEERING + DATA SCIENCE LIFECYCLE
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {WORKFLOW_STAGES.map((stage) => (
                    <span
                      key={stage}
                      className="px-2.5 py-1 rounded-lg bg-gray-900/[0.06] border border-gray-900/10 font-mono text-[10px] text-gray-800"
                    >
                      {stage}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-white/75 border border-white/90 p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-indigo-700 mb-1.5">
                  PRIMARY TARGET ROLES
                </p>
                <p className="font-albert text-sm font-semibold text-gray-900">
                  Software Engineer · Data Scientist · AI Engineer · Machine Learning Engineer
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  Also aligned for Python Developer, Backend Developer (FastAPI/Flask), Data Analyst, Generative AI Engineer, NLP & Computer Vision roles.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-gray-900/10 flex flex-wrap items-center justify-between gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-900 text-white text-xs font-mono uppercase tracking-wider hover:bg-gray-800 transition-colors"
              >
                Explore All 6 Real Projects ↓
              </a>
              <a
                href="#skills"
                className="font-mono text-xs text-sky-800 hover:text-gray-900 transition-colors"
              >
                View All 65+ Skills →
              </a>
            </div>
          </div>

          {/* Right 7 Columns: Hands-On Data Science Training & Verified Project Proof */}
          <div
            onMouseMove={handlePointerSpot}
            className="about-bento-card lg:col-span-7 obsidian-surface rounded-[2.25rem] p-8 md:p-10 text-white flex flex-col justify-between"
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-6 border-b border-white/10">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-sky-400">
                    HANDS-ON TRAINING & VERIFIED PROJECT OUTCOMES
                  </span>
                  <h3 className="font-albert text-2xl md:text-3xl font-light tracking-tight text-white mt-1">
                    DataMites Data Scientist Training & Applied AI Systems
                  </h3>
                </div>
                <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 font-mono text-xs text-emerald-300">
                  Bangalore, India
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {CORE_CAPABILITY_HIGHLIGHTS.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl bg-white/[0.05] border border-white/10 p-5 hover:border-sky-400/40 transition-colors"
                  >
                    <p className="font-albert text-2xl font-light text-sky-300 mb-1">
                      {item.metric}
                    </p>
                    <p className="font-mono text-xs font-semibold text-white mb-2">
                      {item.label}
                    </p>
                    <p className="text-xs leading-relaxed text-gray-300">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Experience Stack */}
            <div className="pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {[
                  "Python & SQL",
                  "FastAPI & Flask",
                  "XGBoost & LightGBM",
                  "TensorFlow & OpenCV",
                  "LLMs, RAG & Agents",
                  "ChromaDB & FAISS",
                  "Docker, MLflow & AWS",
                  "Power BI & Tableau",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full font-mono text-[11px] bg-white/10 text-gray-200 border border-white/15"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
