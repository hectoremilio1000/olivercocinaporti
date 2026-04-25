import Head from "next/head";
import PageHero from "@/components/pages-sections/PageHero";
import { SITE } from "@/data/site";

export default function NosotrosPage() {
  return (
    <>
      <Head>
        <title>Nosotros — {SITE.name}</title>
        <meta name="description" content="Somos un equipo mexicano de ingenieros, diseñadores y fabricantes especializados en cocinas industriales." />
      </Head>
      <PageHero eyebrow="25 años cocinando proyectos" title="Nosotros" subtitle="Somos un equipo mexicano de ingenieros, diseñadores y fabricantes especializados en cocinas industriales." image="workshop" />
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
          <p className="text-lg text-[var(--neutral-700)] leading-relaxed">
            Esta sección se completa en próximos sprints. Por ahora, si quieres conversar sobre tu proyecto, escríbenos directo por WhatsApp o desde el formulario de contacto.
          </p>
        </div>
      </section>
    </>
  );
}
