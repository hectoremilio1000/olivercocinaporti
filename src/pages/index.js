import Head from "next/head";
import Hero from "@/components/Home/Hero";
import PillarsGrid from "@/components/Home/PillarsGrid";
import ProcessTimeline from "@/components/Home/ProcessTimeline";
import ServicesGrid from "@/components/Home/ServicesGrid";
import ProjectsCarousel from "@/components/Home/ProjectsCarousel";
import ClientsBar from "@/components/Home/ClientsBar";
import WhyOliver from "@/components/Home/WhyOliver";
import { SITE } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>{SITE.name} — {SITE.tagline}</title>
        <meta name="description" content={SITE.description} />
      </Head>
      <Hero />
      <PillarsGrid />
      <ProcessTimeline />
      <ServicesGrid />
      <ProjectsCarousel />
      <ClientsBar />
      <WhyOliver />
    </>
  );
}
