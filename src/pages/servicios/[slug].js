import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import PageHero from "@/components/pages-sections/PageHero";
import CTAButton from "@/components/shared/CTAButton";
import ContactSection from "@/components/Home/ContactSection";
import { SITE, CONTACT } from "@/data/site";
import { SERVICES } from "@/data/services";
import { IMAGES } from "@/data/images";

const DEFAULT_BULLETS = [
  "Asesoría operativa y normativa previa al diseño",
  "Planos 2D/3D y especificación técnica",
  "Fabricación en taller propio (acero 304)",
  "Instalación, conexiones y capacitación",
  "Garantía 5 años + mantenimiento programado",
];

export default function ServiceDetailPage({ service }) {
  if (!service) return null;
  const url = `${SITE.url}/servicios/${service.id}`;
  const waMessage = `Hola, me interesa cotizar: ${service.title}`;
  const waUrl = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(waMessage)}`;

  return (
    <>
      <Head>
        <title>{service.title} — {SITE.name}</title>
        <meta name="description" content={service.description} />
        <meta property="og:title" content={`${service.title} — ${SITE.name}`} />
        <meta property="og:description" content={service.description} />
        <meta property="og:url" content={url} />
      </Head>
      <PageHero eyebrow="Servicios" title={service.title} subtitle={service.description} image={service.image} />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 lg:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image src={IMAGES[service.image]} alt={service.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--oliver-blue)] mb-3">Cómo lo entregamos</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--oliver-navy)] mb-5 leading-tight">Proyecto integral, sin intermediarios</h2>
            <p className="text-lg text-[var(--neutral-700)] mb-8 leading-relaxed">Cada solución se diseña sobre tu operación real: volumen, menú, flujos y normativa. No partimos de un catálogo — partimos de tu cocina.</p>
            <ul className="space-y-3 mb-10">
              {DEFAULT_BULLETS.map((b, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--oliver-navy)] text-white flex items-center justify-center mt-0.5"><Check size={14} /></span>
                  <span className="text-[var(--neutral-700)]">{b}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <CTAButton href="/contacto" variant="primary" size="md">Cotiza este servicio <ArrowRight size={16} /></CTAButton>
              <CTAButton href={waUrl} variant="whatsapp" size="md" external>Escríbenos por WhatsApp</CTAButton>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[var(--neutral-100)] py-12">
        <div className="max-w-6xl mx-auto px-4 lg:px-6">
          <Link href="/servicios" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--oliver-navy)] hover:underline">
            <ArrowLeft size={16} /> Volver a servicios
          </Link>
        </div>
      </div>

      <ContactSection />
    </>
  );
}

export function getStaticPaths() {
  return {
    paths: SERVICES.map((s) => ({ params: { slug: s.id } })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const service = SERVICES.find((s) => s.id === params.slug) || null;
  return { props: { service } };
}
