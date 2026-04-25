import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { SITE, CONTACT, NAV_ITEMS, SOCIAL } from "@/data/site";
import { SERVICES } from "@/data/services";

export default function Footer() {
  return (
    <footer className="bg-[var(--oliver-navy-deep)] text-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Marca */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/logo-oliver.jpg"
              alt={SITE.name}
              width={56}
              height={56}
              className="rounded-full bg-white p-1"
            />
            <div>
              <div className="font-bold text-xl leading-tight">{SITE.shortName}</div>
              <div className="text-xs uppercase tracking-widest text-white/70">cocina por ti</div>
            </div>
          </div>
          <p className="text-sm text-white/70 leading-relaxed mb-5">
            Diseño, fabricación e instalación de cocinas industriales en acero inoxidable.
          </p>
          <div className="flex gap-4 text-lg">
            <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[var(--oliver-blue-light)]">
              <FaInstagram />
            </a>
            <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[var(--oliver-blue-light)]">
              <FaFacebookF />
            </a>
            <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-[var(--oliver-blue-light)]">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Navegación */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest mb-4">Navegación</h3>
          <ul className="space-y-2 text-sm text-white/80">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Servicios */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest mb-4">Servicios</h3>
          <ul className="space-y-2 text-sm text-white/80">
            {SERVICES.map((s) => (
              <li key={s.id}>
                <Link href="/servicios" className="hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest mb-4">Contacto</h3>
          <ul className="space-y-3 text-sm text-white/80">
            <li>{CONTACT.address}</li>
            <li>
              <a href={`tel:${CONTACT.phoneRaw}`} className="hover:text-white">
                {CONTACT.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT.email}`} className="hover:text-white">
                {CONTACT.email}
              </a>
            </li>
            <li>{CONTACT.hours}</li>
            <li>
              <a
                href={`https://wa.me/${CONTACT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-white"
              >
                <FaWhatsapp /> WhatsApp directo
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <p>© {new Date().getFullYear()} {SITE.name}. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <Link href="/contacto" className="hover:text-white">Aviso de privacidad</Link>
            <Link href="/contacto" className="hover:text-white">Términos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
