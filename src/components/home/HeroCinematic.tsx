import React, { useState, useEffect } from 'react';
import { Send, Play, Pause, Code, Cpu, Layers, Globe, ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroSlide {
  id: string;
  badge: string;
  shortLabel: string;
  title: string;
  subtitle: string;
  image: string;
  alt: string;
  objectPosition: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'earth',
    badge: '01 · ALCANCE GLOBAL',
    shortLabel: 'Global',
    title: 'Infraestructura y Órbita Terrestre',
    subtitle: 'Presencia satelital y alcance internacional',
    image: '/assets/extracted/earth_orbit_pristine_8k.jpg',
    alt: 'Planeta Tierra en órbita - Visión Global SPACECode',
    objectPosition: 'object-center lg:object-right-top',
  },
  {
    id: 'headquarters',
    badge: '02 · SEDE CORPORATIVA',
    shortLabel: 'Sede Noche',
    title: 'Campus Central al Anochecer',
    subtitle: 'Fachada principal y centro de innovación',
    image: '/assets/images/spacecode-headquarters.jpg',
    alt: 'Sede corporativa moderna SPACECode Technologies al anochecer',
    objectPosition: 'object-center lg:object-[80%_center]',
  },
  {
    id: 'campus-sunset',
    badge: '03 · CAMPUS TECNOLÓGICO',
    shortLabel: 'Atardecer',
    title: 'Sede Tecnológica al Atardecer',
    subtitle: 'Arquitectura bioclimática y espacios de ingeniería',
    image: '/assets/images/spacecode-campus-sunset.jpg',
    alt: 'Sede tecnológica SPACECode al atardecer',
    objectPosition: 'object-center lg:object-[80%_center]',
  },
  {
    id: 'reception',
    badge: '04 · RECEPCIÓN FUTURISTA',
    shortLabel: 'Recepción',
    title: 'Welcome Center & Hall de Innovación',
    subtitle: 'Diseño minimalista y bienvenida corporativa',
    image: '/assets/images/spacecode-reception.jpg',
    alt: 'Recepción futurista de SPACECode Technologies',
    objectPosition: 'object-center lg:object-[75%_center]',
  },
  {
    id: 'space-lab',
    badge: '05 · LAB ESPACIAL',
    shortLabel: 'Lab Espacial',
    title: 'Laboratorio de Innovación Espacial',
    subtitle: 'Ingeniería aeroespacial y sistemas satelitales',
    image: '/assets/images/spacecode-space-lab.jpg',
    alt: 'Laboratorio de innovación espacial SPACECode',
    objectPosition: 'object-center lg:object-[75%_center]',
  },
  {
    id: 'boardroom',
    badge: '06 · SALA EJECUTIVA',
    shortLabel: 'Directorio',
    title: 'Sala de Juntas y Decisiones Estratégicas',
    subtitle: 'Espacio de gobernanza y visión corporativa',
    image: '/assets/images/spacecode-boardroom.jpg',
    alt: 'Sala de juntas futurista SPACECode',
    objectPosition: 'object-center lg:object-[75%_center]',
  },
  {
    id: 'ai-processor',
    badge: '07 · INTELIGENCIA ARTIFICIAL',
    shortLabel: 'Chips IA',
    title: 'Arquitectura Neuronal y Microchips IA',
    subtitle: 'Semiconductores y aceleración de deep tech',
    image: '/assets/images/spacecode-ai-processor.jpg',
    alt: 'Microprocesador e Inteligencia Artificial SPACECode',
    objectPosition: 'object-center lg:object-[75%_center]',
  },
  {
    id: 'advanced-lab',
    badge: '08 · LABORATORIO I+D',
    shortLabel: 'Centro I+D',
    title: 'Centro de Investigación Avanzada',
    subtitle: 'Experimentación de vanguardia y computación cuántica',
    image: '/assets/images/spacecode-advanced-lab.jpg',
    alt: 'Laboratorio de Investigación Avanzada SPACECode',
    objectPosition: 'object-center lg:object-[70%_center]',
  },
  {
    id: 'library',
    badge: '09 · HUB DE CONOCIMIENTO',
    shortLabel: 'Biblioteca',
    title: 'Oficina & Biblioteca Tecnológica',
    subtitle: 'Gestión del conocimiento e ingeniería aplicada',
    image: '/assets/images/spacecode-library.jpg',
    alt: 'Oficina SPACECode con biblioteca iluminada',
    objectPosition: 'object-center lg:object-[75%_center]',
  },
  {
    id: 'innovation-hangar',
    badge: '10 · ROBÓTICA E INDUSTRIA',
    shortLabel: 'Robótica',
    title: 'Hangar de Automatización y Robótica',
    subtitle: 'Sistemas autónomos para la industria 4.0',
    image: '/assets/images/spacecode-innovation-hangar.jpg',
    alt: 'Robótica Industrial y Hangar Tecnológico',
    objectPosition: 'object-center lg:object-[70%_center]',
  },
  {
    id: 'lounge',
    badge: '11 · ESPACIO COLABORATIVO',
    shortLabel: 'Lounge',
    title: 'Cafetería & Entorno Colaborativo',
    subtitle: 'Cultura de equipo y co-creación continua',
    image: '/assets/images/spacecode-lounge.jpg',
    alt: 'Cafetería SPACECode con ambiente colaborativo',
    objectPosition: 'object-center lg:object-[75%_center]',
  },
];

export const HeroCinematic: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Transición suave automática cada 10 segundos
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [activeSlide, isPlaying]);

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const currentSlide = HERO_SLIDES[activeSlide];

  return (
    <section id="hero" className="relative min-h-[90vh] lg:min-h-[94vh] bg-[#080F1C] text-white flex flex-col justify-between overflow-hidden pt-32 sm:pt-40 pb-10">
      
      {/* Contenedor Cinemático de Fondos con Transición Suave (Crossfade de 10s con 11 slides) */}
      <div className="absolute top-0 right-0 w-full lg:w-[68%] xl:w-[62%] h-full pointer-events-none select-none z-0 overflow-hidden">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = activeSlide === index;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-90 lg:opacity-95 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className={`w-full h-full object-cover ${slide.objectPosition} transition-transform duration-[10000ms] ease-out ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
              />
            </div>
          );
        })}

        {/* Degradados cinemáticos envolventes para proteger el contraste y lectura del texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080F1C] via-[#080F1C]/85 lg:via-[#080F1C]/40 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080F1C] via-[#080F1C]/25 to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#080F1C] to-transparent opacity-85 z-20 pointer-events-none" />
      </div>

      {/* Contenido Principal con Escala Tipográfica Enterprise */}
      <div className="relative z-10 max-w-[1540px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 w-full my-auto">
        <div className="max-w-3xl lg:max-w-4xl py-6 lg:py-10">
          
          {/* Eyebrow / Tagline Oficial */}
          <div className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-slate-300 font-medium mb-5 sm:mb-6 flex items-center gap-2.5">
            <span>INGENIERÍA</span>
            <span className="text-[#0A84FF]">•</span>
            <span>INTELIGENCIA ARTIFICIAL</span>
            <span className="text-[#0A84FF]">•</span>
            <span>INNOVACIÓN</span>
          </div>

          {/* Titular Principal de Gran Impacto */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-[82px] font-display font-extrabold tracking-tight text-white leading-[1.06] mb-6 sm:mb-8">
            Sistemas inteligentes<br />
            que impulsan la próxima<br />
            <span className="text-[#0A84FF] drop-shadow-[0_0_35px_rgba(10,132,255,0.45)]">
              era industrial.
            </span>
          </h1>

          {/* Subtítulo Descriptivo con Amplitud */}
          <p className="text-base sm:text-xl lg:text-2xl text-slate-200/90 leading-relaxed max-w-2xl lg:max-w-3xl mb-10 sm:mb-14 font-light">
            Diseñamos, desarrollamos e implementamos soluciones de software, inteligencia artificial y sistemas tecnológicos para resolver desafíos reales.
          </p>

          {/* Botones de Acción de Escala Premium */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-8 sm:mb-12">
            <a
              href="#divisiones"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#0A84FF] hover:bg-[#0070E0] text-white text-sm sm:text-base font-semibold tracking-wide whitespace-nowrap shrink-0 transition-all duration-200 shadow-xl shadow-[#0A84FF]/35 hover:shadow-[#0A84FF]/55 hover:scale-[1.03]"
            >
              <Send className="w-4 h-4 -rotate-45 shrink-0" />
              <span>Conoce nuestras soluciones</span>
            </a>

            <a
              href="#id"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-black/40 hover:bg-black/60 text-slate-100 hover:text-white text-sm sm:text-base font-semibold tracking-wide whitespace-nowrap shrink-0 border border-white/25 hover:border-white/50 backdrop-blur-md transition-all duration-200"
            >
              <Play className="w-4 h-4 fill-current text-[#0A84FF] shrink-0" />
              <span>Ver video corporativo</span>
            </a>
          </div>

          {/* Consola Interactiva de Presentación: 11 Escenarios SPACECode */}
          <div className="bg-black/55 backdrop-blur-md border border-white/10 rounded-2xl p-3.5 sm:p-4 max-w-2xl shadow-2xl">
            
            {/* Barra superior de segmentos (11 diapositivas estilo historias con progreso) */}
            <div className="grid grid-cols-11 gap-1.5 mb-3">
              {HERO_SLIDES.map((slide, idx) => {
                const isSelected = activeSlide === idx;
                return (
                  <button
                    key={slide.id}
                    onClick={() => setActiveSlide(idx)}
                    title={`${slide.badge} - ${slide.title}`}
                    className="group relative h-1.5 sm:h-2 rounded-full overflow-hidden bg-white/20 hover:bg-white/40 transition-colors"
                  >
                    <div
                      className={`h-full rounded-full transition-all duration-300 ${
                        isSelected
                          ? 'bg-[#0A84FF] shadow-[0_0_8px_#0A84FF]'
                          : idx < activeSlide
                          ? 'bg-white/60'
                          : 'bg-transparent'
                      }`}
                      style={{
                        width: isSelected ? '100%' : idx < activeSlide ? '100%' : '0%',
                      }}
                    />
                  </button>
                );
              })}
            </div>

            {/* Controles de Navegación, Título de la Foto y Play/Pausa */}
            <div className="flex items-center justify-between gap-3 text-xs">
              
              {/* Información de la diapositiva actual */}
              <div className="flex items-center gap-3 min-w-0">
                <span className="font-mono font-bold text-[#0A84FF] shrink-0 text-xs sm:text-sm">
                  {`0${activeSlide + 1}`.slice(-2)} / {`0${HERO_SLIDES.length}`.slice(-2)}
                </span>
                <div className="border-l border-white/15 pl-3 min-w-0">
                  <div className="font-mono text-[11px] sm:text-xs text-slate-300 uppercase tracking-wider truncate font-medium">
                    {currentSlide.badge}
                  </div>
                  <div className="text-[11px] text-slate-400 font-light truncate hidden sm:block">
                    {currentSlide.subtitle}
                  </div>
                </div>
              </div>

              {/* Botones de Control: Anterior, Pausa/Play, Siguiente */}
              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  title={isPlaying ? 'Pausar transición' : 'Reanudar transición (10s)'}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center text-slate-300 hover:text-white bg-white/5 hover:bg-white/15 transition-colors"
                >
                  {isPlaying ? (
                    <Pause className="w-3.5 h-3.5 text-[#0A84FF]" />
                  ) : (
                    <Play className="w-3.5 h-3.5 fill-current text-[#0A84FF]" />
                  )}
                </button>

                <button
                  onClick={handlePrev}
                  title="Foto anterior"
                  aria-label="Foto anterior"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center text-slate-300 hover:text-white bg-white/5 hover:bg-white/15 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button
                  onClick={handleNext}
                  title="Siguiente foto"
                  aria-label="Siguiente foto"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center text-slate-300 hover:text-white bg-white/5 hover:bg-white/15 transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Barra Inferior de 4 Capacidades con Ancho Completo */}
      <div className="relative z-10 max-w-[1540px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 w-full border-t border-white/10 pt-8 pb-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 text-slate-200">
          
          <div className="flex items-center gap-4 group">
            <div className="w-10 h-10 rounded-xl bg-[#0A84FF]/15 border border-[#0A84FF]/35 flex items-center justify-center text-[#0A84FF] shrink-0 group-hover:bg-[#0A84FF] group-hover:text-white transition-colors duration-200">
              <Code className="w-5 h-5" />
            </div>
            <span className="font-medium text-slate-200 text-xs sm:text-sm xl:text-base">
              Desarrollo de productos
            </span>
          </div>

          <div className="flex items-center gap-4 group">
            <div className="w-10 h-10 rounded-xl bg-[#0A84FF]/15 border border-[#0A84FF]/35 flex items-center justify-center text-[#0A84FF] shrink-0 group-hover:bg-[#0A84FF] group-hover:text-white transition-colors duration-200">
              <Cpu className="w-5 h-5" />
            </div>
            <span className="font-medium text-slate-200 text-xs sm:text-sm xl:text-base">
              Inteligencia Artificial
            </span>
          </div>

          <div className="flex items-center gap-4 group">
            <div className="w-10 h-10 rounded-xl bg-[#0A84FF]/15 border border-[#0A84FF]/35 flex items-center justify-center text-[#0A84FF] shrink-0 group-hover:bg-[#0A84FF] group-hover:text-white transition-colors duration-200">
              <Layers className="w-5 h-5" />
            </div>
            <span className="font-medium text-slate-200 text-xs sm:text-sm xl:text-base">
              Soluciones multindustria
            </span>
          </div>

          <div className="flex items-center gap-4 group">
            <div className="w-10 h-10 rounded-xl bg-[#0A84FF]/15 border border-[#0A84FF]/35 flex items-center justify-center text-[#0A84FF] shrink-0 group-hover:bg-[#0A84FF] group-hover:text-white transition-colors duration-200">
              <Globe className="w-5 h-5" />
            </div>
            <span className="font-medium text-slate-200 text-xs sm:text-sm xl:text-base">
              Impacto regional y global
            </span>
          </div>

        </div>
      </div>

    </section>
  );
};
