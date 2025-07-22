import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  const navigationLinks = [
    {
      title: "Empresa",
      links: ["Acerca de Nosotros", "Nuestro Equipo", "Carreras", "Prensa"],
    },
    {
      title: "Servicios",
      links: [
        "Membresía Premium",
        "Socios Corporativos",
        "API Developers",
        "Afiliados",
      ],
    },
    {
      title: "Soporte",
      links: [
        "Centro de Ayuda",
        "Contacto",
        "Estado del Servicio",
        "Reportar Problema",
      ],
    },
    {
      title: "Legal",
      links: [
        "Términos y Condiciones",
        "Política de Privacidad",
        "Cookies",
        "Compliance",
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:text-blue-400" },
    { icon: Twitter, href: "#", color: "hover:text-cyan-400" },
    { icon: Instagram, href: "#", color: "hover:text-pink-400" },
    { icon: Linkedin, href: "#", color: "hover:text-blue-500" },
  ];

  const contactInfo = [
    { icon: MapPin, text: "Av. Paseo de la Reforma 123, CDMX" },
    { icon: Phone, text: "+52 (55) 1234-5678" },
    { icon: Mail, text: "hola@nice.com.mx" },
  ];

  return (
    <footer id="contact" className="bg-slate-950 border-t border-slate-800/50">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-4">
                NICE
              </div>
              <p className="text-slate-400 leading-relaxed mb-6">
                Conectamos a nuestros miembros con las mejores experiencias
                premium, creando un ecosistema de beneficios exclusivos y
                servicios de clase mundial.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors duration-300"
                  >
                    <IconComponent className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">{contact.text}</span>
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 bg-slate-800/50 border border-slate-700/50 rounded-lg flex items-center justify-center text-slate-400 ${social.color} transition-all duration-300 hover:scale-110 hover:border-current`}
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation Links */}
          {navigationLinks.map((section, index) => (
            <div key={index} className="lg:col-span-1">
              <h3 className="text-white font-semibold mb-6">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-slate-800/50 mt-16 pt-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Mantente al día con nuestras ofertas exclusivas
            </h3>
            <p className="text-slate-400 mb-6">
              Recibe las mejores promociones y beneficios directamente en tu
              bandeja de entrada
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex-1 bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-400 px-4 py-3 rounded-lg focus:outline-none focus:border-yellow-400/50 focus:ring-1 focus:ring-yellow-400/25 transition-all duration-300"
              />
              <button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-slate-900 font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                Suscribirse
              </button>
            </div>

            <p className="text-xs text-slate-500 mt-4">
              Al suscribirte, aceptas recibir comunicaciones comerciales de
              NICE. Puedes cancelar tu suscripción en cualquier momento.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800/50 bg-slate-950">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-400 text-sm">
              © 2025 NICE. Todos los derechos reservados.
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-slate-400 text-xs">
                  Todos los sistemas operando normalmente
                </span>
              </div>

              <div className="text-slate-500 text-xs">
                Hecho con 💜 en México
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
