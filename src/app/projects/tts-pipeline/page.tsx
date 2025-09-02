// src/app/projects/tts-pipeline/page.tsx
export default function TTSPipelinePage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">High-Performance TTS Data Generation Pipeline</h1>
      <p className="mt-2 text-gray-600">
        Large-scale speech synthesis pipeline with batching & scheduling.
      </p>

      {/* Tech tags */}
      <div className="flex gap-2 mt-4">
        <span className="px-3 py-1 rounded-full bg-gray-200 text-sm">Python</span>
        <span className="px-3 py-1 rounded-full bg-gray-200 text-sm">Multiprocessing</span>
        <span className="px-3 py-1 rounded-full bg-gray-200 text-sm">PyTorch</span>
      </div>

      {/* Demo media */}
      <div className="mt-8 space-y-6">
        <video controls src="/projects/tts-pipeline/demo.mp4" className="w-full rounded-xl" />
        <audio controls src="/projects/tts-pipeline/demo.mp3" className="w-full" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <img
            src="/projects/tts-pipeline/demo-1.gif"
            alt="TTS Pipeline demo 1"
            className="rounded-xl"
          />
          <img
            src="/projects/tts-pipeline/demo-2.gif"
            alt="TTS Pipeline demo 2"
            className="rounded-xl"
          />
        </div>
      </div>

      {/* Highlights */}
      <ul className="mt-8 list-disc list-inside space-y-2 text-gray-700">
        <li>Reduced generation time ~40% via multiprocessing</li>
        <li>Generated 250k+ samples for training</li>
      </ul>
    </div>
  );
}
