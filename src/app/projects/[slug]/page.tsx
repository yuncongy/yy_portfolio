// src/app/projects/[slug]/page.tsx
import Link from "next/link";

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return (
    <div className="p-12 flex flex-col items-center text-center">
      <h1 className="text-4xl font-bold capitalize">
        Project: {slug.replace("-", " ")}
      </h1>

      <p className="mt-4 text-gray-600 text-lg max-w-2xl">
        This project page is under construction. 🚧 <br />
        Content will be added soon — stay tuned!
      </p>

      {/* Back button */}
      <Link
        href="/projects"
        className="mt-8 inline-block px-6 py-3 rounded-full bg-black text-white font-medium hover:bg-gray-800 transition"
      >
        ← Back to Projects
      </Link>

      {/* Placeholder visuals */}
      <div className="mt-12 w-full max-w-xl">
        <div className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center text-gray-500 text-sm">
          Preview coming soon
        </div>
      </div>

      {/* Footer note */}
      <p className="mt-12 text-sm text-gray-400">
        Last updated: {new Date().getFullYear()}
      </p>
    </div>
  );
}
