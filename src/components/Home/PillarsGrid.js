import Link from "next/link";
import { ClipboardList, PencilRuler, Hammer, Wrench, ArrowRight } from "lucide-react";
import SectionTitle from "@/components/shared/SectionTitle";
import { PILLARS } from "@/data/services";

const ICONS = { ClipboardList, PencilRuler, Hammer, Wrench };

export default function PillarsGrid() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <SectionTitle
          eyebrow="Lo que hacemos"
          title="Un solo equipo del diseño al servicio"
          subtitle="Acompañamos tu proyecto en cada etapa, desde el primer plano hasta el mantenimiento de tu operación."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((p) => {
            const Icon = ICONS[p.iconName];
            return (
              <Link
                key={p.id}
                href={p.href}
                className="group p-7 rounded-lg border border-[var(--neutral-200)] hover:border-[var(--oliver-navy)] hover:shadow-lg transition-all bg-white"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[var(--oliver-navy)] text-white mb-5">
                  {Icon && <Icon size={24} />}
                </div>
                <h3 className="text-xl font-bold text-[var(--oliver-navy)] mb-2">{p.title}</h3>
                <p className="text-sm text-[var(--neutral-700)] leading-relaxed mb-4">{p.description}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--oliver-blue)] group-hover:gap-2 transition-all">
                  Conocer más <ArrowRight size={16} />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
