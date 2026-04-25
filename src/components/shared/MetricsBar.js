export default function MetricsBar({ metrics, light = false }) {
  const valueColor = light ? "text-white" : "text-[var(--oliver-navy)]";
  const labelColor = light ? "text-white/80" : "text-[var(--neutral-700)]";
  const dividerColor = light ? "border-white/20" : "border-[var(--neutral-200)]";

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden rounded-lg">
      {metrics.map((m, idx) => (
        <div
          key={idx}
          className={`px-4 py-6 md:py-8 text-center border-t md:border-t-0 ${dividerColor} ${
            light ? "bg-white/5" : "bg-white"
          }`}
        >
          <div className={`text-3xl md:text-4xl font-bold ${valueColor}`}>{m.value}</div>
          <div className={`mt-1 text-xs md:text-sm uppercase tracking-wider ${labelColor}`}>
            {m.label}
          </div>
        </div>
      ))}
    </div>
  );
}
