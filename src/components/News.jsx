import React from 'react';

const highlights = [
  {
    id: 1,
    tag: "Lanzamiento",
    title: "Nueva Línea AeroSpa 2026",
    description: "Ingeniería de flujo invertido para un relax profundo.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
    size: "md:col-span-2 md:row-span-2"
  },
  {
    id: 2,
    tag: "Innovación",
    title: "Control Inteligente",
    description: "Gestiona tu hidromasaje desde el móvil.",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=800",
    size: "md:col-span-1 md:row-span-1"
  },
  {
    id: 3,
    tag: "Diseño",
    title: "Grifería Titanium",
    description: "Resistencia extrema, estética minimalista.",
    image: "https://images.unsplash.com/photo-1545173168-9f1947eebb9f?auto=format&fit=crop&q=80&w=800",
    size: "md:col-span-1 md:row-span-1"
  }
];

export default function News() {
  return (
    <section className="py-12 md:py-20 bg-white font-montserrat">
      <div className="container mx-auto px-4">
        
        {/* Cabecera Técnica */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-[2px] w-10 bg-fresh-accent"></div>
            <span className="text-fresh-accent text-[10px] font-black uppercase tracking-[4px]">
              Lo último en ingeniería
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-fresh-blue uppercase italic tracking-tighter">
            Novedades<span className="text-gray-200">.</span>
          </h2>
        </div>

        {/* Bento Grid Corregido */}
        {/* h-auto en móvil, h-[600px] en tablet/desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
          {highlights.map((item) => (
            <div 
              key={item.id} 
              /* CAMBIO CLAVE: h-[300px] asegura que en celular la tarjeta 
                 tenga altura física para mostrar el contenido absoluto.
              */
              className={`relative overflow-hidden group cursor-pointer border border-gray-100 min-h-[300px] md:min-h-0 ${item.size}`}
            >
              {/* Imagen de fondo */}
              <img 
                src={item.image} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-fresh-blue/90 via-fresh-blue/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />

              {/* Contenido */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                <span className="text-fresh-accent text-[9px] font-black uppercase tracking-widest mb-2 bg-fresh-blue/50 w-fit px-2 py-1 backdrop-blur-md">
                  {item.tag}
                </span>
                <h3 className="text-white text-xl md:text-2xl font-bold uppercase tracking-tight leading-none mb-2">
                  {item.title}
                </h3>
                
                {/* CAMBIO CLAVE: Opacidad 100 en móvil. 
                   En celulares no hay "hover", así que el texto debe ser visible siempre.
                */}
                <p className="text-gray-300 text-xs md:text-sm max-w-xs opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 translate-y-0 md:translate-y-4 md:group-hover:translate-y-0">
                  {item.description}
                </p>
                
                <div className="mt-4 h-[1px] w-8 md:w-0 bg-fresh-accent md:group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}