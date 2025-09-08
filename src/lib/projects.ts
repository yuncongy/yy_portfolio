export type Project = {
  slug: string;           // <-- add this
  title: string;
  tech: string[];
  summary: string;
  highlights?: string[];
  repo?: string;
  demo?: string;
  image?: string;
  year?: string;
  role?: string;
};

export const projects: Project[] = [
  {
    slug: "tts-pipeline",
    title: "High-Performance TTS Data Generation Pipeline",
    tech: ["Python", "Multiprocessing", "PyTorch"],
    summary: "Large-scale speech synthesis pipeline with batching & scheduling.",
    highlights: [
      "Reduced generation time ~40% via multiprocessing",
      "Generated 250k+ samples for training",
    ],
    year: "2025",
  },
  {
    slug: "vqvae-speech",
    title: "VQ-VAE Speech Compression / Representation",
    tech: ["Python", "PyTorch", "Librosa"],
    summary: "VQ-VAE from scratch; tuned codebook + commitment cost.",
    highlights: [
      "Mixed precision + grad accumulation on RTX 3090",
      "35% faster epochs while keeping quality",
    ],
    year: "2025",
  },
  {
    slug: "ml-core-from-scratch",
    title: "Core ML Algorithms — From Scratch",
    tech: ["Python", "NumPy","Pandas", "Matplotlib", "Scikit-learn", "Reinforcement Learning"],
    summary: "Transformer, CNN, Hidden Markov-Model, K-means, Q-Learning, PCA, Decision Tree, Classification implementations.",
    year: "2024–2025",
  },
  {
  slug: "nx-ats",
  title: "Siemens NX Automated Testing Studio (ATS)",
  tech: ["Python", "NX Open", "HTML", "QA Automation"],
  summary: "Built interactive and automated test cases to expand Siemens NX QA coverage and reduce manual testing effort.",
  highlights: [
    "15 interactive + 17 fully automated ATS test cases across multiple NX modules",
    "Showcased ATS workflows to Siemens NX customers",
  ],
  year: "2021–2023",
  },
  {
    slug: "cfd-auditorium",
    title: "CFD: Auditorium Airflow & Aerosol Simulation",
    tech: ["MATLAB", "SpaceClaim", "Ansys Fluent"],
    summary: "Modeled UCSD auditorium airflow to aid COVID-safe planning.",
    year: "2021",
  },
];
