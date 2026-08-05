"use client";

import { skills, tracks } from "./roadmap-data";

export function ChecklistView({
  progress,
  onClose,
}: {
  progress: Record<string, number>;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 bg-black/80 p-4 print:static print:bg-white">
      <div className="mx-auto max-w-5xl rounded-3xl bg-white p-6 text-black shadow-2xl print:rounded-none print:shadow-none">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Android Engineering Self-Assessment</h2>
            <p className="text-sm text-black/60">2026 standards checklist</p>
          </div>
          <button onClick={onClose} className="rounded-full border border-black/10 px-4 py-2 text-sm">
            Close
          </button>
        </div>

        {tracks.map((track) => (
          <section key={track.id} className="mb-6">
            <h3 className="mb-3 text-lg font-semibold">{track.title}</h3>
            <div className="grid gap-3">
              {skills
                .filter((s) => s.category === track.id)
                .map((skill) => (
                  <label key={skill.id} className="flex items-start gap-3 rounded-2xl border border-black/10 p-4">
                    <input
                      type="checkbox"
                      className="mt-1 h-4 w-4"
                      defaultChecked={(progress[skill.id] ?? 0) >= 2}
                    />
                    <div>
                      <div className="font-medium">{skill.name}</div>
                      <div className="text-sm text-black/60">{skill.shortDescription}</div>
                      <div className="mt-1 text-sm text-black/70">
                        <strong>Evidence:</strong> {skill.example}
                      </div>
                    </div>
                  </label>
                ))}
            </div>
          </section>
        ))}

        <div className="mt-8 border-t border-black/10 pt-4 text-sm text-black/60">
          Print this page or save as PDF from the browser dialog. Use one page per section if needed.
        </div>
      </div>
    </div>
  );
}
