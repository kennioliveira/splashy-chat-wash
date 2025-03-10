
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Carlos Silva",
    role: "Cliente há 2 anos",
    avatar: "CS",
    content:
      "Serviço excepcional! A equipe chegou no horário marcado e fez um trabalho impecável no meu carro. Muito melhor do que perder tempo em um lava-rápido.",
    rating: 5,
  },
  {
    name: "Ana Oliveira",
    role: "Cliente há 6 meses",
    avatar: "AO",
    content:
      "Ótimo custo-benefício! Meu carro nunca esteve tão limpo, e a comodidade de não precisar sair de casa é inestimável. Recomendo!",
    rating: 5,
  },
  {
    name: "Marcelo Santos",
    role: "Cliente há 1 ano",
    avatar: "MS",
    content:
      "A qualidade do serviço é impressionante. Profissionais educados e atenciosos que realmente se importam com os detalhes. Meu carro ficou novinho!",
    rating: 5,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((current) => (current === testimonials.length - 1 ? 0 : current + 1));
  };

  const prev = () => {
    setCurrent((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };

  return (
    <section id="depoimentos" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-car-100 text-car-700 px-4 py-2 rounded-full inline-block mb-4"
          >
            <span className="text-sm font-medium">Depoimentos</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            <span className="text-car-800">O que nossos clientes</span>{" "}
            <span className="text-car-500">estão dizendo</span>
          </motion.h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
            >
              <Quote className="text-car-200 h-12 w-12 mb-6" />
              
              <p className="text-gray-700 text-lg md:text-xl mb-8 leading-relaxed">
                {testimonials[current].content}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Avatar className="h-14 w-14 border-2 border-car-100">
                    <AvatarFallback className="bg-car-200 text-car-700">
                      {testimonials[current].avatar}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div>
                    <h4 className="font-semibold text-car-800 text-lg">
                      {testimonials[current].name}
                    </h4>
                    <p className="text-gray-500">{testimonials[current].role}</p>
                  </div>
                </div>
                
                <div className="flex">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 gap-4">
            <Button
              onClick={prev}
              variant="outline"
              size="icon"
              className="bg-white hover:bg-car-50 border border-car-200 rounded-full h-12 w-12"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="h-5 w-5 text-car-600" />
            </Button>
            
            <Button
              onClick={next}
              variant="outline"
              size="icon"
              className="bg-white hover:bg-car-50 border border-car-200 rounded-full h-12 w-12"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="h-5 w-5 text-car-600" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
