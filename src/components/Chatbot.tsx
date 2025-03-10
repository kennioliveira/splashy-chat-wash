
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Car, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";

type Message = {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
};

const initialMessages: Message[] = [
  {
    id: 1,
    text: "Olá! Bem-vindo ao LavaJato Mobile. Como posso ajudar você hoje?",
    sender: "bot",
    timestamp: new Date(),
  },
];

const botResponses: { [key: string]: string } = {
  "preço": "Nossos preços variam de acordo com o serviço e o tamanho do veículo. A lavagem básica começa em R$50 para carros de passeio. Posso enviar uma tabela completa de preços se desejar.",
  "horário": "Estamos disponíveis de segunda a sábado, das 8h às 18h. Para agendamentos aos domingos, por favor entre em contato com antecedência.",
  "agendamento": "Para agendar uma lavagem, preciso de algumas informações: seu nome, endereço, tipo de veículo e serviço desejado. Você pode fornecer esses detalhes agora ou ligar para nosso número: (11) 98765-4321.",
  "serviço": "Oferecemos lavagem básica, completa, polimento, enceramento, higienização e lavagem express. Cada serviço pode ser personalizado de acordo com suas necessidades.",
  "contato": "Você pode nos contatar pelo telefone (11) 98765-4321 ou pelo email contato@lavajatomobile.com.br. Estamos disponíveis para atendimento de segunda a sábado, das 8h às 18h.",
  "produtos": "Utilizamos produtos de alta qualidade e ecologicamente responsáveis. Todos os nossos produtos são biodegradáveis e seguros para o meio ambiente.",
  "tempo": "O tempo médio para uma lavagem completa é de aproximadamente 1,5 a 2 horas, dependendo do tamanho do veículo e do serviço escolhido.",
  "pagamento": "Aceitamos pagamentos em dinheiro, cartão de crédito/débito, PIX e transferência bancária.",
  "região": "Atendemos em toda a região metropolitana. Para confirmar se atendemos em seu endereço específico, por favor informe seu CEP.",
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      // Add animation delay before scrolling
      setTimeout(() => {
        scrollToBottom();
      }, 300);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = (e?: React.FormEvent) => {
    e?.preventDefault();
    
    if (!input.trim()) return;
    
    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: "user",
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate bot thinking and typing
    setTimeout(() => {
      let botResponse = "Agradeço sua mensagem! Um de nossos atendentes entrará em contato em breve para fornecer informações mais detalhadas.";
      
      // Check for keywords in user message
      const lowercaseInput = input.toLowerCase();
      
      Object.keys(botResponses).forEach((keyword) => {
        if (lowercaseInput.includes(keyword)) {
          botResponse = botResponses[keyword];
        }
      });
      
      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const sendMessageOnEnter = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleNameSubmit = () => {
    const name = input.trim();
    if (name) {
      setInput("");
      
      toast({
        title: "Informações recebidas!",
        description: `Obrigado, ${name}! Entraremos em contato em breve.`,
      });
      
      const thankYouMessage: Message = {
        id: messages.length + 1,
        text: `Obrigado, ${name}! Entraremos em contato em breve para confirmar os detalhes e agendar sua lavagem.`,
        sender: "bot",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, thankYouMessage]);
    }
  };

  return (
    <>
      {/* Chat toggle button */}
      <motion.button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-50 bg-car-600 text-white p-4 rounded-full shadow-lg hover:bg-car-700 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-20 right-6 z-50 w-full max-w-md"
          >
            <Card className="border-0 shadow-2xl overflow-hidden">
              <CardHeader className="bg-car-600 text-white p-4">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10 border-2 border-white/20">
                    <AvatarFallback className="bg-car-800 text-white">
                      <Car className="h-5 w-5" />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg flex items-center">
                      LavaJato Assistant
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
                        className="ml-2"
                      >
                        <Sparkles className="h-4 w-4 text-yellow-300" />
                      </motion.div>
                    </CardTitle>
                    <div className="text-xs text-white/70 flex items-center">
                      <span className="h-2 w-2 rounded-full bg-green-400 mr-2"></span>
                      Online agora
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-0">
                <div className="h-96 overflow-y-auto p-4 bg-gray-50">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex mb-4 ${
                        message.sender === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      {message.sender === "bot" && (
                        <Avatar className="h-8 w-8 mr-2 mt-1">
                          <AvatarFallback className="bg-car-700 text-white">
                            <Car className="h-4 w-4" />
                          </AvatarFallback>
                        </Avatar>
                      )}
                      
                      <div
                        className={`max-w-[80%] p-3 rounded-xl ${
                          message.sender === "user"
                            ? "bg-car-600 text-white rounded-tr-none"
                            : "bg-white shadow-md rounded-tl-none"
                        }`}
                      >
                        <p className={message.sender === "user" ? "text-white" : "text-gray-800"}>
                          {message.text}
                        </p>
                        <p
                          className={`text-xs mt-1 ${
                            message.sender === "user" ? "text-white/70" : "text-gray-500"
                          }`}
                        >
                          {message.timestamp.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </div>
                      
                      {message.sender === "user" && (
                        <Avatar className="h-8 w-8 ml-2 mt-1">
                          <AvatarFallback className="bg-car-400">U</AvatarFallback>
                        </Avatar>
                      )}
                    </motion.div>
                  ))}
                  
                  {isTyping && (
                    <div className="flex mb-4 justify-start">
                      <Avatar className="h-8 w-8 mr-2 mt-1">
                        <AvatarFallback className="bg-car-700 text-white">
                          <Car className="h-4 w-4" />
                        </AvatarFallback>
                      </Avatar>
                      
                      <div className="bg-white p-3 rounded-xl rounded-tl-none shadow-md">
                        <div className="flex space-x-1">
                          <motion.div
                            className="h-2 w-2 bg-car-500 rounded-full"
                            animate={{ y: [0, -5, 0] }}
                            transition={{ repeat: Infinity, duration: 0.8, delay: 0 }}
                          />
                          <motion.div
                            className="h-2 w-2 bg-car-500 rounded-full"
                            animate={{ y: [0, -5, 0] }}
                            transition={{ repeat: Infinity, duration: 0.8, delay: 0.2 }}
                          />
                          <motion.div
                            className="h-2 w-2 bg-car-500 rounded-full"
                            animate={{ y: [0, -5, 0] }}
                            transition={{ repeat: Infinity, duration: 0.8, delay: 0.4 }}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>
                
                <form
                  onSubmit={handleSendMessage}
                  className="p-4 border-t border-gray-200 bg-white flex items-center"
                >
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={sendMessageOnEnter}
                    placeholder="Digite sua mensagem..."
                    className="flex-1 border-car-200 focus:border-car-500 focus:ring-car-500"
                  />
                  
                  <Button
                    type="submit"
                    size="icon"
                    className="ml-2 bg-car-600 hover:bg-car-700"
                    disabled={!input.trim()}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
