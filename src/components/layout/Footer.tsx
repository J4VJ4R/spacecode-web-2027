import React from 'react';
import { SpaceCodeLogo } from '../common/SpaceCodeLogo';
import { SocialLinks } from '../common/SocialLinks';
import { WHATSAPP_URL } from '../../data/spacecodeData';
import { ArrowUp, Mail, Shield, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080F1C] text-slate-400 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-[1540px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 py-16 lg:py-20 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Identidad de Marca */}
          <div className="md:col-span-1 space-y-4">
            <SpaceCodeLogo className="h-9 sm:h-10 lg:h-12" />
            <p className="font-mono text-[10px] text-[#0A84FF] font-semibold tracking-wider uppercase">
              Ingeniería · Inteligencia Artificial · Innovación
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">
              Diseñamos, desarrollamos e implementamos soluciones de software, inteligencia artificial y sistemas tecnológicos para resolver desafíos reales.
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs text-slate-500">
              <Shield className="w-4 h-4 text-[#0A84FF]" />
              <span>Propiedad Intelectual Protegida</span>
            </div>

            {/* Redes Sociales Oficiales */}
            <div className="pt-4 border-t border-white/5">
              <span className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-3 font-semibold">
                Ecosistema Digital // Síguenos
              </span>
              <SocialLinks />
            </div>
          </div>

          {/* Enlaces: Divisiones */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider">
              Divisiones
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#divisiones" className="hover:text-[#0A84FF] transition-colors">SPACE Intelligence</a></li>
              <li><a href="#divisiones" className="hover:text-[#0A84FF] transition-colors">SPACE Systems</a></li>
              <li><a href="#divisiones" className="hover:text-[#0A84FF] transition-colors">SPACE Robotics</a></li>
              <li><a href="#divisiones" className="hover:text-[#0A84FF] transition-colors">SPACE Research</a></li>
              <li><a href="#divisiones" className="hover:text-[#0A84FF] transition-colors">SPACE Industries</a></li>
            </ul>
          </div>

          {/* Enlaces: Productos & Soluciones */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider">
              Productos
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#productos" className="hover:text-[#0A84FF] transition-colors">Factia - Facturación & Gestión</a></li>
              <li><a href="#productos" className="hover:text-[#0A84FF] transition-colors">INSPECTIA - Control Inteligente</a></li>
              <li><a href="#productos" className="hover:text-[#0A84FF] transition-colors">Visión Artificial - Detección EPP</a></li>
              <li><a href="#id" className="hover:text-[#0A84FF] transition-colors">Proyectos de I+D Propietarios</a></li>
            </ul>
          </div>

          {/* Contacto Institucional */}
          <div id="contacto" className="space-y-4 scroll-mt-24">
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider">
              Contacto Global
            </h4>
            <div className="space-y-3 text-sm">
              <a 
                href="mailto:spacecodecol@gmail.com" 
                className="flex items-center gap-2.5 hover:text-[#0A84FF] transition-colors group cursor-pointer"
              >
                <Mail className="w-4 h-4 text-[#0A84FF] group-hover:scale-110 transition-transform" />
                <span className="font-mono text-slate-300 group-hover:text-white">spacecodecol@gmail.com</span>
              </a>
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#0A84FF]" />
                <span>Presencia e impacto internacional</span>
              </div>
              <div className="pt-2">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0A84FF] text-white text-xs font-semibold hover:bg-[#0070E0] transition-colors shadow-md shadow-[#0A84FF]/25"
                >
                  <span>Iniciar Conversación</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Barra Inferior */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} SPACECode®. Todos los derechos reservados.
          </div>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-xs transition-colors"
          >
            <span>Subir al inicio</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
