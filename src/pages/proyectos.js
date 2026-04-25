import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowUpRight } from "lucide-react";
import PageHero from "@/components/pages-sections/PageHero";
import SectionTitle from "@/components/shared/SectionTitle";
import ContactSection from "@/components/Home/ContactSection";
import { SITE } from "@/data/site";
import { PROJECTS } from "@/data/projects";
import { IMAGES } from "@/data/images";

export default function ProyectosPage() {
  return (
    <>
      <Head>
        <title>Proyectos — {SITE.name}</title>
        <meta name="description" content="Casos reales de cocinas industriales diseñadas, fabricadas e instaladas por Oliver." />
      </Head>
      <PageHero eyebrow="Casos reales" title="Proyectos entregados" subtitle="Una selección de cocinas que hemos diseñado, fabricado e instalado para restaurantes, hoteles y comedores." image="workshop" />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionTitle eyebrow="Galería" title="Cocinas en operación" subtitle="Cada proyecto es distinto. Estos son algunos de los que más nos enseñaron." />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((p) => (
              <Link
                key={p.id}
                href="#"
                className="group bg-white rounded-lg overflow-hidden border border-[var(--neutral-200)] hover:shadow-xl transition-shadow"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[var(--oliver-navy-deep)]">
                  <Image src={IMAGES[p.image]} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                  <span className="absolute top-3 left-3 px-3 py-1 bg-white/95 text-[var(--oliver-navy)] text-xs font-semibold rounded-full uppercase tracking-wider">
                    {p.type}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-1.5 text-xs text-[var(--neutral-500)] mb-2">
                    <MapPin size={14} /> {p.location}
                  </div>
                  <h3 className="text-lg font-bold text-[var(--oliver-navy)] mb-4 leading-tight">{p.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.metrics.map((m, idx) => (
                      <span key={idx} className="text-xs px-2.5 py-1 bg-[var(--neutral-100)] text-[var(--neutral-700)] rounded">{m}</span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--oliver-blue)] group-hover:gap-2 transition-all">
                    Ver caso <ArrowUpRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
