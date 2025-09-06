"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

type Featured = {
  title: string;
  slug: string;
  summary: string;
  tags: string[];
};

const featured: Featured[] = [
  {
    title: "TTS Pipeline (Higgs / IndexTTS)",
    slug: "tts-pipeline",
    summary:
      "Large-batch synthetic speech generation with GPU offloading, logs, and offline caches.",
    tags: ["Python", "PyTorch", "Audio"],
  },
  {
    title: "Lane Detection (Real-Time)",
    slug: "lane-detection",
    summary:
      "CUDA-accelerated lane detection + departure alerts; runs on local RTX 3090.",
    tags: ["CV", "CUDA", "OpenCV"],
  },
  {
    title: "CFD Playground",
    slug: "cfd",
    summary:
      "Numerical experiments and visualizations from applied math / fluid coursework.",
    tags: ["C++", "Num Methods", "Viz"],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-16 flex flex-col items-center">
      {/* HERO */}
      <section className="w-full max-w-5xl text-center">
        <h1 className="text-5xl font-bold tracking-tight">Yuncong Yu</h1>
        <p className="mt-3 text-2xl text-muted-foreground">
          Software Engineer · Machine Learning
        </p>
        <p className="mt-4 text-muted-foreground">
          MSCS @ USC · ex-Siemens QA. I build polished SWE systems and ML
          pipelines for audio and computer vision.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/projects">
            <Button className="h-12 px-6">View Projects</Button>
          </Link>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border px-6 py-3 font-medium hover:bg-gray-50"
          >
            View Resume
          </a>
          <Link href="/contact">
            <Button variant="secondary" className="h-12 px-6">
              Contact Me
            </Button>
          </Link>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="w-full max-w-5xl mt-16">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="text-2xl font-semibold">Featured Projects</h2>
          <Link href="/projects" className="text-sm underline">
            See all →
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="group"
            >
              <article className="h-full rounded-2xl border bg-background p-5 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-sm">
                {/* image placeholder block (no asset needed) */}
                <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800 mb-4 grid place-items-center text-sm text-muted-foreground">
                  preview
                </div>

                <h3 className="text-lg font-semibold group-hover:underline">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.summary}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs rounded-full border px-2 py-1 text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* Keep your original test button if you like */}
      <div className="mt-12">
        <Button className="h-10 px-5">Test shadcn Button</Button>
      </div>
    </main>
  );
}
