
import React from 'react';
import { Button } from '@/components/ui/button';
import { Zap } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { motion } from 'framer-motion';
import ContactDialog from '@/components/ContactDialog';

const FaqSection = ({ sectionVariants, itemVariants, onContactClick }) => {
  const faqs = [
    {
      question: "¿Cómo se adaptan los planes a mis necesidades?",
      answer: "Realizo una evaluación inicial detallada para entender tus objetivos, preferencias, historial médico y estilo de vida. Con esta información, diseño un plan 100% personalizado para ti.",
      delay: 0.1,
    },
    {
      question: "¿Con qué frecuencia se realizan los seguimientos?",
      answer: "Los seguimientos se realizan semanalmente. Se propone una fecha semanal para el seguimiento que podrá ser mediante teléfono, mail o videollamada. Esto nos permite ajustar el plan según tu progreso, resolver dudas y mantener la motivación alta.",
      delay: 0.2,
    },
    {
      question: "¿Y en qué horarios se hacen los seguimientos?",
      answer: "El horario es flexible y se adapta a tus necesidades. Podemos coordinar una franja horaria que funcione para ambos, ya sea por la mañana, tarde o incluso fines de semana. El objetivo es que te sientas acompañado sin que interfiera con tu rutina.",
      delay: 0.2,
    },
    {
      question: "¿Hay algún tipo de permanencia?",
      answer: "No, no hay compromiso de permanencia. Puedes dejar el servicio en cualquier momento. Sin embargo, si eliges un pack trimestral, te beneficias de un precio reducido y mayor continuidad en el acompañamiento, lo que suele mejorar los resultados y la adherencia.",
      delay: 0.2,
    },
    {
      question: "¿Puedo cambiar de plan durante el proceso?",
      answer: "¡Sí! Si tus necesidades cambian o quieres acceder a más servicios, podemos ajustar tu plan en cualquier momento. Lo importante es que te sientas cómodo y apoyado.",
      delay: 0.4,
    },
    {
      question: "¿Qué incluye exactamente el batch cooking?",
      answer: "La preparación de batch cooking para 3 días incluye la planificación y la realización a tu lado de las comidas, la lista de la compra optimizada y las recetas detalladas para que puedas cocinar de forma eficiente y tener tus comidas listas.",
      delay: 0.3,
    },
  ];

  return (
    <motion.section
      id="faq"
      className="section-padding"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={0.3}
      style={{
        background: 'linear-gradient(180deg, #caa761 0%, #4a4f3910 100%)',
      }}
    >
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
          Preguntas <span className="text-accent">frecuentes</span>
        </h2>
        <p className="text-center text-lg text-foreground/70 mb-12">
          Resuelve tus dudas sobre mis servicios de nutrición y entrenamiento personalizado.
        </p>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq) => (
            <motion.div
              key={faq.question}
              variants={itemVariants}
              custom={faq.delay}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <AccordionItem value={faq.question} className="bg-secondary/30 rounded-lg px-4 glassmorphism-card !border-b-0">
                <AccordionTrigger className="text-left hover:no-underline text-primary font-semibold text-base">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-foreground/80 text-sm">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
      <motion.div
        className="mt-12 text-center"
        variants={itemVariants}
        custom={0.4}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <ContactDialog />
      </motion.div>
    </motion.section>

  );
};

export default FaqSection;