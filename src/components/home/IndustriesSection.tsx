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
    <section id="industrias" className="py-20 sm:py-28 bg-[#F8FAFC] text-[#1F2937]">
      <div className="max-w-[1540px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
        
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
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A84FF] hover:text-[#0070E0] transition-colors group"
          >
            <span>Más industrias</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* 8 Tarjetas de Industrias Expansivas */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 xl:gap-5">
          {INDUSTRIES_DATA.map((ind) => {
            const Icon = industryIconMap[ind.iconName] || Building2;

            return (
              <div
                key={ind.id}
                className="bg-white hover:bg-white rounded-2xl p-5 text-center border border-slate-200/90 hover:border-[#0A84FF]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center min-h-[130px] xl:min-h-[145px] group cursor-pointer hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0A84FF]/10 text-[#0A84FF] flex items-center justify-center mb-3 group-hover:bg-[#0A84FF] group-hover:text-white transition-colors">
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
