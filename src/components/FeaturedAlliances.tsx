import React from "react";
import { Building2, Star, ArrowRight } from "lucide-react";

const FeaturedAlliances = () => {
  const alliances = [
    {
      id: 1,
      name: "Cinépolis Premium",
      description:
        "Acceso preferencial a estrenos y eventos exclusivos con experiencias VIP",
      image:
        "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Entretenimiento",
      benefits: ["Descuento 30%", "Acceso VIP", "Estrenos exclusivos"],
    },
    {
      id: 2,
      name: "Universidad César Vallejo",
      description:
        "Programas educativos especializados y oportunidades de desarrollo profesional",
      image:
        "https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Educación",
      benefits: ["Becas especiales", "Cursos online", "Certificaciones"],
    },
    {
      id: 3,
      name: "Wellness Corporate",
      description:
        "Soluciones integrales de bienestar empresarial y salud preventiva",
      image:
        "https://images.pexels.com/photos/3768997/pexels-photo-3768997.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Bienestar",
      benefits: ["Consultas gratuitas", "Programas wellness", "Evaluaciones"],
    },
    {
      id: 4,
      name: "TechCorp Solutions",
      description:
        "Tecnología empresarial de vanguardia y servicios de transformación digital",
      image:
        "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Tecnología",
      benefits: ["Software premium", "Soporte 24/7", "Consultoría gratuita"],
    },
  ];

  return (
    <section id="alliances" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-full px-6 py-2 mb-6">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 font-medium">
              Socios de Prestigio
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-light mb-6">
            Nuestras{" "}
            <span className="font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Alianzas
            </span>
          </h2>
          <h2 className="text-4xl md:text-6xl font-light mb-8">Estratégicas</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Colaboramos con las mejores empresas para ofrecerte beneficios
            únicos que transformarán tu experiencia profesional y personal
          </p>
        </div>

        {/* Alliance Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {alliances.map((alliance, index) => (
            <div
              key={alliance.id}
              className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-yellow-400/30 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-yellow-500/10"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={alliance.image}
                  alt={alliance.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-yellow-500/90 to-orange-500/90 text-slate-900 px-3 py-1 rounded-full text-sm font-medium">
                    {alliance.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                      {alliance.name}
                    </h3>
                    <p className="text-slate-400 leading-relaxed mb-6">
                      {alliance.description}
                    </p>
                  </div>
                  <Building2 className="w-6 h-6 text-slate-500 flex-shrink-0" />
                </div>

                {/* Benefits */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {alliance.benefits.map((benefit, idx) => (
                    <span
                      key={idx}
                      className="bg-slate-800/50 border border-slate-600/50 text-slate-300 px-3 py-1 rounded-full text-sm"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button className="group/btn w-full bg-gradient-to-r from-slate-700/50 to-slate-800/50 hover:from-yellow-500 hover:to-orange-500 border border-slate-600/50 hover:border-transparent text-slate-300 hover:text-slate-900 font-semibold py-3 rounded-full transition-all duration-300 flex items-center justify-center gap-2">
                  Explorar Beneficios
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedAlliances;
