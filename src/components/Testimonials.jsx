import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 1,
    name: "Tatiana Villa Restrepo",
    text: "Me ha parecido una marca excelente, hace muchos años tengo este lavaplatos, exactamente no recuerdo. Me encanta esa marca.",
    avatar: "https://via.placeholder.com/150/1c2b39/ffffff?text=TV" // Aquí iría la foto real
  },
  {
    id: 2,
    name: "Juan Camilo Herrera",
    text: "El hidromasaje que instalamos superó todas las expectativas. La asesoría técnica fue fundamental para que el proyecto quedara perfecto.",
    avatar: "https://via.placeholder.com/150/1c2b39/ffffff?text=JH"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white font-montserrat overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl">
        
        <h2 className="text-2xl md:text-3xl font-bold text-center text-black mb-12">
          Conoce algunos testimonios de nuestros clientes
        </h2>

        <div className="relative px-12">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000 }}
            navigation={{
              nextEl: '.testimonial-next',
              prevEl: '.testimonial-prev',
            }}
            pagination={{ clickable: true, el: '.testimonial-pagination' }}
            className="pb-12"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 py-4">
                  
                  {/* Avatar Circular */}
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-[3px] border-[#708d91] overflow-hidden flex-shrink-0 shadow-lg">
                    <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                  </div>

                  {/* Texto del testimonio */}
                  <div className="text-center md:text-left max-w-xl">
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 italic">
                      {t.text}
                    </p>
                    <h4 className="text-sm md:text-base font-bold text-[#1c2b39]">
                      {t.name}
                    </h4>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Botones de Navegación Personalizados (Flechas de la imagen) */}
          <button className="testimonial-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-gray-600 hover:bg-[#1c2b39] text-white flex items-center justify-center rounded-sm transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button className="testimonial-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-gray-600 hover:bg-[#1c2b39] text-white flex items-center justify-center rounded-sm transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Paginación (Puntos abajo) */}
          <div className="testimonial-pagination flex justify-center gap-2 mt-4"></div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .testimonial-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #ccc;
          opacity: 1;
        }
        .testimonial-pagination .swiper-pagination-bullet-active {
          background: #1c2b39 !important;
        }
      `}} />
    </section>
  );
}