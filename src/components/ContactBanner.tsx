import { useState } from "react";
import { X } from "lucide-react";

interface ContactBannerProps {
  className?: string;
}

const ContactBanner = ({ className = "" }: ContactBannerProps) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed bottom-20 sm:top-20 sm:bottom-auto right-2 sm:right-4 md:right-6 z-40 w-[260px] sm:max-w-sm shadow-lg rounded-lg p-3 sm:p-4 animate-in slide-in-from-right duration-500 ${className}`}
    >
      <button
        onClick={() => setIsVisible(false)}
        className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-110 transition-transform"
        aria-label="Cerrar banner"
      >
        <X className="w-4 h-4 text-black" />
      </button>
      <div className="text-xs sm:text-sm font-semibold mb-1">Servicio Permanente</div>
      <div className="text-xs sm:text-sm">
        Llame ahora: <a href="tel:+34659016094" className="font-bold hover:underline break-all">+34 659 016 094</a>
      </div>
    </div>
  );
};

export default ContactBanner;
