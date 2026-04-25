import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS, SITE } from "@/data/site";
import CTAButton from "@/components/shared/CTAButton";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <div className="bg-[var(--oliver-navy-deep)] text-white text-xs md:text-sm py-1.5 px-4 text-center">
        Cotizaciones sin costo · Atendemos toda la República Mexicana
      </div>

      <header className={`sticky top-0 z-40 bg-white transition-shadow ${scrolled ? "shadow-md" : "shadow-sm"}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 lg:px-6 py-3">
          <Link href="/" className="flex items-center gap-3" aria-label={SITE.name}>
            <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-[var(--oliver-navy)]/10 bg-white flex-shrink-0">
              <Image src="/logo-oliver.jpg" alt={SITE.name} fill sizes="48px" className="object-cover" priority />
            </div>
            <span className="hidden sm:block font-bold text-[var(--oliver-navy)] text-lg leading-tight">
              {SITE.shortName}
              <span className="block text-[10px] font-normal tracking-widest text-[var(--oliver-blue)] uppercase">cocina por ti</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7" aria-label="Navegación principal">
            {NAV_ITEMS.filter((i) => i.href !== "/contacto").map((item) => (
              <Link key={item.href} href={item.href} className="text-sm font-medium text-[var(--neutral-700)] hover:text-[var(--oliver-navy)] transition-colors">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <CTAButton href="/contacto" variant="primary" size="sm">Cotiza tu proyecto</CTAButton>
          </div>

          <button onClick={() => setOpen(true)} aria-label="Abrir menú" aria-expanded={open} className="lg:hidden p-2 text-[var(--oliver-navy)]">
            <Menu size={28} />
          </button>
        </div>
      </header>

      {open && (
        <>
          <button type="button" aria-label="Cerrar menú" onClick={() => setOpen(false)} className="fixed inset-0 bg-black/50 z-40 cursor-default" />
          <aside className="fixed top-0 right-0 h-full w-80 bg-white z-50 shadow-xl flex flex-col" role="dialog" aria-modal="true" aria-label="Menú de navegación">
            <div className="flex items-center justify-between p-4 border-b border-[var(--neutral-200)]">
              <div className="flex items-center gap-2">
                <div className="relative w-9 h-9 rounded-full overflow-hidden bg-white">
                  <Image src="/logo-oliver.jpg" alt="" fill sizes="36px" className="object-cover" />
                </div>
                <span className="font-bold text-[var(--oliver-navy)]">Menú</span>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Cerrar menú" className="p-1">
                <X size={24} />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto py-4" aria-label="Navegación móvil">
              {NAV_ITEMS.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="block px-6 py-3 text-base font-medium text-[var(--neutral-700)] hover:bg-[var(--neutral-100)] hover:text-[var(--oliver-navy)]">
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="p-4 border-t border-[var(--neutral-200)]">
              <CTAButton href="/contacto" variant="primary" size="md" className="w-full">Cotiza tu proyecto</CTAButton>
            </div>
          </aside>
        </>
      )}
    </>
  );
}
