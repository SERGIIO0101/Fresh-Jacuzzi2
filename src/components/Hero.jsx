import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

// Estilos de Swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

export default function Hero() {
  const slides = [
    {
      id: 1,
      title: "MYDAS",
      subtitle: "Hidromasaje",
      description: "El nuevo centro del bienestar en casa",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070",
      specs: ["14 Potentes jets", "2 Luces led", "Grifería de lujo"],
      features: [
        { label: "Para 2 personas", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg> },
        { label: "182 cm diámetro", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg> }
      ]
    },
    {
      id: 2,
      title: "EXTERIOR",
      subtitle: "Zona Outdoor",
      description: "Diseño que resiste el paso del tiempo",
      image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2070",
      specs: ["Resistencia UV", "Deck sintético", "Control térmico"],
      features: [
        { label: "Clima extremo", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M12 3v1m0 16v1m9-9h-1M4 9H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707" /></svg> },
        { label: "Mantenimiento 0", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> }
      ]
    }
  ];

  return (
    <section className="w-full relative group bg-fresh-blue overflow-hidden">
      <Swiper
        effect={'fade'}
        speed={1200}
        loop={true}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="h-[80vh] md:h-[90vh] w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            {/* ELIMINADO: 'scale-105' y 'group-hover:scale-100'
              AÑADIDO: 'scale-100' fijo para evitar el recorte visual.
            */}
            <div 
              className="relative w-full h-full bg-cover bg-center flex items-center justify-center scale-100"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay con Fresh Blue profundo */}
              <div className="absolute inset-0 bg-gradient-to-b from-fresh-blue/70 via-transparent to-fresh-blue/90" />

              {/* BANNER SUPERIOR (Glass Effect) */}
              <div className="absolute top-0 w-full glass-effect py-3 px-6 md:px-20 flex justify-between items-center z-20 border-b border-white/5">
                <div className="flex items-center gap-3">
                  <span className="border border-fresh-accent text-fresh-accent text-[9px] px-2.5 py-0.5 rounded-sm font-black uppercase tracking-widest animate-pulse">
                    Tecnología Fresh
                  </span>
                  <p className="text-white text-[10px] md:text-[11px] font-medium tracking-widest uppercase opacity-80">
                    Sistemas de alto rendimiento 2026
                  </p>
                </div>
              </div>

              {/* CONTENIDO CENTRAL */}
              <div className="relative z-10 text-center text-white px-4">
                <span className="text-xs md:text-sm font-light tracking-[12px] md:tracking-[20px] uppercase block opacity-70 mb-4">
                  {slide.subtitle}
                </span>
                <h1 className="text-6xl md:text-[140px] font-black tracking-tighter leading-none mb-6 drop-shadow-[0_10px_30px_rgba(0,212,255,0.2)]">
                  {slide.title}
                </h1>
                <p className="text-sm md:text-xl font-light italic text-white/60 mb-10 tracking-[3px] max-w-2xl mx-auto">
                  {slide.description}
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <button className="px-10 py-4 bg-fresh-accent text-fresh-blue text-[10px] font-black uppercase tracking-[3px] hover:bg-white transition-all duration-500 shadow-[0_0_25px_rgba(0,212,255,0.3)]">
                    Configurar Ahora
                  </button>
                  <button className="px-10 py-4 border border-white/20 text-white text-[10px] font-bold uppercase tracking-[3px] hover:bg-white/10 transition-all backdrop-blur-sm">
                    Ficha Técnica
                  </button>
                </div>
              </div>

              {/* ESPECIFICACIONES (Lado Izquierdo) */}
              <div className="absolute left-10 bottom-24 z-20 hidden lg:block">
                <div className="space-y-4 border-l-2 border-fresh-accent pl-6">
                  {slide.specs.map((spec, i) => (
                    <p key={i} className="text-[10px] text-white/50 uppercase tracking-[4px] font-bold hover:text-white transition-colors cursor-default">
                      {spec}
                    </p>
                  ))}
                </div>
              </div>

              {/* ICONOS TÉCNICOS (Lado Derecho) */}
              <div className="absolute right-10 bottom-24 z-20 hidden lg:flex flex-col gap-10">
                {slide.features.map((feat, i) => (
                  <div key={i} className="flex flex-col items-center group cursor-pointer">
                    <div className="w-14 h-14 rounded-sm border border-white/10 flex items-center justify-center text-white/40 group-hover:border-fresh-accent group-hover:text-fresh-accent group-hover:bg-fresh-accent/5 transition-all duration-300 bg-fresh-blue/20 backdrop-blur-md">
                      {feat.icon}
                    </div>
                    <span className="text-[8px] text-white/30 uppercase mt-3 tracking-[3px] font-black text-center w-24 group-hover:text-fresh-accent transition-colors duration-300">
                      {feat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style dangerouslySetInnerHTML={{ __html: `
        .swiper-pagination-bullet { 
          background: #fff !important; 
          width: 12px !important; 
          height: 4px !important; 
          border-radius: 0 !important; 
          opacity: 0.2; 
          transition: all 0.4s ease; 
        }
        .swiper-pagination-bullet-active { 
          background: #00D4FF !important; 
          opacity: 1; 
          width: 24px !important; 
        }
        
        .swiper-button-next, .swiper-button-prev { 
          color: white !important; 
          opacity: 0.03; 
          transition: all 0.3s; 
          transform: scale(0.7);
        }
        .group:hover .swiper-button-next, 
        .group:hover .swiper-button-prev { 
          opacity: 0.3; 
        }
        .swiper-button-next:hover, .swiper-button-prev:hover { 
          opacity: 1 !important; 
          color: #00D4FF !important; 
        }
      `}} />
    </section>
  );
}