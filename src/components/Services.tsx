
import React from "react";
import { motion } from "framer-motion";
import { Car, Droplets, SprayCan, Sparkles, Clock, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const services = [
  {
    title: "Lavagem Básica",
    description: "Limpeza completa da carroceria, incluindo rodas, pneus e acabamentos externos.",
    icon: <Droplets className="h-10 w-10 text-car-500" />,
    color: "bg-blue-50",
  },
  {
    title: "Lavagem Completa",
    description: "Inclui aspiração interna, limpeza de painéis, vidros e acabamentos interiores.",
    icon: <Car className="h-10 w-10 text-car-600" />,
    color: "bg-blue-100",
  },
  {
    title: "Polimento",
    description: "Restauração de brilho e remoção de pequenos arranhões da pintura do veículo.",
    icon: <SprayCan className="h-10 w-10 text-car-700" />,
    color: "bg-blue-50",
  },
  {
    title: "Enceramento",
    description: "Aplicação de cera para proteção adicional e brilho duradouro da pintura.",
    icon: <Sparkles className="h-10 w-10 text-car-500" />,
    color: "bg-blue-100",
  },
  {
    title: "Higienização",
    description: "Limpeza profunda de estofados, carpetes e sistema de ar-condicionado.",
    icon: <Shield className="h-10 w-10 text-car-600" />,
    color: "bg-blue-50",
  },
  {
    title: "Lavagem Express",
    description: "Serviço rápido de limpeza externa para quem tem pouco tempo disponível.",
    icon: <Clock className="h-10 w-10 text-car-700" />,
    color: "bg-blue-100",
  },
];

const Services = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="serviços" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-car-100 text-car-700 px-4 py-2 rounded-full inline-block mb-4"
          >
            <span className="text-sm font-medium">Nossos Serviços</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            <span className="text-car-800">Serviços de lavagem</span>{" "}
            <span className="text-car-500">profissionais</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-600 text-lg"
          >
            Oferecemos uma variedade de serviços para atender a todas as necessidades do seu veículo,
            trazendo conveniência e qualidade até você.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className={`h-1 bg-car-500 transform origin-left transition-all duration-300 group-hover:scale-x-100`} />
                <CardHeader className={`${service.color} p-6`}>
                  <div className="mb-4 rounded-full w-16 h-16 flex items-center justify-center bg-white shadow-md">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 1 }}
                    >
                      {service.icon}
                    </motion.div>
                  </div>
                  <CardTitle className="text-xl text-car-800">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <CardDescription className="text-gray-600 text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
