import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Calendar, Car, User, MessageSquare, Clock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: "",
    vehicle: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Agendamento Recebido!",
        description: "Entraremos em contato em breve para confirmar sua reserva.",
      });
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        service: "",
        vehicle: "",
        message: "",
      });
    }, 1500);
  };

  const contactItems = [
    {
      icon: <Phone className="h-5 w-5 text-car-500" />,
      title: "Telefone",
      content: "(11) 98765-4321",
    },
    {
      icon: <Mail className="h-5 w-5 text-car-500" />,
      title: "Email",
      content: "contato@lavajatomobile.com.br",
    },
    {
      icon: <MapPin className="h-5 w-5 text-car-500" />,
      title: "Área de Atendimento",
      content: "Região Metropolitana",
    },
  ];

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-car-100 text-car-700 px-4 py-2 rounded-full inline-block mb-4"
          >
            <span className="text-sm font-medium">Entre em Contato</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            <span className="text-car-800">Agende sua</span>{" "}
            <span className="text-car-500">lavagem</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-600 text-lg"
          >
            Preencha o formulário abaixo para agendar uma lavagem ou tirar dúvidas sobre nossos serviços.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="md:col-span-1">
            <div className="space-y-6">
              {contactItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  className="bg-blue-50 p-6 rounded-xl shadow-sm"
                >
                  <div className="flex items-start">
                    <div className="bg-white p-3 rounded-full shadow-sm mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-car-800 mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.content}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="p-6 rounded-xl bg-gradient-to-br from-car-600 to-car-800 text-white shadow-lg"
              >
                <h3 className="font-semibold text-xl mb-3">Horário de Atendimento</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Segunda - Sexta</span>
                    <span>08:00 - 18:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sábado</span>
                    <span>08:00 - 16:00</span>
                  </li>
                  <li className="flex justify-between text-white/70">
                    <span>Domingo</span>
                    <span>Sob agendamento</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
            id="agendamento"
          >
            <Card className="overflow-hidden shadow-lg border-0">
              <CardContent className="p-0">
                <div className="bg-car-50 p-6 border-b border-gray-200">
                  <h3 className="text-xl font-semibold text-car-800 flex items-center">
                    <Calendar className="mr-2 h-5 w-5 text-car-600" />
                    Formulário de Agendamento
                  </h3>
                </div>
                
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="flex items-center text-car-800">
                        <User className="h-4 w-4 mr-1 text-car-500" />
                        Nome Completo
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Seu nome completo"
                        required
                        className="border-car-200"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center text-car-800">
                        <Mail className="h-4 w-4 mr-1 text-car-500" />
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="seu.email@exemplo.com"
                        required
                        className="border-car-200"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center text-car-800">
                        <Phone className="h-4 w-4 mr-1 text-car-500" />
                        Telefone
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(00) 00000-0000"
                        required
                        className="border-car-200"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="vehicle" className="flex items-center text-car-800">
                        <Car className="h-4 w-4 mr-1 text-car-500" />
                        Tipo de Veículo
                      </Label>
                      <Select
                        value={formData.vehicle}
                        onValueChange={(value) => handleSelectChange("vehicle", value)}
                      >
                        <SelectTrigger className="border-car-200">
                          <SelectValue placeholder="Selecione o tipo de veículo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hatch">Hatch</SelectItem>
                          <SelectItem value="sedan">Sedan</SelectItem>
                          <SelectItem value="suv">SUV</SelectItem>
                          <SelectItem value="pickup">Pickup</SelectItem>
                          <SelectItem value="outro">Outro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date" className="flex items-center text-car-800">
                        <Calendar className="h-4 w-4 mr-1 text-car-500" />
                        Data
                      </Label>
                      <Input
                        id="date"
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="border-car-200"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="time" className="flex items-center text-car-800">
                        <Clock className="h-4 w-4 mr-1 text-car-500" />
                        Horário
                      </Label>
                      <Input
                        id="time"
                        name="time"
                        type="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="border-car-200"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="service" className="flex items-center text-car-800">
                        <Sparkles className="h-4 w-4 mr-1 text-car-500" />
                        Serviço
                      </Label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) => handleSelectChange("service", value)}
                      >
                        <SelectTrigger className="border-car-200">
                          <SelectValue placeholder="Selecione o serviço" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="basica">Lavagem Básica</SelectItem>
                          <SelectItem value="completa">Lavagem Completa</SelectItem>
                          <SelectItem value="polimento">Polimento</SelectItem>
                          <SelectItem value="enceramento">Enceramento</SelectItem>
                          <SelectItem value="higienizacao">Higienização</SelectItem>
                          <SelectItem value="express">Lavagem Express</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="flex items-center text-car-800">
                      <MessageSquare className="h-4 w-4 mr-1 text-car-500" />
                      Mensagem (Opcional)
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Detalhes adicionais sobre sua solicitação..."
                      className="border-car-200 min-h-[100px]"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-car-600 hover:bg-car-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 mt-4"
                    size="lg"
                    disabled={loading}
                  >
                    {loading ? (
                      <div className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Processando...
                      </div>
                    ) : (
                      "Agendar Lavagem"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
