import Head from "next/head";
import PageHero from "@/components/pages-sections/PageHero";
import ContactSection from "@/components/Home/ContactSection";
import { SITE } from "@/data/site";

export default function ContactoPage() {
  return (
    <>
      <Head>
        <title>Contacto — {SITE.name}</title>
        <meta name="description" content="Cuéntanos de tu proyecto. Te respondemos en menos de 24 hrs hábiles." />
      </Head>
      <PageHero eyebrow="Conversemos" title="Cuéntanos de tu proyecto" subtitle="Te respondemos en menos de 24 horas hábiles con una propuesta inicial." image="advisory" />
      <ContactSection />
    </>
  );
}
