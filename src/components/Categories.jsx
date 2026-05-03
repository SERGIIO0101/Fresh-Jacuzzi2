import React from 'react';

// Importación de tus imágenes locales
import imgHidromasajes from '../assets/categories/hidromasajes.png';
import imgBanos from '../assets/categories/banos.png';
import imgLabores from '../assets/categories/labores.png';
import imgCocinas from '../assets/categories/cocinas.png';
import imgOutdoor from '../assets/categories/outdoor.png';

const categories = [
  { name: "Hidromasajes", image: imgHidromasajes, link: "#" },
  { name: "Baños", image: imgBanos, link: "#" },
  { name: "Zona de Labores", image: imgLabores, link: "#" },
  { name: "Cocinas", image: imgCocinas, link: "#" },
  { name: "Zona Outdoor", image: imgOutdoor, link: "#" }
];

export default function Categories() {
  return (
    <section className="py-12 md:py-20 bg-white font-montserrat">
      <div className="container mx-auto px-4">
        
        {/* Título de la Sección */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-xl md:text-3xl font-bold text-gray-900 tracking-tight mb-2 px-2">
            Tu hogar espera por un nuevo estilo
          </h2>
          <div className="flex items-center justify-center gap-3">
             <div className="h-[1px] w-6 md:w-8 bg-gray-200"></div>
             <p className="text-[9px] md:text-[12px] text-gray-400 uppercase tracking-[3px] md:tracking-[4px] font-medium">
               Descubre nuestras colecciones
             </p>
             <div className="h-[1px] w-6 md:w-8 bg-gray-200"></div>
          </div>
        </div>

        {/* Grid de Círculos Optimizado para Celulares */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap justify-center gap-x-4 gap-y-10 md:gap-14">
          {categories.map((cat, i) => (
            <div key={i} className="flex flex-col items-center group cursor-pointer w-full md:w-[200px]">
              
              {/* Contenedor Circular Responsivo */}
              <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden mb-4 shadow-lg ring-1 ring-gray-100 group-hover:ring-[#1c2b39] transition-all duration-700">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
              </div>

              {/* Textos */}
              <div className="text-center px-1">
                <h3 className="text-[13px] md:text-[16px] font-bold text-gray-800 mb-1 leading-tight">
                  {cat.name}
                </h3>
                <div className="relative inline-block">
                  <span className="text-[10px] md:text-[12px] font-medium text-cyan-600 uppercase tracking-wider group-hover:text-blue-800 transition-colors">
                    Ver productos
                  </span>
                  <div className="h-[1px] w-0 group-hover:w-full bg-blue-800 transition-all duration-500 absolute -bottom-0.5 left-0"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Línea divisoria final */}
        <div className="mt-16 md:mt-20 border-b border-gray-200 w-full max-w-6xl mx-auto"></div>
      </div>
    </section>
  );
}