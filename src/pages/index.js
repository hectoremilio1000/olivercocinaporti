import Head from "next/head";
import Hero from "@/components/Home/Hero";
import PillarsGrid from "@/components/Home/PillarsGrid";
import ProcessTimeline from "@/components/Home/ProcessTimeline";
import ServicesGrid from "@/components/Home/ServicesGrid";
import AdvisorySection from "@/components/Home/AdvisorySection";
import ManufacturingSection from "@/components/Home/ManufacturingSection";
import ProjectsCarousel from "@/components/Home/ProjectsCarousel";
import ClientsBar from "@/components/Home/ClientsBar";
import WhyOliver from "@/components/Home/WhyOliver";
import ContactSection from "@/components/Home/ContactSection";
import { SITE } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>{SITE.name} — {SITE.tagline}</title>
        <meta name="description" content={SITE.description} />
        <meta property="og:title" content={`${SITE.name} — ${SITE.tagline}`} />
        <meta property="og:description" content={SITE.description} />
        <meta property="og:url" content={SITE.url} />
      </Head>
      <Hero />
      <PillarsGrid />
      <ProcessTimeline />
      <ServicesGrid />
      <AdvisorySection />
      <ManufacturingSection />
      <ProjectsCarousel />
      <ClientsBar />
      <WhyOliver />
      <ContactSection />
    </>
  );
}
