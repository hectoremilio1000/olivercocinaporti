import Image from "next/image";
import { IMAGES } from "@/data/images";

export default function PageHero({ eyebrow, title, subtitle, image = "heroAlt" }) {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--oliver-navy-deep)] text-white">
      <div className="absolute inset-0 -z-10">
        <Image
          src={IMAGES[image]}
          alt=""
          fill
          priority
          className="object-cover opacity-25"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--oliver-navy-deep)] via-[var(--oliver-navy-deep)]/85 to-[var(--oliver-navy-deep)]/95" />
      </div>
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-20 lg:py-28">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--oliver-blue-light)] mb-4">
              {eyebrow}
            </p>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">{title}</h1>
          {subtitle && (
            <p className="mt-5 text-lg md:text-xl text-white/85 leading-relaxed">{subtitle}</p>
          )}
        </div>
      </div>
    </section>
  );
}
