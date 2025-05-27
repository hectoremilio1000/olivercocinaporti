import React from "react";

const SectionDesignCocina = () => {
  return (
    <div className="py-12">
      <div className="mb-6">
        <h1 className="w-full text-center text-3xl text-blue-950 font-bold">
          Diseñamos tu cocina a la medida
        </h1>
      </div>
      <div className="max-w-6xl mx-auto flex flex-col gap-4">
        <div className="w-full grid grid-cols-2 gap-4">
          <div className="w-full">
            <img
              className="bg-gray-400 w-full h-[350px] object-cover"
              src="https://www.arvizugroup.com/cdn/shop/files/reuniones_trabajo_proyectos_arvizu.webp?v=1734031695&width=1500"
              alt=""
            />
          </div>
          <div className="w-full px-8 py-8 bg-blue-500 text-white flex items-center">
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl font-bold">
                Planificación y Optimización
              </h1>
              <p className="text-xl">
                Planificación precisa para una cocina industrial eficiente y
                funcional
              </p>
              <button className="px-3 py-2 rounded text-white bg-blue-950">
                Ver más
              </button>
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-2 gap-4">
          <div className="w-full">
            <img
              className="bg-gray-400 w-full h-[350px] object-cover"
              src="https://www.arvizugroup.com/cdn/shop/files/pruebas_arvizu.webp?v=1734033765&width=1500"
              alt=""
            />
          </div>
          <div className="w-full px-8 py-8 bg-blue-500 text-white flex items-center">
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl font-bold">Innovación y Funcionalidad</h1>
              <p className="text-xl">
                Transforma tu cocina con diseños innovadores y funcionales
              </p>
              <button className="px-3 py-2 rounded text-white bg-blue-950">
                Ver más
              </button>
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-2 gap-4">
          <div className="w-full">
            <img
              className="bg-gray-400 w-full h-[350px] object-cover"
              src="https://www.arvizugroup.com/cdn/shop/files/implementacion_arvizu.webp?v=1734033635&width=1500"
              alt=""
            />
          </div>
          <div className="w-full px-8 py-8 bg-blue-500 text-white flex items-center">
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl font-bold">
                Adaptabilidad y Personalización
              </h1>
              <p className="text-xl">
                Cocinas industriales personalizadas para satisfacer todas tus
                necesidades
              </p>
              <button className="px-3 py-2 rounded text-white bg-blue-950">
                Ver más
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionDesignCocina;
