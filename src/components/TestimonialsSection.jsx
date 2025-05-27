import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Users } from 'lucide-react';
import { motion } from 'framer-motion';

const TestimonialsSection = ({ testimonials, sectionVariants, itemVariants }) => {
  return (
    <motion.section
      id="testimonials"
      className="section-padding"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={0.3}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">Lo que dicen nuestros clientes</h2>
        <p className="text-center text-lg text-foreground/70 mb-12 max-w-xl mx-auto">Historias reales de transformación y bienestar.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={itemVariants}
              custom={testimonial.delay}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card className="glassmorphism-card h-full flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300">
                <CardContent className="pt-6">
                  <Users className="w-10 h-10 text-accent mb-4" />
                  <p className="text-foreground/90 italic mb-4">"{testimonial.quote}"</p>
                </CardContent>
                <CardFooter>
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TestimonialsSection;