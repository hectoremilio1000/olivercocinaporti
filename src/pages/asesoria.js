import Head from "next/head";
import PageHero from "@/components/pages-sections/PageHero";
import AdvisorySection from "@/components/Home/AdvisorySection";
import ProcessTimeline from "@/components/Home/ProcessTimeline";
import ContactSection from "@/components/Home/ContactSection";
import { SITE } from "@/data/site";

export default function AsesoriaPage() {
  return (
    <>
      <Head>
        <title>Asesoría — {SITE.name}</title>
        <meta name="description" content="Asesoría especializada en cocinas industriales: layout, normativa, equipos y flujos." />
        <meta property="og:title" content={`Asesoría — ${SITE.name}`} />
        <meta property="og:description" content="Asesoría especializada en cocinas industriales: layout, normativa, equipos y flujos." />
        <meta property="og:url" content={`${SITE.url}/asesoria`} />
      </Head>
      <PageHero eyebrow="Servicio" title="Asesoría especializada" subtitle="Te acompañamos desde la idea hasta el primer servicio. Cocinas pensadas para tu operación real." image="advisory" />
      <AdvisorySection onPage />
      <ProcessTimeline />
      <ContactSection />
    </>
  );
}
