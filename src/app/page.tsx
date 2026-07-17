"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

type Featured = {
  title: string;
  slug: string;
  summary: string;
  tags: string[];
  imgSrc: string;
};

type Experience = {
  company: string;
  role: string;
  location: string;
  dates: string;
  summary: string;
  website: string;
};

const experience: Experience[] = [
  {
    company: "Esri (Environmental Systems Research Institute)",
    role: "Product Engineer Intern",
    location: "Redlands, CA",
    dates: "May – Aug 2026",
    summary:
      "ArcGIS Enterprise Deep Learning Studio Test Infrastructure | Geospatial AI Workflow Automation",
    website: "https://www.esri.com/en-us/home",
  },
  {
    company: "OfSpectrum",
    role: "Machine Learning Intern",
    location: "Los Angeles, CA",
    dates: "Jun 2025 – Feb 2026",
    summary:
      "Created SynSFX, a 178-hour 43K+ clips dataset for evaluating audio anti-spoofing models against generated sound effects.",
    website: "https://www.ofspectrum.com/",
  },
  {
    company: "Siemens Digital Industries Software",
    role: "Application Engineer",
    location: "Costa Mesa, CA",
    dates: "Jul 2021 – May 2023",
    summary:
      "NX applcation quality engineering and developed 60+ test cases across CAD, architecture, and VR workflows.",
    website: "https://www.siemens.com/en-us/",
  },
];

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
        <h1 className="text-5xl font-bold tracking-tight">Yuncong (Jeff) Yu</h1>
        <p className="mt-3 text-2xl text-muted-foreground">
          Product Engineer · Machine Learning
        </p>
        <p className="mt-4 text-muted-foreground">
          M.S. Computer Science @ USC (Graduation: Dec 2026)<br />
          Product Engineer Intern @ Esri<br />
          Building scalable UI automation framework for geospatial AI workflows<br />
          Experienced in Playwright, pytest, ArcGIS APIs, deep learning pipelines, and enterprise QA systems<br />
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="h-11 min-w-36 rounded-lg">
            <Link href="/projects">
              View Projects
              <ArrowRight />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-11 min-w-36 rounded-lg"
          >
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              View Resume
              <ExternalLink />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-11 min-w-36 rounded-lg"
          >
            <Link href="/contact">
              Contact Me
              <Mail />
            </Link>
          </Button>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="w-full max-w-5xl mt-16">
        <h2 className="mb-6 text-2xl font-semibold">Experience</h2>

        <div className="overflow-hidden rounded-2xl border bg-background">
          {experience.map((item) => (
            <article
              key={item.company}
              className="grid gap-3 border-b p-5 last:border-b-0 sm:grid-cols-[10rem_1fr] sm:gap-6"
            >
              <div className="text-sm text-muted-foreground">
                <p className="font-medium text-foreground">{item.dates}</p>
                <p className="mt-1">{item.location}</p>
              </div>

              <div>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-semibold">
                    <a
                      href={item.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/company inline-flex items-center gap-1.5 rounded-sm underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      aria-label={`Visit ${item.company} website`}
                    >
                      {item.company}
                      <ExternalLink
                        aria-hidden="true"
                        className="size-3.5 text-muted-foreground transition-transform group-hover/company:-translate-y-0.5 group-hover/company:translate-x-0.5"
                      />
                    </a>
                  </h3>
                  <p className="text-sm font-medium text-muted-foreground">
                    {item.role}
                  </p>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.summary}
                </p>
              </div>
            </article>
          ))}
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
