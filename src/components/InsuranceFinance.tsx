import React from "react";
import { Shield, TrendingUp, CreditCard, Banknote } from "lucide-react";

const InsuranceFinance = () => {
  const financePartners = [
    {
      icon: Shield,
      name: "IMSS Digital+",
      description:
        "Servicios digitales del IMSS con gestión simplificada y acceso preferencial",
      benefits: ["Citas digitales", "Historial médico", "Tramites en línea"],
      color: "from-blue-600 to-indigo-600",
    },
    {
      icon: TrendingUp,
      name: "Seguro Plus Premium",
      description:
        "Cobertura integral con planes personalizados y atención especializada",
      benefits: ["Cobertura global", "Sin deducibles", "Atención VIP"],
      color: "from-violet-600 to-purple-600",
    },
    {
      icon: CreditCard,
      name: "FinanceMax Corporate",
      description:
        "Soluciones financieras empresariales con tasas preferenciales",
      benefits: [
        "Tasas especiales",
        "Asesoría gratuita",
        "Productos exclusivos",
      ],
      color: "from-amber-600 to-orange-600",
    },
    {
      icon: Banknote,
      name: "InvestPro Elite",
      description:
        "Gestión de inversiones con estrategias personalizadas y rendimientos superiores",
      benefits: [
        "Portafolio personalizado",
        "Análisis experto",
        "Monitoreo 24/7",
      ],
      color: "from-emerald-600 to-green-600",
    },
  ];

  const stats = [
    { number: "98%", label: "Satisfacción Cliente", icon: Shield },
    { number: "$2M+", label: "Protección Promedio", icon: TrendingUp },
    { number: "24/7", label: "Soporte Disponible", icon: CreditCard },
    { number: "15+", label: "Años Experiencia", icon: Banknote },
  ];

  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full px-6 py-2 mb-6">
            <Shield className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 font-medium">
              Seguridad Financiera
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-light mb-6">
            Protección y{" "}
            <span className="font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Prosperidad
            </span>
          </h2>
          <h2 className="text-4xl md:text-6xl font-light mb-8">
            Soluciones Financieras y de Seguros
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Asegura tu futuro con nuestras alianzas estratégicas en seguros y
            finanzas, diseñadas para brindarte tranquilidad y crecimiento
            patrimonial
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="text-center bg-gradient-to-br from-slate-800/30 to-slate-900/50 border border-slate-700/30 rounded-xl p-6 hover:border-blue-400/30 transition-all duration-300"
              >
                <IconComponent className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Finance Partners Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {financePartners.map((partner, index) => {
            const IconComponent = partner.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl p-8 hover:border-blue-400/30 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Background Glow */}
                <div className="absolute -inset-px bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative">
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${partner.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-semibold mb-4 group-hover:text-blue-400 transition-colors duration-300">
                    {partner.name}
                  </h3>
                  <p className="text-slate-400 leading-relaxed mb-6">
                    {partner.description}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-2 mb-8">
                    {partner.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-slate-300 text-sm">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className="w-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 hover:from-blue-600 hover:to-purple-600 border border-blue-600/30 hover:border-transparent text-blue-400 hover:text-white font-semibold py-3 rounded-full transition-all duration-300">
                    Solicitar Información
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Security Banner */}
        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/20 rounded-2xl p-8 text-center">
          <Shield className="w-12 h-12 text-blue-400 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-4">
            Protección Garantizada
          </h3>
          <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
            Todos nuestros socios financieros cuentan con las más altas
            certificaciones de seguridad y están regulados por las autoridades
            competentes
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-slate-800/50 border border-slate-600/50 px-4 py-2 rounded-full text-sm text-slate-300">
              CNBV Certificado
            </span>
            <span className="bg-slate-800/50 border border-slate-600/50 px-4 py-2 rounded-full text-sm text-slate-300">
              ISO 27001
            </span>
            <span className="bg-slate-800/50 border border-slate-600/50 px-4 py-2 rounded-full text-sm text-slate-300">
              PCI DSS Compliant
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceFinance;
