import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-8 bg-primary text-primary-foreground">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-sm">&copy; {new Date().getFullYear()} Naomi Navarro. Todos los derechos reservados.</p>
          <p className="text-xs mt-1">Servicios de Nutrición y Entrenamiento Personalizado.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;