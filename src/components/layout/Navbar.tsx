import React, { useState, useEffect } from 'react';
import { SpaceCodeLogo } from '../common/SpaceCodeLogo';
import { SocialLinks } from '../common/SocialLinks';
import { NAV_LINKS, WHATSAPP_URL } from '../../data/spacecodeData';
import { Send, ChevronDown, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080F1C] border-b border-slate-800/90 shadow-[0_12px_36px_rgba(0,0,0,0.75)] py-3.5'
          : 'bg-gradient-to-b from-[#080F1C] via-[#080F1C]/70 to-transparent py-5'
      }`}
    >
      <div className="max-w-[1540px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
        <div className="flex items-center justify-between">
          
          {/* Logotipo Oficial SPACECode con Órbita Vectorial Nítida */}
          <a href="#hero" className="flex items-center group py-1">
            <SpaceCodeLogo className="h-9 sm:h-10 lg:h-11" />
          </a>

          {/* Menú de Navegación Desktop Expansivo */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm tracking-wide transition-colors relative flex items-center gap-1.5 font-medium ${
                  link.active
                    ? 'text-white font-semibold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <span>{link.name}</span>
                {link.hasDropdown && <ChevronDown className="w-3.5 h-3.5 text-slate-400" />}
                {link.active && (
                  <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[#0A84FF] rounded-full shadow-[0_0_8px_#0A84FF]" />
                )}
              </a>
            ))}
          </nav>

          {/* Botón CTA: Contáctanos (Enlace directo a WhatsApp) */}
          <div className="hidden sm:flex items-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-[#0A84FF] hover:bg-[#0070E0] text-white text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 shadow-lg shadow-[#0A84FF]/30 hover:shadow-[#0A84FF]/50 hover:scale-[1.02]"
            >
              <Send className="w-4 h-4 -rotate-45" />
              <span>Contáctanos</span>
            </a>
          </div>

          {/* Botón Menú Mobile */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Menú Mobile */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#080F1C]/95 backdrop-blur-xl border-b border-white/10 px-6 py-5 space-y-4">
          <nav className="flex flex-col space-y-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base py-2 border-b border-white/5 flex items-center justify-between ${
                  link.active ? 'text-[#0A84FF] font-semibold' : 'text-slate-300'
                }`}
              >
                <span>{link.name}</span>
                {link.hasDropdown && <ChevronDown className="w-4 h-4 text-slate-500" />}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#0A84FF] text-white text-sm font-semibold"
            >
              <Send className="w-4 h-4 -rotate-45" />
              <span>Contáctanos</span>
            </a>
          </div>

          {/* Redes Sociales en Menú Móvil */}
          <div className="pt-4 border-t border-white/10 flex flex-col items-center gap-2.5">
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
              Síguenos en Redes
            </span>
            <SocialLinks className="flex items-center justify-center gap-3" />
          </div>
        </div>
      )}
    </header>
  );
};
