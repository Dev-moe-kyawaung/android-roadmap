"use client";

export function ProgressTracker({
  percent,
  seniorReady,
  totalSkills,
  progress,
}: {
  percent: number;
  seniorReady: number;
  totalSkills: number;
  progress: Record<string, number>;
}) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-xl font-semibold">Progress tracker</h2>
          <p className="mt-1 text-sm text-white/60">
            {seniorReady} of {totalSkills} skills are marked at senior-ready level.
          </p>
        </div>
        <div className="text-4xl font-semibold text-amber-400">{percent}%</div>
      </div>

      <div className="mt-5 h-3 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-amber-400 via-orange-400 to-fuchsia-500 transition-all"
          style={{ width: `\${percent}%` }}
        />
      </div>

      <div className="mt-4 grid gap-3 text-sm text-white/60 md:grid-cols-3">
        <div>Not started: {Object.values(progress).filter((v) => v === 0).length}</div>
        <div>Learning: {Object.values(progress).filter((v) => v === 1).length}</div>
        <div>Applied / Senior-ready: {Object.values(progress).filter((v) => v >= 2).length}</div>
      </div>
    </section>
  );
}
