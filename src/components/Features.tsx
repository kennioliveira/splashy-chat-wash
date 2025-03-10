
import React from "react";
import { motion } from "framer-motion";
import { Clock, ThumbsUp, BadgeDollarSign, Sparkles } from "lucide-react";

const features = [
  {
    title: "Economize Tempo",
    description:
      "Sem deslocamentos até o lava-rápido. Aproveite seu tempo com o que realmente importa enquanto cuidamos do seu veículo.",
    icon: <Clock className="h-8 w-8 text-car-500" />,
    delay: 0.1,
  },
  {
    title: "Qualidade Superior",
    description:
      "Utilizamos produtos de alta qualidade e técnicas profissionais para garantir resultados impecáveis em cada lavagem.",
    icon: <ThumbsUp className="h-8 w-8 text-car-500" />,
    delay: 0.3,
  },
  {
    title: "Preço Justo",
    description:
      "Oferecemos preços competitivos sem custos ocultos. Pague apenas pelo serviço que realmente necessita.",
    icon: <BadgeDollarSign className="h-8 w-8 text-car-500" />,
    delay: 0.5,
  },
  {
    title: "Produtos Ecológicos",
    description:
      "Compromisso com o meio ambiente usando produtos biodegradáveis que não agridem a natureza.",
    icon: <Sparkles className="h-8 w-8 text-car-500" />,
    delay: 0.7,
  },
];

const Features = () => {
  return (
    <section id="sobre" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-car-100 text-car-700 px-4 py-2 rounded-full inline-block mb-4"
          >
            <span className="text-sm font-medium">Por que nos escolher</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            <span className="text-car-800">Benefícios da lavagem</span>{" "}
            <span className="text-car-500">a domicílio</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: feature.delay }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="bg-car-100 rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-car-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
