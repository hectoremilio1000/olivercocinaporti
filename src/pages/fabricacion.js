import Head from "next/head";
import PageHero from "@/components/pages-sections/PageHero";
import ManufacturingSection from "@/components/Home/ManufacturingSection";
import WhyOliver from "@/components/Home/WhyOliver";
import ContactSection from "@/components/Home/ContactSection";
import { SITE } from "@/data/site";

export default function FabricacionPage() {
  return (
    <>
      <Head>
        <title>Fabricación — {SITE.name}</title>
        <meta name="description" content="Fabricación propia en acero inoxidable 304 a la medida. Garantía 5 años." />
      </Head>
      <PageHero eyebrow="Capacidad" title="Fabricación en acero inoxidable" subtitle="Taller propio. Acero 304 grado alimentario. Soldadura sanitaria. Hecho a la medida." image="manufacturing" />
      <ManufacturingSection />
      <WhyOliver />
      <ContactSection />
    </>
  );
}
