'use client'

// No external deps required (no recharts / no icon libs). Uses Tailwind + inline SVG only.
// Replace placeholder files under /public/projects/tts-pipeline/ before publishing.

export default function TTSPipelinePage() {
  // --- Placeholder data for the results chart ---
  type Point = { label: string; samples: number }
  const throughputData: Point[] = [
    { label: '00:00', samples: 0 },
    { label: '01:00', samples: 120 },
    { label: '02:00', samples: 260 },
    { label: '03:00', samples: 420 },
    { label: '04:00', samples: 610 },
    { label: '05:00', samples: 820 },
    { label: '06:00', samples: 1010 },
    { label: '07:00', samples: 1240 },
  ]

  // --- Code showcase strings (no external deps) ---
  const engineCode = `# core/engine.py
from typing import Protocol, Optional

class TTSEngine(Protocol):
    def load(self) -> None: ...
    def generate(self, text: str,
                 ref_audio: Optional[str] = None,
                 ref_text: Optional[str] = None,
                 **kw) -> bytes:
        ...
`;

  const runnerCode = `# runners/run_batch.py
from pathlib import Path

def run_batch(engine: TTSEngine, rows, out_dir: Path):
    engine.load()
    for r in rows:  # rows from TSV/CSV
        try:
            wav = engine.generate(r.text, r.ref_audio, r.ref_text, **getattr(r, 'kw', {}))
            write_wav(out_dir / f'{r.id}.wav', wav)
            log_ok(r.id)
        except Exception as e:
            log_fail(r.id, str(e))
`;

  // --- Minimal inline SVG area chart (no libraries) ---
  function AreaChart({ data }: { data: Point[] }) {
    const w = 800, h = 240, p = 36
    const max = Math.max(1, ...data.map(d => d.samples))
    const step = (w - 2 * p) / Math.max(1, data.length - 1)
    const xy = (d: Point, i: number) => [p + i * step, h - p - (d.samples / max) * (h - 2 * p)] as const
    const pts = data.map(xy)
    const pointsStr = pts.map(([x, y]) => `${x},${y}`).join(' ')
    const areaPath = `M ${pts[0][0]} ${h - p} L ` +
      pts.map(([x, y]) => `${x} ${y}`).join(' L ') +
      ` L ${pts[pts.length - 1][0]} ${h - p} Z`

    return (
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-64">
        {/* grid */}
        <g stroke="#e5e7eb">
          {Array.from({ length: 5 }, (_, i) => (
            <line key={i} x1={p} x2={w - p} y1={p + (i * (h - 2 * p)) / 4} y2={p + (i * (h - 2 * p)) / 4} />
          ))}
        </g>
        {/* area fill */}
        <defs>
          <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <path d={areaPath} fill="url(#areaFill)" />
        {/* line */}
        <polyline points={pointsStr} fill="none" stroke="#0ea5e9" strokeWidth={2} />
        {/* axes */}
        <g stroke="#94a3b8">
          <line x1={p} y1={h - p} x2={w - p} y2={h - p} />
          <line x1={p} y1={p} x2={p} y2={h - p} />
        </g>
        {/* labels (x) */}
        <g fontSize={10} fill="#64748b">
          {data.map((d, i) => (
            <text key={i} x={p + i * step} y={h - p + 14} textAnchor="middle">{d.label}</text>
          ))}
        </g>
      </svg>
    )
  }

  const TechBadge = ({ children }: { children: React.ReactNode }) => (
    <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs border">{children}</span>
  )

  const Stat = ({ label, value }: { label: string; value: string }) => (
    <div className="rounded-2xl p-4 bg-slate-50 border shadow-sm">
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-xs text-slate-500 mt-1">{label}</div>
    </div>
  )

  const FileCard = ({ title, href, small }: { title: string; href: string; small?: boolean }) => (
    <a href={href} className={`group flex items-center justify-between gap-3 p-4 rounded-xl border bg-white shadow-sm hover:shadow-md transition ${small ? 'text-sm' : ''}`} download>
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-slate-100 text-slate-700">
          {/* simple inline icon */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
        </div>
        <div>
          <div className="font-medium text-slate-900">{title}</div>
          <div className="text-[11px] text-slate-500">/public{href}</div>
        </div>
      </div>
      <span className="text-slate-500 group-hover:text-slate-900">Download</span>
    </a>
  )

  return (
    <main className="container mx-auto px-4 md:px-8 py-10 space-y-10">
      {/* Hero */}
      <section className="rounded-3xl border shadow-sm bg-white overflow-hidden">
        <div className="grid grid-cols-1">
          <div className="p-8 md:p-10">
            <div className="inline-flex items-center gap-2 text-xs font-medium text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full">
              {/* wave icon */}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/></svg>
              Offline‑Multi‑Model TTS Generation
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mt-4">Offline Multi‑Model TTS Generation Pipeline</h1>
            <p className="mt-3 text-slate-600">GPU‑accelerated, multiprocessing pipeline for high‑throughput speech synthesis. Designed for reproducibility, offline operation, and robust logging.</p>

            {/* CTAs (no external icons) */}
            <div className="flex flex-wrap gap-3 mt-6">
              <a href="#files" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-black">
                <span>⬇</span> Download Demo
              </a>
              <a href="https://github.com/yuncongy/tts_apps/tree/main/TTS_Generation" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border bg-white hover:bg-slate-50">
                <span>↗</span> View Code
              </a>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
              <Stat label="Total Samples (run)" value="250,000+" />
              <Stat label="GPU" value="RTX 4090" />
              <Stat label="Models Integrated" value="8 And Counting" />
              <Stat label="Dataset Size" value="100 GB+" />
            </div>
            <p className="mt-4 text-xs text-slate-500">
              <span className="font-semibold">Scope:</span> integration of multiple open‑source TTS models for offline, high‑throughput inference; focus on orchestration, batching, logging, and GPU utilization. Models are third‑party.
            </p>
          </div>

        </div>
      </section>

      {/* Pipeline In Action */}
      <section>
        <h2 className="text-xl font-bold mb-4">Pipeline In Action</h2>
        <div className="rounded-2xl overflow-hidden border bg-white shadow-sm">
          <img
            src="/projects/tts-pipeline/demo_recording1.gif"
            alt="Pipeline overview"
            className="w-full h-80 object-cover"
          />
        </div>
      </section>

      {/* ElevenLabs API Integration */}
      <section>
        <h2 className="text-xl font-bold mb-4">ElevenLabs API Integration</h2>
        <div className="rounded-2xl border p-6 bg-white shadow-sm space-y-3">
          <p className="text-slate-600 text-sm">
            In addition to offline pipelines, I built a lightweight client around the 
            <span className="font-semibold"> ElevenLabs API</span> for rapid dataset generation 
            and sound effect prototyping. This tool lets me batch-generate audio samples from text or CSV 
            inputs, track metadata in logs, and export results in standard formats.
          </p>
          <ul className="list-disc list-inside text-slate-600 text-sm space-y-1">
            <li>Supports batch input via <code>.csv</code> or <code>.tsv</code></li>
            <li>Logs generation status (success/failure, filenames, durations)</li>
            <li>Configurable voice/model settings with simple CLI options</li>
          </ul>
          <div className="flex gap-3 mt-4">
            <a
              href="https://github.com/yuncongy/tts_apps/tree/main/Elevenlabs_tools/API"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border bg-white hover:bg-slate-50 text-sm"
            >
              <span>↗</span> View ElevenLabs Code
            </a>
            <a
              href="/projects/tts-pipeline/prompts-sample.csv"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-black text-sm"
              download
            >
              <span>⬇</span> Download Sample Prompts
            </a>
          </div>
        </div>
      </section>

      {/* Audio Samples */}
      <section>
        <h2 className="text-xl font-bold mb-4">Audio Samples</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              src: '/projects/tts-pipeline/dia-sample1.mp3',
              desc: 'Dia model — style-conditioned generation'
            },
            {
              src: '/projects/tts-pipeline/11labs-sample2.mp3',
              desc: 'ElevenLabs API — sound effect (Subway leaving station)'
            },
            {
              src: '/projects/tts-pipeline/sample-3.wav',
              desc: 'Meta Audiocraft - music generation'
            }
          ].map((item, i) => (
            <div key={item.src} className="p-4 rounded-xl border bg-white shadow-sm">
              <div className="flex items-center gap-2 text-sm font-medium mb-2">
                ▶ Sample {i + 1}
              </div>
              <audio controls className="w-full">
                <source src={item.src} type="audio/wav" />
              </audio>
              <p className="mt-2 text-xs text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technologies */}
      <section>
        <h2 className="text-xl font-bold mb-4">Technologies Used</h2>
        <div className="flex flex-wrap gap-2">
          {[ 'Python','PyTorch','Multiprocessing','CUDA','Hugging Face (offline cache)','TSV/CSV I/O','tqdm','BigVGAN / Higgs Audio 3B' ].map(t => (
            <TechBadge key={t}>{t}</TechBadge>
          ))}
        </div>
      </section>

      {/* Pipeline Diagram */}
      <section>
        <h2 className="text-xl font-bold mb-4">Pipeline Diagram</h2>
        <div className="rounded-2xl overflow-hidden shadow-lg border">
          <iframe src="/diagrams/tts-pipeline.html" title="TTS Pipeline Diagram" className="w-full h-[520px]" loading="lazy" />
        </div>
      </section>

      {/* Supported Backends */}
      <section>
        <h2 className="text-xl font-bold mb-4">Supported Models</h2>
        <p className="text-sm text-slate-600 mb-3">Each script create a new TTS Model Generator. </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {[
            {name:'IndexTTS', desc:'cloning/style; ref text + ref audio'},
            {name:'Chatterbox', desc:'style‑conditioned generation'},
            {name:'Dia', desc:'dialogue synthesis; multi‑turn'},
            {name:'CSM‑1B', desc:'compact model; faster batches'},
            {name:'Kokoro', desc:'lightweight; quick previews'},
          ].map(b => (
            <div key={b.name} className="rounded-xl border p-4 bg-white shadow-sm">
              <div className="font-semibold">{b.name}</div>
              <div className="text-xs text-slate-600 mt-1">{b.desc}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-500 mt-2">Models are third‑party; this project focuses on orchestration & batch generation.</p>
      </section>

      {/* Problem & Motivation */}
      <section className="grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border p-6 bg-white shadow-sm">
          <h3 className="font-semibold text-lg">Problem & Motivation</h3>
          <p className="mt-2 text-slate-600">Generating large volumes of high‑quality speech is slow, expensive, and hard to reproduce at scale. This project builds a robust, offline‑first pipeline capable of synthesizing tens of thousands of samples while keeping GPU utilization high and logs auditable.</p>
        </div>
        <div className="rounded-2xl border p-6 bg-white shadow-sm">
          <h3 className="font-semibold text-lg">Where It’s Useful</h3>
          <ul className="mt-2 space-y-1 text-slate-600 list-disc list-inside">
            <li>Dataset creation & augmentation</li>
            <li>Voice cloning and style‑conditioned synthesis</li>
            <li>Evaluation of deepfake detection on non‑speech sounds</li>
          </ul>
        </div>
      </section>


      {/* Technical highlights */}
      <section>
        <h2 className="text-xl font-bold mb-4">Technical Highlights</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { title: 'Offline‑first execution', desc: 'Models and tokenizers from local HF cache; deterministic runs; no external API.' },
            { title: 'Multiprocessing at scale', desc: 'Workers load models once; shared queues; back‑pressure; graceful failure + retries.' },
            { title: 'GPU device affinity', desc: 'CUDA device pinning via env; per‑worker memory control; safe KV‑cache handling.' },
            { title: 'TSV/CSV‑driven batches', desc: 'Ref text/audio + target text; per‑sample metadata; idempotent resume.' },
            { title: 'Robust logging', desc: 'Per‑sample CSV log, tqdm live progress, aggregate stats and error reports.' },
            { title: 'Post‑processing to WAV', desc: 'Audio‑ID stitching, normalization, optional filters, consistent filenames.' },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl border p-5 bg-white shadow-sm">
              <div className="font-semibold">{c.title}</div>
              <p className="text-sm text-slate-600 mt-1">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Files & Artifacts */}
      <section id="files">
        <h2 className="text-xl font-bold mb-4">Files & Artifacts</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <FileCard title="Demo Dataset (ZIP)" href="/projects/tts-pipeline/Sample-dataset.zip" />
          <FileCard title="Generation Log (CSV)" href="/projects/tts-pipeline/generation_log.csv" />
          <FileCard title="Sample Log (TXT)" href="/projects/tts-pipeline/sample-log.txt" />
        </div>
      </section>

      {/* Sample table */}
      <section>
        <h2 className="text-xl font-bold mb-3">Sample Records</h2>
        <div className="rounded-2xl overflow-hidden border shadow-sm">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className="text-left p-3">sample_id</th>
                <th className="text-left p-3">text</th>
                <th className="text-left p-3">ref_audio</th>
                <th className="text-left p-3">status</th>
                <th className="text-left p-3">latency_ms</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: 'cv_en_39586712', text: 'The quick brown fox…', ref: 'speaker_12.wav', status: 'ok', lat: 712 },
                { id: 'cv_en_40953339', text: 'Hello from the pipeline…', ref: 'speaker_02.wav', status: 'ok', lat: 689 },
                { id: 'cv_en_39586770', text: 'KV cache edge case…', ref: 'speaker_45.wav', status: 'skipped', lat: 0 },
              ].map((r) => (
                <tr key={r.id} className="border-t">
                  <td className="p-3 font-mono text-xs">{r.id}</td>
                  <td className="p-3 truncate max-w-[260px]">{r.text}</td>
                  <td className="p-3">{r.ref}</td>
                  <td className="p-3"><span className={`px-2 py-0.5 rounded-full text-xs border ${r.status==='ok' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}`}>{r.status}</span></td>
                  <td className="p-3">{r.lat}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500 mt-2">Replace with live data or hydrate from a JSON/CSV API route.</p>
      </section>

      <section className="text-xs text-slate-500">
        <p>This page showcases system design, scale, and engineering details recruiters care about. Audio clips and files above are placeholders—swap in your real artifacts when ready.</p>
      </section>
    </main>
  )
}
