"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Mail, Github, Linkedin, Send, Copy, FileDown, Check } from "lucide-react";

/**
 * Contact Page (plain Tailwind version)
 * - Adds a Download Resume card (expects /public/resume.pdf)
 * - Adds lightweight in-file Toasts for copy/send feedback
 * - Uses mailto: for form submit (no backend). We'll add /api/contact later.
 */

// --- Tiny toast system (no external UI lib) ---
function useToast() {
  const [toast, setToast] = useState<null | { message: string; icon?: React.ReactNode }>(null);

  const show = (message: string, icon?: React.ReactNode) => {
    setToast({ message, icon });
  };

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2200);
    return () => clearTimeout(t);
  }, [toast]);

  const Toast = () =>
    toast ? (
      <div className="fixed bottom-6 right-6 z-50">
        <div className="flex items-center gap-2 rounded-xl border bg-background/95 px-4 py-2 shadow-lg backdrop-blur-md">
          {toast.icon}
          <span className="text-sm">{toast.message}</span>
        </div>
      </div>
    ) : null;

  return { show, Toast } as const;
}

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { show, Toast } = useToast();

  const targetEmail = "17yuyuncong@gmail.com";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      name ? `Website contact from ${name}` : "Website contact"
    );
    const body = encodeURIComponent(
      `${message}

— Sender info —
Name: ${name || "(not provided)"}
Email: ${
        email || "(not provided)"
      }`
    );
    show("Opening your mail client…", <Send className="h-4 w-4" />);
    window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(targetEmail);
      show("Email copied to clipboard", <Check className="h-4 w-4" />);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <main className="mx-auto max-w-5xl px-6 pb-24 pt-12">
      {/* Hero */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Get in Touch</h1>
        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
          I’d love to connect about opportunities in Software Engineering or Machine Learning.
        </p>
      </section>

      {/* Quick contact cards */}
      <section className="grid gap-6 md:grid-cols-4 mb-12">
        {/* Email */}
        <div className="rounded-2xl border bg-background p-5 shadow-sm hover:shadow transition-shadow">
          <div className="flex items-center gap-3 mb-3">
            <Mail className="h-5 w-5" />
            <div className="font-medium">Email</div>
          </div>
          <div className="flex items-center justify-between gap-3">
            <a href={`mailto:${targetEmail}`} className="truncate text-sm underline-offset-4 hover:underline">
              {targetEmail}
            </a>
            <button
              onClick={copyEmail}
              aria-label="Copy email"
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border"
            >
              <Copy className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* GitHub */}
        <div className="rounded-2xl border bg-background p-5 shadow-sm hover:shadow transition-shadow">
          <div className="flex items-center gap-3 mb-3">
            <Github className="h-5 w-5" />
            <div className="font-medium">GitHub</div>
          </div>
          <Link
            href="https://github.com/yuncongy"
            target="_blank"
            rel="noreferrer"
            className="text-sm underline-offset-4 hover:underline"
          >
            github.com/yuncongy
          </Link>
        </div>

        {/* LinkedIn */}
        <div className="rounded-2xl border bg-background p-5 shadow-sm hover:shadow transition-shadow">
          <div className="flex items-center gap-3 mb-3">
            <Linkedin className="h-5 w-5" />
            <div className="font-medium">LinkedIn</div>
          </div>
          <Link
            href="https://www.linkedin.com/in/jeff-yuncong-yu"
            target="_blank"
            rel="noreferrer"
            className="text-sm underline-offset-4 hover:underline"
          >
            linkedin.com/in/jeff-yuncong-yu
          </Link>
        </div>

        {/* Resume download */}
        <div className="rounded-2xl border bg-background p-5 shadow-sm hover:shadow transition-shadow">
          <div className="flex items-center gap-3 mb-3">
            <FileDown className="h-5 w-5" />
            <div className="font-medium">Resume</div>
          </div>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-xl bg-black px-3 py-2 text-white hover:opacity-90 text-sm"
            onClick={() => show("Downloading resume…", <FileDown className="h-4 w-4" />)}
          >
            <FileDown className="h-4 w-4" /> Download Resume
          </a>
          {/* <p className="mt-2 text-xs text-muted-foreground">Place your PDF at <code>/public/resume.pdf</code>.</p> */}
        </div>
      </section>

      {/* Contact form */}
      <section className="max-w-2xl mx-auto">
        <div className="rounded-2xl border bg-background p-6 shadow-sm">
          <div className="text-lg font-semibold mb-4">Send a Message</div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium">Your Name</label>
              <input
                className="w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-black/10"
                placeholder="Jane Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">Your Email</label>
              <input
                type="email"
                className="w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-black/10"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">Message</label>
              <textarea
                className="min-h-[140px] w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-black/10"
                placeholder="Tell me about the role or project…"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xs text-muted-foreground">
                This form opens your mail client with a pre‑filled email (no backend required).
              </p>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-black px-4 py-2 text-white hover:opacity-90"
              >
                <Send className="h-4 w-4" /> Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Toast portal */}
      <Toast />
    </main>
  );
}
