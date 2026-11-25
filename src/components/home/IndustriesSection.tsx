import React from 'react';
import { INDUSTRIES_DATA } from '../../data/spacecodeData';
import { ArrowRight, Building2, Factory, Sprout, Zap, ShieldCheck, Truck, HeartPulse, MoreHorizontal } from 'lucide-react';

const industryIconMap = {
  Building2: Building2,
  Factory: Factory,
  Sprout: Sprout,
  Zap: Zap,
  ShieldCheck: ShieldCheck,
  Truck: Truck,
  HeartPulse: HeartPulse,
  MoreHorizontal: MoreHorizontal,
};

export const IndustriesSection: React.FC = () => {
  return (
    <section id="industrias" className="relative py-20 sm:py-28 bg-gradient-to-b from-[#E7F0FC] via-[#EFF6FF] to-[#E6F0FA] text-[#1F2937] overflow-hidden">
      {/* Orbes vibrantes de iluminación para vidrio esmerilado */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-[450px] h-[450px] bg-[#0A84FF]/20 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-cyan-400/20 rounded-full blur-[110px] pointer-events-none" />

      <div className="relative z-10 max-w-[1540px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
        
        {/* Cabecera de Sección */}
        <div className="flex items-center justify-between mb-10 sm:mb-12">
          <div className="flex items-center gap-3">
            <span className="w-2 h-7 sm:h-8 bg-[#0A84FF] rounded-full inline-block" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#1F2937] tracking-tight">
              Industrias que Impulsamos
            </h2>
          </div>
          <a
            href="#industrias"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/55 hover:bg-white/85 backdrop-blur-xl border border-white/90 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_4px_16px_rgba(10,132,255,0.1)] text-sm font-semibold text-[#0A84FF] hover:text-[#0070E0] transition-all group"
          >
            <span>Más industrias</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* 8 Tarjetas de Industrias Expansivas Liquid Glass */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 xl:gap-5">
          {INDUSTRIES_DATA.map((ind) => {
            const Icon = industryIconMap[ind.iconName] || Building2;

            return (
              <div
                key={ind.id}
                className="bg-white/50 backdrop-blur-2xl hover:bg-white/80 rounded-2xl p-5 text-center border border-white/90 hover:border-[#0A84FF]/60 shadow-[inset_0_1px_2px_rgba(255,255,255,0.95),0_10px_30px_rgba(10,132,255,0.08)] hover:shadow-[inset_0_1px_2px_rgba(255,255,255,1),0_18px_40px_rgba(10,132,255,0.18)] transition-all duration-300 flex flex-col items-center justify-center min-h-[130px] xl:min-h-[145px] group cursor-pointer hover:-translate-y-1.5"
              >
                <div className="w-10 h-10 rounded-xl bg-white/75 backdrop-blur-md border border-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_4px_12px_rgba(10,132,255,0.15)] text-[#0A84FF] flex items-center justify-center mb-3 group-hover:bg-[#0A84FF] group-hover:text-white group-hover:border-[#0A84FF] transition-all">
                  <Icon className="w-5 h-5 stroke-[1.8]" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-700 group-hover:text-[#0A84FF] leading-snug">
                  {ind.name}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
