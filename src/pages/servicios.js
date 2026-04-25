import Head from "next/head";
import PageHero from "@/components/pages-sections/PageHero";
import { SITE } from "@/data/site";

export default function ServiciosPage() {
  return (
    <>
      <Head>
        <title>Servicios — {SITE.name}</title>
        <meta name="description" content="Desde un restaurante de autor hasta un comedor industrial de mil comensales: cubrimos cada formato con la misma calidad." />
      </Head>
      <PageHero eyebrow="Soluciones para cada tipo de operación" title="Servicios" subtitle="Desde un restaurante de autor hasta un comedor industrial de mil comensales: cubrimos cada formato con la misma calidad." image="industrial" />
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
