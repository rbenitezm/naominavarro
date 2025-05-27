import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const PlansSection = ({ plans, onContactClick, sectionVariants, itemVariants }) => {
  return (
    <motion.section
      id="plans"
      className="section-padding bg-background/50"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      custom={0.2}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">Nuestros Packs Personalizados</h2>
        <p className="text-center text-lg text-foreground/70 mb-12 max-w-xl mx-auto">Elige el plan que mejor se adapte a tus metas y estilo de vida.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              custom={plan.delay}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Card className={`flex flex-col h-full glassmorphism-card hover:shadow-2xl transition-shadow duration-300 ${plan.popular ? 'border-accent ring-2 ring-accent' : 'border-primary/20'}`}>
                <CardHeader className="items-center text-center">
                  <div className="p-3 bg-primary/10 rounded-full mb-3">{plan.icon}</div>
                  <CardTitle className="text-2xl text-primary">{plan.name}</CardTitle>
                  {plan.popular && <span className="text-xs bg-accent text-accent-foreground font-semibold px-2 py-1 rounded-full absolute -top-3 -right-3 transform rotate-6">POPULAR</span>}
                  <CardDescription className="text-3xl font-bold text-accent pt-2">{plan.price}
                    {plan.name === "Pack Abonado" ? <span className="text-sm text-muted-foreground">/trimestre</span> : <span className="text-sm text-muted-foreground">/mes</span>}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3 text-foreground/90 text-sm">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    onClick={onContactClick}
                    className={`w-full ${plan.popular ? 'bg-gradient-to-r from-accent to-yellow-400 text-white' : 'bg-primary text-primary-foreground'} hover:opacity-90 shadow-md transform hover:scale-105 transition-transform duration-300`}
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default PlansSection;