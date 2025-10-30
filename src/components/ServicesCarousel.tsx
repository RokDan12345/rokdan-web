import { useState, useEffect } from "react";

interface ServicesCarouselProps {
  services: string[];
  className?: string;
  accentColor?: string;
}

const ServicesCarousel = ({ services, className = "", accentColor = "orange" }: ServicesCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
        setIsTransitioning(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [services.length]);

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
    <div className={`py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
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

        {/* Image Section */}
        <div className="max-w-2xl mx-auto">
          <div
            className={`relative h-96 rounded-3xl shadow-2xl transition-all duration-500 flex items-center justify-center text-white text-3xl font-bold ${
              isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
            }`}
            style={{
              background: getServiceImageStyle(services[currentIndex]),
            }}
          >
            <div className="absolute inset-0 bg-black/20 rounded-3xl"></div>
            <span className="relative z-10 text-center px-8">{services[currentIndex]}</span>
          </div>
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
