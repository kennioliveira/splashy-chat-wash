
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Droplets, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate image loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="início"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with blur loading effect */}
      <div
        className={`absolute inset-0 w-full h-full transition-all duration-1000 z-0 ${
          isLoaded ? "image-loaded" : "image-loading"
        }`}
      >
        <div
          className="absolute inset-0 bg-center bg-cover hero-parallax"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1520340356584-f9917d1eea6f')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 py-20 md:py-0">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-car-500 text-white px-4 py-2 rounded-full inline-block mb-6"
          >
            <span className="flex items-center text-sm font-medium">
              <Droplets className="h-4 w-4 mr-2" />
              Serviço de lavagem automotiva de alta qualidade
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Lavagem Profissional
            <br />
            <span className="text-car-200">No Conforto da Sua Casa</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto"
          >
            O Lava Jato do Kenni traz conveniência e qualidade profissional
            diretamente até você. Economize tempo e tenha seu veículo impecável sem sair de casa.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              onClick={() => {
                const element = document.getElementById("agendamento");
                if (element) {
                  const offsetTop = element.getBoundingClientRect().top + window.scrollY;
                  window.scrollTo({
                    top: offsetTop - 80,
                    behavior: "smooth",
                  });
                }
              }}
              size="lg"
              className="bg-car-600 hover:bg-car-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Agendar Agora
            </Button>
            
            <Button
              onClick={() => {
                const element = document.getElementById("serviços");
                if (element) {
                  const offsetTop = element.getBoundingClientRect().top + window.scrollY;
                  window.scrollTo({
                    top: offsetTop - 80,
                    behavior: "smooth",
                  });
                }
              }}
              variant="outline"
              size="lg"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-white/20 px-8 py-6 text-lg rounded-xl w-full sm:w-auto"
            >
              Ver Serviços
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex flex-col items-center"
        >
          <span className="text-white/70 text-sm mb-2">Role para baixo</span>
          <ArrowDown className="h-6 w-6 text-white/70" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
