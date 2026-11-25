import React from 'react';
import { ArrowRight, Layers, Scan, Eye } from 'lucide-react';

export const FeaturedProductsSection: React.FC = () => {
  return (
    <section id="productos" className="relative py-20 sm:py-28 bg-[#080F1C] text-white overflow-hidden">
      {/* Orbes de luz ambiental futurista para refracción de cristal oscuro */}
      <div className="absolute -top-24 left-1/4 w-[520px] h-[520px] bg-[#0A84FF]/25 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-24 right-1/4 w-[480px] h-[480px] bg-cyan-400/20 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-[1540px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
        
        {/* Cabecera de Sección */}
        <div className="flex items-center justify-between mb-10 sm:mb-12">
          <div className="flex items-center gap-3">
            <span className="w-2 h-7 sm:h-8 bg-[#0A84FF] rounded-full inline-block shadow-[0_0_12px_#0A84FF]" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white tracking-tight">
              Productos Destacados
            </h2>
          </div>
          <a
            href="#productos"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)] text-sm font-semibold text-white transition-all group"
          >
            <span>Explora todo el portafolio</span>
            <ArrowRight className="w-4 h-4 text-[#0A84FF] transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* 3 Tarjetas de Productos con Glassmorphism Oscuro Enterprise */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8">
          
          {/* Producto 1: Factia */}
          <div className="bg-gradient-to-br from-white/[0.12] via-white/[0.05] to-white/[0.02] backdrop-blur-2xl text-white rounded-3xl p-6 sm:p-7 border border-white/25 hover:border-[#0A84FF]/70 hover:from-white/[0.16] shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_20px_50px_rgba(0,0,0,0.45)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.45),0_24px_60px_rgba(10,132,255,0.25)] transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1.5">
            <div className="flex items-start justify-between gap-5">
              <div className="flex-1">
                {/* Logo Factia */}
                <div className="flex items-center gap-2.5 mb-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#0A84FF]/80 backdrop-blur-md border border-white/40 text-white flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.5),0_4px_14px_rgba(10,132,255,0.4)]">
                    <Layers className="w-4 h-4" />
                  </div>
                  <span className="font-display font-bold text-lg sm:text-xl text-white tracking-tight">
                    Factia
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200/90 leading-relaxed mb-6 sm:mb-8">
                  Facturación electrónica y gestión empresarial.
                </p>
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-[#0A84FF]/80 backdrop-blur-xl border border-white/30 hover:border-white/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.35)] text-xs sm:text-sm font-semibold text-white transition-all duration-200"
                >
                  <span>Ver producto</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Imagen Factia en Alta Definición */}
              <div className="w-32 sm:w-40 xl:w-48 h-28 sm:h-36 xl:h-40 rounded-2xl overflow-hidden bg-slate-900 border border-white/25 shrink-0 self-center shadow-lg">
                <img
                  src="/assets/extracted/prod_factia_super_hd.jpg"
                  alt="Factia Dashboard"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Producto 2: INSPECTIA */}
          <div className="bg-gradient-to-br from-white/[0.12] via-white/[0.05] to-white/[0.02] backdrop-blur-2xl text-white rounded-3xl p-6 sm:p-7 border border-white/25 hover:border-[#0A84FF]/70 hover:from-white/[0.16] shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_20px_50px_rgba(0,0,0,0.45)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.45),0_24px_60px_rgba(10,132,255,0.25)] transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1.5">
            <div className="flex items-start justify-between gap-5">
              <div className="flex-1">
                {/* Logo INSPECTIA */}
                <div className="flex items-center gap-2.5 mb-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#0A84FF]/25 backdrop-blur-md border border-white/30 text-[#0A84FF] flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
                    <Scan className="w-4 h-4" />
                  </div>
                  <span className="font-display font-bold text-lg sm:text-xl text-white tracking-tight">
                    INSPECTIA
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200/90 leading-relaxed mb-6 sm:mb-8">
                  Inspección, control y supervisión inteligente.
                </p>
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-[#0A84FF]/80 backdrop-blur-xl border border-white/30 hover:border-white/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.35)] text-xs sm:text-sm font-semibold text-white transition-all duration-200"
                >
                  <span>Ver producto</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Imagen Inspectia en Alta Definición */}
              <div className="w-32 sm:w-40 xl:w-48 h-28 sm:h-36 xl:h-40 rounded-2xl overflow-hidden bg-slate-900 border border-white/25 shrink-0 self-center shadow-lg">
                <img
                  src="/assets/extracted/prod_inspectia_super_hd.jpg"
                  alt="INSPECTIA Tablet"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Producto 3: Visión Artificial */}
          <div className="bg-gradient-to-br from-white/[0.12] via-white/[0.05] to-white/[0.02] backdrop-blur-2xl text-white rounded-3xl p-6 sm:p-7 border border-white/25 hover:border-[#0A84FF]/70 hover:from-white/[0.16] shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_20px_50px_rgba(0,0,0,0.45)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.45),0_24px_60px_rgba(10,132,255,0.25)] transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1.5">
            <div className="flex items-start justify-between gap-5">
              <div className="flex-1">
                {/* Logo Visión Artificial */}
                <div className="flex items-center gap-2.5 mb-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#0A84FF]/25 backdrop-blur-md border border-white/30 text-[#0A84FF] flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
                    <Eye className="w-4 h-4" />
                  </div>
                  <span className="font-display font-bold text-lg sm:text-xl text-white tracking-tight">
                    Visión Artificial
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200/90 leading-relaxed mb-6 sm:mb-8">
                  Reconocimiento, análisis y detección en tiempo real.
                </p>
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-[#0A84FF]/80 backdrop-blur-xl border border-white/30 hover:border-white/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.35)] text-xs sm:text-sm font-semibold text-white transition-all duration-200"
                >
                  <span>Ver producto</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Imagen Visión Artificial en Alta Definición con HUD EPP 100% */}
              <div className="w-32 sm:w-40 xl:w-48 h-28 sm:h-36 xl:h-40 rounded-2xl overflow-hidden bg-slate-900 border border-white/25 shrink-0 self-center shadow-lg">
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
