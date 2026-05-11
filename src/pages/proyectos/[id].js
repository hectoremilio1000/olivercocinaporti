import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import PageHero from "@/components/pages-sections/PageHero";
import CTAButton from "@/components/shared/CTAButton";
import ContactSection from "@/components/Home/ContactSection";
import { SITE, CONTACT } from "@/data/site";
import { PROJECTS } from "@/data/projects";
import { IMAGES } from "@/data/images";

export default function ProjectDetailPage({ project }) {
  if (!project) return null;
  const url = `${SITE.url}/proyectos/${project.id}`;
  const waMessage = `Hola, vi su proyecto "${project.title}" y me interesa una cocina similar.`;
  const waUrl = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(waMessage)}`;

  return (
    <>
      <Head>
        <title>{project.title} — {SITE.name}</title>
        <meta name="description" content={`${project.title} en ${project.location}. ${project.type}. Cocina industrial diseñada y fabricada por Oliver.`} />
        <meta property="og:title" content={`${project.title} — ${SITE.name}`} />
        <meta property="og:description" content={`${project.type} en ${project.location}`} />
        <meta property="og:url" content={url} />
      </Head>
      <PageHero eyebrow={project.type} title={project.title} subtitle={project.location} image={project.image} />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 lg:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image src={IMAGES[project.image]} alt={project.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--oliver-blue)] mb-3">Sobre el proyecto</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--oliver-navy)] mb-5 leading-tight">{project.title}</h2>
            <div className="flex items-center gap-1.5 text-sm text-[var(--neutral-500)] mb-6">
              <MapPin size={16} /> {project.location} · {project.type}
            </div>
            <p className="text-lg text-[var(--neutral-700)] mb-8 leading-relaxed">Proyecto entregado llave en mano: diagnóstico, anteproyecto, diseño técnico, fabricación, instalación y postventa. Cada detalle pensado para que la cocina opere desde el día uno.</p>
            <div className="flex flex-wrap gap-2 mb-10">
              {project.metrics.map((m, idx) => (
                <span key={idx} className="text-sm px-3 py-1.5 bg-[var(--neutral-100)] text-[var(--neutral-700)] rounded-full font-medium">{m}</span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <CTAButton href={waUrl} variant="whatsapp" size="md" external>Quiero algo similar</CTAButton>
              <CTAButton href="/contacto" variant="secondary" size="md">Solicitar propuesta <ArrowRight size={16} /></CTAButton>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[var(--neutral-100)] py-12">
        <div className="max-w-6xl mx-auto px-4 lg:px-6">
          <Link href="/proyectos" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--oliver-navy)] hover:underline">
            <ArrowLeft size={16} /> Ver todos los proyectos
          </Link>
        </div>
      </div>

      <ContactSection />
    </>
  );
}

export function getStaticPaths() {
  return {
    paths: PROJECTS.map((p) => ({ params: { id: p.id } })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const project = PROJECTS.find((p) => p.id === params.id) || null;
  return { props: { project } };
}
