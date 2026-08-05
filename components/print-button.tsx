"use client";

export function PrintButton({ href }: { href: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white px-4 py-3 text-sm font-medium text-black transition hover:bg-white/90"
    >
      Open checklist / print view
    </a>
  );
}
