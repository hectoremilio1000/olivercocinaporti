import Link from "next/link";

const VARIANTS = {
  primary:
    "bg-[var(--oliver-navy)] text-white hover:bg-[var(--oliver-navy-deep)] border border-[var(--oliver-navy)]",
  secondary:
    "bg-white text-[var(--oliver-navy)] hover:bg-[var(--neutral-100)] border border-[var(--oliver-navy)]",
  ghost:
    "bg-transparent text-white hover:bg-white/10 border border-white",
  whatsapp:
    "bg-[#25D366] text-white hover:bg-[#1ebe57] border border-[#25D366]",
};

const SIZES = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function CTAButton({
  href,
  onClick,
  children,
  variant = "primary",
  size = "md",
  className = "",
  external = false,
  ...props
}) {
  const cls = `inline-flex items-center justify-center gap-2 rounded font-semibold transition-colors ${VARIANTS[variant]} ${SIZES[size]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={cls} {...props}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={cls} {...props}>
      {children}
    </button>
  );
}
