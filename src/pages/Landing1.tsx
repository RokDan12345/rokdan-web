import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const Landing1 = () => {
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

  return (
    <div className="min-h-screen bg-landing1-bg font-serif">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-landing1-bg/80 backdrop-blur-md border-b border-landing1-blueDark/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-landing1-blueDark tracking-wide">
            TechServices
          </div>
          <div className="flex gap-6 items-center">
            <a href="/" className="text-sm text-landing1-text hover:text-landing1-orange transition-colors">
              Ver otras propuestas
            </a>
            <Button className="bg-landing1-orange hover:bg-landing1-orange/90 text-white font-medium px-6">
              Contactar
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-6xl lg:text-7xl font-light text-landing1-blueDark mb-6 leading-tight">
              Servicios Técnicos
              <br />
              <span className="font-bold italic">de Excelencia</span>
            </h1>
            <p className="text-xl text-landing1-text/80 mb-10 leading-relaxed">
              Reparación e instalación profesional de electrodomésticos y sistemas de climatización. 
              Compromiso con la calidad y el servicio excepcional.
            </p>
            <div className="flex gap-4">
              <Button className="bg-landing1-blueDark hover:bg-landing1-blueDark/90 text-white px-8 py-6 text-lg">
                Solicitar Servicio
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-landing1-blueDark text-landing1-blueDark hover:bg-landing1-blueDark hover:text-white px-8 py-6 text-lg"
              >
                Ver Servicios
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-landing1-cream/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-5xl font-light text-landing1-blueDark mb-4 text-center">
            Nuestros <span className="font-bold italic">Servicios</span>
          </h2>
          <p className="text-center text-landing1-text/70 mb-16 text-lg">
            Especialistas en reparación e instalación
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white p-10 hover:bg-landing1-blueLight/20 transition-all duration-300 cursor-pointer border border-landing1-blueDark/10"
              >
                <h3 className="text-2xl text-landing1-blueDark font-light mb-2">
                  <span className="underline-animate after:bg-landing1-orange font-medium">
                    {service}
                  </span>
                </h3>
                <p className="text-landing1-text/60 italic">Servicio profesional garantizado</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-light text-landing1-blueDark mb-6">
                Por qué <span className="font-bold italic">confiar en nosotros</span>
              </h2>
              <p className="text-lg text-landing1-text/80 leading-relaxed mb-8">
                Con años de experiencia en el sector, ofrecemos un servicio técnico de primera clase. 
                Nuestro compromiso es garantizar la satisfacción de cada cliente mediante soluciones 
                rápidas y eficaces.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-2 h-2 bg-landing1-orange rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-landing1-blueDark mb-1">Atención Inmediata</h4>
                    <p className="text-landing1-text/70">Respuesta rápida a todas sus consultas</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-2 h-2 bg-landing1-orange rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-landing1-blueDark mb-1">Garantía Total</h4>
                    <p className="text-landing1-text/70">Todos nuestros trabajos están garantizados</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-2 h-2 bg-landing1-orange rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-landing1-blueDark mb-1">Profesionales Certificados</h4>
                    <p className="text-landing1-text/70">Técnicos cualificados y experimentados</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-landing1-blueLight/30 p-12 text-center">
              <div className="text-6xl font-bold text-landing1-blueDark mb-4">500+</div>
              <p className="text-xl text-landing1-text">Clientes Satisfechos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-landing1-blueDark text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h2 className="text-5xl font-light mb-4 text-center">
            <span className="font-bold italic">Contáctenos</span>
          </h2>
          <p className="text-center text-white/80 mb-12 text-lg">
            Estamos aquí para ayudarle. Complete el formulario y nos pondremos en contacto.
          </p>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input 
                placeholder="Nombre completo" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 py-6"
              />
              <Input 
                type="tel" 
                placeholder="Teléfono" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 py-6"
              />
            </div>
            <Input 
              type="email" 
              placeholder="Email" 
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 py-6"
            />
            <Textarea 
              placeholder="Cuéntenos qué necesita" 
              rows={6}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
            <Button className="w-full bg-landing1-orange hover:bg-landing1-orange/90 text-white py-6 text-lg">
              Enviar Consulta
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-landing1-bg border-t border-landing1-blueDark/10 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-landing1-blueDark mb-4">TechServices</h3>
              <p className="text-landing1-text/70">Servicios técnicos de excelencia</p>
            </div>
            <div>
              <h4 className="font-semibold text-landing1-blueDark mb-4">Contacto</h4>
              <p className="text-landing1-text/70 mb-2">Tel: +34 900 123 456</p>
              <p className="text-landing1-text/70">Email: info@techservices.com</p>
            </div>
            <div>
              <h4 className="font-semibold text-landing1-blueDark mb-4">Horario</h4>
              <p className="text-landing1-text/70 mb-2">Lunes a Viernes: 8:00 - 20:00</p>
              <p className="text-landing1-text/70">Sábados: 9:00 - 14:00</p>
            </div>
          </div>
          <div className="border-t border-landing1-blueDark/10 pt-8 text-center text-landing1-text/60">
            © 2025 TechServices. Todos los derechos reservados.
          </div>
        </div>
      </footer>

      <ScrollToTopButton className="bg-landing1-orange hover:bg-landing1-orange/90 text-white" />
    </div>
  );
};

export default Landing1;
