import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavItem = ({ label, hasSubmenu = true }) => (
    <div className="flex items-center gap-1 group cursor-pointer hover:text-fresh-accent transition-colors py-2">
      <span className="whitespace-nowrap">{label}</span>
      {hasSubmenu && (
        <svg className="w-2.5 h-2.5 opacity-40 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M19 9l-7 7-7-7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
    </div>
  );

  return (
    <header className="w-full fixed top-0 z-[100] flex flex-col font-montserrat transition-all duration-300">
      
      {/* NIVEL 1: TICKER DINÁMICO ACELERADO */}
      <div className="w-full bg-fresh-blue py-1.5 overflow-hidden border-b border-white/5 flex group/ticker">
        <div 
          className="flex whitespace-nowrap animate-marquee group-hover/ticker:[animation-play-state:paused] cursor-default"
          style={{ animationDuration: '20s' }} // Ajusta este número: menor = más rápido
        >
          {[1, 2, 3, 4].map((i) => (
            <span key={i} className="text-[9px] tracking-[4px] uppercase font-bold text-white/70 mx-12 flex items-center">
              <span className="w-1 h-1 bg-fresh-accent rounded-full mr-4 shadow-[0_0_8px_#00D4FF]"></span>
              Ingeniería del bienestar • Fresh Hidrojacuzzis • Calidad de exportación • 2026 Edition
            </span>
          ))}
        </div>
      </div>

      {/* NIVEL 2: IDENTIDAD */}
      <div className={`bg-fresh-blue text-white px-6 lg:px-20 border-b border-white/5 transition-all duration-500 ease-in-out overflow-hidden ${
        isScrolled ? 'max-h-0 py-0 opacity-0' : 'max-h-24 py-2.5 opacity-100'
      }`}>
        <div className="container mx-auto grid grid-cols-3 items-center">
          <div className="text-[8px] tracking-[4px] text-fresh-accent uppercase font-black">
            VENTAS: 322 918 1669
          </div>
          <div className="flex justify-center">
            <img src={logo} alt="FRESH" className="max-h-12 md:max-h-14 w-auto object-contain brightness-110" />
          </div>
          <div className="flex justify-end gap-5 text-[8px] tracking-widest text-white/40 uppercase font-medium">
            <a href="#" className="hover:text-fresh-accent transition-colors">Catálogos</a>
            <a href="#" className="hover:text-fresh-accent transition-colors hidden md:block">Contacto</a>
          </div>
        </div>
      </div>

      {/* NIVEL 3: NAVEGACIÓN CENTRADA */}
      <nav className={`transition-all duration-500 px-4 lg:px-10 ${
        isScrolled 
          ? 'bg-fresh-blue text-white py-2 border-b border-white/10 shadow-2xl' 
          : 'bg-white text-black py-3 border-none shadow-none' 
      }`}>
        <div className="max-w-[1600px] mx-auto flex items-center">
          
          {/* Logo en scroll (Lado Izquierdo) */}
          <div className={`transition-all duration-500 ease-in-out flex items-center shrink-0 ${
            isScrolled ? 'w-24 opacity-100 mr-6' : 'w-0 opacity-0 pointer-events-none'
          }`}>
            <img src={logo} alt="FRESH" className="h-8 w-auto object-contain brightness-110" />
          </div>

          {/* CENTRO: MENÚ PRINCIPAL */}
          <div className={`flex-grow flex justify-center items-center gap-4 xl:gap-8 text-[9.5px] font-bold tracking-tighter uppercase transition-colors duration-500 ${
            isScrolled ? 'text-white/80' : 'text-gray-800'
          }`}>
            <NavItem label="Hidromasajes" />
            <NavItem label="Baños" />
            <NavItem label="Zona de labores" />
            <NavItem label="Cocinas" />
            <NavItem label="Accesorios" />
            <NavItem label="Zona Outdoor" />
            
            <div className="h-4 w-[1px] bg-gray-300/30 mx-2 hidden xl:block"></div>
            
            <a href="#" className="hover:text-fresh-accent transition-colors whitespace-nowrap">Solicitud servicios</a>
          </div>

          {/* LADO DERECHO: UTILIDADES */}
          <div className="flex items-center gap-3 shrink-0 ml-6">
            <button className="p-2 hover:text-fresh-accent transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            </button>

            <div className={`flex items-center gap-2 border-l pl-4 group cursor-pointer transition-colors ${
              isScrolled ? 'border-white/10' : 'border-gray-100'
            }`}>
              <div className="relative">
                <svg className={`w-5 h-5 transition-colors ${
                  isScrolled ? 'text-white group-hover:text-fresh-accent' : 'text-gray-800 group-hover:text-fresh-accent'
                }`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span className="absolute -top-1 -right-1 bg-fresh-accent text-fresh-blue text-[7px] h-3.5 w-3.5 flex items-center justify-center rounded-full font-black shadow-sm">
                  0
                </span>
              </div>
              <span className={`text-[10px] font-black tracking-tight hidden lg:block uppercase transition-colors ${
                isScrolled ? 'text-white' : 'text-gray-900'
              }`}>
                Cotización
              </span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}