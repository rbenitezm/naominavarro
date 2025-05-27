import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Utensils as UtensilsSquare, UserCheck } from 'lucide-react';

const AppAccessSection = ({ sectionVariants, itemVariants }) => {
  return (
    <motion.section
      id="app-access"
      className="section-padding bg-gradient-to-br from-accent/10 via-background to-secondary/20"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={0.25}
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Acceso Exclusivo a Nuestra <span className="text-accent">App de Dietas</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Todos nuestros clientes obtienen acceso gratuito a una aplicación móvil donde podrán gestionar su dieta, ver menús personalizados y mucho más, todo bajo la supervisión de Naomi.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            className="flex flex-col items-center text-center p-6 glassmorphism-card rounded-lg"
            variants={itemVariants}
            custom={0.1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="p-4 bg-primary/10 rounded-full mb-4">
              <Smartphone className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-2">Tu Dieta en tu Bolsillo</h3>
            <p className="text-foreground/80 text-sm">
              Accede a tus planes nutricionales, listas de la compra y recetas desde cualquier lugar y en cualquier momento.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center text-center p-6 glassmorphism-card rounded-lg"
            variants={itemVariants}
            custom={0.2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="p-4 bg-primary/10 rounded-full mb-4">
              <UtensilsSquare className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-2">Menús Personalizados</h3>
            <p className="text-foreground/80 text-sm">
              Descubre menús semanales adaptados a tus objetivos y preferencias, con opciones variadas y deliciosas.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center text-center p-6 glassmorphism-card rounded-lg"
            variants={itemVariants}
            custom={0.3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="p-4 bg-primary/10 rounded-full mb-4">
              <UserCheck className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-2">Supervisión Profesional</h3>
            <p className="text-foreground/80 text-sm">
              Naomi supervisará tu progreso a través de la app, ofreciendo ajustes y motivación constante.
            </p>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          variants={itemVariants}
          custom={0.4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <img  
            className="max-w-md mx-auto rounded-lg shadow-xl" 
            alt="Maqueta de la aplicación de dietas en un smartphone"
           src="https://images.unsplash.com/photo-1641130382532-2514a6c93859" />
        </motion.div>

      </div>
    </motion.section>
  );
};

export default AppAccessSection;