import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, MapPin, ArrowUpRight } from "lucide-react";
import SectionTitle from "@/components/shared/SectionTitle";
import CTAButton from "@/components/shared/CTAButton";
import { PROJECTS } from "@/data/projects";
import { IMAGES } from "@/data/images";

export default function ProjectsCarousel() {
  const scrollerRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollerRef.current) return;
    const card = scrollerRef.current.firstChild;
    const cardWidth = card ? card.offsetWidth + 24 : 320;
    scrollerRef.current.scrollBy({ left: dir * cardWidth, behavior: "smooth" });
  };

  return (
    <section className="py-20 lg:py-28 bg-[var(--neutral-100)]">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--oliver-blue)] mb-3">
              Casos reales
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--oliver-navy)]">
              Proyectos entregados
            </h2>
            <p className="mt-4 text-lg text-[var(--neutral-700)]">
              Una muestra de cocinas que hemos diseñado y montado en restaurantes, hoteles y comedores.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll(-1)}
              aria-label="Anterior"
              className="w-11 h-11 rounded-full bg-white border border-[var(--neutral-200)] flex items-center justify-center hover:bg-[var(--oliver-navy)] hover:text-white hover:border-[var(--oliver-navy)] transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll(1)}
              aria-label="Siguiente"
              className="w-11 h-11 rounded-full bg-white border border-[var(--neutral-200)] flex items-center justify-center hover:bg-[var(--oliver-navy)] hover:text-white hover:border-[var(--oliver-navy)] transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4 -mx-4 px-4 lg:mx-0 lg:px-0"
        >
          {PROJECTS.map((p) => (
            <Link
              key={p.id}
              href="/proyectos"
              className="group flex-shrink-0 w-[85%] sm:w-[60%] lg:w-[32%] snap-start bg-white rounded-lg overflow-hidden border border-[var(--neutral-200)] hover:shadow-xl transition-shadow"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[var(--oliver-navy-deep)]">
                <Image
                  src={IMAGES[p.image]}
                  alt={p.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 85vw, (max-width: 1024px) 60vw, 32vw"
                />
                <span className="absolute top-3 left-3 px-3 py-1 bg-white/95 text-[var(--oliver-navy)] text-xs font-semibold rounded-full uppercase tracking-wider">
                  {p.type}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1.5 text-xs text-[var(--neutral-500)] mb-2">
                  <MapPin size={14} /> {p.location}
                </div>
                <h3 className="text-lg font-bold text-[var(--oliver-navy)] mb-4 leading-tight">
                  {p.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.metrics.map((m, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2.5 py-1 bg-[var(--neutral-100)] text-[var(--neutral-700)] rounded"
                    >
                      {m}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--oliver-blue)] group-hover:gap-2 transition-all">
                  Ver caso <ArrowUpRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <CTAButton href="/proyectos" variant="primary" size="md">
            Ver todos los proyectos
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
