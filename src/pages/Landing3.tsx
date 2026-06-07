import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import ContactBanner from "@/components/ContactBanner";
import ServicesCarousel from "@/components/ServicesCarousel";
import ContactForm from "@/components/ContactForm";
import { useState } from "react";
import { Home, Paintbrush, Zap, Droplets, Sun, Waves, FileText, Clock, Key, ShieldCheck, Wind, Hammer, HardHat, Umbrella, KeyRound } from "lucide-react";

const Landing3 = () => {
  const services = [
    { name: "Reformas Integrales", icon: Home, description: "Cocinas, Baños y Cambio de suelos" },
    { name: "Acabados", icon: Paintbrush, description: "Quitar gotelé y pintura profesional" },
    { name: "Electricidad", icon: Zap, description: "Instalaciones eléctricas completas" },
    { name: "Fontanería", icon: Droplets, description: "Sistemas de agua y saneamiento" },
    { name: "Placas Solares", icon: Sun, description: "Energía renovable para tu hogar" },
    { name: "Piscinas", icon: Waves, description: "Mantenimiento y reparación" },
    { name: "Informes de Arquitectura", icon: FileText, description: "Modificaciones estructurales" },
    { name: "Climatización", icon: Wind, description: "Aire acondicionado y calefacción" },
    { name: "Carpintería", icon: Hammer, description: "Muebles a medida y puertas" },
    { name: "Albañilería", icon: HardHat, description: "Obra civil y construcción" },
    { name: "Tejados e Impermeabilización", icon: Umbrella, description: "Cubiertas y filtraciones" },
    { name: "Cerrajería", icon: KeyRound, description: "Cerraduras y puertas de seguridad" },
  ];

  const carouselServices = services.map((s) => s.name);

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
    <div className="min-h-screen bg-landing3-bg font-poppins">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4 flex justify-between items-center flex-wrap gap-2">
          <div className="flex items-center">
            <img 
              src="/logo-navbar-.jpg" 
              alt="ROKDAN Logo" 
              className="navbar-logo" 
              width="240" 
              height="80"
              loading="eager"
            />
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
                Gestión de Servicios: Creamos tu hogar
                <span className="text-landing3-orange"> desde cero</span>
              </h1>
              <p className="text-xl text-landing3-text/80 mb-8 leading-relaxed">
                Expertos en reformas integrales y reacondicionado de locales. 
                Nos encargamos de todo para que tú no te preocupes por nada.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button onClick={scrollToContact} className="bg-landing3-orange hover:bg-landing3-orange/90 text-white rounded-full px-8 py-6 text-lg">
                  Presupuesto sin compromiso
                </Button>
                <a href="https://wa.me/34618794696" target="_blank" rel="noopener noreferrer">
                  <Button 
                    variant="outline" 
                    className="border-2 border-landing3-orange text-landing3-orange hover:bg-landing3-orange hover:text-white rounded-full px-8 py-6 text-lg"
                  >
                    WhatsApp
                  </Button>
                </a>
                {/* Solo visible en mobile */}
                <a href="tel:+34606023698" className="lg:hidden">
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
              <div className="text-6xl font-bold text-landing3-blueDark mb-4">+200</div>
              <p className="text-2xl text-landing3-text mb-6">Proyectos completados con la máxima satisfacción</p>
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
              Nuestros Servicios
            </h2>
            <p className="text-lg text-landing3-text/70">
              Expertos en todo tipo de reformas y construcción
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  onClick={() => handleServiceClick(index)}
                  className="group bg-landing3-bg rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-landing3-orange"
                >
                  <div className="w-14 h-14 bg-landing3-orange/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-landing3-orange/20 transition-colors">
                    <IconComponent className="w-7 h-7 text-landing3-orange" />
                  </div>
                  <h3 className="text-xl font-bold text-landing3-blueDark mb-2 group-hover:text-landing3-orange transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-landing3-text/60">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Carousel */}
      <ServicesCarousel services={carouselServices} accentColor="orange" className="bg-landing3-bg" />

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
                Reformas Integrales
              </AccordionTrigger>
              <AccordionContent className="text-landing3-text/70 leading-relaxed">
                Transformamos completamente tu hogar con reformas integrales de cocinas, baños y cambio de suelos. 
                Nos encargamos de todo el proceso: desde el diseño inicial hasta los últimos acabados. Trabajamos con 
                materiales de primera calidad y nuestro equipo de profesionales garantiza resultados impecables. 
                Ya sea una renovación completa o una reforma parcial, adaptamos cada proyecto a tus necesidades y presupuesto.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" data-accordion-value="item-2" className="border-2 border-landing3-blueDark/10 rounded-2xl px-6 hover:border-landing3-orange transition-colors">
              <AccordionTrigger className="text-xl font-bold text-landing3-blueDark hover:text-landing3-orange hover:no-underline">
                Acabados
              </AccordionTrigger>
              <AccordionContent className="text-landing3-text/70 leading-relaxed">
                Especialistas en acabados de alta calidad. Eliminamos el gotelé de tus paredes dejándolas perfectamente 
                lisas y listas para pintar. Ofrecemos servicios de pintura profesional con técnicas modernas y pinturas 
                de primera calidad que garantizan durabilidad y un acabado perfecto. También realizamos trabajos de 
                alisado, estucado y efectos decorativos para darle un toque único a cada estancia.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" data-accordion-value="item-3" className="border-2 border-landing3-blueDark/10 rounded-2xl px-6 hover:border-landing3-orange transition-colors">
              <AccordionTrigger className="text-xl font-bold text-landing3-blueDark hover:text-landing3-orange hover:no-underline">
                Electricidad
              </AccordionTrigger>
              <AccordionContent className="text-landing3-text/70 leading-relaxed">
                Instalaciones eléctricas completas realizadas por electricistas certificados. Actualizamos cuadros 
                eléctricos, instalamos nuevos puntos de luz y enchufes, y realizamos el cableado completo de viviendas 
                y locales. Cumplimos con toda la normativa vigente y emitimos los certificados de instalación eléctrica 
                (CIE) necesarios. También nos especializamos en iluminación LED y sistemas de domótica.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" data-accordion-value="item-4" className="border-2 border-landing3-blueDark/10 rounded-2xl px-6 hover:border-landing3-orange transition-colors">
              <AccordionTrigger className="text-xl font-bold text-landing3-blueDark hover:text-landing3-orange hover:no-underline">
                Fontanería
              </AccordionTrigger>
              <AccordionContent className="text-landing3-text/70 leading-relaxed">
                Servicios completos de fontanería para reformas y obra nueva. Instalamos y renovamos sistemas de 
                agua fría y caliente, saneamiento, desagües y bajantes. Trabajamos con materiales de calidad como 
                tuberías de cobre, PEX y multicapa. Solucionamos problemas de humedades, fugas y atascos. También 
                instalamos sistemas de riego, calentadores y calderas con la máxima eficiencia energética.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" data-accordion-value="item-5" className="border-2 border-landing3-blueDark/10 rounded-2xl px-6 hover:border-landing3-orange transition-colors">
              <AccordionTrigger className="text-xl font-bold text-landing3-blueDark hover:text-landing3-orange hover:no-underline">
                Placas Solares
              </AccordionTrigger>
              <AccordionContent className="text-landing3-text/70 leading-relaxed">
                Instalación de sistemas de energía solar fotovoltaica para autoconsumo. Te ayudamos a reducir tu 
                factura eléctrica hasta un 70% con paneles solares de última generación. Realizamos el estudio 
                personalizado de tu vivienda, gestionamos las subvenciones disponibles y nos encargamos de toda 
                la tramitación administrativa. Instalamos sistemas con o sin baterías, adaptados a tus necesidades 
                de consumo energético.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" data-accordion-value="item-6" className="border-2 border-landing3-blueDark/10 rounded-2xl px-6 hover:border-landing3-orange transition-colors">
              <AccordionTrigger className="text-xl font-bold text-landing3-blueDark hover:text-landing3-orange hover:no-underline">
                Piscinas
              </AccordionTrigger>
              <AccordionContent className="text-landing3-text/70 leading-relaxed">
                Mantenimiento integral y reparación de piscinas. Ofrecemos servicios de limpieza periódica, tratamiento 
                del agua, revisión de sistemas de filtración y reparación de averías. Renovamos revestimientos, 
                reparamos fugas y grietas, e instalamos sistemas de climatización para disfrutar de tu piscina 
                todo el año. También construimos piscinas nuevas adaptadas a tu espacio y presupuesto.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" data-accordion-value="item-7" className="border-2 border-landing3-blueDark/10 rounded-2xl px-6 hover:border-landing3-orange transition-colors">
              <AccordionTrigger className="text-xl font-bold text-landing3-blueDark hover:text-landing3-orange hover:no-underline">
                Informes de Arquitectura
              </AccordionTrigger>
              <AccordionContent className="text-landing3-text/70 leading-relaxed">
                Elaboramos informes técnicos de arquitectura para modificaciones estructurales. Nuestro equipo de 
                arquitectos e ingenieros realiza estudios de viabilidad, proyectos de reforma, certificados de 
                habitabilidad y cédulas de segunda ocupación. Gestionamos licencias de obra y nos aseguramos de que 
                tu proyecto cumpla con toda la normativa urbanística. Imprescindible para derribos de tabiques, 
                apertura de huecos o cambios en la distribución de tu vivienda.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" data-accordion-value="item-8" className="border-2 border-landing3-blueDark/10 rounded-2xl px-6 hover:border-landing3-orange transition-colors">
              <AccordionTrigger className="text-xl font-bold text-landing3-blueDark hover:text-landing3-orange hover:no-underline">
                Climatización
              </AccordionTrigger>
              <AccordionContent className="text-landing3-text/70 leading-relaxed">
                Instalación, mantenimiento y reparación de sistemas de climatización. Trabajamos con aires 
                acondicionados split, multisplit, conductos y bombas de calor, así como sistemas de calefacción 
                por radiadores, suelo radiante y calderas. Realizamos cargas de gas, limpieza de filtros, 
                desinfección de conductos y optimización del rendimiento energético. Te asesoramos sobre la 
                mejor solución para mantener tu hogar a la temperatura ideal todo el año.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" data-accordion-value="item-9" className="border-2 border-landing3-blueDark/10 rounded-2xl px-6 hover:border-landing3-orange transition-colors">
              <AccordionTrigger className="text-xl font-bold text-landing3-blueDark hover:text-landing3-orange hover:no-underline">
                Carpintería
              </AccordionTrigger>
              <AccordionContent className="text-landing3-text/70 leading-relaxed">
                Trabajos de carpintería a medida para tu hogar o negocio. Fabricamos e instalamos muebles 
                empotrados, armarios roperos, estanterías, puertas interiores y frentes de armario. Trabajamos 
                con madera maciza, melamina, lacados y laminados de alta calidad. También nos encargamos de la 
                instalación de puertas de entrada blindadas, tarima flotante, frisos y todo tipo de revestimientos 
                de madera. Cada pieza se adapta a las medidas y necesidades de tu espacio.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10" data-accordion-value="item-10" className="border-2 border-landing3-blueDark/10 rounded-2xl px-6 hover:border-landing3-orange transition-colors">
              <AccordionTrigger className="text-xl font-bold text-landing3-blueDark hover:text-landing3-orange hover:no-underline">
                Albañilería
              </AccordionTrigger>
              <AccordionContent className="text-landing3-text/70 leading-relaxed">
                Servicios completos de albañilería y obra civil. Realizamos tabiquería, levantado de muros, 
                enfoscados, enlucidos y soleras. Nos encargamos de derribos, apertura de rozas, instalación de 
                mochetas y dinteles, así como de la ejecución de morteros autonivelantes. Contamos con 
                profesionales con amplia experiencia tanto en obra nueva como en rehabilitación de viviendas 
                y locales comerciales. Trabajamos siempre cumpliendo los plazos y dejando la obra limpia.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-11" data-accordion-value="item-11" className="border-2 border-landing3-blueDark/10 rounded-2xl px-6 hover:border-landing3-orange transition-colors">
              <AccordionTrigger className="text-xl font-bold text-landing3-blueDark hover:text-landing3-orange hover:no-underline">
                Tejados e Impermeabilización
              </AccordionTrigger>
              <AccordionContent className="text-landing3-text/70 leading-relaxed">
                Reparación y construcción de tejados, cubiertas y azoteas. Solucionamos filtraciones, goteras 
                y humedades por condensación o capilaridad. Trabajamos con teja árabe, teja plana, pizarra, 
                panel sándwich y láminas asfálticas. Aplicamos tratamientos impermeabilizantes en terrazas, 
                balcones, patios de luces y cubiertas planas. Revisamos canalones, bajantes y limas para 
                garantizar un correcto drenaje del agua y evitar filtraciones en el futuro.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-12" data-accordion-value="item-12" className="border-2 border-landing3-blueDark/10 rounded-2xl px-6 hover:border-landing3-orange transition-colors">
              <AccordionTrigger className="text-xl font-bold text-landing3-blueDark hover:text-landing3-orange hover:no-underline">
                Cerrajería
              </AccordionTrigger>
              <AccordionContent className="text-landing3-text/70 leading-relaxed">
                Servicios de cerrajería para viviendas, comunidades y locales comerciales. Apertura de puertas 
                sin rotura, cambio de cerraduras, instalación de bombines de seguridad y cilindros antibumping. 
                Montaje de puertas acorazadas, cierres metálicos, persianas de seguridad y rejas fijas o 
                extensibles. Trabajamos con las principales marcas del sector y asesoramos sobre el nivel de 
                seguridad más adecuado para cada caso. Servicio de urgencias disponible las 24 horas.
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
                <Clock className="w-8 h-8 text-landing3-orange" />
              </div>
              <h3 className="text-2xl font-bold text-landing3-blueDark mb-4">
                Rapidez y Eficiencia
              </h3>
              <p className="text-landing3-text/70 leading-relaxed">
                Cumplimos plazos. Tu reforma lista cuando lo prometemos, sin retrasos ni excusas.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center hover-lift">
              <div className="w-16 h-16 bg-landing3-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Key className="w-8 h-8 text-landing3-orange" />
              </div>
              <h3 className="text-2xl font-bold text-landing3-blueDark mb-4">
                Llave en mano
              </h3>
              <p className="text-landing3-text/70 leading-relaxed">
                Nosotros nos encargamos de todo. Desde el diseño hasta la entrega final, tú solo disfruta del resultado.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center hover-lift">
              <div className="w-16 h-16 bg-landing3-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-8 h-8 text-landing3-orange" />
              </div>
              <h3 className="text-2xl font-bold text-landing3-blueDark mb-4">
                Sin preocupaciones
              </h3>
              <p className="text-landing3-text/70 leading-relaxed">
                Garantía total en todos nuestros trabajos. Sin molestias ni sorpresas para el cliente.
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
                Rellena el formulario y te llamamos
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
                ROK<span className="text-landing3-orange">DAN</span>
              </h3>
              <p className="text-landing3-text/70">Tu empresa de reformas de confianza</p>
            </div>
            <div>
              <h4 className="font-bold text-landing3-blueDark mb-4">Contacto</h4>
              <p className="text-landing3-text/70 mb-2"><a href="tel:+34606023698" className="lg:pointer-events-none lg:cursor-text">+34 606 023 698</a></p>
              <p className="text-landing3-text/70 mb-2"><a href="tel:+34618794696" className="lg:pointer-events-none lg:cursor-text">+34 618 794 696</a></p>
              <p className="text-landing3-text/70">rokdan.servicios@gmail.com</p>
            </div>
            <div>
              <h4 className="font-bold text-landing3-blueDark mb-4">Horario</h4>
              <p className="text-landing3-text/70 mb-2">Horario de atención telefónica: 9 a 17</p>
              <p className="text-landing3-text/70">Horario laboral: 9 a 19</p>
            </div>
          </div>
          <div className="border-t border-landing3-blueDark/10 pt-8 text-center text-landing3-text/60">
            © 2026 ROKDAN. Reformas y Construcción.
          </div>
        </div>
      </footer>

      <ScrollToTopButton className="bg-landing3-orange hover:bg-landing3-orange/90 text-white" />
      <ContactBanner className="bg-landing3-orange text-white" />
    </div>
  );
};

export default Landing3;
