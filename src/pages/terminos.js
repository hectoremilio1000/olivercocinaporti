import Head from "next/head";
import PageHero from "@/components/pages-sections/PageHero";
import { SITE } from "@/data/site";

export default function TerminosPage() {
  return (
    <>
      <Head>
        <title>Términos y condiciones — {SITE.name}</title>
        <meta name="description" content="Términos y condiciones de uso del sitio web de Oliver Cocina por Ti." />
        <meta property="og:title" content={`Términos y condiciones — ${SITE.name}`} />
        <meta property="og:description" content="Condiciones de uso del sitio web de Oliver Cocina por Ti." />
        <meta property="og:url" content={`${SITE.url}/terminos`} />
      </Head>
      <PageHero eyebrow="Legal" title="Términos y condiciones" subtitle="Reglas de uso del sitio web de Oliver Cocina por Ti." />

      <article className="max-w-3xl mx-auto px-4 lg:px-6 py-16 lg:py-20 text-[var(--neutral-700)] leading-relaxed">
        <h2 className="text-2xl font-bold text-[var(--oliver-navy)] mt-2 mb-4">1. Aceptación</h2>
        <p className="mb-4">El uso del sitio web de Oliver Cocina por Ti implica la aceptación plena de estos términos. Si no estás de acuerdo con alguno de ellos, te pedimos abstenerte de usar el sitio.</p>

        <h2 className="text-2xl font-bold text-[var(--oliver-navy)] mt-10 mb-4">2. Uso del sitio</h2>
        <p className="mb-4">El sitio se ofrece como medio informativo y de contacto comercial. La información publicada (imágenes, descripciones técnicas, métricas) puede actualizarse sin previo aviso. Cualquier cotización o propuesta concreta se formaliza mediante documento aparte firmado por las partes.</p>

        <h2 className="text-2xl font-bold text-[var(--oliver-navy)] mt-10 mb-4">3. Propiedad intelectual</h2>
        <p className="mb-4">Todos los contenidos (logotipo, marca, textos, imágenes, diseño y código) son propiedad de Oliver Cocina por Ti o de sus respectivos titulares. Su reproducción total o parcial sin autorización previa por escrito está prohibida.</p>

        <h2 className="text-2xl font-bold text-[var(--oliver-navy)] mt-10 mb-4">4. Limitación de responsabilidad</h2>
        <p className="mb-4">Oliver Cocina por Ti no se responsabiliza por interrupciones temporales del sitio, errores de visualización, ni por información publicada en sitios de terceros enlazados desde aquí.</p>

        <h2 className="text-2xl font-bold text-[var(--oliver-navy)] mt-10 mb-4">5. Jurisdicción</h2>
        <p className="mb-4">Para cualquier controversia relacionada con el uso del sitio, las partes se someten a las leyes mexicanas y a los tribunales competentes de la Ciudad de México, renunciando a cualquier otro fuero que pudiera corresponderles.</p>

        <p className="mt-12 text-xs text-[var(--neutral-500)]">Última actualización: mayo de 2026.</p>
      </article>
    </>
  );
}
