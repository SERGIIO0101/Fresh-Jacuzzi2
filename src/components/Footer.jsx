import React from 'react';
import logo from '../assets/logo.png';

export default function Footer() {
  // Enlace codificado a Google Maps para la ubicación exacta
  const googleMapsUrl = "https://maps.google.com/?q=Cl.+36+%2353B-53,+Samaria,+Itagüí";

  return (
    <footer className="bg-fresh-blue text-white pt-16 pb-8 font-montserrat border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Grid Principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Columna 1: Identidad y Autoría */}
          <div className="space-y-8">
            <div className="flex flex-col gap-2">
              <img 
                src={logo} 
                alt="FRESH" 
                className="h-12 md:h-14 w-auto object-contain brightness-110 self-start" 
              />
              <span className="text-[8px] tracking-[5px] uppercase font-bold text-fresh-accent/60">
                Ingeniería del Bienestar
              </span>
            </div>

            <div className="space-y-4 text-[11px] tracking-wide text-gray-400">
              <p><span className="font-bold text-white block uppercase text-[9px] mb-1">Ventas</span> 322 918 1669</p>
              <p><span className="font-bold text-white block uppercase text-[9px] mb-1">WhatsApp Medellín</span> +57 312 679 9235</p>
            </div>
          </div>

          {/* Columna 2: UBICACIÓN TÉCNICA */}
          <div className="space-y-6">
            <h3 className="text-xs font-black uppercase tracking-[4px] text-fresh-accent">Planta y Showroom</h3>
            <div className="space-y-4">
              <div className="text-[11px] text-gray-400 leading-relaxed">
                <p className="text-white font-bold mb-1">ITAGÜÍ - ANTIOQUIA</p>
                <p>Cl. 36 #53B-53, Samaria</p>
                <p className="text-[9px] mt-1 text-fresh-accent/50 italic font-medium">Punto de referencia: Sector Autopista Sur</p>
              </div>

              <a 
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-sm transition-all group"
              >
                <svg className="w-4 h-4 text-fresh-accent group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white">Llegar en Uber / Maps</span>
              </a>
            </div>
          </div>

          {/* Columna 3: Newsletter */}
          <div className="flex flex-col items-start space-y-6">
            <h3 className="text-xs font-black uppercase tracking-[3px] text-fresh-accent">Fresh Insights</h3>
            <p className="text-[11px] text-gray-400 leading-relaxed">Suscríbete para recibir lanzamientos de ingeniería.</p>
            <button className="w-full bg-white/5 hover:bg-fresh-accent border border-white/10 text-white hover:text-fresh-blue px-6 py-3 rounded-sm text-[10px] font-black uppercase tracking-widest transition-all">
              Suscribirme
            </button>
          </div>

          {/* Columna 4: Acción Pro */}
          <div className="flex flex-col items-start space-y-6">
            <h3 className="text-xs font-black uppercase tracking-[3px] text-fresh-accent">Proyectos</h3>
            <p className="text-[11px] text-gray-400 leading-relaxed">Atención especializada para obras y constructoras.</p>
            <button className="w-full bg-fresh-accent text-fresh-blue px-6 py-3 rounded-sm text-[10px] font-black uppercase tracking-widest hover:bg-white transition-all shadow-[0_0_15px_rgba(0,212,255,0.2)]">
              Cotizar Proyecto
            </button>
          </div>
        </div>

        {/* Footer Legal y Firma de Autor */}
        <div className="pt-8 border-t border-white/5 flex flex-col items-center gap-6 text-center">
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-[9px] uppercase tracking-[2px] text-gray-500 font-bold">
            <a href="#" className="hover:text-fresh-accent transition-colors">Protección de Datos</a>
            <a href="#" className="hover:text-fresh-accent transition-colors">Términos</a>
            <a href="#" className="hover:text-fresh-accent transition-colors">Garantías</a>
          </nav>
          
          <div className="space-y-1">
            <p className="text-[9px] text-gray-600 font-medium tracking-widest uppercase">
              Fresh S.A. • Itagüí, Colombia • 2026 ©
            </p>
            <p className="text-[10px] text-white/40 font-medium tracking-tight">
              Diseñado y Desarrollado por <span className="text-white border-b border-fresh-accent/30 hover:border-fresh-accent transition-colors cursor-default">Sergio Severiche Guerrero</span>
            </p>
          </div>
        </div>
      </div>
      {/* EL BOTÓN DE WHATSAPP SE ELIMINÓ DE AQUÍ PARA EVITAR DUPLICADOS CON EL DE APP.JSX */}
    </footer>
  );
}