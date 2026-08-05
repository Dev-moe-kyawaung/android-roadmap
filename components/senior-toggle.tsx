"use client";

export function SeniorToggle({
  enabled,
  onChange,
}: {
  enabled: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onChange(!enabled)}
      className="inline-flex items-center justify-between rounded-full border border-white/15 bg-black/30 px-4 py-3 text-sm font-medium text-white transition hover:border-white/30 hover:bg-black/45"
      aria-pressed={enabled}
    >
      <span className="mr-4">Path to Senior</span>
      <span
        className={`h-6 w-11 rounded-full p-1 transition \${enabled ? "bg-amber-500" : "bg-white/20"}`}
      >
        <span
          className={`block h-4 w-4 rounded-full bg-white transition \${enabled ? "translate-x-5" : "translate-x-0"}`}
        />
      </span>
    </button>
  );
}
