import Head from "next/head";
import PageHero from "@/components/pages-sections/PageHero";
import ServicesGrid from "@/components/Home/ServicesGrid";
import PillarsGrid from "@/components/Home/PillarsGrid";
import WhyOliver from "@/components/Home/WhyOliver";
import ContactSection from "@/components/Home/ContactSection";
import { SITE } from "@/data/site";

export default function ServiciosPage() {
  return (
    <>
      <Head>
        <title>Servicios — {SITE.name}</title>
        <meta name="description" content="Cocinas industriales para restaurantes, hoteles, comedores, cafeterías y más." />
        <meta property="og:title" content={`Servicios — ${SITE.name}`} />
        <meta property="og:description" content="Cocinas industriales para restaurantes, hoteles, comedores, cafeterías y más." />
        <meta property="og:url" content={`${SITE.url}/servicios`} />
      </Head>
      <PageHero eyebrow="Servicios" title="Soluciones para cada operación" subtitle="Cubrimos cada formato gastronómico con la misma calidad de ingeniería y fabricación." image="industrial" />
      <PillarsGrid />
      <ServicesGrid />
      <WhyOliver />
      <ContactSection />
    </>
  );
}
