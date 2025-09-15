"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

type Featured = {
  title: string;
  slug: string;
  summary: string;
  tags: string[];
  imgSrc: string;
};

const featured: Featured[] = [
  {
    title: "TTS Generation Pipeline",
    slug: "tts-pipeline",
    summary:
      "Large-batch synthetic speech generation with GPU offloading, logs, and offline caches.",
    tags: ["Python", "PyTorch", "Torchaudio"],
    imgSrc: "/projects/tts-pipeline/preview.jpg",
  },
  {
    title: "Siemens NX Automated Testing Studio",
    slug: "nx-ats",
    summary: "NX QA Automation Test Cases",
    tags: ["Python", "NXOpen", "QA Automation"],
    imgSrc: "/projects/nx-ats/preview.jpg",
  },
  // {
  //   title: "CFD Playground",
  //   slug: "cfd",
  //   summary:
  //     "Numerical experiments and visualizations from applied math / fluid coursework.",
  //   tags: ["C++", "Num Methods", "Viz"],
  //   imgSrc: "/projects/cfd/preview.jpg",
  // },
];

function ProjectCard({ title, slug, summary, tags, imgSrc }: Featured) {
  return (
    <Link key={slug} href={`/projects/${slug}`} className="group">
      <article className="h-full rounded-2xl border bg-background p-5 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-sm">
        <div className="aspect-video w-full rounded-xl overflow-hidden mb-4">
          <img
            src={imgSrc}
            alt={`${title} preview`}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        <h3 className="text-lg font-semibold group-hover:underline">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{summary}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
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
  );
}

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
            MSCS @ USC (Dec 2026)<br />
            ex-Siemens Application Engineer/QA<br />
            Experienced in automation and large-scale QA systems <br /> 
            Building GPU-optimized ML pipelines for text-to-speech Generation<br /> 
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
            <ProjectCard key={p.slug} {...p} />
          ))}
        </div>
      </section>

    </main>
  );
}
