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
    tech: ["Python", "NumPy"],
    summary: "CNN, HMM, K-means, Transformer, Q-Learning, PCA implementations.",
    year: "2024–2025",
  },
  {
    slug: "cfd-auditorium",
    title: "CFD: Auditorium Airflow & Aerosol Simulation",
    tech: ["MATLAB", "SpaceClaim", "Ansys Fluent"],
    summary: "Modeled UCSD auditorium airflow to aid COVID-safe planning.",
    year: "2021",
  },
];
