"use client";

import { useEffect, useMemo, useState } from "react";
import { skills, tracks } from "./roadmap-data";
import { loadProgress, saveProgress } from "@/lib/storage";
import { SeniorToggle } from "./senior-toggle";
import { ProgressTracker } from "./progress-tracker";
import { RoadmapCard } from "./roadmap-card";
import { ChecklistView } from "./checklist-view";
import { PrintButton } from "./print-button";

export function RoadmapPage() {
  const [pathToSenior, setPathToSenior] = useState(true);
  const [progress, setProgress] = useState<Record<string, number>>({});
  const [hydrated, setHydrated] = useState(false);
  const [showChecklist, setShowChecklist] = useState(false);

  useEffect(() => {
    setProgress(loadProgress());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    saveProgress(progress);
  }, [progress, hydrated]);

  const metrics = useMemo(() => {
    const values = skills.map((s) => progress[s.id] ?? 0);
    const total = skills.length * 3;
    const earned = values.reduce((sum, v) => sum + v, 0);
    return {
      percent: Math.round((earned / total) * 100),
      seniorReady: values.filter((v) => v >= 3).length,
    };
  }, [progress]);

  return (
    <main className="min-h-screen bg-[#0b0f14] text-white">
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="mb-10 flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-white/50">
              Android Engineering Career Roadmap
            </p>
            <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
              Junior to Senior, visualized with real competencies.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
              Track mastery across foundations, architecture, advanced engineering, and professional growth. Toggle senior expectations, inspect real-world examples, and export a printable self-assessment checklist.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <SeniorToggle enabled={pathToSenior} onChange={setPathToSenior} />
            <div className="flex gap-3">
              <PrintButton href="/checklist" />
              <button
                type="button"
                onClick={() => setShowChecklist(true)}
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/15"
              >
                Open checklist
              </button>
            </div>
          </div>
        </div>

        <ProgressTracker
          percent={metrics.percent}
          seniorReady={metrics.seniorReady}
          totalSkills={skills.length}
          progress={progress}
        />

        <div className="mt-10 grid gap-8">
          {tracks.map((track) => (
            <section key={track.id} className="scroll-mt-24">
              <div className="mb-5">
                <h2 className="text-2xl font-semibold">{track.title}</h2>
                <p className="mt-2 text-white/60">{track.description}</p>
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {skills
                  .filter((s) => s.category === track.id)
                  .map((skill) => (
                    <RoadmapCard
                      key={skill.id}
                      skill={skill}
                      value={progress[skill.id] ?? 0}
                      pathToSenior={pathToSenior}
                      onChange={(value) => setProgress((prev) => ({ ...prev, [skill.id]: value }))}
                    />
                  ))}
              </div>
            </section>
          ))}
        </div>

        {showChecklist && <ChecklistView progress={progress} onClose={() => setShowChecklist(false)} />}
      </section>
    </main>
  );
}
