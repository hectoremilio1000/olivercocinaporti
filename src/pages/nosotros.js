import Head from "next/head";
import Image from "next/image";
import PageHero from "@/components/pages-sections/PageHero";
import SectionTitle from "@/components/shared/SectionTitle";
import MetricsBar from "@/components/shared/MetricsBar";
import WhyOliver from "@/components/Home/WhyOliver";
import ContactSection from "@/components/Home/ContactSection";
import { SITE } from "@/data/site";
import { METRICS } from "@/data/services";
import { IMAGES } from "@/data/images";

export default function NosotrosPage() {
  return (
    <>
      <Head>
        <title>Nosotros — {SITE.name}</title>
        <meta name="description" content="25 años fabricando cocinas industriales en México. Equipo de ingenieros y diseñadores especializados." />
        <meta property="og:title" content={`Nosotros — ${SITE.name}`} />
        <meta property="og:description" content="25 años fabricando cocinas industriales en México. Equipo de ingenieros y diseñadores especializados." />
        <meta property="og:url" content={`${SITE.url}/nosotros`} />
      </Head>
      <PageHero eyebrow="Quiénes somos" title="25 años cocinando proyectos" subtitle="Un equipo mexicano de ingenieros, diseñadores y fabricantes especializados en cocinas industriales." image="workshop" />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image src={IMAGES.workshop} alt="Taller Oliver" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--oliver-blue)] mb-3">Nuestra historia</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--oliver-navy)] mb-5 leading-tight">Cocinas que nacen de entender la operación, no de un catálogo</h2>
            <p className="text-lg text-[var(--neutral-700)] leading-relaxed mb-5">
              Llevamos más de dos décadas diseñando y fabricando cocinas industriales en México. Empezamos como un taller pequeño, hoy entregamos proyectos integrales en toda la república.
            </p>
            <p className="text-lg text-[var(--neutral-700)] leading-relaxed">
              Nuestro equipo combina ingeniería, oficio gastronómico y fabricación propia. No revendemos: cada pieza de acero sale de nuestro taller con la firma de quien la hizo.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--neutral-100)]">
        <div className="max-w-6xl mx-auto px-4 lg:px-6">
          <MetricsBar metrics={METRICS} />
        </div>
      </section>

      <WhyOliver />
      <ContactSection />
    </>
  );
}
