import React from "react";
import { UserPlus, Search, Gift, Star } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: UserPlus,
      title: "Regístrate en el Portal",
      description:
        "Crea tu cuenta premium en menos de 2 minutos y accede inmediatamente a tu dashboard personalizado",
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: "02",
      icon: Search,
      title: "Explora Nuestras Alianzas",
      description:
        "Descubre más de 50 socios exclusivos organizados por categorías para encontrar exactamente lo que necesitas",
      color: "from-purple-500 to-pink-500",
    },
    {
      number: "03",
      icon: Gift,
      title: "Activa Tus Beneficios",
      description:
        "Con un solo clic activa los beneficios que más te interesen y recibe tu código de acceso personalizado",
      color: "from-orange-500 to-red-500",
    },
    {
      number: "04",
      icon: Star,
      title: "Disfruta de Tus Ventajas",
      description:
        "Presenta tu código en cualquier establecimiento afiliado o úsalo en línea para acceder a descuentos exclusivos",
      color: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <section className="py-24 bg-slate-900 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-full px-6 py-2 mb-6">
            <Star className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 font-medium">Proceso Simple</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-light mb-6">
            Tu Guía para{" "}
            <span className="font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Desbloquear
            </span>
          </h2>
          <h2 className="text-4xl md:text-6xl font-light mb-8">
            Ventajas Premium
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            En solo 4 pasos sencillos, accederás a un mundo de beneficios
            exclusivos diseñados especialmente para miembros como tú
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/30 via-purple-500/30 via-orange-500/30 to-emerald-500/30 transform -translate-y-1/2"></div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={index}
                  className="group relative"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Step Card */}
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl p-8 text-center hover:border-cyan-400/30 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative">
                    {/* Step Number */}
                    <div className="absolute -top-4 left-6 bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-600 rounded-full w-8 h-8 flex items-center justify-center">
                      <span className="text-xs font-bold text-cyan-400">
                        {step.number}
                      </span>
                    </div>

                    {/* Icon */}
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${step.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-sm">
                      {step.description}
                    </p>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  </div>

                  {/* Connection Arrows (Mobile) */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center mt-6 mb-2">
                      <div className="w-0.5 h-8 bg-gradient-to-b from-slate-600 to-transparent"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-slate-800/30 to-slate-900/50 border border-slate-700/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              ¿Listo para comenzar tu{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                experiencia premium
              </span>
              ?
            </h3>
            <p className="text-slate-400 mb-8 text-lg">
              Únete a más de 10,000 miembros que ya disfrutan de beneficios
              exclusivos
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                <UserPlus className="w-5 h-5" />
                Comenzar Ahora
              </button>
              <button className="border-2 border-cyan-400 hover:border-cyan-300 text-cyan-400 hover:text-cyan-300 font-semibold px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2">
                <Search className="w-5 h-5" />
                Ver Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
