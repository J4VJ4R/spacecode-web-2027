import React from 'react';
import { ArrowRight, Layers, Scan, Eye } from 'lucide-react';

export const FeaturedProductsSection: React.FC = () => {
  return (
    <section id="productos" className="py-20 sm:py-28 bg-[#080F1C] text-white">
      <div className="max-w-[1540px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
        
        {/* Cabecera de Sección */}
        <div className="flex items-center justify-between mb-10 sm:mb-12">
          <div className="flex items-center gap-3">
            <span className="w-2 h-7 sm:h-8 bg-[#0A84FF] rounded-full inline-block" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white tracking-tight">
              Productos Destacados
            </h2>
          </div>
          <a
            href="#productos"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A84FF] hover:text-[#45A2FF] transition-colors group"
          >
            <span>Explora todo el portafolio</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* 3 Tarjetas de Productos en Blanco de Gran Escala */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8">
          
          {/* Producto 1: Factia */}
          <div className="bg-white text-[#1F2937] rounded-3xl p-6 sm:p-7 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1">
            <div className="flex items-start justify-between gap-5">
              <div className="flex-1">
                {/* Logo Factia */}
                <div className="flex items-center gap-2.5 mb-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#0A84FF] text-white flex items-center justify-center shadow-md shadow-[#0A84FF]/25">
                    <Layers className="w-4 h-4" />
                  </div>
                  <span className="font-display font-bold text-lg sm:text-xl text-[#1F2937] tracking-tight">
                    Factia
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 sm:mb-8">
                  Facturación electrónica y gestión empresarial.
                </p>
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-300 text-xs sm:text-sm font-semibold text-[#0A84FF] hover:border-[#0A84FF] hover:bg-[#0A84FF]/10 transition-colors"
                >
                  <span>Ver producto</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Imagen Factia en Alta Definición */}
              <div className="w-32 sm:w-40 xl:w-48 h-28 sm:h-36 xl:h-40 rounded-2xl overflow-hidden bg-slate-100 shrink-0 self-center shadow-inner">
                <img
                  src="/assets/extracted/prod_factia_super_hd.jpg"
                  alt="Factia Dashboard"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Producto 2: INSPECTIA */}
          <div className="bg-white text-[#1F2937] rounded-3xl p-6 sm:p-7 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1">
            <div className="flex items-start justify-between gap-5">
              <div className="flex-1">
                {/* Logo INSPECTIA */}
                <div className="flex items-center gap-2.5 mb-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#0A84FF]/15 text-[#0A84FF] flex items-center justify-center">
                    <Scan className="w-4 h-4" />
                  </div>
                  <span className="font-display font-bold text-lg sm:text-xl text-[#1F2937] tracking-tight">
                    INSPECTIA
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 sm:mb-8">
                  Inspección, control y supervisión inteligente.
                </p>
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-300 text-xs sm:text-sm font-semibold text-[#0A84FF] hover:border-[#0A84FF] hover:bg-[#0A84FF]/10 transition-colors"
                >
                  <span>Ver producto</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Imagen Inspectia en Alta Definición */}
              <div className="w-32 sm:w-40 xl:w-48 h-28 sm:h-36 xl:h-40 rounded-2xl overflow-hidden bg-slate-100 shrink-0 self-center shadow-inner">
                <img
                  src="/assets/extracted/prod_inspectia_super_hd.jpg"
                  alt="INSPECTIA Tablet"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Producto 3: Visión Artificial */}
          <div className="bg-white text-[#1F2937] rounded-3xl p-6 sm:p-7 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1">
            <div className="flex items-start justify-between gap-5">
              <div className="flex-1">
                {/* Logo Visión Artificial */}
                <div className="flex items-center gap-2.5 mb-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#0A84FF]/15 text-[#0A84FF] flex items-center justify-center">
                    <Eye className="w-4 h-4" />
                  </div>
                  <span className="font-display font-bold text-lg sm:text-xl text-[#1F2937] tracking-tight">
                    Visión Artificial
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 sm:mb-8">
                  Reconocimiento, análisis y detección en tiempo real.
                </p>
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-300 text-xs sm:text-sm font-semibold text-[#0A84FF] hover:border-[#0A84FF] hover:bg-[#0A84FF]/10 transition-colors"
                >
                  <span>Ver producto</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Imagen Visión Artificial en Alta Definición con HUD EPP 100% */}
              <div className="w-32 sm:w-40 xl:w-48 h-28 sm:h-36 xl:h-40 rounded-2xl overflow-hidden bg-slate-100 shrink-0 self-center shadow-inner">
                <img
                  src="/assets/extracted/prod_vision_super_hd.jpg"
                  alt="Visión Artificial EPP"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
