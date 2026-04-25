export default function SectionTitle({ eyebrow, title, subtitle, align = "center", light = false }) {
  const alignCls = align === "left" ? "text-left" : "text-center";
  const textColor = light ? "text-white" : "text-[var(--oliver-navy)]";
  const subColor = light ? "text-white/80" : "text-[var(--neutral-700)]";
  const eyebrowColor = light ? "text-white/70" : "text-[var(--oliver-blue)]";

  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto" : ""} ${alignCls} mb-12`}>
      {eyebrow && (
        <p className={`text-sm font-semibold uppercase tracking-widest mb-3 ${eyebrowColor}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold ${textColor}`}>{title}</h2>
      {subtitle && <p className={`mt-4 text-lg ${subColor}`}>{subtitle}</p>}
    </div>
  );
}
