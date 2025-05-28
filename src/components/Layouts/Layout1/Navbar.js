import React from "react";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, Search, ShoppingCart, User, Menu } from "lucide-react";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(null);

  const navItems = [
    {
      label: "Marcas",
      submenu: ["Marca A", "Marca B", "Marca C"],
    },
    {
      label: "Catálogo",
      submenu: ["Catálogo 1", "Catálogo 2"],
    },
    {
      label: "Industrias",
      submenu: ["Restaurantes", "Hoteles", "Panaderías"],
    },
    {
      label: "Promociones",
      submenu: ["Hot Days", "Ofertas"],
    },
  ];
  return (
    <>
      {/* Top Bar */}
      <div className="bg-black text-white text-sm py-1 px-4 text-center">
        Envío GRATIS en marcas seleccionadas
      </div>

      {/* Header */}
      <header className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4">
          <div className="flex items-center gap-4">
            <h1>OLIVERCOCINAPORTI</h1>
            <img src="/logo-inmeza.png" alt="Logo" width={120} height={40} />
            <div className="hidden md:flex items-center bg-white rounded-md px-2 py-1 w-96">
              <input
                type="text"
                placeholder="¿Qué está buscando?"
                className="w-full px-2 py-1 text-black focus:outline-none"
              />
              <Search className="text-black" size={20} />
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <div className="text-sm">
              Empresa Certificada
              <br />
              <strong>Más de 10,000 pedidos</strong>
            </div>
            <User />
            <ShoppingCart />
          </div>
        </div>
        <nav className="bg-blue-700">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2 relative">
            <ul className="flex gap-6 text-white w-full">
              {navItems.map((item, idx) => (
                <li
                  key={idx}
                  className="cursor-pointer"
                  onMouseEnter={() => setMenuOpen(idx)}
                  onMouseLeave={() => setMenuOpen(null)}
                >
                  <div className="flex items-center gap-1">
                    {item.label} <ChevronDown size={16} />
                  </div>
                  {menuOpen === idx && (
                    <div className="z-50 absolute left-0 right-0 top-full w-full bg-white text-black shadow-xl">
                      <div className="grid grid-cols-3 gap-4 p-6">
                        {item.submenu.map((sub, i) => (
                          <div
                            key={i}
                            className="hover:underline cursor-pointer"
                          >
                            {sub}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ))}
              <li>Nosotros</li>
              <li>Contacto</li>
              <li>Blog</li>
              <li>Pagos</li>
              <li>Envíos</li>
              <li>Club Inmeza</li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
