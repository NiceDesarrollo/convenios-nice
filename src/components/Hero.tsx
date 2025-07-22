import React from "react";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/3184434/pexels-photo-3184434.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)",
          }}
        >
          <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm"></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 p-8">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            NICE
          </div>
          <div className="hidden md:flex space-x-8">
            <a
              href="#benefits"
              className="text-slate-200 hover:text-yellow-400 transition-colors duration-300"
            >
              Beneficios
            </a>
            <a
              href="#alliances"
              className="text-slate-200 hover:text-yellow-400 transition-colors duration-300"
            >
              Alianzas
            </a>
            <a
              href="#contact"
              className="text-slate-200 hover:text-yellow-400 transition-colors duration-300"
            >
              Contacto
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-8 max-w-5xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-extralight mb-6 tracking-wide">
            Beneficios{" "}
            <span className="font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Exclusivos
            </span>
          </h1>
          <h1 className="text-5xl md:text-7xl font-extralight mb-8 tracking-wide">
            para Nuestros Miembros{" "}
            <span className="font-semibold">Distinguidos</span>
          </h1>
        </div>

        <div className="animate-fade-in-up animation-delay-200">
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Accede a una curada selección de ventajas premium en salud,
            bienestar y entretenimiento que elevarán tu estilo de vida
          </p>
        </div>

        <div className="animate-fade-in-up animation-delay-400 flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="group bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-400 hover:to-orange-500 text-slate-900 font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-3">
            Explorar Beneficios
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>

          <button className="group border-2 border-slate-300 hover:border-yellow-400 text-slate-300 hover:text-yellow-400 font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-3">
            <Play className="w-5 h-5" />
            Ver Presentación
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
