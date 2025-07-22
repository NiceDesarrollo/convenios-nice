import React from "react";
import { Clock, Zap, Gift, ArrowRight } from "lucide-react";

const ExclusivePromotion = () => {
  const features = [
    {
      icon: Zap,
      title: "Acceso Inmediato",
      description: "Activa tus beneficios al instante",
    },
    {
      icon: Gift,
      title: "Bonus Exclusivo",
      description: "Regalo especial de bienvenida",
    },
    {
      icon: Clock,
      title: "Soporte 24/7",
      description: "Asistencia premium cuando lo necesites",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-8 relative">
        {/* Main Promotion Card */}
        <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-lg border border-slate-700/50 rounded-3xl overflow-hidden relative">
          {/* Glow Effect */}
          <div className="absolute -inset-px bg-gradient-to-r from-yellow-500/20 via-orange-500/20 to-pink-500/20 rounded-3xl opacity-75"></div>

          <div className="relative p-8 md:p-12">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-full px-4 py-2 mb-6">
                <Clock className="w-4 h-4 text-yellow-400" />
                <span className="text-yellow-400 font-medium text-sm">
                  Oferta por Tiempo Limitado
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-light mb-4">
                <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent font-bold">
                  40% Descuento
                </span>
              </h2>
              <h3 className="text-2xl md:text-3xl font-light text-slate-200 mb-6">
                Acceso Premium Ahora
              </h3>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                Únete hoy y obtén acceso completo a todos nuestros beneficios
                exclusivos con un descuento especial para miembros fundadores
              </p>
            </div>

            {/* Price Display */}
            <div className="text-center mb-12">
              <div className="inline-block bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-slate-600/50 rounded-2xl p-6">
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-slate-500 text-xl line-through">
                    $99
                  </span>
                  <span className="text-4xl md:text-5xl font-bold text-white">
                    $59
                  </span>
                  <span className="text-slate-400">/año</span>
                </div>
                <p className="text-sm text-slate-400">
                  Precio especial de lanzamiento
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className="text-center p-6 bg-gradient-to-br from-slate-800/30 to-slate-900/30 border border-slate-700/30 rounded-xl hover:border-yellow-400/30 transition-all duration-300"
                  >
                    <IconComponent className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                    <h4 className="font-semibold text-white mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-slate-400 text-sm">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <button className="group bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-slate-900 font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/25 flex items-center gap-3">
                  Reclamar Oferta
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>

                <button className="border-2 border-slate-400 hover:border-yellow-400 text-slate-400 hover:text-yellow-400 font-semibold px-8 py-4 rounded-full transition-all duration-300">
                  Ver Términos
                </button>
              </div>

              {/* Urgency Timer */}
              <div className="inline-flex items-center gap-2 text-slate-400 text-sm">
                <Clock className="w-4 h-4" />
                <span>Esta oferta expira en 72 horas</span>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="border-t border-slate-700/50 mt-12 pt-8">
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-slate-400 text-sm">
                    Garantía 30 días
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-slate-400 text-sm">
                    Soporte incluido
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-slate-400 text-sm">
                    Sin compromisos
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExclusivePromotion;
