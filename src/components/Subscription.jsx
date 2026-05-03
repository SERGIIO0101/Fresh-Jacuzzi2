import React from 'react';

export default function Subscription() {
  return (
    <section className="py-20 bg-[#080808] border-t border-white/5 text-center font-montserrat">
      <div className="container mx-auto px-6">
        
        <h2 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tight uppercase">
          Suscríbete a la vanguardia
        </h2>
        
        <p className="text-gray-500 text-[10px] md:text-[11px] uppercase tracking-[4px] mb-10">
          Recibe las últimas tendencias en ingeniería y diseño
        </p>

        <form 
          className="max-w-md mx-auto flex flex-col md:flex-row items-end gap-6 md:gap-10"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="w-full relative group">
            <input 
              type="email" 
              placeholder="TU CORREO ELECTRÓNICO" 
              className="bg-transparent border-b border-white/20 w-full py-3 text-[10px] tracking-[3px] text-white outline-none transition-all duration-500 focus:border-cyan-500 placeholder:text-gray-700" 
            />
            {/* Línea de foco animada */}
            <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-cyan-500 transition-all duration-700 group-focus-within:w-full"></div>
          </div>

          <button 
            type="submit"
            className="w-full md:w-auto text-[10px] tracking-[4px] font-black uppercase text-white hover:text-cyan-500 transition-all duration-300 pb-3 border-b border-white/10 hover:border-cyan-500 whitespace-nowrap"
          >
            Enviar
          </button>
        </form>

        <p className="mt-12 text-[8px] text-gray-600 uppercase tracking-[2px] opacity-60">
          Al suscribirte, aceptas nuestra política de tratamiento de datos personales.
        </p>
      </div>
    </section>
  );
}