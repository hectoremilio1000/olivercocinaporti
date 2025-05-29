import React from "react";

const ArvizuGroup = () => {
  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto flex flex-col gap-4">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="w-full">
            <img
              className="bg-gray-400 w-full h-[350px] object-cover"
              src="https://www.arvizugroup.com/cdn/shop/files/Imagen_de_WhatsApp_2024-11-29_a_las_16.37.43_79d4623a.jpg?v=1732919905&width=1500"
              alt=""
            />
          </div>
          <div className="w-full px-8 py-8 bg-gray-100 text-blue-950 flex items-center">
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl md:text-4xl font-bold">
                Arvizu Group es una empresa mexicana
              </h1>
              <p className="text-sm md:text-xl">
                Fabricamos proyectos de cocina a la medida, refrigeración,
                cocción y hornos. Tenemos presencia en toda la república
                mexicana.
              </p>
              <button className="max-w-max px-3 py-2 border-2 border-blue-950 rounded text-blue-950 bg-white font-bold">
                Ver más
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArvizuGroup;
