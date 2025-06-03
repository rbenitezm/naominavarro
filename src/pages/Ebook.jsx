import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, UserCircle } from 'lucide-react';
import ContactEbook from '@/components/ContactEbook';

const Ebook = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 15, stiffness: 100, delay },
    }),
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (delay = 0) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay },
    }),
  };

  return (
    <div className="section-padding">
      <div className="container mx-auto">
        <motion.section
          className="mb-16 md:mb-24"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          custom={0.1}
        >
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <motion.div
              className="w-full md:w-1/3"
              variants={itemVariants}
              custom={0.2}
            >
              <img
                className="rounded-lg shadow-2xl w-full h-auto max-w-sm mx-auto md:mx-0 object-cover "
                alt="Naomi Navarro, nutricionista y entrenadora personal"
                src="https://raw.githubusercontent.com/rbenitezm/naominavarro/main/src/images/portada-ebook.png" />
            </motion.div>
            <motion.div
              className="w-full md:w-2/3"
              style={{ textAlign: 'justify' }}
              variants={itemVariants}
              custom={0.3}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 ">
                Descubre cómo <span className="text-accent">comer mejor sin dietas, sin culpa y sin obsesionarte</span>
              </h1>
              <p className="text-lg text-foreground/80 mb-4">
                ¿Estás cansado de empezar dietas que no puedes mantener?
                ¿Sientes que comer saludable es complicado, aburrido o lleno de reglas?

                Este e-book es para ti.
              </p>
              <p className="text-lg text-foreground/80 mb-4">
                <b>“7 Claves para comer mejor sin obsesionarte”</b> es una guía clara, directa y fácil de aplicar que te enseñará a mejorar tu alimentación de forma real, sin contar calorías, sin restringirte y sin miedo a equivocarte.
                <ul className="text-lg text-foreground/80 mb-2 ml-8">
                  <li className="text-lg text-foreground/80 mb-2">✅ Aprende a comer con libertad y equilibrio</li>
                  <li className="text-lg text-foreground/80 mb-2">✅ Reconecta con tu cuerpo y tus emociones</li>
                  <li className="text-lg text-foreground/80 mb-2">✅ Diseña hábitos duraderos y sostenibles</li>
                  <li className="text-lg text-foreground/80 mb-2">✅ Descubre cómo planificar sin rigidez</li>
                  <li className="text-lg text-foreground/80 mb-2">✅ Entiende qué poner en tu plato sin obsesionarte</li>
                  <li className="text-lg text-foreground/80 mb-2">✅ Mejora tu relación con la comida de una vez por todas</li>
                </ul>

                🎁 Además, incluye recursos descargables, una plantilla de planificación y un descuento exclusivo en asesorías personalizadas.
              </p>

              <p className="text-lg text-foreground/80 mb-4">
                 <ContactEbook />
              </p>

            </motion.div>
          </div>
        </motion.section>

      </div>
    </div>
  );
};

export default Ebook;