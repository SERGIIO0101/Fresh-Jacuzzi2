import React from 'react';
// Si usas lucide-react o similar, si no, usamos SVGs básicos
export default function Features() {
  const items = [
    { title: "Asesoría personalizada", icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" },
    { title: "Envío a todo Colombia", icon: "M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z M13 9h4l3 3v5h-2M1 5h12v7H1z" },
    { title: "Servicio de instalación", icon: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" },
    { title: "Respaldo directo de fábrica", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" }
  ];

  return (
    <section className="py-10 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 max-w-6xl mx-auto">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-4 group">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 group-hover:bg-cyan-50 transition-colors">
                <svg className="w-6 h-6 text-gray-700 group-hover:text-cyan-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={item.icon} />
                </svg>
              </div>
              <span className="text-xs md:text-sm font-bold text-gray-800 tracking-tight">
                {item.title}
              </span>
              {i !== items.length - 1 && (
                <div className="hidden lg:block h-8 w-[1px] bg-gray-200 ml-8"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}