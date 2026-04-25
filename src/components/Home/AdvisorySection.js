import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import CTAButton from "@/components/shared/CTAButton";
import { IMAGES } from "@/data/images";

const BULLETS = [
  "Layout funcional para tu menú real",
  "Cumplimiento normativo (STPS, NOM, Cofepris)",
  "Selección de equipos con criterio operativo",
  "Optimización de flujos en cocina",
  "Presupuesto realista, sin sorpresas",
];

export default function AdvisorySection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
          <Image src={IMAGES.advisory} alt="Asesoría Oliver Cocina por Ti" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--oliver-blue)] mb-3">Asesoría</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--oliver-navy)] mb-5 leading-tight">Cada cocina empieza con una buena pregunta</h2>
          <p className="text-lg text-[var(--neutral-700)] mb-8 leading-relaxed">Te acompañamos desde el primer día para entender tu volumen, tu menú, tu flujo operativo y la normativa que aplica. El resultado: una cocina que no se diseña en un escritorio, sino en tu realidad.</p>
          <ul className="space-y-3 mb-10">
            {BULLETS.map((b, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--oliver-navy)] text-white flex items-center justify-center mt-0.5"><Check size={14} /></span>
                <span className="text-[var(--neutral-700)]">{b}</span>
              </li>
            ))}
          </ul>
          <CTAButton href="/asesoria" variant="primary" size="md">Agenda una asesoría <ArrowRight size={16} /></CTAButton>
        </div>
      </div>
    </section>
  );
}
