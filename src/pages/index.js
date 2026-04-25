import Head from "next/head";
import Hero from "@/components/Home/Hero";
import PillarsGrid from "@/components/Home/PillarsGrid";
import ProcessTimeline from "@/components/Home/ProcessTimeline";
import ServicesGrid from "@/components/Home/ServicesGrid";
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
    </>
  );
}
