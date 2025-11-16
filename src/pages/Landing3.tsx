import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import ContactBanner from "@/components/ContactBanner";
import ServicesCarousel from "@/components/ServicesCarousel";
import ContactForm from "@/components/ContactForm";
import { useState } from "react";

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

  const [openAccordionItem, setOpenAccordionItem] = useState<string>("");

  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleServiceClick = (index: number) => {
    const accordionValue = `item-${index + 1}`;
    setOpenAccordionItem(accordionValue);
    
    // Wait for accordion to open, then scroll to the specific item
    setTimeout(() => {
      const accordionItem = document.querySelector(`[data-accordion-value="${accordionValue}"]`);
      if (accordionItem) {
        accordionItem.scrollIntoView({ 
          behavior: 'smooth',
          block: 'center'
        });
      }
    }, 300);
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
                {/* Solo visible en mobile */}
                <a href="tel:+34632208757" className="lg:hidden">
                  <Button 
                    variant="outline" 
                    className="border-2 border-landing3-blueDark text-landing3-blueDark hover:bg-landing3-blueDark hover:text-white rounded-full px-8 py-6 text-lg"
                  >
                    Llamar Ahora
                  </Button>
                </a>
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
                onClick={() => handleServiceClick(index)}
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

      {/* Detailed Services Section with Accordion */}
      <section id="servicios-detallados" className="py-20 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-landing3-blueDark mb-4">
              Nuestros Servicios Detallados
            </h2>
            <p className="text-lg text-landing3-text/70">
              Conoce más sobre cada uno de nuestros servicios especializados
            </p>
          </div>
          
          <Accordion 
            type="single" 
            collapsible 
            className="w-full space-y-4"
            value={openAccordionItem}
            onValueChange={setOpenAccordionItem}
          >
            <AccordionItem value="item-1" data-accordion-value="item-1" className="border-2 border-landing3-blueDark/10 rounded-2xl px-6 hover:border-landing3-orange transition-colors">
              <AccordionTrigger className="text-xl font-bold text-landing3-blueDark hover:text-landing3-orange hover:no-underline">
                Aires Acondicionados
              </AccordionTrigger>
              <AccordionContent className="text-landing3-text/70 leading-relaxed">
                Instalación, mantenimiento y reparación de equipos de aire acondicionado. Trabajamos con todas las marcas y modelos, 
                ofreciendo un servicio rápido y eficiente para mantener tu hogar a la temperatura perfecta durante todo el año.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" data-accordion-value="item-2" className="border-2 border-landing3-blueDark/10 rounded-2xl px-6 hover:border-landing3-orange transition-colors">
              <AccordionTrigger className="text-xl font-bold text-landing3-blueDark hover:text-landing3-orange hover:no-underline">
                Calderas a Gas y Gasoil
              </AccordionTrigger>
              <AccordionContent className="text-landing3-text/70 leading-relaxed">
                Especialistas en calderas de gas y gasoil. Realizamos instalaciones, mantenimientos preventivos y reparaciones urgentes. 
                Garantizamos la seguridad y eficiencia de tu sistema de calefacción con técnicos certificados.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" data-accordion-value="item-3" className="border-2 border-landing3-blueDark/10 rounded-2xl px-6 hover:border-landing3-orange transition-colors">
              <AccordionTrigger className="text-xl font-bold text-landing3-blueDark hover:text-landing3-orange hover:no-underline">
                Lavadoras
              </AccordionTrigger>
              <AccordionContent className="text-landing3-text/70 leading-relaxed">
                Reparación y mantenimiento de lavadoras de todas las marcas. Solucionamos problemas de carga, centrifugado, 
                fugas de agua y cualquier avería. Repuestos originales y garantía en todas nuestras reparaciones.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" data-accordion-value="item-4" className="border-2 border-landing3-blueDark/10 rounded-2xl px-6 hover:border-landing3-orange transition-colors">
              <AccordionTrigger className="text-xl font-bold text-landing3-blueDark hover:text-landing3-orange hover:no-underline">
                Lavavajillas
              </AccordionTrigger>
              <AccordionContent className="text-landing3-text/70 leading-relaxed">
                Servicio técnico especializado en lavavajillas. Reparamos problemas de desagüe, limpieza deficiente, 
                fallos en el sistema de secado y cualquier otra avería. Diagnóstico gratuito.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" data-accordion-value="item-5" className="border-2 border-landing3-blueDark/10 rounded-2xl px-6 hover:border-landing3-orange transition-colors">
              <AccordionTrigger className="text-xl font-bold text-landing3-blueDark hover:text-landing3-orange hover:no-underline">
                Hornos
              </AccordionTrigger>
              <AccordionContent className="text-landing3-text/70 leading-relaxed">
                Reparación de hornos eléctricos y a gas. Solucionamos problemas de temperatura, resistencias, termostatos 
                y cualquier componente. Servicio rápido para que vuelvas a disfrutar de tus comidas caseras.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" data-accordion-value="item-6" className="border-2 border-landing3-blueDark/10 rounded-2xl px-6 hover:border-landing3-orange transition-colors">
              <AccordionTrigger className="text-xl font-bold text-landing3-blueDark hover:text-landing3-orange hover:no-underline">
                Vitrocerámica
              </AccordionTrigger>
              <AccordionContent className="text-landing3-text/70 leading-relaxed">
                Especialistas en placas vitrocerámicas. Reparamos zonas de cocción defectuosas, problemas eléctricos 
                y cambio de componentes. Trabajamos con todas las marcas del mercado.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" data-accordion-value="item-7" className="border-2 border-landing3-blueDark/10 rounded-2xl px-6 hover:border-landing3-orange transition-colors">
              <AccordionTrigger className="text-xl font-bold text-landing3-blueDark hover:text-landing3-orange hover:no-underline">
                Inducción
              </AccordionTrigger>
              <AccordionContent className="text-landing3-text/70 leading-relaxed">
                Servicio técnico para placas de inducción. Reparamos fallos electrónicos, problemas de detección de recipientes 
                y cualquier avería. Técnicos especializados en la última tecnología de cocción.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" data-accordion-value="item-8" className="border-2 border-landing3-blueDark/10 rounded-2xl px-6 hover:border-landing3-orange transition-colors">
              <AccordionTrigger className="text-xl font-bold text-landing3-blueDark hover:text-landing3-orange hover:no-underline">
                Cocinas a Gas
              </AccordionTrigger>
              <AccordionContent className="text-landing3-text/70 leading-relaxed">
                Instalación y reparación de cocinas a gas. Revisión de quemadores, válvulas de seguridad y sistemas de encendido. 
                Certificamos todas nuestras instalaciones según normativa vigente.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" data-accordion-value="item-9" className="border-2 border-landing3-blueDark/10 rounded-2xl px-6 hover:border-landing3-orange transition-colors">
              <AccordionTrigger className="text-xl font-bold text-landing3-blueDark hover:text-landing3-orange hover:no-underline">
                Neveras
              </AccordionTrigger>
              <AccordionContent className="text-landing3-text/70 leading-relaxed">
                Reparación de frigoríficos y congeladores. Solucionamos problemas de temperatura, fugas de gas refrigerante, 
                fallos en el compresor y cualquier avería. Atención urgente para evitar pérdida de alimentos.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

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
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 px-4 sm:px-6 lg:px-12 border-t border-landing3-blueDark/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-landing3-blueDark mb-4">
                Sat<span className="text-landing3-orange">Funcional</span>
              </h3>
              <p className="text-landing3-text/70">Tu servicio técnico de confianza</p>
            </div>
            <div>
              <h4 className="font-bold text-landing3-blueDark mb-4">Contacto</h4>
              <p className="text-landing3-text/70 mb-2">📞 <a href="tel:+34632208757" className="lg:pointer-events-none lg:cursor-text">+34 632 208 757</a></p>
              <p className="text-landing3-text/70">📧 satfuncionalmallorca@gmail.com</p>
            </div>
            <div>
              <h4 className="font-bold text-landing3-blueDark mb-4">Horario</h4>
              <p className="text-landing3-text/70 mb-2">Lunes a Viernes: 10:00 - 18:00</p>
              {/* <p className="text-landing3-text/70">Sábados y Domingos: Cerrado</p> */}
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
