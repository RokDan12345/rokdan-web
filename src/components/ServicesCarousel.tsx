import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ServicesCarouselProps {
  services: string[];
  className?: string;
  accentColor?: string;
}

const ServicesCarousel = ({ services, className = "", accentColor = "orange" }: ServicesCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<Set<string>>(new Set());
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Preload all images when component mounts
  useEffect(() => {
    const preloadImages = () => {
      services.forEach((service) => {
        const img = new Image();
        img.src = getServiceImage(service);
        img.onload = () => {
          setImagesLoaded((prev) => new Set(prev).add(service));
        };
        img.onerror = () => {
          // Image failed to load, will use gradient fallback
          console.log(`Image not found for ${service}, using gradient`);
        };
      });
    };
    
    preloadImages();
  }, [services]);

  const startAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
        setIsTransitioning(false);
      }, 300);
    }, 5000);
  };

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
      setIsTransitioning(false);
    }, 300);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
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
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
      startAutoPlay(); // Restart autoplay after manual interaction
    }
    if (isRightSwipe) {
      handlePrev();
      startAutoPlay(); // Restart autoplay after manual interaction
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  const handleButtonClick = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      handleNext();
    } else {
      handlePrev();
    }
    startAutoPlay(); // Restart autoplay after manual interaction
  };

  // Map services to their images
  const getServiceImage = (service: string) => {
    const imageMap: { [key: string]: string } = {
      "Aires Acondicionados": "/services/aire-acondicionado.webp",
      "Calderas a Gas y Gasoil": "/services/calderas.webp",
      "Lavadoras": "/services/lavadoras.webp",
      "Lavavajillas": "/services/lavavajillas.webp",
      "Hornos": "/services/hornos.webp",
      "Vitrocerámica": "/services/vitroceramica.webp",
      "Inducción": "/services/induccion.webp",
      "Cocinas a Gas": "/services/cocinas-gas.webp",
      "Neveras": "/services/neveras.webp",
      "Campanas Extractoras": "/services/campanas.webp",
      "Televisores": "/services/televisores.webp",
      "Calentadores de Agua": "/services/calentadores.webp",
    };
    return imageMap[service] || "/placeholder.svg";
  };

  // Map services to placeholder images (we'll use solid colors with service name)
  const getServiceImageStyle = (service: string) => {
    const colors = [
      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
      "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      "linear-gradient(135deg, #ff9a56 0%, #ff6a88 100%)",
      "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
    ];
    return colors[services.indexOf(service) % colors.length];
  };

  return (
    <div className={`py-20 overflow-hidden ${className}`}>
      {/* Hidden preloaded images for browser caching */}
      <div className="hidden">
        {services.map((service, idx) => (
          <img
            key={`preload-${idx}`}
            src={getServiceImage(service)}
            alt={service}
            loading="eager"
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className={`text-4xl font-bold mb-8 ${accentColor === 'cyan' ? 'text-landing2-navy' : accentColor === 'orange-landing1' ? 'text-landing1-blueDark' : 'text-landing3-blueDark'}`}>
            Reparamos
          </h2>
          
          {/* Rotating Text */}
          <div className="overflow-hidden h-20 flex items-center justify-center">
            <div
              className={`text-5xl font-bold transition-all duration-300 ${
                isTransitioning ? 'opacity-0 transform translate-x-full' : 'opacity-100 transform translate-x-0'
              } ${
                accentColor === 'cyan' ? 'text-landing2-cyan' : 
                accentColor === 'orange-landing1' ? 'text-landing1-orange' : 
                'text-landing3-orange'
              }`}
            >
              {services[currentIndex]}
            </div>
          </div>
        </div>

        {/* Image Section with Navigation */}
        <div className="max-w-2xl mx-auto relative px-4 md:px-0">
          {/* Previous Button */}
          <button
            onClick={() => handleButtonClick('prev')}
            className={`hidden lg:flex absolute -left-4 xl:-left-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center rounded-full shadow-lg transition-all duration-200 hover:scale-110 ${
              accentColor === 'cyan' ? 'bg-landing2-cyan hover:bg-landing2-cyan/90' : 
              accentColor === 'orange-landing1' ? 'bg-landing1-orange hover:bg-landing1-orange/90' : 
              'bg-landing3-orange hover:bg-landing3-orange/90'
            } text-white`}
            aria-label="Anterior"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Carousel Image */}
          <div
            className={`relative h-64 sm:h-80 lg:h-96 rounded-3xl shadow-2xl transition-all duration-500 overflow-hidden ${
              isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
            }`}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Background Image */}
            <img
              key={`carousel-${currentIndex}`}
              src={getServiceImage(services[currentIndex])}
              alt={services[currentIndex]}
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
              decoding="async"
              onError={(e) => {
                // Fallback to gradient if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
            {/* Fallback gradient background */}
            <div
              className="absolute inset-0"
              style={{
                background: getServiceImageStyle(services[currentIndex]),
                zIndex: -1,
              }}
            ></div>
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/30"></div>
            {/* Service name */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="relative z-10 text-center px-8 text-white text-xl sm:text-2xl lg:text-3xl font-bold drop-shadow-lg">
                {services[currentIndex]}
              </span>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={() => handleButtonClick('next')}
            className={`hidden lg:flex absolute -right-4 xl:-right-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center rounded-full shadow-lg transition-all duration-200 hover:scale-110 ${
              accentColor === 'cyan' ? 'bg-landing2-cyan hover:bg-landing2-cyan/90' : 
              accentColor === 'orange-landing1' ? 'bg-landing1-orange hover:bg-landing1-orange/90' : 
              'bg-landing3-orange hover:bg-landing3-orange/90'
            } text-white`}
            aria-label="Siguiente"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {services.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'w-12' : 'w-2'
              } ${
                index === currentIndex
                  ? accentColor === 'cyan' ? 'bg-landing2-cyan' : 
                    accentColor === 'orange-landing1' ? 'bg-landing1-orange' : 
                    'bg-landing3-orange'
                  : 'bg-gray-300'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesCarousel;
