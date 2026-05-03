import React, { useState, useEffect } from 'react';
import './index.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features'; 
import Categories from './components/Categories';
import Offers from './components/Offers';
import Catalogs from './components/Catalogs';
import News from './components/News';
import Testimonials from './components/Testimonials';
import Subscription from './components/Subscription';
import Footer from './components/Footer';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Manejo de Scroll
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);

    // Lógica del Preloader Sutil: Se desvanece rápido (1.8s)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white antialiased selection:bg-fresh-accent selection:text-fresh-blue overflow-x-hidden relative">
      
      {/* 1. PRELOADER MINIMALISTA Y SUTIL (Flota sobre el contenido) */}
      <div className={`fixed inset-0 z-[999] flex flex-col items-center justify-center transition-all duration-1000 ease-in-out ${
        loading 
          ? 'opacity-100 pointer-events-auto' 
          : 'opacity-0 pointer-events-none'
      }`}>
        {/* Fondo translúcido con desenfoque (Glassmorphism sutil) */}
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>

        {/* Contenido del Preloader */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Círculo de Carga Sutil (Agua/Ingeniería) */}
          <div className="w-16 h-16 rounded-full border-t-2 border-fresh-accent animate-spin mb-6"></div>
          
          <h1 className="text-fresh-blue text-lg font-black tracking-[8px] uppercase italic animate-pulse">
            Fresh
          </h1>
          <p className="text-gray-400 text-[9px] font-bold uppercase tracking-[3px] mt-3">
            Ingeniería del Bienestar
          </p>
        </div>
      </div>

      {/* 2. CONTENIDO PRINCIPAL (Siempre visible por debajo) */}
      <Navbar />

      {/* ESPACIADOR DINÁMICO */}
      <div className={`transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'h-[70px] md:h-[84px]' 
          : 'h-[110px] md:h-[182px]' 
      }`} />

      <main className="flex-grow">
        <Hero />
        
        <div className="relative z-20 -mt-8 md:-mt-20 px-4 md:px-0">
          <Features />
        </div>
        
        <section className="reveal active">
          <Categories />
        </section>

        <Offers />
        
        <div className="bg-fresh-blue/[0.02]">
           <Catalogs />
        </div>

        <News />
        <Testimonials />
        <Subscription />
      </main>

      <Footer />
      
      {/* BOTÓN FLOTANTE WhatsApp */}
      <a 
        href="https://wa.me/3229181669" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] flex items-center group touch-none"
      >
        <span className="hidden sm:block mr-3 bg-white text-fresh-blue text-[10px] font-black uppercase tracking-widest py-2 px-4 rounded-full shadow-xl opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 pointer-events-none whitespace-nowrap border border-fresh-blue/5">
          Solicite asesoría
        </span>
        <div className="relative w-13 h-13 md:w-15 md:h-15 bg-[#25D366] text-white rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] flex items-center justify-center active:scale-95 md:group-hover:scale-110 transition-all duration-500">
          <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20" />
          <svg className="w-7 h-7 md:w-8 md:h-8 fill-current relative z-10" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </div>
      </a>
      
    </div>
  );
}