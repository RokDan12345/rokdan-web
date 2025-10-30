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
      className={`fixed top-20 right-6 z-40 max-w-sm shadow-lg rounded-lg p-4 animate-in slide-in-from-right duration-500 ${className}`}
    >
      <button
        onClick={() => setIsVisible(false)}
        className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-110 transition-transform"
        aria-label="Cerrar banner"
      >
        <X className="w-4 h-4 text-black" />
      </button>
      <div className="text-sm font-semibold mb-1">Servicio Permanente</div>
      <div className="text-base">
        Llame ahora: <a href="tel:+34659016094" className="font-bold hover:underline">+34 659 016 094</a>
      </div>
    </div>
  );
};

export default ContactBanner;
