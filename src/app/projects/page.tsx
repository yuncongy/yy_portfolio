import Image from "next/image";
import { projects } from "@/lib/projects";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <section className="space-y-8">
      <h1 className="text-3xl md:text-4xl font-semibold">Projects</h1>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <Link key={p.slug} href={`/projects/${p.slug}`} className="group block">
            <Card key={p.title} className="overflow-hidden">
            {p.image ? (
              <div className="relative h-40 w-full">
                <Image src={p.image} alt={p.title} fill className="object-cover" />
              </div>
            ) : null}
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{p.title}</span>
                {p.year ? (
                  <span className="text-xs font-normal text-muted-foreground">{p.year}</span>
                ) : null}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">{p.summary}</p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs rounded-full border px-2 py-0.5">{t}</span>
                ))}
              </div>
              {p.highlights?.length ? (
                <ul className="list-disc pl-4 text-sm">
                  {p.highlights.map((h) => <li key={h}>{h}</li>)}
                </ul>
              ) : null}
            </CardContent>
            <CardFooter className="gap-3">
              {p.repo ? (
                <Button asChild variant="outline" size="sm">
                  <a href={p.repo} target="_blank" rel="noreferrer">Repo</a>
                </Button>
              ) : null}
              {p.demo ? (
                <Button asChild size="sm">
                  <a href={p.demo} target="_blank" rel="noreferrer">Demo</a>
                </Button>
              ) : null}
            </CardFooter>
          </Card>
         </Link>
        ))}
      </div>
    </section>
  );
}
