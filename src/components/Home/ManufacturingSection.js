import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import CTAButton from "@/components/shared/CTAButton";
import { IMAGES } from "@/data/images";

const BULLETS = [
  "Acero inoxidable 304 grado alimentario",
  "Soldadura sanitaria",
  "Acabados a elección",
  "Especificaciones a medida",
  "Garantía 5 años en fabricación",
];

export default function ManufacturingSection() {
  return (
    <section className="py-20 lg:py-28 bg-[var(--neutral-100)]">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="lg:order-2 relative aspect-[4/3] rounded-lg overflow-hidden">
          <Image src={IMAGES.manufacturing} alt="Fabricación Oliver Cocina por Ti" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
        <div className="lg:order-1">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--oliver-blue)] mb-3">Fabricación</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--oliver-navy)] mb-5 leading-tight">Acero inoxidable fabricado en taller propio</h2>
          <p className="text-lg text-[var(--neutral-700)] mb-8 leading-relaxed">No revendemos: fabricamos. Mesas, lavaderos, campanas, estanterías, gabinetes y muebles especiales en acero inoxidable 304/430, hechos a la medida exacta de tu proyecto.</p>
          <ul className="space-y-3 mb-10">
            {BULLETS.map((b, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--oliver-navy)] text-white flex items-center justify-center mt-0.5"><Check size={14} /></span>
                <span className="text-[var(--neutral-700)]">{b}</span>
              </li>
            ))}
          </ul>
          <CTAButton href="/fabricacion" variant="primary" size="md">Conoce nuestra capacidad <ArrowRight size={16} /></CTAButton>
        </div>
      </div>
    </section>
  );
}
