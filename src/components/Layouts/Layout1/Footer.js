/* components/Footer.jsx */
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaCcAmex,
  FaCcMastercard,
  FaCcPaypal,
  FaCcVisa,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#082947] text-white">
      {/* 1ᵉʳ bloque: logo + columnas */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {/* Logo */}
        <div className="flex items-start">
          <img
            src="/logo-arvizu.svg" // cambia por tu ruta real
            alt="Arvizu Group"
            className="h-12 w-auto"
          />
        </div>

        {/* Contacto */}
        <div>
          <h3 className="mb-4 text-xl font-semibold">Contacto</h3>
          <address className="not-italic space-y-1 text-sm leading-relaxed">
            <p>Dirección: Laguna de Mancha 44</p>
            <p>Granada Miguel Hidalgo, CDMX, CP 11520</p>
            <p>Teléfono: +52 55 7258 6437</p>
            <p>Correo: ventas@arvizugroup.com</p>
          </address>

          {/* Redes */}
          <div className="mt-6 flex gap-5 text-2xl">
            <a href="#" aria-label="Facebook" className="hover:opacity-80">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Instagram" className="hover:opacity-80">
              <FaInstagram />
            </a>
            <a href="#" aria-label="YouTube" className="hover:opacity-80">
              <FaYoutube />
            </a>
            <a href="#" aria-label="X / Twitter" className="hover:opacity-80">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Menú Arvizu */}
        <div>
          <h3 className="mb-4 text-xl font-semibold">Menú Arvizu</h3>
          <ul className="space-y-2 text-sm">
            {[
              "Inicio",
              "Empresa",
              "Proyectos",
              "Catálogo",
              "Blog",
              "Contacto",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:underline">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Categorías */}
        <div>
          <h3 className="mb-4 text-xl font-semibold">Categorías</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Hornos Rational®
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Hornos de Brasa
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* 2ᵈᵒ bloque: legal + métodos de pago */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-6 text-xs sm:flex-row">
          <p>
            © 2025, Arvizu Group · Tecnología de Shopify ·{" "}
            <a href="#" className="hover:underline">
              Política de reembolso
            </a>{" "}
            ·{" "}
            <a href="#" className="hover:underline">
              Política de privacidad
            </a>{" "}
            ·{" "}
            <a href="#" className="hover:underline">
              Términos del servicio
            </a>
          </p>

          {/* Logos de pago */}
          <div className="flex gap-4 text-3xl">
            <FaCcAmex />
            <FaCcMastercard />
            <FaCcPaypal />
            <FaCcVisa />
          </div>
        </div>
      </div>
    </footer>
  );
}
