import React from "react";
import {
  ShoppingBag as Shopping,
  Plane,
  Utensils,
  Gamepad2,
} from "lucide-react";

const LifestyleRetail = () => {
  const lifestylePartners = [
    {
      icon: Shopping,
      name: "Nike Elite Access",
      description:
        "Productos exclusivos y experiencias deportivas premium con acceso anticipado",
      image:
        "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800",
      benefits: [
        "30% descuento",
        "Lanzamientos exclusivos",
        "Personalización gratis",
      ],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Shopping,
      name: "Vans Collective",
      description:
        "Cultura skate y streetwear con diseños limitados y colaboraciones únicas",
      image:
        "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=800",
      benefits: [
        "Ediciones limitadas",
        "Eventos exclusivos",
        "Descuento miembro",
      ],
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: Plane,
      name: "Travel Luxury+",
      description:
        "Experiencias de viaje únicas con servicios VIP y destinos exclusivos",
      image:
        "https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=800",
      benefits: ["Upgrades gratuitos", "Concierge 24/7", "Acceso lounges"],
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Utensils,
      name: "Gourmet Experience",
      description:
        "Gastronomía de autor y experiencias culinarias en restaurantes de alta cocina",
      image:
        "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800",
      benefits: ["Reservas prioritarias", "Menús exclusivos", "Wine pairing"],
      color: "from-emerald-500 to-teal-500",
    },
  ];

  const categories = [
    { name: "Moda & Estilo", count: 12, icon: Shopping },
    { name: "Viajes & Turismo", count: 8, icon: Plane },
    { name: "Gastronomía", count: 15, icon: Utensils },
    { name: "Entretenimiento", count: 10, icon: Gamepad2 },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500/10 to-pink-500/10 border border-orange-500/20 rounded-full px-6 py-2 mb-6">
            <Shopping className="w-4 h-4 text-orange-400" />
            <span className="text-orange-400 font-medium">
              Estilo de Vida Premium
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-light mb-6">
            Ventajas{" "}
            <span className="font-semibold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
              Exclusivas
            </span>
          </h2>
          <h2 className="text-4xl md:text-6xl font-light mb-8">
            en Estilo de Vida y Retail
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Descubre un mundo de privilegios únicos con acceso a experiencias
            premium, productos exclusivos y servicios personalizados que elevan
            tu estilo de vida
          </p>
        </div>

        {/* Categories Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-800/30 to-slate-900/50 border border-slate-700/30 rounded-xl p-6 text-center hover:border-orange-400/30 transition-all duration-300 cursor-pointer"
              >
                <IconComponent className="w-8 h-8 text-orange-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold text-white mb-1">
                  {category.name}
                </h3>
                <p className="text-slate-400 text-sm">
                  {category.count} socios
                </p>
              </div>
            );
          })}
        </div>

        {/* Lifestyle Partners */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {lifestylePartners.map((partner, index) => {
            const IconComponent = partner.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-orange-400/30 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/10"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Background Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>

                  {/* Icon Overlay */}
                  <div
                    className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-r ${partner.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 group-hover:text-orange-400 transition-colors duration-300">
                    {partner.name}
                  </h3>
                  <p className="text-slate-400 leading-relaxed mb-6">
                    {partner.description}
                  </p>

                  {/* Benefits */}
                  <div className="grid grid-cols-1 gap-2 mb-8">
                    {partner.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                        <span className="text-slate-300 text-sm">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className="w-full bg-gradient-to-r from-orange-600/20 to-pink-600/20 hover:from-orange-600 hover:to-pink-600 border border-orange-600/30 hover:border-transparent text-orange-400 hover:text-white font-semibold py-3 rounded-full transition-all duration-300">
                    Acceder Ahora
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* VIP Experience Banner */}
        <div className="bg-gradient-to-r from-orange-900/30 to-pink-900/30 border border-orange-500/20 rounded-2xl p-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-pink-500/5"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
              Experiencia VIP Completa
            </h3>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto text-lg">
              Conviértete en miembro VIP y accede a beneficios exclusivos,
              eventos privados y experiencias únicas disponibles solo para
              nuestros socios más distinguidos
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-500 hover:to-pink-500 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                Ser Miembro VIP
              </button>
              <button className="border-2 border-orange-400 hover:border-orange-300 text-orange-400 hover:text-orange-300 font-semibold px-8 py-3 rounded-full transition-all duration-300">
                Ver Catálogo Completo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifestyleRetail;
