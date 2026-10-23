export interface ProjectControl {
  label: string;
  unit: string;
  min: number;
  max: number;
  step: number;
  initial: number;
  weight: number;
}

export interface ProjectPipelineNode {
  stage: string;
  title: string;
  detail: string;
}

export interface OriginalProject {
  slug: string;
  index: string;
  title: string;
  role: string;
  status: string;
  category: string;
  headlineMetric: string;
  secondaryMetric: string;
  metricContext: string;
  svgPath: string;
  accent: string;
  summary: string;
  problemStatement: string;
  systemArchitecture: string;
  engineeringApproach: string[];
  keyFeatures: string[];
  measuredOutcomes: { metric: string; label: string; detail: string }[];
  roadmap: string[];
  skillsDemonstrated: string[];
  technologies: string[];
  pipeline: ProjectPipelineNode[];
  githubUrl: string;
  simulator: {
    title: string;
    outputLabel: string;
    outputUnit: string;
    controls: ProjectControl[];
  };
}

export interface ClassifiedSkillGroup {
  id: string;
  index: string;
  category: string;
  proficiencyTag: string;
  summary: string;
  highlightMetric: string;
  accent: string;
  skills: { name: string; role: string; level: string }[];
}

export interface FounderHrAuditItem {
  lens: "FOUNDER / CTO LENS" | "HR / TECHNICAL RECRUITER LENS";
  title: string;
  severity: "CRITICAL" | "HIGH" | "MEDIUM";
  whatWasWrong: string;
  whyItMatters: string;
  howToCloseGap: string;
}

export const ORIGINAL_PROJECTS: OriginalProject[] = [
  {
    slug: "crop-yield-prediction-system",
    index: "01",
    title: "Crop Yield Prediction System",
    role: "Data Scientist / ML Developer",
    status: "Completed ML Pipeline · AWS S3 & Power BI",
    category: "Data Science · XGBoost Regression · PCA Feature Engineering",
    headlineMetric: "R² = 0.85",
    secondaryMetric: "-23% RMSE",
    metricContext:
      "Processed and analyzed 50,000+ agricultural records with PCA dimensionality reduction, XGBoost regression, AWS S3 storage, and Power BI dashboards.",
    svgPath: "/project glass card svg/Crop_Yield_Prediction_Illustration.svg",
    accent: "#38bdf8",
    summary:
      "Developed a machine-learning solution for crop-yield prediction on 50,000+ agricultural records—combining exploratory data analysis, domain feature engineering, PCA dimensionality reduction, and an XGBoost regression pipeline achieving R² ≈ 0.85 and ~23% RMSE reduction, backed by AWS S3 and Power BI.",
    problemStatement:
      "Regional crop-yield estimation across heterogeneous soil, weather, and agricultural conditions suffers from high feature collinearity and noisy historical records, making baseline regression inaccurate for harvest planning.",
    systemArchitecture:
      "50,000+ Agricultural Records (AWS S3 Cloud Storage) → Data Cleaning & Exploratory Data Analysis (Pandas, NumPy) → Feature Engineering & PCA Dimensionality Reduction (Scikit-learn) → XGBoost Regression Model Training & Evaluation (R², RMSE) → Interactive Power BI Dashboards.",
    engineeringApproach: [
      "Processed, cleaned, and analyzed 50,000+ agricultural records through a reproducible Python, Pandas, and NumPy data preparation workflow.",
      "Conducted exploratory data analysis (EDA) and engineered predictive agro-climatic features while applying Principal Component Analysis (PCA) for dimensionality reduction.",
      "Developed and tuned an XGBoost regression model evaluated on out-of-sample RMSE and R², achieving approximately R² = 0.85 and reducing RMSE by ~23%.",
      "Used AWS S3 for cloud-oriented dataset and artifact storage and built Power BI visualizations to communicate regional yield drivers.",
    ],
    keyFeatures: [
      "50,000+ Agricultural Record Cleaning & Exploratory Data Analysis",
      "Predictive Feature Engineering + PCA Dimensionality Reduction",
      "XGBoost Regression Model Achieving R² ≈ 0.85",
      "~23% RMSE Reduction Through Feature & Model Improvements",
      "AWS S3 Cloud Data Storage & Power BI Analytical Dashboards",
    ],
    measuredOutcomes: [
      { metric: "50,000+", label: "Agricultural Records", detail: "Cleaned, analyzed & feature-engineered dataset" },
      { metric: "R² ≈ 0.85", label: "Model Fit", detail: "High-precision XGBoost regression performance" },
      { metric: "-23% RMSE", label: "Error Reduction", detail: "Achieved via PCA & engineered predictive features" },
    ],
    roadmap: [
      "FastAPI Inference Endpoint for Real-Time Regional Queries",
      "MLflow Experiment Tracking & Automated Seasonal Retraining",
    ],
    skillsDemonstrated: [
      "Data Cleaning & EDA",
      "Feature Engineering",
      "PCA Dimensionality Reduction",
      "XGBoost Regression",
      "RMSE & R² Evaluation",
      "Cloud Storage (AWS S3)",
      "Data Visualization (Power BI)",
    ],
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "XGBoost",
      "PCA",
      "AWS S3",
      "Power BI",
    ],
    pipeline: [
      { stage: "INGESTION", title: "AWS S3 Data Store", detail: "50,000+ raw agricultural & climate records" },
      { stage: "CLEANING & EDA", title: "Pandas & NumPy", detail: "Outlier handling, imputation & statistical EDA" },
      { stage: "FEATURES", title: "PCA & Feature Eng", detail: "Dimensionality reduction & predictive variables" },
      { stage: "MODELING", title: "XGBoost Regressor", detail: "R² ≈ 0.85 with ~23% RMSE reduction" },
      { stage: "ANALYTICS", title: "Power BI Reporting", detail: "Visualizing yield predictions & key drivers" },
    ],
    githubUrl: "https://github.com/bhadra2299",
    simulator: {
      title: "CROP YIELD XGBOOST SIMULATOR",
      outputLabel: "Estimated Yield Index",
      outputUnit: "t/ha",
      controls: [
        { label: "Seasonal Rainfall", unit: "mm", min: 250, max: 1400, step: 15, initial: 820, weight: 0.0018 },
        { label: "PCA Soil & Nutrient Score", unit: "idx", min: 10, max: 100, step: 2, initial: 74, weight: 0.028 },
        { label: "Temperature Variance", unit: "°C", min: -2, max: 6, step: 0.2, initial: 0.8, weight: -0.19 },
      ],
    },
  },
  {
    slug: "real-time-obstacle-detection-system",
    index: "02",
    title: "Real-Time Obstacle Detection System",
    role: "ML Engineer / Software Developer",
    status: "Completed ML + Edge Mobility System · Flask & AWS Lambda",
    category: "Real-Time ML · Random Forest · Flask REST API · Edge Mobility",
    headlineMetric: "~88% Accuracy",
    secondaryMetric: "-20% False Positives",
    metricContext:
      "Sensor-driven obstacle classification using Random Forest, served via a Flask REST API and explored on AWS Lambda for smart mobility and Edge-AI.",
    svgPath: "/project glass card svg/Blind_Stick_Illustration.svg",
    accent: "#34d399",
    summary:
      "Developed a real-time obstacle detection system using IoT sensor data and machine learning for smart mobility—training a Random Forest classification model (~88% accuracy, ~20% fewer false positives), exposing predictions via a Flask REST API, and exploring AWS Lambda and Edge-AI execution.",
    problemStatement:
      "Smart mobility and assistive navigation systems relying on raw single-threshold sensor triggers suffer from frequent false positives in dynamic environments, requiring fast machine-learning classification.",
    systemArchitecture:
      "IoT Sensor Observations → Feature Preparation & Signal Preprocessing (Python) → Random Forest Classification Model (~88% Accuracy, -20% False Positives) → Flask REST API Integration & AWS Lambda Cloud Execution + Edge-AI Mobility Architecture.",
    engineeringApproach: [
      "Processed multi-condition IoT sensor observations and engineered discriminative features tailored for real-time obstacle classification.",
      "Developed and evaluated a Random Forest classification model achieving approximately 88% accuracy while reducing false positives by ~20%.",
      "Built a Flask REST API for low-latency model integration and explored AWS Lambda for serverless cloud execution.",
      "Extended the architecture toward Edge-AI Obstacle Detection for Smart Mobility combining Python, machine learning, computer vision concepts, and sensor data.",
    ],
    keyFeatures: [
      "Sensor Observation Processing & Feature Engineering Pipeline",
      "Random Forest Classifier with ~88% Obstacle Detection Accuracy",
      "~20% Reduction in False-Positive Hazard Alerts",
      "Flask REST API for Real-Time Application Integration",
      "AWS Lambda Cloud Execution & Edge-AI Smart Mobility Architecture",
    ],
    measuredOutcomes: [
      { metric: "~88%", label: "Classification Accuracy", detail: "Random Forest model on sensor observations" },
      { metric: "-20%", label: "False Positives", detail: "Significant reduction in false obstacle alerts" },
      { metric: "REST + Cloud", label: "Flask & AWS Lambda", detail: "API integration built for real-time prediction" },
    ],
    roadmap: [
      "On-Device Edge-AI Quantization for Offline Smart Mobility",
      "Camera + Ultrasonic Multi-Modal Computer Vision Fusion",
    ],
    skillsDemonstrated: [
      "Machine Learning Classification",
      "Random Forest Modeling",
      "Sensor Data Feature Engineering",
      "Flask REST API Development",
      "AWS Lambda Cloud Execution",
      "Edge-AI System Design",
    ],
    technologies: [
      "Python",
      "Random Forest",
      "Scikit-learn",
      "Flask",
      "REST API",
      "AWS Lambda",
      "IoT Sensor Data",
      "Computer Vision",
      "Edge AI",
    ],
    pipeline: [
      { stage: "SENSORS", title: "IoT Sensor Stream", detail: "Raw distance & environmental observations" },
      { stage: "FEATURES", title: "Signal Preparation", detail: "Noise filtering & feature extraction in Python" },
      { stage: "MODEL", title: "Random Forest", detail: "~88% accuracy & ~20% false-positive reduction" },
      { stage: "API LAYER", title: "Flask REST API", detail: "Real-time prediction endpoint for integration" },
      { stage: "EXECUTION", title: "AWS Lambda & Edge", detail: "Serverless cloud & smart mobility deployment" },
    ],
    githubUrl: "https://github.com/bhadra2299",
    simulator: {
      title: "OBSTACLE DETECTION CONFIDENCE SIMULATOR",
      outputLabel: "Obstacle Detection Confidence",
      outputUnit: "%",
      controls: [
        { label: "Sensor Proximity Signal", unit: "cm", min: 15, max: 300, step: 5, initial: 85, weight: -0.08 },
        { label: "Signal-to-Noise Ratio", unit: "dB", min: 10, max: 60, step: 2, initial: 42, weight: 0.45 },
        { label: "Multi-Sensor Agreement", unit: "%", min: 40, max: 100, step: 2, initial: 88, weight: 0.55 },
      ],
    },
  },
  {
    slug: "rice-leaf-disease-detection",
    index: "03",
    title: "Rice Leaf Disease Detection",
    role: "AI / Deep Learning Project",
    status: "Completed Deep Learning & Computer Vision Pipeline",
    category: "Computer Vision · Deep Learning · CNN · TensorFlow & OpenCV",
    headlineMetric: "CNN Vision",
    secondaryMetric: "TensorFlow · OpenCV",
    metricContext:
      "End-to-end computer-vision workflow for automated plant disease identification from rice leaf imagery, paired with MNIST neural classification foundations.",
    svgPath: "/project glass card svg/NLP_Project_Illustration.svg",
    accent: "#fbbf24",
    summary:
      "Developed a computer-vision-based deep learning workflow for detecting agricultural diseases from rice leaf images—performing OpenCV image preprocessing, pixel normalization, and Convolutional Neural Network (CNN) training and evaluation in TensorFlow and Keras.",
    problemStatement:
      "Manual visual inspection of rice crop leaf diseases is slow and error-prone across large farms, requiring an automated computer-vision and deep-learning classification workflow.",
    systemArchitecture:
      "Rice Leaf Image Dataset → Image Preprocessing, Resizing & Pixel Normalization (OpenCV, Pillow, NumPy) → Convolutional Neural Network (CNN) Architecture (TensorFlow, Keras) → Model Training, Validation & Automated Disease Identification.",
    engineeringApproach: [
      "Curated and prepared multi-class rice leaf image datasets, handling class balance and train/validation/test splits.",
      "Applied computer vision preprocessing and pixel normalization using OpenCV to isolate leaf lesions and reduce background noise.",
      "Designed and trained a Convolutional Neural Network (CNN) architecture using TensorFlow and Keras for automated disease classification.",
      "Complemented with a full Handwritten Digit Classification (MNIST) neural-network lifecycle study in TensorFlow/Keras to solidify deep learning image-classification fundamentals.",
    ],
    keyFeatures: [
      "Automated Rice Leaf Image Dataset Preparation & Augmentation",
      "OpenCV Computer Vision Preprocessing & Pixel Normalization",
      "Custom CNN Architecture Trained in TensorFlow & Keras",
      "Multi-Class Plant Disease Classification & Performance Evaluation",
      "Includes MNIST Handwritten Digit Deep Learning Classification Pipeline",
    ],
    measuredOutcomes: [
      { metric: "CNN + OpenCV", label: "Deep Vision Stack", detail: "End-to-end image preprocessing & neural inference" },
      { metric: "TensorFlow", label: "Keras Training Loop", detail: "Supervised multi-class leaf disease recognition" },
      { metric: "2 Vision Pipelines", label: "Rice Leaf + MNIST", detail: "Complete image classification lifecycle mastery" },
    ],
    roadmap: [
      "Transfer Learning Benchmark (ResNet50 / MobileNetV2)",
      "FastAPI + Streamlit Web Upload Interface for Field Diagnostics",
    ],
    skillsDemonstrated: [
      "Computer Vision",
      "Deep Learning (CNN)",
      "Image Preprocessing & Normalization",
      "TensorFlow & Keras",
      "OpenCV",
      "Image Classification Evaluation",
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "Keras",
      "CNN",
      "OpenCV",
      "Pillow",
      "NumPy",
      "MNIST",
    ],
    pipeline: [
      { stage: "DATASET", title: "Leaf Image Corpus", detail: "Labeled rice leaf disease & MNIST image sets" },
      { stage: "OPENCV", title: "Vision Preprocessing", detail: "Filtering, resizing & pixel normalization" },
      { stage: "CNN ARCH", title: "Conv2D & Pooling", detail: "Hierarchical spatial feature extraction" },
      { stage: "TRAINING", title: "TensorFlow / Keras", detail: "Supervised optimization & validation split" },
      { stage: "DIAGNOSIS", title: "Disease Classification", detail: "Automated plant pathology identification" },
    ],
    githubUrl: "https://github.com/bhadra2299",
    simulator: {
      title: "CNN IMAGE CLASSIFICATION SIMULATOR",
      outputLabel: "Softmax Classification Confidence",
      outputUnit: "%",
      controls: [
        { label: "Image Resolution & Clarity", unit: "%", min: 40, max: 100, step: 5, initial: 85, weight: 0.42 },
        { label: "OpenCV Lesion Contrast", unit: "%", min: 30, max: 100, step: 5, initial: 80, weight: 0.35 },
        { label: "CNN Feature Activation", unit: "%", min: 50, max: 100, step: 2, initial: 88, weight: 0.22 },
      ],
    },
  },
  {
    slug: "portuguese-bank-marketing-analysis",
    index: "04",
    title: "Portuguese Bank Marketing Analysis",
    role: "Data Science Project",
    status: "Completed Data Science & Business Analytics Study",
    category: "Data Science · Exploratory Data Analysis · Customer Behavior & ML",
    headlineMetric: "Campaign EDA",
    secondaryMetric: "Scikit-learn · Seaborn",
    metricContext:
      "In-depth customer behavior and marketing campaign conversion analysis using Python, Pandas, NumPy, Scikit-learn, Matplotlib, and Seaborn.",
    svgPath: "/project glass card svg/ChatGPT_Image_Aug_19__2026__10_31_23_PM.svg",
    accent: "#f472b6",
    summary:
      "Analyzed Portuguese banking customer and marketing campaign datasets to uncover the demographic, financial, and interaction variables driving term-deposit subscription outcomes—cleaning raw records, conducting statistical EDA, visualizing business patterns, and preparing features for machine-learning experimentation.",
    problemStatement:
      "Direct banking marketing campaigns face low conversion rates and high outreach costs when targeting customers without data-driven segmentation of demographic and historical campaign variables.",
    systemArchitecture:
      "Raw Bank Marketing & Customer Dataset → Data Cleaning, Missing-Value Handling & Encoding (Pandas, NumPy) → Statistical Exploratory Data Analysis & Correlation Study → Business Pattern Visualization (Matplotlib, Seaborn) → Machine Learning Experimentation Readiness (Scikit-learn).",
    engineeringApproach: [
      "Cleaned and validated multi-attribute customer and campaign datasets using Pandas and NumPy, resolving categorical encoding and data anomalies.",
      "Conducted comprehensive Exploratory Data Analysis (EDA) to investigate customer behavior patterns and conversion drivers.",
      "Analyzed multivariate relationships across age, job segment, contact frequency, previous campaign outcomes, and macroeconomic indicators.",
      "Created clear statistical visualizations with Matplotlib and Seaborn and structured the feature matrix for Scikit-learn classification models.",
    ],
    keyFeatures: [
      "End-to-End Customer & Campaign Dataset Cleaning Pipeline",
      "Deep Exploratory Data Analysis (EDA) on Conversion Drivers",
      "Customer Behavior & Demographic Segmentation Analysis",
      "Statistical Business Visualizations in Matplotlib & Seaborn",
      "ML-Ready Feature Matrix Preparation in Scikit-learn",
    ],
    measuredOutcomes: [
      { metric: "Full EDA", label: "Campaign Conversion", detail: "Identified key drivers of term-deposit subscriptions" },
      { metric: "Multivariate", label: "Behavior Patterns", detail: "Correlated customer profiles with campaign outcomes" },
      { metric: "ML-Ready", label: "Scikit-learn Pipeline", detail: "Structured clean feature sets for classification" },
    ],
    roadmap: [
      "XGBoost & LightGBM Propensity Scoring Benchmark",
      "Interactive Tableau / Power BI Campaign Targeting Dashboard",
    ],
    skillsDemonstrated: [
      "Exploratory Data Analysis (EDA)",
      "Data Cleaning & Preprocessing",
      "Customer Behavior Analytics",
      "Statistical Visualization",
      "Feature Preparation for ML",
    ],
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Seaborn",
    ],
    pipeline: [
      { stage: "RAW DATA", title: "Bank Campaign Records", detail: "Customer demographics & outreach logs" },
      { stage: "CLEANING", title: "Pandas Preprocessing", detail: "Anomaly resolution & categorical encoding" },
      { stage: "EDA", title: "Behavior Investigation", detail: "Conversion rate analysis across segments" },
      { stage: "VISUALS", title: "Seaborn & Matplotlib", detail: "Distribution & correlation storytelling" },
      { stage: "ML PREP", title: "Scikit-learn Features", detail: "Prepared dataset for propensity modeling" },
    ],
    githubUrl: "https://github.com/bhadra2299",
    simulator: {
      title: "CAMPAIGN CONVERSION PROPENSITY SIMULATOR",
      outputLabel: "Estimated Subscription Propensity",
      outputUnit: "%",
      controls: [
        { label: "Prior Campaign Engagement", unit: "%", min: 10, max: 100, step: 5, initial: 70, weight: 0.45 },
        { label: "Call Duration & Follow-up", unit: "idx", min: 10, max: 100, step: 5, initial: 75, weight: 0.32 },
        { label: "Segment Fit Score", unit: "%", min: 20, max: 100, step: 5, initial: 80, weight: 0.21 },
      ],
    },
  },
  {
    slug: "maxi-ai-assistant",
    index: "05",
    title: "Maxi AI Assistant",
    role: "Generative AI / AI Agents Project",
    status: "Conceptualized & In-Build · Multi-Model Agentic Assistant",
    category: "Generative AI · AI Agents · OpenRouter · Browser Automation",
    headlineMetric: "Multi-LLM + Agents",
    secondaryMetric: "OpenRouter · Playwright",
    metricContext:
      "Multi-model AI assistant combining OpenRouter LLM integration, standard conversational mode, and advanced agentic browser automation via Playwright.",
    svgPath: "/project glass card svg/Maxi_AI_Illustration.svg",
    accent: "#818cf8",
    summary:
      "Conceptualized and architected a multi-model AI assistant capable of both standard conversational interaction and advanced agentic workflows—integrating multiple LLMs via OpenRouter with Playwright browser automation, tool-based execution, and multi-step AI workflows.",
    problemStatement:
      "Standard single-model chat interfaces cannot autonomously execute multi-step web tasks, automate browser interactions, or dynamically switch across specialized LLMs through a unified API.",
    systemArchitecture:
      "User Prompt / Task Specification → Python Orchestration Layer & OpenRouter Multi-Model LLM Gateway → Dual Execution Modes (Standard Conversational Mode + Advanced Agent Mode) → Tool-Based Execution & Playwright Browser Automation.",
    engineeringApproach: [
      "Integrated multi-model LLM access using OpenRouter in Python to unify diverse frontier and open-weight models behind a single interface.",
      "Designed a dual-mode interaction architecture supporting both fast standard conversational chat and autonomous advanced agent mode.",
      "Built tool-based execution pipelines enabling the assistant to decompose complex prompts into multi-step AI workflows.",
      "Integrated Playwright browser automation so agentic workflows can navigate pages, extract live context, and execute web actions.",
    ],
    keyFeatures: [
      "Multi-Model LLM Integration via OpenRouter API",
      "Dual Mode: Standard Conversational Mode & Advanced Agent Mode",
      "Playwright Integration for Autonomous Browser Automation",
      "Tool-Based Execution & Multi-Step Agentic AI Workflows",
      "Document & Web Context Extraction (BeautifulSoup, PyPDF2, HTTPX)",
    ],
    measuredOutcomes: [
      { metric: "OpenRouter", label: "Multi-LLM Gateway", detail: "Unified access to multiple foundation models" },
      { metric: "Playwright", label: "Browser Automation", detail: "Agentic web navigation & action execution" },
      { metric: "Dual Mode", label: "Chat + Agent Loops", detail: "Conversational Q&A + multi-step tool workflows" },
    ],
    roadmap: [
      "ChromaDB / FAISS Long-Term Vector Memory Persistence",
      "FastAPI Streaming Backend & Next.js Web Workspace",
    ],
    skillsDemonstrated: [
      "Generative AI & LLMs",
      "AI Agents & Multi-Step Workflows",
      "OpenRouter API Integration",
      "Browser Automation (Playwright)",
      "Tool-Based Execution",
      "Python Async & HTTPX",
    ],
    technologies: [
      "Python",
      "LLMs",
      "OpenRouter",
      "Playwright",
      "AI Agents",
      "Browser Automation",
      "HTTPX",
      "BeautifulSoup",
    ],
    pipeline: [
      { stage: "INPUT", title: "User Prompt / Goal", detail: "Conversational query or multi-step agent goal" },
      { stage: "GATEWAY", title: "OpenRouter LLMs", detail: "Multi-model LLM selection & orchestration" },
      { stage: "MODE", title: "Chat vs. Agent Router", detail: "Standard conversational or advanced agent mode" },
      { stage: "TOOLS", title: "Playwright Automation", detail: "Browser automation & tool-based execution" },
      { stage: "OUTPUT", title: "Multi-Step Synthesis", detail: "Completed workflow result & structured response" },
    ],
    githubUrl: "https://github.com/bhadra2299",
    simulator: {
      title: "MAXI AGENT WORKFLOW SIMULATOR",
      outputLabel: "Workflow Completion Reliability",
      outputUnit: "%",
      controls: [
        { label: "Task Step Complexity", unit: "steps", min: 1, max: 10, step: 1, initial: 6, weight: 3.1 },
        { label: "Playwright Tool Calls", unit: "calls", min: 1, max: 20, step: 1, initial: 8, weight: 0.9 },
        { label: "Model Reasoning Tier", unit: "%", min: 50, max: 100, step: 5, initial: 90, weight: 0.65 },
      ],
    },
  },
  {
    slug: "careerflux-ai",
    index: "06",
    title: "CareerFlux AI",
    role: "AI Product / Generative AI",
    status: "Conceptualized & In-Build · AI Career Platform",
    category: "Generative AI Product · FastAPI · Next.js · PostgreSQL / Supabase",
    headlineMetric: "9 Core Modules",
    secondaryMetric: "FastAPI · Next.js · LLMs",
    metricContext:
      "AI-driven career platform focused on ATS resume optimization, resume scoring, job-fit analysis, AI career coaching, and personalized learning roadmaps.",
    svgPath: "/project glass card svg/ChatGPT_Image_Aug_19__2026__10_31_23_PM.svg",
    accent: "#a78bfa",
    summary:
      "Conceptualized and designed an AI-driven career platform focused on ATS resume building, resume scoring, job-fit analysis, AI career coaching, personalized career roadmaps, job recommendations, and skill-gap analysis—using Python, FastAPI, PostgreSQL, Supabase, React/Next.js, and Stripe/Razorpay subscription architecture.",
    problemStatement:
      "Candidates applying for software, data science, and AI roles struggle to align their resumes with ATS filters, quantify their skill gaps against target job descriptions, and follow a structured career roadmap.",
    systemArchitecture:
      "React / Next.js Frontend → Python FastAPI Backend & REST APIs → LLM & RAG Processing (PyPDF2, python-docx, Embeddings) → PostgreSQL & Supabase Persistence → Stripe & Razorpay Subscription Architecture + Admin Analytics.",
    engineeringApproach: [
      "Designed an ATS Resume Builder, Resume Scoring engine, and Job-Fit Analysis workflow that compares candidate resumes against target job descriptions.",
      "Architected an AI Career Coach and Personalized Career Roadmap generator alongside automated Job Recommendations and Skill-Gap Analysis.",
      "Structured the full-stack product architecture around Python, FastAPI, PostgreSQL, Supabase, and React/Next.js.",
      "Planned SaaS monetization and operations modules including Stripe and Razorpay subscription architecture and Admin Analytics.",
    ],
    keyFeatures: [
      "ATS Resume Builder & Automated Resume Scoring",
      "Deep Job-Fit Analysis & Skill-Gap Diagnostics",
      "AI Career Coach & Personalized Career Roadmaps",
      "Targeted Job Recommendations Engine",
      "Subscription Architecture (Stripe & Razorpay) + Admin Analytics",
    ],
    measuredOutcomes: [
      { metric: "9 Modules", label: "Product Architecture", detail: "ATS Builder, Scoring, Job-Fit, Coach, Roadmap & more" },
      { metric: "Full-Stack", label: "FastAPI + Next.js", detail: "Backed by PostgreSQL, Supabase & Cloud deployment" },
      { metric: "SaaS Ready", label: "Stripe & Razorpay", detail: "Designed with subscription billing & admin analytics" },
    ],
    roadmap: [
      "Public Live MVP Deployment on Vercel & Cloud Backend",
      "Vector Job Matching with Sentence Transformers & ChromaDB/FAISS",
    ],
    skillsDemonstrated: [
      "AI Product Architecture",
      "Generative AI & LLM Integration",
      "FastAPI Backend Design",
      "PostgreSQL & Supabase",
      "React / Next.js Frontend",
      "SaaS Subscription Design",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "React / Next.js",
      "PostgreSQL",
      "Supabase",
      "AI / LLMs",
      "Stripe",
      "Razorpay",
      "Cloud Deployment",
    ],
    pipeline: [
      { stage: "RESUME & JD", title: "Document Parsing", detail: "Resume ingestion & job description extraction" },
      { stage: "SCORING", title: "ATS & Job-Fit Engine", detail: "Resume scoring & skill-gap analysis" },
      { stage: "COACHING", title: "AI Coach & Roadmap", detail: "Personalized career roadmap & job recommendations" },
      { stage: "BACKEND", title: "FastAPI & Supabase", detail: "PostgreSQL persistence & REST API endpoints" },
      { stage: "SAAS OPS", title: "Billing & Analytics", detail: "Stripe / Razorpay subscriptions & admin telemetry" },
    ],
    githubUrl: "https://github.com/bhadra2299",
    simulator: {
      title: "CAREERFLUX ATS & JOB-FIT SIMULATOR",
      outputLabel: "Projected ATS & Job-Fit Score",
      outputUnit: "%",
      controls: [
        { label: "ATS Keyword Alignment", unit: "%", min: 20, max: 100, step: 2, initial: 86, weight: 0.48 },
        { label: "Skill-Gap Coverage", unit: "%", min: 20, max: 100, step: 5, initial: 80, weight: 0.32 },
        { label: "Quantified Project Impact", unit: "%", min: 10, max: 100, step: 5, initial: 85, weight: 0.20 },
      ],
    },
  },
];

export const CLASSIFIED_SKILL_GROUPS: ClassifiedSkillGroup[] = [
  {
    id: "programming-se",
    index: "01",
    category: "Programming & Software Engineering",
    proficiencyTag: "CORE ENGINEERING FOUNDATION",
    summary:
      "Clean, modular software engineering in Python, SQL, and R—grounded in Object-Oriented Programming, Data Structures & Algorithms fundamentals, exception/file handling, and debugging.",
    highlightMetric: "Python · SQL · R · OOP · DSA",
    accent: "#38bdf8",
    skills: [
      { name: "Python", role: "Primary language for ML, backend APIs, automation & AI systems", level: "Core" },
      { name: "SQL", role: "Relational querying, joins, aggregations & analytical data modeling", level: "Core" },
      { name: "R", role: "Statistical analysis & data exploration", level: "Working" },
      { name: "Object-Oriented Programming (OOP)", role: "Modular class hierarchies, encapsulation & reusable code", level: "Core" },
      { name: "Data Structures & Algorithms", role: "Foundational problem solving, complexity & algorithmic logic", level: "Core" },
      { name: "Functions, Modules & File Handling", role: "Structured package architecture, I/O & exception handling", level: "Core" },
      { name: "Debugging & Virtual Environments", role: "Systematic troubleshooting, venv/pip package management", level: "Core" },
    ],
  },
  {
    id: "backend-apis",
    index: "02",
    category: "Backend & API Development",
    proficiencyTag: "PRODUCTION SERVICE LAYER",
    summary:
      "Designing and integrating synchronous and asynchronous REST APIs for ML model serving and AI applications using FastAPI, Flask, Uvicorn, Pydantic, and HTTPX.",
    highlightMetric: "FastAPI · Flask · REST APIs · Async",
    accent: "#34d399",
    skills: [
      { name: "FastAPI & Uvicorn", role: "High-performance async Python APIs & ASGI serving", level: "Core" },
      { name: "Flask", role: "Lightweight REST API endpoints for real-time ML model integration", level: "Core" },
      { name: "REST API Development & Integration", role: "JSON payload design, status codes & external API consumption", level: "Core" },
      { name: "Pydantic", role: "Strict request/response schema validation & data parsing", level: "Core" },
      { name: "Async Programming & HTTPX", role: "Non-blocking I/O & concurrent multi-LLM API calls", level: "Proficient" },
      { name: "Document Parsers (PyPDF2, python-docx, openpyxl)", role: "Automated ingestion of PDFs, Word docs & Excel files", level: "Proficient" },
    ],
  },
  {
    id: "ml-ds",
    index: "03",
    category: "Machine Learning & Data Science",
    proficiencyTag: "PREDICTIVE MODELING & EDA",
    summary:
      "End-to-end tabular data science from data cleaning, EDA, and feature engineering to gradient boosting, ensemble modeling, and dimensionality reduction on 50K–200K+ records.",
    highlightMetric: "R² = 0.85 · 88% Accuracy · -23% RMSE",
    accent: "#fbbf24",
    skills: [
      { name: "Pandas & NumPy", role: "Data cleaning, wrangling, vectorized arrays & statistical EDA", level: "Core" },
      { name: "Scikit-learn", role: "Classification, regression, clustering, pipelines & evaluation", level: "Core" },
      { name: "XGBoost & LightGBM", role: "Gradient boosted decision trees for high-accuracy tabular ML", level: "Core" },
      { name: "Random Forest & SVM", role: "Ensemble classification & margin-based supervised learning", level: "Core" },
      { name: "PCA & Feature Engineering", role: "Dimensionality reduction (-23% RMSE) & feature selection", level: "Core" },
      { name: "Regression, Classification & Clustering", role: "Supervised & unsupervised modeling across real datasets", level: "Core" },
    ],
  },
  {
    id: "dl-cv-nlp",
    index: "04",
    category: "Deep Learning, Computer Vision & NLP",
    proficiencyTag: "NEURAL & LANGUAGE PIPELINES",
    summary:
      "Convolutional neural networks and image preprocessing for plant disease & digit recognition alongside classical and transformer-based Natural Language Processing.",
    highlightMetric: "TensorFlow · Keras · OpenCV · NLTK",
    accent: "#f472b6",
    skills: [
      { name: "TensorFlow & Keras", role: "Neural network architecture design, training & evaluation", level: "Core" },
      { name: "CNN & Computer Vision", role: "Rice leaf disease detection & MNIST image classification", level: "Core" },
      { name: "OpenCV & Pillow", role: "Image preprocessing, pixel normalization & visual manipulation", level: "Core" },
      { name: "NLP & NLTK", role: "Text preprocessing, tokenization, lemmatization & classification", level: "Core" },
      { name: "TF-IDF & Word2Vec", role: "Lexical feature weighting & semantic word representations", level: "Proficient" },
      { name: "Transformers & Sentence Transformers", role: "Contextual embeddings & modern language model pipelines", level: "Proficient" },
    ],
  },
  {
    id: "genai-agents",
    index: "05",
    category: "Generative AI, LLMs, RAG & AI Agents",
    proficiencyTag: "AGENTIC & MULTI-MODEL AI",
    summary:
      "Building multi-model LLM assistants, Retrieval-Augmented Generation (RAG) workflows, vector search databases, and autonomous browser-executing AI agents.",
    highlightMetric: "LLMs · RAG · ChromaDB · FAISS · Agents",
    accent: "#818cf8",
    skills: [
      { name: "LLMs & Generative AI", role: "Multi-model integration (OpenRouter), prompting & synthesis", level: "Core" },
      { name: "RAG (Retrieval-Augmented Generation)", role: "Grounded document Q&A over PDFs, DOCX & structured files", level: "Core" },
      { name: "Embeddings, FAISS & ChromaDB", role: "Dense vector indexing & semantic similarity search", level: "Core" },
      { name: "AI Agents & Multi-Step Workflows", role: "Tool-calling agent loops & autonomous task execution", level: "Core" },
      { name: "Playwright & Browser Automation", role: "Headless browser control, web scraping (BeautifulSoup) & PyAutoGUI", level: "Proficient" },
    ],
  },
  {
    id: "databases",
    index: "06",
    category: "Databases & Cloud Data Stores",
    proficiencyTag: "RELATIONAL, NOSQL & SERVERLESS DB",
    summary:
      "Designing schemas and managing application state across relational SQL engines, document NoSQL stores, and modern serverless Postgres platforms.",
    highlightMetric: "PostgreSQL · MySQL · MongoDB · Supabase",
    accent: "#38bdf8",
    skills: [
      { name: "PostgreSQL & MySQL", role: "Production relational databases, indexing & structured queries", level: "Core" },
      { name: "MongoDB", role: "Document-oriented NoSQL storage for flexible JSON payloads", level: "Proficient" },
      { name: "SQLite", role: "Embedded local relational storage for rapid prototyping", level: "Core" },
      { name: "Supabase, Neon & Aiven", role: "Managed cloud PostgreSQL, auth & serverless database hosting", level: "Proficient" },
    ],
  },
  {
    id: "cloud-mlops",
    index: "07",
    category: "Cloud, MLOps & DevOps",
    proficiencyTag: "DEPLOYMENT & LIFECYCLE OPS",
    summary:
      "Packaging, tracking, and deploying machine learning and backend services using AWS cloud infrastructure, Docker containers, MLflow, and Git CI/CD workflows.",
    highlightMetric: "AWS (S3, EC2, Lambda) · Docker · MLflow",
    accent: "#34d399",
    skills: [
      { name: "AWS S3, Amazon EC2 & AWS Lambda", role: "Cloud dataset storage, compute instances & serverless execution", level: "Core" },
      { name: "Docker", role: "Containerizing Python APIs & ML environments for reproducible deploys", level: "Core" },
      { name: "MLflow", role: "Experiment tracking, metric logging & model lifecycle management", level: "Core" },
      { name: "Git, GitHub & CI/CD", role: "Version control, collaborative repositories & automated workflows", level: "Core" },
    ],
  },
  {
    id: "bi-analytics",
    index: "08",
    category: "BI, Data Visualization & Product Stack",
    proficiencyTag: "INSIGHT STORYTELLING & WEB UI",
    summary:
      "Communicating analytical findings through interactive business intelligence dashboards, statistical plots, and modern React/Next.js product interfaces.",
    highlightMetric: "Power BI · Tableau · Plotly · Next.js",
    accent: "#a78bfa",
    skills: [
      { name: "Power BI & Tableau", role: "Interactive business intelligence dashboards & KPI storytelling", level: "Core" },
      { name: "Matplotlib, Seaborn & Plotly", role: "Exploratory statistical charts & interactive visualizations", level: "Core" },
      { name: "React & Next.js", role: "Modern web UI interfaces for AI products (CareerFlux AI)", level: "Working" },
    ],
  },
];

export const FOUNDER_HR_AUDIT: FounderHrAuditItem[] = [
  {
    lens: "HR / TECHNICAL RECRUITER LENS",
    title: "1. Resume PDF vs. Website Mismatch (Critical Background-Check Risk)",
    severity: "CRITICAL",
    whatWasWrong:
      "Your downloadable PDF (public/Kudum_Veerabhadraiah_Resume.pdf) is currently a 5-page internal 'Master Resume Inventory' containing AI instruction notes ('Your previous profile references AI/ML internship-related work, but the exact company name... are not available', 'Certification Rule', 'Master Resume Usage') and a typo ('Tollaboration' under Soft Skills). Meanwhile, the website previously claimed 5 extra certifications not in that PDF.",
    whyItMatters:
      "When HR or a recruiter clicks 'Download Resume PDF', seeing meta-instructions or unverified placeholders triggers an immediate rejection. Furthermore, any mismatch between website claims and resume PDF fails HR background screening.",
    howToCloseGap:
      "We aligned the website's Projects, Skills, and Certifications (DataMites — Data Scientist Training; IBM SkillsBuild — Python for Data Science) strictly to your verified Master Resume. Next, replace public/Kudum_Veerabhadraiah_Resume.pdf with a clean 1-page tailored PDF without pages 4–5 meta-notes.",
  },
  {
    lens: "FOUNDER / CTO LENS",
    title: "2. Generic GitHub Profile Links Instead of Deep Repo Permalinks & Live Demos",
    severity: "CRITICAL",
    whatWasWrong:
      "Every project button ('GitHub Source ↗') currently points to the root profile https://github.com/bhadra2299 instead of the exact repository (e.g., github.com/bhadra2299/crop-yield-prediction) and lacks a 60-second Loom video or live deployed URL.",
    whyItMatters:
      "Founders and engineering managers spend ~45 seconds evaluating a candidate. If they click 'GitHub Source' on Crop Yield or Maxi AI and land on a generic profile where they have to hunt for the repo, 70% will bounce.",
    howToCloseGap:
      "Push clean, well-documented repositories for all 6 projects with a README containing architecture diagrams, setup commands, and sample outputs, then link each project card directly to its specific repo URL.",
  },
  {
    lens: "FOUNDER / CTO LENS",
    title: "3. Missing 'Concept vs. Shipped Production' Transparency on AI Products",
    severity: "HIGH",
    whatWasWrong:
      "Presenting CareerFlux AI and Maxi AI Assistant as finished enterprise SaaS products without a live URL makes technical founders skeptical during deep-dive interviews.",
    whyItMatters:
      "Founders love ambitious builders, but they test honesty. Framing your completed ML/CV/EDA pipelines (Crop Yield R²=0.85, Obstacle Detection 88%, Rice Leaf CNN, Bank Marketing) as executed datasets/models while clearly labeling Maxi AI & CareerFlux AI as 'Active AI Product / Agent Architectures' builds 10x more trust.",
    howToCloseGap:
      "We re-ordered your portfolio so your verified, metric-backed ML & Vision projects lead first (01–04), followed by Maxi AI Assistant (05) and CareerFlux AI (06) with accurate stack and architecture framing.",
  },
  {
    lens: "HR / TECHNICAL RECRUITER LENS",
    title: "4. Broad 14-Role Targeting Dilutes Immediate ATS & Recruiter Positioning",
    severity: "HIGH",
    whatWasWrong:
      "Trying to target 14 titles simultaneously raises the question: 'Is he a Python Backend dev, a Data Analyst, or an ML Engineer?'",
    whyItMatters:
      "Recruiters hire for a specific requisition (e.g., Junior Data Scientist or Python/AI Engineer). They need to see your primary 4 tracks clearly mapped to proof.",
    howToCloseGap:
      "We structured your skills into 8 crisp recruiter-scannable domains (Programming & SE, Backend & APIs, ML & Data Science, Deep Learning/CV/NLP, GenAI/RAG/Agents, Databases, Cloud/MLOps, BI) and added your 15-stage Engineering + Data Science Workflow.",
  },
];
