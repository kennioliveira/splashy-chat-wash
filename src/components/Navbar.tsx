
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Car, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Handle scrolling effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to section
  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: offsetTop - 80, // Account for navbar height
        behavior: "smooth",
      });
    }
  };

  // Navbar variants for animation
  const navVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrollPosition > 10
          ? "bg-white/80 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, ease: "easeInOut", repeat: 0 }}
            >
              <Car className="h-8 w-8 text-car-600" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="font-bold text-xl md:text-2xl tracking-tight"
            >
              <span className="text-car-800">Lava</span>
              <span className="text-car-500">Jato</span>
              <span className="text-car-300">Mobile</span>
            </motion.div>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {["início", "serviços", "sobre", "depoimentos", "contato"].map((item, i) => (
              <motion.button
                key={item}
                className={cn(
                  "text-base font-medium transition-colors relative",
                  scrollPosition > 10 ? "text-car-800 hover:text-car-600" : "text-white hover:text-car-200"
                )}
                onClick={() => scrollToSection(item)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (i + 1), duration: 0.5 }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-car-500 w-0"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </nav>

          {/* CTA button */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("agendamento")}
              className="bg-car-600 hover:bg-car-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              size="lg"
            >
              <Droplets className="mr-2 h-4 w-4" />
              Agendar Lavagem
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "p-2 rounded-full",
                scrollPosition > 10 ? "text-car-800" : "text-white"
              )}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={navVariants}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg"
          >
            <div className="py-4 px-6 flex flex-col space-y-4">
              {["início", "serviços", "sobre", "depoimentos", "contato"].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-car-800 font-medium py-2 px-4 rounded-md hover:bg-car-100 text-left transition-colors"
                  whileTap={{ scale: 0.95 }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </motion.button>
              ))}
              <Button
                onClick={() => {
                  setIsOpen(false);
                  scrollToSection("agendamento");
                }}
                className="bg-car-600 hover:bg-car-700 text-white w-full"
                size="lg"
              >
                <Droplets className="mr-2 h-4 w-4" />
                Agendar Lavagem
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
