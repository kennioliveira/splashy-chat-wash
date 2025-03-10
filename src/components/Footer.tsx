
import React from "react";
import { motion } from "framer-motion";
import { Car, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-car-800 text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.7 }}
              >
                <Car className="h-8 w-8 text-car-300" />
              </motion.div>
              <div className="font-bold text-2xl tracking-tight">
                <span className="text-white">Lava</span>
                <span className="text-car-300">Jato</span>
                <span className="text-car-200">Mobile</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Serviço de lavagem automotiva a domicílio com qualidade, praticidade e excelência.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ y: -3 }}
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -3 }}
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -3 }}
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-car-200">Serviços</h3>
            <ul className="space-y-3">
              {["Lavagem Básica", "Lavagem Completa", "Polimento", "Enceramento", "Higienização", "Lavagem Express"].map((service) => (
                <li key={service}>
                  <a
                    href="#serviços"
                    className="text-gray-300 hover:text-white transition-colors flex items-center"
                  >
                    <span className="h-1 w-1 bg-car-300 rounded-full inline-block mr-2"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-car-200">Links Rápidos</h3>
            <ul className="space-y-3">
              {[
                { name: "Início", id: "início" },
                { name: "Serviços", id: "serviços" },
                { name: "Sobre Nós", id: "sobre" },
                { name: "Depoimentos", id: "depoimentos" },
                { name: "Contato", id: "contato" },
                { name: "Agendamento", id: "agendamento" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={`#${link.id}`}
                    className="text-gray-300 hover:text-white transition-colors flex items-center"
                  >
                    <span className="h-1 w-1 bg-car-300 rounded-full inline-block mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-car-200">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-car-300 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">(11) 98765-4321</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-car-300 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">contato@lavajatomobile.com.br</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-car-300 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Atendimento em toda a região metropolitana
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-car-700 pt-8 mt-8 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} LavaJato Mobile. Todos os direitos reservados.
          </p>
          <div className="flex space-x-4 justify-center md:justify-end">
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              Termos de Serviço
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
