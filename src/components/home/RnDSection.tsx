import React from 'react';
import { ArrowRight } from 'lucide-react';

export const RnDSection: React.FC = () => {
  return (
    <section id="id" className="py-16 sm:py-24 bg-white">
      <div className="max-w-[1540px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
        
        {/* Contenedor Dividido de I+D de Gran Escala */}
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 grid grid-cols-1 lg:grid-cols-12 bg-[#080F1C]">
          
          {/* Lado Izquierdo: Fotografía del Científico e Investigador de SPACECode */}
          <div className="lg:col-span-6 relative min-h-[320px] sm:min-h-[420px] lg:min-h-[480px] overflow-hidden">
            <img
              src="/assets/extracted/rd_scientist_hd.jpg"
              alt="Investigador de SPACECode en laboratorio I+D"
              className="w-full h-full object-cover object-center"
            />
            {/* Sutil sombra degradada en la unión */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#080F1C]/90 lg:block hidden" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080F1C] via-transparent to-transparent lg:hidden block" />
          </div>

          {/* Lado Derecho: Contenido de I+D */}
          <div className="lg:col-span-6 p-8 sm:p-14 lg:p-16 flex flex-col justify-center text-white">
            
            <div className="flex items-center gap-3 mb-5">
              <span className="w-2 h-7 sm:h-8 bg-[#0A84FF] rounded-full inline-block" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white tracking-tight">
                I+D – Investigación y Desarrollo
              </h2>
            </div>

            <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed mb-10 font-light max-w-xl">
              Creamos y experimentamos nuevas tecnologías para convertir la investigación en soluciones reales y de alto impacto.
            </p>

            <div>
              <a
                href="#contacto"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#0A84FF] hover:bg-[#0070E0] text-white text-sm sm:text-base font-semibold tracking-wide transition-all duration-200 shadow-xl shadow-[#0A84FF]/30 hover:scale-[1.03] group"
              >
                <span>Explora nuestros proyectos</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
