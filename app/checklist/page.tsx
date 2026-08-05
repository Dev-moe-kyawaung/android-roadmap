import { ChecklistView } from "@/components/checklist-view";

export default function ChecklistPage() {
  return (
    <main className="min-h-screen bg-white text-black print:bg-white">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <h1 className="mb-2 text-3xl font-semibold">Android Engineering Self-Assessment</h1>
        <p className="mb-8 text-black/60">Use this page for browser print or PDF export.</p>
        <ChecklistView progress={{}} onClose={() => {}} />
      </div>
    </main>
  );
}
