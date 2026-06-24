import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  text: string;
  service: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    text: "Reformaron mi cocina completa en 3 semanas. Todo limpio, sin sorpresas de precio y el resultado es espectacular. Repetiría sin dudarlo.",
    service: "Reformas Integrales",
    rating: 5,
  },
  {
    text: "Vinieron a evaluar el tejado, me dieron un presupuesto claro y en 4 días lo tenían solucionado. Sin filtraciones desde entonces.",
    service: "Tejados e Impermeabilización",
    rating: 5,
  },
  {
    text: "Nos instalaron placas solares y la factura de la luz bajó un 60%. Gestionaron toda la subvención y no tuvimos que preocuparnos de nada.",
    service: "Placas Solares",
    rating: 5,
  },
  {
    text: "Eléctrico rápido y profesional. Actualizó todo el cuadro de luces y nos dejó la casa con puntos de luz donde queríamos. Muy recomendable.",
    service: "Electricidad",
    rating: 5,
  },
  {
    text: "Contraté la reforma completa de mi baño y quedó precioso. Cumplieron el plazo y el trato fue muy cercano durante todo el proceso.",
    service: "Reformas Integrales",
    rating: 5,
  },
  {
    text: "Tuvimos una fuga de agua a las 11 de la noche y vinieron en menos de una hora. Solucionaron el problema y nos explicaron qué había pasado.",
    service: "Fontanería",
    rating: 5,
  },
  {
    text: "Nos quitaron el gotelé de todo el piso y quedaron las paredes perfectas. La pintura quedó impecable. Muy buenos acabados.",
    service: "Acabados",
    rating: 5,
  },
  {
    text: "Instalaron el aire acondicionado en el salón y dos habitaciones. Funcionan perfecto y el trabajo de cableado quedó oculto. Excelente.",
    service: "Climatización",
    rating: 5,
  },
  {
    text: "Necesitaba un informe de arquitectura para derribar un tabique. Me lo gestionaron en una semana, con todo el papeleo incluido.",
    service: "Informes de Arquitectura",
    rating: 5,
  },
  {
    text: "Me fabricaron un armario a medida para el pasillo que no sabía cómo resolver. El acabado es perfecto y aprovechó cada centímetro.",
    service: "Carpintería",
    rating: 5,
  },
  {
    text: "Cambiaron la cerradura de casa y nos instalaron una de seguridad. Rápidos, limpios y el precio muy ajustado. Buen servicio de cerrajería.",
    service: "Cerrajería",
    rating: 5,
  },
  {
    text: "Reconstruyeron la fachada de mi local comercial. El trabajo fue duro pero el equipo fue muy profesional y el resultado transformó el local.",
    service: "Albañilería",
    rating: 5,
  },
];

const TestimonialCarousel = ({ className = "" }: { className?: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setIsTransitioning(false);
      }, 300);
    }, 6000);
  };

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setIsTransitioning(false);
    }, 300);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsTransitioning(false);
    }, 300);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) {
      handleNext();
      startAutoPlay();
    }
    if (distance < -50) {
      handlePrev();
      startAutoPlay();
    }
    setTouchStart(0);
    setTouchEnd(0);
  };

  const handleButtonClick = (direction: "next" | "prev") => {
    if (direction === "next") handleNext();
    else handlePrev();
    startAutoPlay();
  };

  const renderStars = (rating: number) => (
    <div className="flex gap-1 text-landing3-orange mb-4">
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-current" />
      ))}
    </div>
  );

  const getVisibleTestimonials = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      items.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return items;
  };

  return (
    <div className={`py-20 overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-landing3-blueDark mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-landing3-text/70">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación
          </p>
        </div>

        {/* Desktop: 3 cards */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {getVisibleTestimonials().map((testimonial, index) => (
            <div
              key={`${currentIndex}-${index}`}
              className={`bg-white rounded-2xl p-8 shadow-lg border-2 border-landing3-blueDark/5 hover:border-landing3-orange transition-all duration-300 ${
                isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {renderStars(testimonial.rating)}
              <p className="text-landing3-text/80 leading-relaxed mb-6 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-landing3-orange bg-landing3-orange/10 px-3 py-1 rounded-full">
                  {testimonial.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: 1 card */}
        <div
          className="md:hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className={`bg-white rounded-2xl p-8 shadow-lg border-2 border-landing3-blueDark/5 hover:border-landing3-orange transition-all duration-300 ${
              isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }`}
          >
            {renderStars(testimonials[currentIndex].rating)}
            <p className="text-landing3-text/80 leading-relaxed mb-6 italic">
              &ldquo;{testimonials[currentIndex].text}&rdquo;
            </p>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-landing3-orange bg-landing3-orange/10 px-3 py-1 rounded-full">
                {testimonials[currentIndex].service}
              </span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={() => handleButtonClick("prev")}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-landing3-orange hover:bg-landing3-orange/90 text-white shadow-lg transition-all duration-200 hover:scale-110"
            aria-label="Anterior"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsTransitioning(true);
                  setTimeout(() => {
                    setCurrentIndex(index);
                    setIsTransitioning(false);
                  }, 300);
                  startAutoPlay();
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "w-8 bg-landing3-orange" : "w-2 bg-gray-300"
                }`}
                aria-label={`Testimonio ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => handleButtonClick("next")}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-landing3-orange hover:bg-landing3-orange/90 text-white shadow-lg transition-all duration-200 hover:scale-110"
            aria-label="Siguiente"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
