import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MapPin, Calendar, Building2, Target, Wrench, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/pages-sections/PageHero";
import CTAButton from "@/components/shared/CTAButton";
import { SITE, CONTACT } from "@/data/site";
import { PROJECTS } from "@/data/projects";
import { IMAGES } from "@/data/images";

export default function ProjectDetailPage({ project, related }) {
  if (!project) return null;
  const url = `${SITE.url}/proyectos/${project.id}`;
  const waMessage = `Hola, vi su caso "${project.title}" en el sitio. Me interesa un proyecto similar.`;
  const waUrl = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(waMessage)}`;
  const gallery = project.gallery && project.gallery.length > 0 ? project.gallery : [project.image];

  return (
    <>
      <Head>
        <title>{project.title} — {SITE.name}</title>
        <meta name="description" content={project.intro || `${project.title} en ${project.location}. ${project.type}.`} />
        <meta property="og:title" content={`${project.title} — ${SITE.name}`} />
        <meta property="og:description" content={project.intro || `${project.type} en ${project.location}`} />
        <meta property="og:url" content={url} />
      </Head>

      <PageHero eyebrow={project.type} title={project.title} subtitle={project.client || project.location} image={project.image} />

      {/* Quick facts strip */}
      <section className="bg-white border-b border-[var(--neutral-200)]">
        <div className="max-w-6xl mx-auto px-4 lg:px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-start gap-3">
            <MapPin size={20} className="text-[var(--oliver-navy)] flex-shrink-0 mt-1" />
            <div>
              <p className="text-xs uppercase tracking-wider text-[var(--neutral-500)] mb-1">Ubicación</p>
              <p className="font-semibold text-[var(--oliver-navy)]">{project.location}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Building2 size={20} className="text-[var(--oliver-navy)] flex-shrink-0 mt-1" />
            <div>
              <p className="text-xs uppercase tracking-wider text-[var(--neutral-500)] mb-1">Tipo</p>
              <p className="font-semibold text-[var(--oliver-navy)]">{project.type}</p>
            </div>
          </div>
          {project.year && (
            <div className="flex items-start gap-3">
              <Calendar size={20} className="text-[var(--oliver-navy)] flex-shrink-0 mt-1" />
              <div>
                <p className="text-xs uppercase tracking-wider text-[var(--neutral-500)] mb-1">Año</p>
                <p className="font-semibold text-[var(--oliver-navy)]">{project.year}</p>
              </div>
            </div>
          )}
          {project.metrics && project.metrics[0] && (
            <div className="flex items-start gap-3">
              <Target size={20} className="text-[var(--oliver-navy)] flex-shrink-0 mt-1" />
              <div>
                <p className="text-xs uppercase tracking-wider text-[var(--neutral-500)] mb-1">Escala</p>
                <p className="font-semibold text-[var(--oliver-navy)]">{project.metrics[0]}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Intro */}
      {project.intro && (
        <section className="bg-white">
          <div className="max-w-3xl mx-auto px-4 lg:px-6 py-16 lg:py-20">
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--oliver-blue)] mb-4">El proyecto</p>
            <p className="text-xl lg:text-2xl text-[var(--neutral-700)] leading-relaxed">{project.intro}</p>
          </div>
        </section>
      )}

      {/* Challenge + Solution */}
      {(project.challenge || project.solution) && (
        <section className="bg-[var(--neutral-100)]">
          <div className="max-w-6xl mx-auto px-4 lg:px-6 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {project.challenge && (
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-10 h-10 rounded-full bg-[var(--oliver-navy)] text-white flex items-center justify-center"><Target size={18} /></span>
                  <h2 className="text-2xl lg:text-3xl font-bold text-[var(--oliver-navy)]">El reto</h2>
                </div>
                <p className="text-lg text-[var(--neutral-700)] leading-relaxed">{project.challenge}</p>
              </div>
            )}
            {project.solution && (
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-10 h-10 rounded-full bg-[var(--oliver-navy)] text-white flex items-center justify-center"><Wrench size={18} /></span>
                  <h2 className="text-2xl lg:text-3xl font-bold text-[var(--oliver-navy)]">La solución</h2>
                </div>
                <p className="text-lg text-[var(--neutral-700)] leading-relaxed">{project.solution}</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Gallery */}
      {gallery.length > 1 && (
        <section className="bg-white py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-4 lg:px-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--oliver-blue)] mb-4">Galería</p>
            <h2 className="text-2xl lg:text-3xl font-bold text-[var(--oliver-navy)] mb-10">Detalle del proyecto</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {gallery.map((imgKey, idx) => (
                <div key={idx} className={`relative rounded-lg overflow-hidden bg-[var(--neutral-100)] ${idx === 0 ? "md:col-span-2 md:row-span-2 aspect-[16/10] md:aspect-[16/10]" : "aspect-[4/3]"}`}>
                  <Image src={IMAGES[imgKey] || IMAGES[project.image]} alt={`${project.title} — detalle ${idx + 1}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Highlights */}
      {project.highlights && project.highlights.length > 0 && (
        <section className="bg-[var(--neutral-100)]">
          <div className="max-w-6xl mx-auto px-4 lg:px-6 py-16 lg:py-24">
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--oliver-blue)] mb-4">Decisiones clave</p>
            <h2 className="text-2xl lg:text-3xl font-bold text-[var(--oliver-navy)] mb-10">Lo que hizo este proyecto distinto</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.highlights.map((h, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-white p-5 rounded-lg border border-[var(--neutral-200)]">
                  <CheckCircle2 size={20} className="text-[var(--oliver-navy)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--neutral-700)]">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Result */}
      {project.result && (
        <section className="bg-[var(--oliver-navy-deep)] text-white">
          <div className="max-w-4xl mx-auto px-4 lg:px-6 py-16 lg:py-24 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--oliver-blue-light)] mb-4">Resultado</p>
            <h2 className="text-2xl lg:text-4xl font-bold mb-6 leading-tight">{project.result}</h2>
            {project.metrics && (
              <div className="flex flex-wrap justify-center gap-3 mt-8">
                {project.metrics.map((m, idx) => (
                  <span key={idx} className="text-sm px-4 py-2 bg-white/10 text-white rounded-full font-medium border border-white/20">{m}</span>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 lg:px-6 py-16 lg:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--oliver-navy)] mb-4">¿Buscas algo similar para tu operación?</h2>
          <p className="text-lg text-[var(--neutral-700)] mb-10 max-w-2xl mx-auto">Cuéntanos de tu proyecto. Te respondemos con propuesta inicial en menos de 24 horas hábiles.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <CTAButton href="/contacto" variant="primary" size="lg">Cotiza un proyecto similar <ArrowRight size={18} /></CTAButton>
            <CTAButton href={waUrl} variant="whatsapp" size="lg" external>Escríbenos por WhatsApp</CTAButton>
          </div>
        </div>
      </section>

      {/* Related projects */}
      {related && related.length > 0 && (
        <section className="bg-[var(--neutral-100)] py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-4 lg:px-6">
            <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-[var(--oliver-blue)] mb-3">Más casos</p>
                <h2 className="text-2xl lg:text-3xl font-bold text-[var(--oliver-navy)]">Otros proyectos entregados</h2>
              </div>
              <Link href="/proyectos" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--oliver-navy)] hover:underline">
                Ver todos <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link key={p.id} href={`/proyectos/${p.id}`} className="group bg-white rounded-lg overflow-hidden border border-[var(--neutral-200)] hover:shadow-xl transition-shadow">
                  <div className="relative aspect-[4/3] overflow-hidden bg-[var(--oliver-navy-deep)]">
                    <Image src={IMAGES[p.image]} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                    <span className="absolute top-3 left-3 px-3 py-1 bg-white/95 text-[var(--oliver-navy)] text-xs font-semibold rounded-full uppercase tracking-wider">{p.type}</span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-1.5 text-xs text-[var(--neutral-500)] mb-2"><MapPin size={14} /> {p.location}</div>
                    <h3 className="text-base font-bold text-[var(--oliver-navy)] leading-tight">{p.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="bg-white py-10 border-t border-[var(--neutral-200)]">
        <div className="max-w-6xl mx-auto px-4 lg:px-6">
          <Link href="/proyectos" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--oliver-navy)] hover:underline">
            <ArrowLeft size={16} /> Ver todos los proyectos
          </Link>
        </div>
      </div>
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
  const related = project
    ? PROJECTS.filter((p) => p.id !== project.id).slice(0, 3)
    : [];
  return { props: { project, related } };
}
