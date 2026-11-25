import React from 'react';
import { Users, Layers, Building2, Globe } from 'lucide-react';

export const StatsBar: React.FC = () => {
  return (
    <section className="relative py-12 sm:py-16 bg-gradient-to-r from-[#DCEBFF] via-[#EEF5FF] to-[#E0F2FE] border-t border-white overflow-hidden">
      {/* Orbes ambientales vibrantes para que el cristal esmerilado refracte color */}
      <div className="absolute -top-24 left-1/4 w-96 h-96 bg-[#0A84FF]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 right-1/4 w-96 h-96 bg-cyan-400/25 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1540px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
        <div className="bg-white/50 backdrop-blur-2xl border border-white/90 shadow-[inset_0_1px_2px_rgba(255,255,255,0.95),0_16px_48px_rgba(10,132,255,0.12)] rounded-3xl p-6 sm:p-8 grid grid-cols-2 lg:grid-cols-4 gap-8 items-center divide-y lg:divide-y-0 lg:divide-x divide-slate-300/50">
          
          <div className="flex items-center gap-5 pt-4 lg:pt-0 justify-center">
            <div className="w-12 h-12 rounded-2xl bg-[#0A84FF]/10 text-[#0A84FF] flex items-center justify-center shrink-0 shadow-sm">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-[#1F2937]">
                +10
              </div>
              <div className="text-xs sm:text-sm text-slate-500 font-medium">
                Proyectos en desarrollo
              </div>
            </div>
          </div>

          <div className="flex items-center gap-5 pt-4 lg:pt-0 justify-center lg:pl-8">
            <div className="w-12 h-12 rounded-2xl bg-[#0A84FF]/10 text-[#0A84FF] flex items-center justify-center shrink-0 shadow-sm">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-[#1F2937]">
                +5
              </div>
              <div className="text-xs sm:text-sm text-slate-500 font-medium">
                Productos propios
              </div>
            </div>
          </div>

          <div className="flex items-center gap-5 pt-4 lg:pt-0 justify-center lg:pl-8">
            <div className="w-12 h-12 rounded-2xl bg-[#0A84FF]/10 text-[#0A84FF] flex items-center justify-center shrink-0 shadow-sm">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-[#1F2937]">
                +7
              </div>
              <div className="text-xs sm:text-sm text-slate-500 font-medium">
                Industrias impactadas
              </div>
            </div>
          </div>

          <div className="flex items-center gap-5 pt-4 lg:pt-0 justify-center lg:pl-8">
            <div className="w-12 h-12 rounded-2xl bg-[#0A84FF]/10 text-[#0A84FF] flex items-center justify-center shrink-0 shadow-sm">
              <Globe className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-[#1F2937]">
                +3
              </div>
              <div className="text-xs sm:text-sm text-slate-500 font-medium">
                Países con presencia
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
