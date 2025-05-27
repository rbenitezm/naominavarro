import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Activity, HeartPulse } from 'lucide-react';
import { motion } from 'framer-motion';

const WhyChooseUsSection = ({ sectionVariants, itemVariants }) => {
  const reasons = [
    {
      icon: <Target className="w-10 h-10 text-primary" />,
      title: "Planes 100% Personalizados",
      description: "Cada plan se adapta a tus necesidades específicas, preferencias alimentarias y estilo de vida.",
      delay: 0.1,
    },
    {
      icon: <Activity className="w-10 h-10 text-primary" />,
      title: "Seguimiento Continuo",
      description: "Te acompaño durante todo el proceso con seguimientos semanales para asegurar tu progreso.",
      delay: 0.2,
    },
    {
      icon: <HeartPulse className="w-10 h-10 text-primary" />,
      title: "Enfoque Sostenible",
      description: "No creo en dietas restrictivas, sino en crear hábitos saludables que puedas mantener a largo plazo.",
      delay: 0.3,
    },
  ];

  return (
    <motion.section
      id="why-choose-us"
      className="section-padding bg-background/50"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={0.2}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
          ¿Por qué elegir mis <span className="text-accent">servicios?</span>
        </h2>
        <p className="text-center text-lg text-foreground/70 mb-12 max-w-2xl mx-auto">
          Mi enfoque se basa en la personalización y el acompañamiento continuo para ayudarte a alcanzar tus objetivos de forma saludable y sostenible.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={itemVariants}
              custom={reason.delay}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card className="glassmorphism-card h-full text-center hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="items-center">
                  <div className="p-4 bg-primary/10 rounded-full mb-4">
                    {reason.icon}
                  </div>
                  <CardTitle className="text-xl text-primary">{reason.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">{reason.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUsSection;