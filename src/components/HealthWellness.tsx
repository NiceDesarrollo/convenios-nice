import React from "react";
import { Heart, Shield, Activity, Users } from "lucide-react";

const HealthWellness = () => {
  const healthPartners = [
    {
      icon: Heart,
      name: "Laboratorio Chopo",
      description:
        "Análisis clínicos de alta precisión con resultados digitales instantáneos",
      benefits: ["Descuento 25%", "Resultados en línea", "Citas preferentes"],
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Activity,
      name: "Clínica Ginamed",
      description:
        "Atención ginecológica especializada con tecnología de vanguardia",
      benefits: ["Consultas premium", "Telemedicina", "Seguimiento integral"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Shield,
      name: "Centro Wellness+",
      description:
        "Medicina preventiva y programas personalizados de bienestar",
      benefits: [
        "Check-ups anuales",
        "Nutrición personalizada",
        "Fitness coaching",
      ],
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Users,
      name: "Psicología Integral",
      description:
        "Servicios de salud mental y bienestar emocional para toda la familia",
      benefits: ["Terapia online", "Talleres grupales", "Apoyo 24/7"],
      color: "from-purple-500 to-indigo-500",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-full px-6 py-2 mb-6">
            <Heart className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 font-medium">Salud Premium</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-light mb-6">
            Bienestar{" "}
            <span className="font-semibold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Integral
            </span>
          </h2>
          <h2 className="text-4xl md:text-6xl font-light mb-8">
            Nuestros Aliados en Salud
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Tu bienestar es nuestra prioridad. Accede a servicios de salud de
            clase mundial con atención personalizada y tecnología de vanguardia
          </p>
        </div>

        {/* Health Partners Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {healthPartners.map((partner, index) => {
            const IconComponent = partner.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-800/30 to-slate-900/50 backdrop-blur-sm border border-slate-700/30 rounded-2xl p-8 hover:border-emerald-400/30 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-emerald-500/10"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="w-full h-full bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl transform rotate-1"></div>
                </div>

                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${partner.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-emerald-400 transition-colors duration-300">
                  {partner.name}
                </h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  {partner.description}
                </p>

                {/* Benefits */}
                <div className="space-y-2 mb-8">
                  {partner.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      <span className="text-slate-300 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="w-full bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 hover:from-emerald-600 hover:to-cyan-600 border border-emerald-600/30 hover:border-transparent text-emerald-400 hover:text-white font-semibold py-3 rounded-full transition-all duration-300">
                  Conocer Más
                </button>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-emerald-900/30 to-cyan-900/30 border border-emerald-500/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">
              ¿Necesitas atención médica inmediata?
            </h3>
            <p className="text-slate-400 mb-6">
              Accede a nuestro directorio completo de especialistas disponibles
              24/7
            </p>
            <button className="bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
              Directorio Médico
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthWellness;
