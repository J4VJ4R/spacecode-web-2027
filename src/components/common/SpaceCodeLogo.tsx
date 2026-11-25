import React from 'react';

interface SpaceCodeLogoProps {
  className?: string;
}

export const SpaceCodeLogo: React.FC<SpaceCodeLogoProps> = ({ className = 'h-9 sm:h-10 lg:h-11' }) => {
  return (
    <div className={`flex items-center select-none ${className}`}>
      {/* Logotipo Oficial Oficial de SPACECode proporcionado por el usuario en Alta Definición */}
      <img
        src="/assets/logos/spacecode-official-transparent.png"
        alt="SPACECode Logo Oficial"
        className="h-full w-auto object-contain filter drop-shadow-[0_0_14px_rgba(10,132,255,0.35)]"
      />
    </div>
  );
};
