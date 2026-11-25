import React, { useState } from 'react';
import { X } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  defaultMessage?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber = '573176787316',
  defaultMessage = 'Hola SPACECode, me gustaría recibir más información y asesoría técnica sobre sus soluciones de software, inteligencia artificial y productos tecnológicos.',
}) => {
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  const encodedMessage = encodeURIComponent(defaultMessage);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 flex items-end gap-3 pointer-events-auto select-none">
      
      {/* Pastilla / Tooltip Inteligente de Tendencia Actual */}
      {!tooltipDismissed && (
        <div className="hidden sm:flex items-center gap-3 bg-[#080F1C]/95 text-white text-xs px-4 py-2.5 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-md animate-fade-in transition-all duration-300 hover:border-[#25D366]/40 group">
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#25D366] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              <span>CANAL DIRECTO // EN LÍNEA</span>
            </div>
            <span className="text-slate-200 font-medium text-xs mt-0.5">
              ¿Hablamos sobre tu proyecto?
            </span>
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setTooltipDismissed(true);
            }}
            className="text-slate-400 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
            title="Cerrar notificación"
            aria-label="Cerrar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Botón Flotante Principal de WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar a SPACECode por WhatsApp"
        className="relative group flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_10px_40px_rgba(37,211,102,0.6)] hover:scale-105 active:scale-95 transition-all duration-300"
      >
        {/* Anillo Pulsante de Disponibilidad en Vivo */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none" />

        {/* Icono Vectorial Oficial de WhatsApp */}
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 fill-current relative z-10 transition-transform duration-300 group-hover:rotate-6"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.301-.15-1.78-.879-2.056-.979-.276-.1-.476-.15-.677.15-.2.301-.777.979-.953 1.18-.175.2-.351.226-.652.075-.301-.15-1.27-.468-2.42-1.493-.895-.798-1.5-1.783-1.676-2.084-.175-.3-.019-.463.132-.613.136-.135.301-.351.452-.527.15-.175.2-.3.301-.501.1-.2.05-.376-.025-.526-.075-.15-.677-1.632-.928-2.235-.245-.588-.493-.508-.677-.518-.175-.01-.376-.01-.577-.01-.2 0-.526.075-.802.376-.276.301-1.053 1.028-1.053 2.508 0 1.48 1.078 2.909 1.229 3.11.15.2 2.122 3.24 5.14 4.544.718.31 1.279.495 1.716.634.721.23 1.378.197 1.9.12.581-.087 1.78-.727 2.031-1.43.251-.702.251-1.304.175-1.43-.075-.125-.276-.2-.577-.35z" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.477 2 12c0 1.892.527 3.66 1.442 5.17L2 22l4.98-1.411A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.182a8.15 8.15 0 01-4.16-1.139l-.298-.177-3.087.874.829-3.007-.194-.31A8.157 8.157 0 013.818 12c0-4.519 3.663-8.182 8.182-8.182 4.519 0 8.182 3.663 8.182 8.182 0 4.519-3.663 8.182-8.182 8.182z"
          />
        </svg>
      </a>

    </div>
  );
};
