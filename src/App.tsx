import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { HeroCinematic } from './components/home/HeroCinematic';
import { DivisionsSection } from './components/home/DivisionsSection';
import { FeaturedProductsSection } from './components/home/FeaturedProductsSection';
import { IndustriesSection } from './components/home/IndustriesSection';
import { RnDSection } from './components/home/RnDSection';
import { StatsBar } from './components/home/StatsBar';
import { WhatsAppButton } from './components/common/WhatsAppButton';
import { Footer } from './components/layout/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#080F1C] text-slate-100 flex flex-col font-sans selection:bg-[#0A84FF] selection:text-white">
      {/* Barra de Navegación Oficial con Logo y Órbita */}
      <Navbar />

      <main className="flex-grow">
        {/* Portada Principal: Tierra en Órbita, Titular Oficial, Botones y 4 Pilares */}
        <HeroCinematic />

        {/* Sección: Nuestras Divisiones (5 Tarjetas en Fondo Claro) */}
        <DivisionsSection />

        {/* Sección: Productos Destacados (Fondo Oscuro con 3 Tarjetas Blancas: Factia, INSPECTIA, Visión Artificial) */}
        <FeaturedProductsSection />

        {/* Sección: Industrias que Impulsamos (8 Categorías con Iconos) */}
        <IndustriesSection />

        {/* Sección: I+D – Investigación y Desarrollo (Fotografía del Investigador en Laboratorio + Bloque Informativo) */}
        <RnDSection />

        {/* Barra Inferior de Métricas e Impacto Global */}
        <StatsBar />
      </main>

      {/* Footer Corporativo Internacional */}
      <Footer />

      {/* Botón Flotante Oficial de WhatsApp */}
      <WhatsAppButton />
    </div>
  );
};

export default App;
