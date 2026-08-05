"use client";

export function SkillTooltip({ text }: { text: string }) {
  return (
    <span className="pointer-events-none absolute left-0 top-full z-20 mt-2 w-72 rounded-2xl border border-white/10 bg-black/90 p-3 text-xs leading-5 text-white opacity-0 shadow-xl transition group-hover:opacity-100 group-focus-within:opacity-100">
      {text}
    </span>
  );
}
