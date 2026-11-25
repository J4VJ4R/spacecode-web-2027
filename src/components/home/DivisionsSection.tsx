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
    <section id="divisiones" className="py-20 sm:py-28 bg-white text-[#1F2937]">
      <div className="max-w-[1540px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
        
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
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A84FF] hover:text-[#0070E0] transition-colors group"
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
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-[#0A84FF]/40 transition-all duration-300 flex flex-col group hover:-translate-y-1.5"
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
                  
                  {/* Badge Circular Flotante (Por encima del corte, 100% visible sin montajes) */}
                  <div className="absolute -bottom-5 left-5 z-20 w-11 h-11 rounded-full bg-[#0A84FF] text-white shadow-md shadow-[#0A84FF]/30 border-2 border-white flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <Icon className="w-5 h-5 stroke-[2.2]" />
                  </div>
                </div>

                {/* Contenido de la Tarjeta */}
                <div className="p-6 pt-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-bold text-base sm:text-lg text-[#1F2937] mb-2 group-hover:text-[#0A84FF] transition-colors">
                      {div.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                      {div.description}
                    </p>
                  </div>

                  {/* Flecha de Navegación */}
                  <div className="mt-6 pt-2 flex justify-end">
                    <div className="w-8 h-8 rounded-full bg-[#0A84FF]/10 flex items-center justify-center group-hover:bg-[#0A84FF] transition-colors">
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
