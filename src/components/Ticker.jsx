{/* NIVEL 1: TICKER (Ajuste de velocidad) */}
<div className="w-full bg-[#1c2b39] py-2 overflow-hidden border-b border-white/5 flex">
  <div 
    className="flex whitespace-nowrap animate-marquee" 
    style={{ animationDuration: '20s' }} // <--- BAJA este número para que vaya MÁS RÁPIDO
  >
    {[1, 2, 3, 4].map((i) => (
      <span key={i} className="text-[10px] tracking-[4px] uppercase font-light text-white/80 mx-10">
        Ingeniería del bienestar • Fresh Hidrojacuzzis • Calidad de exportación • 
      </span>
    ))}
  </div>
</div>