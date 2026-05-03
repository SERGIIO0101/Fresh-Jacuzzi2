import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const products = [
  { id: 1, name: "LAVAMANOS OSLO CON MUEBLE GODAI PISO 63x48cm", originalPrice: 699700, discountPrice: 629800, discount: "10%", saving: 69900, image: "https://via.placeholder.com/200?text=Oslo", tag: "OFERTA ESPECIAL" },
  { id: 2, name: "LAVAPLATOS AROMA MARFIL DE SOBRE PONER 84X56CM", originalPrice: 677900, discountPrice: 237265, discount: "65%", saving: 440635, image: "https://via.placeholder.com/200?text=Aroma", tag: "OFERTA ESPECIAL" },
  { id: 3, name: "COMBO SANITARIO AVANTI PLUS BLANCO + GRIFERÍA", originalPrice: 450000, discountPrice: 382500, discount: "15%", saving: 67500, image: "https://via.placeholder.com/200?text=Avanti", tag: "OFERTA ESPECIAL" },
  { id: 4, name: "MEZCLADOR COCINA MONOCONTROL CUELLO NEGRO", originalPrice: 280000, discountPrice: 224000, discount: "20%", saving: 56000, image: "https://via.placeholder.com/200?text=Mezclador", tag: "OFERTA ESPECIAL" },
  { id: 5, name: "HIDROMASAJE MYDAS CIRCULAR 182CM 14 JETS", originalPrice: 4500000, discountPrice: 3825000, discount: "15%", saving: 675000, image: "https://via.placeholder.com/200?text=Mydas", tag: "OFERTA ESPECIAL" },
  { id: 6, name: "ESPEJO LED INTELIGENTE 60x80CM ANTI-EMPAÑANTE", originalPrice: 850000, discountPrice: 595000, discount: "30%", saving: 255000, image: "https://via.placeholder.com/200?text=Espejo", tag: "OFERTA ESPECIAL" },
  { id: 7, name: "PISO PORCELANATO PULIDO 60x60 CM CAJA 1.44M2", originalPrice: 120000, discountPrice: 96000, discount: "20%", saving: 24000, image: "https://via.placeholder.com/200?text=Piso", tag: "OFERTA ESPECIAL" },
  { id: 8, name: "CABINA DE DUCHA CUADRADA 80x80 VIDRIO TEMPLADO", originalPrice: 1250000, discountPrice: 875000, discount: "30%", saving: 375000, image: "https://via.placeholder.com/200?text=Cabina", tag: "OFERTA ESPECIAL" },
  { id: 9, name: "CALENTADOR DE AGUA ELÉCTRICO 10LT PASO CONTINUO", originalPrice: 580000, discountPrice: 522000, discount: "10%", saving: 58000, image: "https://via.placeholder.com/200?text=Calentador", tag: "OFERTA ESPECIAL" },
  { id: 10, name: "MUEBLE DE BAÑO SUSPENDIDO CON MESÓN EN CUARZO", originalPrice: 1850000, discountPrice: 1480000, discount: "20%", saving: 370000, image: "https://via.placeholder.com/200?text=Mueble", tag: "OFERTA ESPECIAL" }
];

export default function Offers() {
  const formatCurrency = (val) => 
    new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(val);

  return (
    <section className="py-12 bg-white font-montserrat overflow-hidden">
      {/* Contenedor con max-width para que no ocupe toda la pantalla horizontalmente */}
      <div className="max-w-[1200px] mx-auto px-6">
        
        <h2 className="text-xl font-bold text-center text-[#1c2b39] mb-8 tracking-tight uppercase">
          Ofertas que puedes aprovechar
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={15}
          slidesPerView={1.2}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={true}
          pagination={{ clickable: true }}
          breakpoints={{
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 }, // 5 productos visibles hace las tarjetas pequeñas
          }}
          className="pb-12 offers-swiper"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="bg-white border border-gray-100 flex flex-col h-full group hover:shadow-md transition-all duration-300 rounded-sm">
                
                {/* Header Negro */}
                <div className="bg-[#1c2b39] text-white text-[8px] font-black py-1 px-2 text-center tracking-widest uppercase">
                  {product.tag}
                </div>
                {/* Header Azul Petróleo */}
                <div className="bg-[#00303d] text-white text-[9px] font-bold py-1 text-center border-t border-white/5">
                  AHORRAS {product.discount}
                </div>

                {/* Imagen Pequeña */}
                <div className="aspect-square p-4 flex items-center justify-center bg-gray-50">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 mix-blend-multiply" 
                  />
                </div>

                {/* Info Compacta */}
                <div className="p-3 flex flex-col flex-grow text-center">
                  <h3 className="text-[10px] font-bold text-gray-800 leading-tight mb-2 h-7 overflow-hidden uppercase tracking-tighter">
                    {product.name}
                  </h3>
                  
                  <div className="mb-2">
                    <p className="text-[9px] text-gray-400 line-through decoration-red-500/30">
                      {formatCurrency(product.originalPrice)}
                    </p>
                    <p className="text-sm font-black text-[#1c2b39]">
                      {formatCurrency(product.discountPrice)}
                    </p>
                  </div>

                  <p className="text-[9px] font-bold text-cyan-700 mb-3">
                    Ahorras: {formatCurrency(product.saving)}
                  </p>

                  <button className="mt-auto w-full py-1.5 bg-[#708d91] hover:bg-[#1c2b39] text-white text-[9px] font-black uppercase transition-all">
                    Comprar
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .offers-swiper .swiper-button-next, .offers-swiper .swiper-button-prev { 
          background: #1c2b39; width: 28px !important; height: 28px !important; border-radius: 4px; color: white !important; 
        }
        .offers-swiper .swiper-button-next:after, .offers-swiper .swiper-button-prev:after { font-size: 10px !important; }
        .offers-swiper .swiper-pagination-bullet-active { background: #1c2b39 !important; }
      `}} />
    </section>
  );
}