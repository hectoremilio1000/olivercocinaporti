import Head from "next/head";
import PageHero from "@/components/pages-sections/PageHero";
import { SITE } from "@/data/site";

export default function FabricacionPage() {
  return (
    <>
      <Head>
        <title>Fabricación — {SITE.name}</title>
        <meta name="description" content="No revendemos: fabricamos. Mesas, lavaderos, campanas y muebles especiales en acero 304/430, hechos a la medida exacta de tu proyecto." />
      </Head>
      <PageHero eyebrow="Acero inoxidable fabricado en taller propio" title="Fabricación" subtitle="No revendemos: fabricamos. Mesas, lavaderos, campanas y muebles especiales en acero 304/430, hechos a la medida exacta de tu proyecto." image="manufacturing" />
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
