import React from 'react';
import { DIVISIONS_DATA } from '../../data/spacecodeData';
import { ArrowRight, Brain, Code, Bot, FlaskConical, Factory } from 'lucide-react';

const iconMap = {
  Brain: Brain,
  Code: Code,
  Bot: Bot,
  FlaskConical: FlaskConical,
  Factory: Factory,
};

export const DivisionsSection: React.FC = () => {
  return (
    <section id="divisiones" className="relative py-20 sm:py-28 bg-gradient-to-b from-[#E8F1FC] via-[#F3F8FF] to-[#EBF3FD] text-[#1F2937] overflow-hidden">
      {/* Iluminación ambiental vibrante para efecto cristal líquido */}
      <div className="absolute top-12 -left-24 w-[480px] h-[480px] bg-[#0A84FF]/20 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[360px] bg-sky-400/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -right-24 w-[480px] h-[480px] bg-indigo-500/15 rounded-full blur-[110px] pointer-events-none" />

      <div className="relative z-10 max-w-[1540px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
        
        {/* Cabecera de Sección */}
        <div className="flex items-center justify-between mb-10 sm:mb-12">
          <div className="flex items-center gap-3">
            <span className="w-2 h-7 sm:h-8 bg-[#0A84FF] rounded-full inline-block" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#1F2937] tracking-tight">
              Nuestras Divisiones
            </h2>
          </div>
          <a
            href="#divisiones"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/55 hover:bg-white/85 backdrop-blur-xl border border-white/90 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_4px_16px_rgba(10,132,255,0.1)] text-sm font-semibold text-[#0A84FF] hover:text-[#0070E0] transition-all group"
          >
            <span>Conoce más</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Cuadrícula de 5 Divisiones con Amplitud y Altura Mejorada */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 xl:gap-7">
          {DIVISIONS_DATA.map((div) => {
            const Icon = iconMap[div.iconName] || Brain;

            return (
              <div
                key={div.id}
                className="bg-white/50 backdrop-blur-2xl rounded-2xl border border-white/90 shadow-[inset_0_1px_2px_rgba(255,255,255,0.95),0_12px_36px_rgba(10,132,255,0.08)] hover:shadow-[inset_0_1px_2px_rgba(255,255,255,1),0_22px_54px_rgba(10,132,255,0.2)] hover:bg-white/75 hover:border-[#0A84FF]/60 transition-all duration-300 flex flex-col group hover:-translate-y-1.5"
              >
                {/* Contenedor relativo que sostiene la imagen y el badge flotante completo */}
                <div className="relative w-full">
                  {/* Imagen Superior con overflow-hidden para los bordes redondeados */}
                  <div className="h-40 sm:h-44 xl:h-48 w-full overflow-hidden rounded-t-2xl bg-slate-900">
                    <img
                      src={div.image}
                      alt={div.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Badge Circular Flotante Liquid Glass */}
                  <div className="absolute -bottom-5 left-5 z-20 w-11 h-11 rounded-full bg-[#0A84FF]/80 backdrop-blur-xl text-white shadow-[inset_0_1px_2px_rgba(255,255,255,0.7),0_8px_20px_rgba(10,132,255,0.45)] border-2 border-white/80 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <Icon className="w-5 h-5 stroke-[2.2]" />
                  </div>
                </div>

                {/* Contenido de la Tarjeta */}
                <div className="p-6 pt-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-bold text-base sm:text-lg text-[#1F2937] mb-2 group-hover:text-[#0A84FF] transition-colors">
                      {div.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {div.description}
                    </p>
                  </div>

                  {/* Flecha de Navegación Glass */}
                  <div className="mt-6 pt-2 flex justify-end">
                    <div className="w-9 h-9 rounded-full bg-white/70 backdrop-blur-md border border-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_4px_12px_rgba(10,132,255,0.12)] flex items-center justify-center group-hover:bg-[#0A84FF] group-hover:border-[#0A84FF] transition-all">
                      <ArrowRight className="w-4 h-4 text-[#0A84FF] group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
