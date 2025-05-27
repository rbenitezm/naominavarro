import React from 'react';
import { Button } from '@/components/ui/button';
import { Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = ({ logoUrl, onContactClick, sectionVariants, itemVariants }) => {
  return (
    <motion.section
      className="section-padding text-center bg-cover bg-center"
      style={{ backgroundImage: 'linear-gradient(rgba(244, 233, 216, 0.8), rgba(244, 233, 216, 0.9)), url("https://raw.githubusercontent.com/rbenitezm/growly-landing/growly-landing/client/src/images/logo-principal.png&auto=format&fit=crop&w=1200&q=80")' }}
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto">
        <motion.div
          className="mb-8 inline-block p-2 bg-white/50 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
        >
          <img-replace src={logoUrl} alt="Naomi Navarro Logo" className="w-64 h-auto md:w-80 mx-auto rounded-md" />
        </motion.div>
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-primary mb-6"
          variants={itemVariants}
          custom={0.2}
        >
          Transforma tu Bienestar con Naomi Navarro
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-8"
          variants={itemVariants}
          custom={0.4}
        >
          Naomi es tu experta en nutrición y entrenamientos personalizados. Su misión es enseñarte a comer de forma saludable y sostenible, adaptando cada plan a tus necesidades y objetivos únicos para que alcances tu mejor versión.
        </motion.p>
        <motion.div variants={itemVariants} custom={0.6}>
          <Button size="lg" onClick={onContactClick} className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-lg transform hover:scale-105 transition-transform duration-300">
            <Zap className="mr-2 h-5 w-5" /> ¡Empieza tu transformación!
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;