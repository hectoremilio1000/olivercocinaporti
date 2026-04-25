import Image from "next/image";
import { ArrowRight } from "lucide-react";
import CTAButton from "@/components/shared/CTAButton";
import MetricsBar from "@/components/shared/MetricsBar";
import { IMAGES } from "@/data/images";
import { METRICS } from "@/data/services";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--oliver-navy-deep)] text-white">
      <div className="absolute inset-0 -z-10">
        <Image
          src={IMAGES.heroBackground}
          alt=""
          fill
          priority
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--oliver-navy-deep)] via-[var(--oliver-navy-deep)]/80 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-6 pt-20 pb-24 lg:pt-32 lg:pb-32">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--oliver-blue-light)] mb-5">
            25+ años diseñando cocinas industriales
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Cocinas industriales hechas a la medida de tu operación
          </h1>
          <p className="text-lg md:text-xl text-white/85 mb-10 leading-relaxed">
            De la asesoría inicial al primer servicio. Diseñamos, fabricamos e instalamos
            cocinas en acero inoxidable que funcionan, cumplen normativa y duran.
          </p>
          <div className="flex flex-wrap gap-4">
            <CTAButton href="/contacto" variant="secondary" size="lg">
              Cotiza tu proyecto <ArrowRight size={18} />
            </CTAButton>
            <CTAButton href="/proyectos" variant="ghost" size="lg">
              Ver proyectos
            </CTAButton>
          </div>
        </div>

        <div className="mt-16 lg:mt-24">
          <MetricsBar metrics={METRICS} light />
        </div>
      </div>
    </section>
  );
}
