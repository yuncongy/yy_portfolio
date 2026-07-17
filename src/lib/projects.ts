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
  slug: "nx-ats",
  title: "Siemens NX Automated Testing Studio (ATS)",
  tech: ["Python", "NX Open", "HTML", "QA Automation"],
  summary: "Built interactive and automated test cases to expand Siemens NX QA coverage and reduce manual testing effort.",
  highlights: [
    "15 interactive + 17 fully automated ATS test cases across multiple NX modules",
    "Showcased ATS workflows to Siemens NX customers",
  ],
  year: "2021–2023",
  //image: "/projects/nx-ats/preview.png", 
  },
];
