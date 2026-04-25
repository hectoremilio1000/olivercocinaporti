import { CLIENT_LOGOS } from "@/data/projects";

export default function ClientsBar() {
  return (
    <section className="py-14 bg-white border-y border-[var(--neutral-200)]">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-[var(--neutral-500)] mb-8">
          Marcas y proyectos que confían en Oliver
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {CLIENT_LOGOS.map((c, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center h-16 px-4 rounded border border-dashed border-[var(--neutral-300)] text-[var(--neutral-500)] text-sm font-medium"
            >
              {c.short}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
