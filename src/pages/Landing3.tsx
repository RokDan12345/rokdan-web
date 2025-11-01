import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import ContactBanner from "@/components/ContactBanner";
import ServicesCarousel from "@/components/ServicesCarousel";

const Landing3 = () => {
  const services = [
    "Aires Acondicionados",
    "Calderas a Gas y Gasoil",
    "Lavadoras",
    "Lavavajillas",
    "Hornos",
    "Vitrocerámica",
    "Inducción",
    "Cocinas a Gas",
    "Neveras",
  ];

  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-landing3-bg font-poppins overflow-x-hidden">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4 flex justify-between items-center flex-wrap gap-2">
          <div className="text-2xl font-bold text-landing3-blueDark">
            Sat<span className="text-landing3-orange">Funcional</span>
          </div>
          <div className="flex gap-3 sm:gap-6 items-center">
            <a href="/" className="text-xs sm:text-sm text-landing3-text hover:text-landing3-orange transition-colors">
              Ver otras propuestas
            </a>
            <Button onClick={scrollToContact} className="bg-landing3-orange hover:bg-landing3-orange/90 text-white rounded-full px-4 sm:px-6 text-sm">
              Contactar
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-landing3-blueDark mb-6 leading-tight break-words">
                Reparamos tu hogar con
                <span className="text-landing3-orange"> confianza</span>
              </h1>
              <p className="text-xl text-landing3-text/80 mb-8 leading-relaxed">
                Somos tu servicio técnico de confianza. Reparamos e instalamos todo tipo 
                de electrodomésticos con rapidez y garantía total.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button onClick={scrollToContact} className="bg-landing3-orange hover:bg-landing3-orange/90 text-white rounded-full px-8 py-6 text-lg">
                  Pedir Cita
                </Button>
                <Button 
                  variant="outline" 
                  className="border-2 border-landing3-blueDark text-landing3-blueDark hover:bg-landing3-blueDark hover:text-white rounded-full px-8 py-6 text-lg"
                >
                  Llamar Ahora
                </Button>
              </div>
            </div>
            <div className="bg-landing3-blueLight/30 rounded-3xl p-12 text-center">
              <div className="text-6xl font-bold text-landing3-blueDark mb-4">500+</div>
              <p className="text-2xl text-landing3-text mb-6">Familias Confían en Nosotros</p>
              <div className="flex justify-center gap-2 text-landing3-orange text-3xl">
                ★★★★★
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-landing3-blueDark mb-4">
              ¿Qué reparamos?
            </h2>
            <p className="text-lg text-landing3-text/70">
              Expertos en todo tipo de electrodomésticos
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-landing3-bg rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-landing3-orange"
              >
                <h3 className="text-xl font-bold text-landing3-blueDark mb-2 group-hover:text-landing3-orange transition-colors">
                  {service}
                </h3>
                <p className="text-landing3-text/60">Servicio rápido y garantizado</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Carousel */}
      <ServicesCarousel services={services} accentColor="orange" className="bg-landing3-bg" />

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 bg-landing3-blueLight/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-landing3-blueDark mb-4">
              ¿Por qué elegirnos?
            </h2>
            <p className="text-lg text-landing3-text/70">
              Tu tranquilidad es nuestra prioridad
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center hover-lift">
              <div className="w-16 h-16 bg-landing3-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-landing3-orange rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold text-landing3-blueDark mb-4">
                Rapidez
              </h3>
              <p className="text-landing3-text/70 leading-relaxed">
                Respondemos en menos de 2 horas y nos desplazamos el mismo día
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center hover-lift">
              <div className="w-16 h-16 bg-landing3-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-landing3-orange rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold text-landing3-blueDark mb-4">
                Garantía
              </h3>
              <p className="text-landing3-text/70 leading-relaxed">
                Todas nuestras reparaciones incluyen garantía de 12 meses
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center hover-lift">
              <div className="w-16 h-16 bg-landing3-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-landing3-orange rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold text-landing3-blueDark mb-4">
                Profesionales
              </h3>
              <p className="text-landing3-text/70 leading-relaxed">
                Técnicos certificados con más de 10 años de experiencia
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="bg-landing3-blueDark rounded-3xl p-12 lg:p-16 text-white">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                ¿Necesitas ayuda?
              </h2>
              <p className="text-xl text-white/80">
                Rellena el formulario y te llamamos en menos de 1 hora
              </p>
            </div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input 
                  placeholder="Tu nombre" 
                  className="bg-white/10 border-white/30 text-white placeholder:text-white/60 rounded-xl py-6"
                />
                <Input 
                  type="tel" 
                  placeholder="Tu teléfono" 
                  className="bg-white/10 border-white/30 text-white placeholder:text-white/60 rounded-xl py-6"
                />
              </div>
              <Input 
                type="email" 
                placeholder="Tu email" 
                className="bg-white/10 border-white/30 text-white placeholder:text-white/60 rounded-xl py-6"
              />
              <Input 
                placeholder="Servicio que necesitas" 
                className="bg-white/10 border-white/30 text-white placeholder:text-white/60 rounded-xl py-6"
              />
              <Textarea 
                placeholder="Describa el problema" 
                rows={5}
                className="bg-white/10 border-white/30 text-white placeholder:text-white/60 rounded-xl"
              />
              <Button className="w-full bg-landing3-orange hover:bg-landing3-orange/90 text-white rounded-full py-6 text-lg font-semibold">
                Enviar Solicitud
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 px-4 sm:px-6 lg:px-12 border-t border-landing3-blueDark/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-landing3-blueDark mb-4">
                Tu<span className="text-landing3-orange">Técnico</span>
              </h3>
              <p className="text-landing3-text/70">Tu servicio técnico de confianza</p>
            </div>
            <div>
              <h4 className="font-bold text-landing3-blueDark mb-4">Contacto</h4>
              <p className="text-landing3-text/70 mb-2">📞 +34 900 123 456</p>
              <p className="text-landing3-text/70">📧 hola@satfuncional.com</p>
            </div>
            <div>
              <h4 className="font-bold text-landing3-blueDark mb-4">Horario</h4>
              <p className="text-landing3-text/70 mb-2">Lunes a Viernes: 8:00 - 20:00</p>
              <p className="text-landing3-text/70">Sábados: 9:00 - 14:00</p>
            </div>
          </div>
          <div className="border-t border-landing3-blueDark/10 pt-8 text-center text-landing3-text/60">
            © 2025 SatFuncional.
          </div>
        </div>
      </footer>

      <ScrollToTopButton className="bg-landing3-orange hover:bg-landing3-orange/90 text-white" />
      <ContactBanner className="bg-landing3-orange text-white" />
    </div>
  );
};

export default Landing3;
