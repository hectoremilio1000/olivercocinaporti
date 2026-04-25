import SectionTitle from "@/components/shared/SectionTitle";
import { PROCESS_STEPS } from "@/data/services";

export default function ProcessTimeline() {
  return (
    <section className="py-20 lg:py-28 bg-[var(--neutral-100)]">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <SectionTitle
          eyebrow="Cómo trabajamos"
          title="Un proceso probado en 6 etapas"
          subtitle="Cada paso tiene entregables claros, plazos comprometidos y responsables asignados de tu lado y del nuestro."
        />

        {/* Desktop: timeline horizontal */}
        <div className="hidden lg:block relative">
          <div className="absolute top-7 left-12 right-12 h-0.5 bg-[var(--oliver-navy)]/20" />
          <div className="grid grid-cols-6 gap-4 relative">
            {PROCESS_STEPS.map((step) => (
              <div key={step.n} className="text-center">
                <div className="relative inline-flex items-center justify-center w-14 h-14 rounded-full bg-[var(--oliver-navy)] text-white text-xl font-bold mb-5 mx-auto z-10">
                  {step.n}
                </div>
                <h3 className="text-base font-bold text-[var(--oliver-navy)] mb-2">{step.title}</h3>
                <p className="text-sm text-[var(--neutral-700)] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: timeline vertical */}
        <div className="lg:hidden space-y-6">
          {PROCESS_STEPS.map((step, idx) => (
            <div key={step.n} className="flex gap-5">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[var(--oliver-navy)] text-white font-bold flex-shrink-0">
                  {step.n}
                </div>
                {idx < PROCESS_STEPS.length - 1 && (
                  <div className="flex-1 w-0.5 bg-[var(--oliver-navy)]/20 my-2" />
                )}
              </div>
              <div className="pt-2 pb-4">
                <h3 className="text-lg font-bold text-[var(--oliver-navy)] mb-1">{step.title}</h3>
                <p className="text-sm text-[var(--neutral-700)] leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
