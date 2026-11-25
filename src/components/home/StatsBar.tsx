import React from 'react';
import { Users, Layers, Building2, Globe } from 'lucide-react';

export const StatsBar: React.FC = () => {
  return (
    <section className="py-14 bg-[#F8FAFC] border-t border-slate-200">
      <div className="max-w-[1540px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 items-center divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
          
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
