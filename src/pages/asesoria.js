import Head from "next/head";
import PageHero from "@/components/pages-sections/PageHero";
import { SITE } from "@/data/site";

export default function AsesoriaPage() {
  return (
    <>
      <Head>
        <title>Asesoría — {SITE.name}</title>
        <meta name="description" content="Te acompañamos desde el primer día para entender tu volumen, tu menú, tu flujo operativo y la normativa que aplica." />
      </Head>
      <PageHero eyebrow="Cada cocina empieza con una buena pregunta" title="Asesoría" subtitle="Te acompañamos desde el primer día para entender tu volumen, tu menú, tu flujo operativo y la normativa que aplica." image="advisory" />
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
