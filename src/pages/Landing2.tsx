import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const Landing2 = () => {
  const services = ["Aires Acondicionados", "Calderas a Gas y Gasoil", "Lavadoras", "Lavavajillas", "Hornos", "Vitrocerámica", "Inducción", "Cocinas a Gas", "Neveras"];
  return <div className="min-h-screen bg-landing2-bg font-sans">
      {/* Navigation */}
      <nav className="bg-landing2-navy text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-5 flex justify-between items-center">
          <div className="text-xl font-bold tracking-wider uppercase">
            Tech<span className="text-landing2-cyan">Repair</span>
          </div>
          <div className="flex gap-8 items-center">
            <a href="/" className="text-sm hover:text-landing2-cyan transition-colors">
              Ver otras propuestas
            </a>
            <Button className="bg-landing2-cyan hover:bg-landing2-blue text-white font-semibold px-6 rounded-none">
              Contacto
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-landing2-navy text-white py-20 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-screen-xl ">
            <div className="inline-block bg-landing2-cyan/20 text-landing2-cyan px-4 py-2 mb-6 font-semibold text-sm tracking-wider">
              SERVICIO TÉCNICO PROFESIONAL
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Reparación e Instalación
              <br />
              de Electrodomésticos
            </h1>
            <p className="text-lg text-white/80 mb-10 leading-relaxed">
              Soluciones técnicas rápidas y eficientes para tu hogar. 
              Tecnología y experiencia al servicio de tus necesidades.
            </p>
            <Button className="bg-landing2-cyan hover:bg-landing2-blue text-white px-10 py-6 text-base font-semibold rounded-none">
              SOLICITAR SERVICIO →
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-landing2-navy mb-4">
              SERVICIOS ESPECIALIZADOS
            </h2>
            <div className="w-20 h-1 bg-landing2-cyan mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => <div key={index} className="group bg-white border-2 border-landing2-navy/10 p-8 hover:border-landing2-cyan transition-all duration-300 cursor-pointer">
                <h3 className="text-xl font-bold text-landing2-navy mb-2 group-hover:text-landing2-cyan transition-colors">
                  {service}
                </h3>
                <div className="w-0 h-0.5 bg-landing2-cyan group-hover:w-full transition-all duration-300"></div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-landing2-cyan text-white py-16 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">10+</div>
              <p className="text-lg text-white/90">Años de Experiencia</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <p className="text-lg text-white/90">Clientes Satisfechos</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">24/7</div>
              <p className="text-lg text-white/90">Atención Disponible</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 px-6 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-landing2-navy mb-6">
                POR QUÉ ELEGIRNOS
              </h2>
              <div className="w-20 h-1 bg-landing2-cyan mb-8"></div>
              <p className="text-lg text-landing2-text/80 mb-8 leading-relaxed">
                Combinamos tecnología avanzada con un servicio personalizado. 
                Nuestro equipo de técnicos certificados garantiza soluciones eficientes 
                y duraderas para todos tus electrodomésticos.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-landing2-cyan/10 flex items-center justify-center flex-shrink-0">
                    <div className="w-3 h-3 bg-landing2-cyan"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-landing2-navy mb-1 text-lg">RESPUESTA RÁPIDA</h4>
                    <p className="text-landing2-text/70">Atención inmediata a todas las solicitudes</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-landing2-cyan/10 flex items-center justify-center flex-shrink-0">
                    <div className="w-3 h-3 bg-landing2-cyan"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-landing2-navy mb-1 text-lg">GARANTÍA COMPLETA</h4>
                    <p className="text-landing2-text/70">Cobertura total en todos nuestros servicios</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-landing2-cyan/10 flex items-center justify-center flex-shrink-0">
                    <div className="w-3 h-3 bg-landing2-cyan"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-landing2-navy mb-1 text-lg">TÉCNICOS CERTIFICADOS</h4>
                    <p className="text-landing2-text/70">Personal altamente cualificado y experimentado</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-landing2-navy text-white p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-6">SOLICITE SU PRESUPUESTO</h3>
              <p className="text-white/80 mb-8">
                Sin compromiso. Le respondemos en menos de 24 horas.
              </p>
              <Button className="bg-landing2-cyan hover:bg-landing2-blue text-white px-8 py-6 rounded-none font-semibold">
                CONTACTAR AHORA →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6 lg:px-16 bg-landing2-offWhite">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-landing2-navy mb-4">
              FORMULARIO DE CONTACTO
            </h2>
            <div className="w-20 h-1 bg-landing2-cyan mx-auto mb-6"></div>
            <p className="text-lg text-landing2-text/80">
              Complete el formulario y nos pondremos en contacto con usted
            </p>
          </div>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input placeholder="Nombre completo" className="border-2 border-landing2-navy/20 rounded-none py-6 focus:border-landing2-cyan" />
              <Input type="tel" placeholder="Teléfono" className="border-2 border-landing2-navy/20 rounded-none py-6 focus:border-landing2-cyan" />
            </div>
            <Input type="email" placeholder="Email" className="border-2 border-landing2-navy/20 rounded-none py-6 focus:border-landing2-cyan" />
            <Textarea placeholder="Describa el servicio que necesita" rows={6} className="border-2 border-landing2-navy/20 rounded-none focus:border-landing2-cyan" />
            <Button className="w-full bg-landing2-cyan hover:bg-landing2-blue text-white py-6 rounded-none font-semibold text-base">
              ENVIAR SOLICITUD →
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-landing2-navy text-white py-12 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 tracking-wider">
                TECH<span className="text-landing2-cyan">REPAIR</span>
              </h3>
              <p className="text-white/70">Servicio técnico profesional</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 tracking-wider">CONTACTO</h4>
              <p className="text-white/70 mb-2">Tel: +34 900 123 456</p>
              <p className="text-white/70">Email: info@techrepair.com</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 tracking-wider">HORARIO</h4>
              <p className="text-white/70 mb-2">Lunes a Viernes: 8:00 - 20:00</p>
              <p className="text-white/70">Sábados: 9:00 - 14:00</p>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/60">
            © 2025 TechRepair. Todos los derechos reservados.
          </div>
        </div>
      </footer>

      <ScrollToTopButton className="bg-landing2-cyan hover:bg-landing2-blue text-white rounded-none" />
    </div>;
};
export default Landing2;