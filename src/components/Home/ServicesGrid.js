import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionTitle from "@/components/shared/SectionTitle";
import { SERVICES } from "@/data/services";
import { IMAGES } from "@/data/images";

export default function ServicesGrid() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <SectionTitle
          eyebrow="Servicios"
          title="Cocinas para cada tipo de operación"
          subtitle="Desde un restaurante de autor hasta un comedor industrial de mil comensales."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <Link
              key={s.id}
              href={`/servicios/${s.id}`}
              className="group relative overflow-hidden rounded-lg bg-[var(--oliver-navy-deep)] aspect-[4/5]"
            >
              <Image
                src={IMAGES[s.image]}
                alt={s.title}
                fill
                className="object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--oliver-navy-deep)] via-[var(--oliver-navy-deep)]/40 to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <h3 className="text-xl font-bold mb-2 leading-tight">{s.title}</h3>
                <p className="text-sm text-white/80 mb-4 leading-relaxed">{s.description}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--oliver-blue-light)] group-hover:gap-2 transition-all">
                  Ver detalle <ArrowUpRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
