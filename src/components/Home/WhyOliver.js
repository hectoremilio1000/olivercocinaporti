import { Boxes, ShieldCheck, Factory, Award } from "lucide-react";
import SectionTitle from "@/components/shared/SectionTitle";
import { DIFFERENTIATORS } from "@/data/services";

const ICONS = { Boxes, ShieldCheck, Factory, Award };

export default function WhyOliver() {
  return (
    <section className="py-20 lg:py-28 bg-[var(--oliver-navy-deep)] text-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <SectionTitle
          eyebrow="Por qué Oliver"
          title="Lo que nos hace diferentes"
          subtitle="No vendemos equipo: entregamos cocinas que funcionan desde el día uno."
          light
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {DIFFERENTIATORS.map((d, idx) => {
            const Icon = ICONS[d.iconName];
            return (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/10 text-white mb-5">
                  {Icon && <Icon size={26} />}
                </div>
                <h3 className="text-xl font-bold mb-3">{d.title}</h3>
                <p className="text-sm text-white/75 leading-relaxed">{d.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
