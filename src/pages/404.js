import Head from "next/head";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { SITE } from "@/data/site";

export default function NotFoundPage() {
  return (
    <>
      <Head>
        <title>Página no encontrada — {SITE.name}</title>
        <meta name="robots" content="noindex" />
      </Head>
      <section className="min-h-[70vh] flex items-center justify-center bg-[var(--neutral-100)] px-4 py-20">
        <div className="max-w-xl text-center">
          <p className="text-7xl md:text-9xl font-bold text-[var(--oliver-navy)] mb-4">404</p>
          <h1 className="text-2xl md:text-3xl font-bold text-[var(--oliver-navy)] mb-4">
            Esta página no existe
          </h1>
          <p className="text-lg text-[var(--neutral-700)] mb-8">
            Quizás el enlace cambió o se escribió mal. Te llevamos de regreso al inicio.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded font-semibold bg-[var(--oliver-navy)] text-white hover:bg-[var(--oliver-navy-deep)] transition-colors">
              <Home size={18} /> Ir al inicio
            </Link>
            <Link href="/contacto" className="inline-flex items-center gap-2 px-6 py-3 rounded font-semibold bg-white text-[var(--oliver-navy)] border border-[var(--oliver-navy)] hover:bg-[var(--neutral-100)] transition-colors">
              <ArrowLeft size={18} /> Hablar con nosotros
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
