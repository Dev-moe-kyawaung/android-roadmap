"use client";

import { Skill } from "./roadmap-data";

export function RoadmapCard({
  skill,
  value,
  onChange,
  pathToSenior,
}: {
  skill: Skill;
  value: number;
  onChange: (value: number) => void;
  pathToSenior: boolean;
}) {
  const label = value === 0 ? "Not started" : value === 1 ? "Learning" : value === 2 ? "Applied" : "Senior-ready";

  return (
    <article className="group rounded-3xl border border-white/10 bg-[#111824] p-5 shadow-2xl transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-[#131c2b]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">{skill.name}</h3>
          <p className="mt-1 text-sm text-white/60">{skill.shortDescription}</p>
        </div>
        <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60">
          {label}
        </span>
      </div>

      <p className="mt-4 rounded-2xl bg-white/5 p-4 text-sm leading-6 text-white/70">
        <strong className="text-white">Example:</strong> {skill.example}
      </p>

      <div className="mt-4 grid gap-3 rounded-2xl bg-white/5 p-4 text-sm">
        <div>
          <span className="block text-white/45">Entry-level</span>
          <span className="text-white/80">{skill.junior}</span>
        </div>
        {pathToSenior && (
          <div>
            <span className="block text-white/45">Senior mastery</span>
            <span className="text-amber-200">{skill.senior}</span>
          </div>
        )}
      </div>

      <div className="mt-4 flex items-center gap-2">
        {[0, 1, 2, 3].map((step) => (
          <button
            key={step}
            type="button"
            onClick={() => onChange(step)}
            className={`h-3 flex-1 rounded-full transition \${value >= step ? "bg-amber-400" : "bg-white/10 hover:bg-white/20"}`}
            aria-label={`Set \${skill.name} to level \${step}`}
          />
        ))}
      </div>

      <div className="mt-3 text-xs text-white/45">
        Hover card to read the real-world framing. Use the dots to self-rate mastery.
      </div>
    </article>
  );
}
