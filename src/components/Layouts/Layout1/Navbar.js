// import React from "react";

// import { useState } from "react";
// import Image from "next/image";
// import { ChevronDown, Search, ShoppingCart, User, Menu } from "lucide-react";
// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(null);

//   const navItems = [
//     {
//       label: "Marcas",
//       submenu: ["Marca A", "Marca B", "Marca C"],
//     },
//     {
//       label: "Catálogo",
//       submenu: ["Catálogo 1", "Catálogo 2"],
//     },
//     {
//       label: "Industrias",
//       submenu: ["Restaurantes", "Hoteles", "Panaderías"],
//     },
//     {
//       label: "Promociones",
//       submenu: ["Hot Days", "Ofertas"],
//     },
//   ];
//   return (
//     <>
//       {/* Top Bar */}
//       <div className="bg-black text-white text-sm py-1 px-4 text-center">
//         Envío GRATIS en marcas seleccionadas
//       </div>

//       {/* Header */}
//       <header className="bg-blue-600 text-white">
//         <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4">
//           <div className="flex items-center gap-4">
//             <h1>OLIVERCOCINAPORTI</h1>
//             <img src="/logo-inmeza.png" alt="Logo" width={120} height={40} />
//             <div className="hidden md:flex items-center bg-white rounded-md px-2 py-1 w-96">
//               <input
//                 type="text"
//                 placeholder="¿Qué está buscando?"
//                 className="w-full px-2 py-1 text-black focus:outline-none"
//               />
//               <Search className="text-black" size={20} />
//             </div>
//           </div>
//           <div className="hidden md:flex items-center gap-6">
//             <div className="text-sm">
//               Empresa Certificada
//               <br />
//               <strong>Más de 10,000 pedidos</strong>
//             </div>
//             <User />
//             <ShoppingCart />
//           </div>
//         </div>
//         <nav className="bg-blue-700">
//           <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2 relative">
//             <ul className="flex gap-6 text-white w-full">
//               {navItems.map((item, idx) => (
//                 <li
//                   key={idx}
//                   className="cursor-pointer"
//                   onMouseEnter={() => setMenuOpen(idx)}
//                   onMouseLeave={() => setMenuOpen(null)}
//                 >
//                   <div className="flex items-center gap-1">
//                     {item.label} <ChevronDown size={16} />
//                   </div>
//                   {menuOpen === idx && (
//                     <div className="z-50 absolute left-0 right-0 top-full w-full bg-white text-black shadow-xl">
//                       <div className="grid grid-cols-3 gap-4 p-6">
//                         {item.submenu.map((sub, i) => (
//                           <div
//                             key={i}
//                             className="hover:underline cursor-pointer"
//                           >
//                             {sub}
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                 </li>
//               ))}
//               <li>Nosotros</li>
//               <li>Contacto</li>
//               <li>Blog</li>
//               <li>Pagos</li>
//               <li>Envíos</li>
//               <li>Club Inmeza</li>
//             </ul>
//           </div>
//         </nav>
//       </header>
//     </>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, Search, ShoppingCart, User, Menu, X } from "lucide-react";

const Navbar = () => {
  // --- STATE -------------------------------------------------------------
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(null); // index of open desktop dropdown
  const [mobileOpen, setMobileOpen] = useState(false); // drawer open/close
  const [mobileSub, setMobileSub] = useState({}); // expanded sub-menus in drawer keyed by idx

  // --- DATA --------------------------------------------------------------
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

  const staticItems = [
    "Nosotros",
    "Contacto",
    "Blog",
    "Pagos",
    "Envíos",
    "Club Inmeza",
  ];

  // --- HELPERS -----------------------------------------------------------
  const toggleMobileSub = (idx) =>
    setMobileSub((prev) => ({ ...prev, [idx]: !prev[idx] }));

  // ----------------------------------------------------------------------
  return (
    <>
      {/* Top Bar */}
      <div className="bg-black text-white text-sm py-1 px-4 text-center">
        Envío GRATIS en marcas seleccionadas
      </div>

      {/* Header */}
      <header className="bg-blue-600 text-white">
        {/* MAIN CONTAINER */}
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4">
          {/* LEFT SIDE */}
          <div className="flex items-center gap-4 w-full md:w-auto">
            {/* Mobile hamburger */}
            <button
              aria-label="Abrir menú"
              className="md:hidden p-2 -ml-2"
              onClick={() => setMobileOpen(true)}
            >
              <Menu size={28} />
            </button>

            {/* Brand */}
            <h1 className="hidden lg:block font-bold tracking-wide">
              OLIVERCOCINAPORTI
            </h1>
            <Image
              src="/logo-inmeza.png"
              alt="Logo Inmeza"
              width={120}
              height={40}
              priority
            />
            {/* Search (desktop) */}
            <div className="hidden md:flex items-center bg-white rounded-md px-2 py-1 w-96">
              <input
                type="text"
                placeholder="¿Qué está buscando?"
                className="w-full px-2 py-1 text-black focus:outline-none"
              />
              <Search className="text-black" size={20} />
            </div>
          </div>

          {/* RIGHT ICONS (desktop) */}
          <div className="hidden md:flex items-center gap-6">
            <div className="text-sm leading-tight">
              Empresa Certificada
              <br />
              <strong>Más de 10,000 pedidos</strong>
            </div>
            <User className="cursor-pointer" />
            <ShoppingCart className="cursor-pointer" />
          </div>
        </div>

        {/* DESKTOP NAV ---------------------------------------------------- */}
        <nav className="bg-blue-700 hidden md:block">
          <div className="max-w-7xl mx-auto flex items-center px-4 py-2 relative">
            <ul className="flex gap-6 text-white w-full">
              {navItems.map((item, idx) => (
                <li
                  key={idx}
                  className="cursor-pointer"
                  onMouseEnter={() => setDesktopMenuOpen(idx)}
                  onMouseLeave={() => setDesktopMenuOpen(null)}
                >
                  <div className="flex items-center gap-1">
                    {item.label} <ChevronDown size={16} />
                  </div>
                  {desktopMenuOpen === idx && (
                    <div className="absolute left-0 right-0 top-full w-full bg-white text-black shadow-xl z-50">
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
              {staticItems.map((label) => (
                <li key={label} className="cursor-pointer">
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      {/* MOBILE DRAWER ---------------------------------------------------- */}
      {mobileOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setMobileOpen(false)}
          />

          {/* Drawer */}
          <aside className="fixed top-0 left-0 h-full w-72 bg-white text-black z-50 shadow-lg flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-4 border-b">
              <User />
              <button
                aria-label="Cerrar menú"
                onClick={() => setMobileOpen(false)}
                className="p-1"
              >
                <X size={24} />
              </button>
            </div>

            {/* Banner text */}
            <span className="px-4 py-2 text-xs text-gray-700">
              Envío GRATIS en marcas seleccionadas
            </span>

            {/* Nav list */}
            <nav className="flex-1 overflow-y-auto">
              <ul className="px-4 space-y-1">
                {navItems.map((item, idx) => (
                  <li key={idx} className="border-b">
                    <button
                      className="flex w-full items-center justify-between py-3"
                      onClick={() => toggleMobileSub(idx)}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          mobileSub[idx] ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {mobileSub[idx] && (
                      <ul
                        className={`overflow-hidden pl-4 pb-2 space-y-2 transition-[max-height] duration-300 ease-in-out text-sm ${
                          mobileSub[idx] ? "max-h-40" : "max-h-0"
                        }`}
                      >
                        {item.submenu.map((sub) => (
                          <li key={sub} className="py-1">
                            {sub}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}

                {staticItems.map((label) => (
                  <li key={label} className="py-3 border-b">
                    {label}
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </>
      )}
    </>
  );
};

export default Navbar;
