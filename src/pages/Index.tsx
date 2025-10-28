import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Servicios Técnicos
          </h1>
          <p className="text-2xl text-gray-600 mb-4">
            Selecciona una propuesta de diseño
          </p>
          <p className="text-lg text-gray-500">
            Tres opciones únicas con diferentes estilos y personalidades
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Propuesta 1 */}
          <Link to="/propuesta-1">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-[#FAE6B1] via-[#FFA101] to-[#B3DEE5]"></div>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Propuesta 1
                </h2>
                <p className="text-gray-600 mb-4">
                  Estilo <strong>premium y elegante</strong> inspirado en diseños de lujo
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Serif</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Espaciado</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Minimalista</span>
                </div>
                <Button className="w-full bg-[#FFA101] hover:bg-[#FFA101]/90 text-white group-hover:scale-105 transition-transform">
                  Ver Propuesta →
                </Button>
              </div>
            </div>
          </Link>

          {/* Propuesta 2 */}
          <Link to="/propuesta-2">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-[#18B7BE] via-[#178CA4] to-[#072A40]"></div>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Propuesta 2
                </h2>
                <p className="text-gray-600 mb-4">
                  Estilo <strong>tecnológico y profesional</strong> con bordes rectos
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Sans-serif</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Rectángulos</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Moderno</span>
                </div>
                <Button className="w-full bg-[#18B7BE] hover:bg-[#178CA4] text-white group-hover:scale-105 transition-transform">
                  Ver Propuesta →
                </Button>
              </div>
            </div>
          </Link>

          {/* Propuesta 3 */}
          <Link to="/propuesta-3">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-[#FAE6B1] via-[#B3DEE5] to-[#31525B]"></div>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Propuesta 3
                </h2>
                <p className="text-gray-600 mb-4">
                  Estilo <strong>cercano y confiable</strong> con bordes redondeados
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Amigable</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Redondeado</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Cálido</span>
                </div>
                <Button className="w-full bg-[#FFA101] hover:bg-[#FFA101]/90 text-white group-hover:scale-105 transition-transform">
                  Ver Propuesta →
                </Button>
              </div>
            </div>
          </Link>
        </div>

        <div className="mt-16 text-center text-gray-500">
          <p>Haz clic en cualquier propuesta para ver el diseño completo</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
