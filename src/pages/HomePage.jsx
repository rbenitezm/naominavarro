import React from 'react';
import { useToast } from '@/components/ui/use-toast';
import { Zap, ShoppingBag, Utensils, CalendarClock } from 'lucide-react';

import HeroSection from '@/components/HeroSection';
import PlansSection from '@/components/PlansSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import AppAccessSection from '@/components/AppAccessSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FaqSection from '@/components/FaqSection';
import ContactSection from '@/components/ContactSection';


const HomePage = () => {
  const { toast } = useToast();
  const naomiEmail = "naominavarrogarriga@gmail.com";
  const logoUrl = "/images/logo-principal.png";

  const plans = [
    {
      name: "Pack Básico",
      price: "82€",
      features: [
        "Plan nutricional adaptado a objetivos y preferencias",
        "Seguimiento semanal por 1 mes",
        "Lista de la compra",
        "Acceso a software de dietas",
      ],
      icon: <Zap className="w-8 h-8 text-primary" />,
      cta: "Empezar Ahora",
      delay: 0.1,
    },
    {
      name: "Pack Intermedio",
      price: "111€",
      features: [
        "Plan nutricional adaptado a objetivos y preferencias",
        "Seguimiento semanal por 1 mes",
        "Lista de la compra",
        "Acceso a software de dietas",
        "Entrenamiento personalizado",
      ],
      icon: <ShoppingBag className="w-8 h-8 text-primary" />,
      cta: "Elegir Intermedio",
      popular: true,
      delay: 0.2,
    },
    {
      name: "Pack Premium",
      price: "189€",
      features: [
        "Plan nutricional adaptado a objetivos y preferencias",
        "Seguimiento semanal por 1 mes",
        "Lista de la compra",
        "Acceso a software de dietas",
        "Entrenamiento personalizado",
        "Preparación batch cooking para 3 días (Según disponibilidad geográfica)",
        "Acompañamiento de compra",
      ],
      icon: <Utensils className="w-8 h-8 text-primary" />,
      cta: "Conseguir Premium",
      delay: 0.3,
    },
    {
      name: "Pack Abonado",
      price: "220€",
      features: [
        "Plan nutricional adaptado a objetivos y preferencias",
        "Seguimiento semanal por 3 meses",
        "Lista de la compra",
        "Acceso a software de dietas",
        "Seguimiento trimestral continuo",
        "Acceso prioritario a consultas",
        "Planificación avanzada de temporada",
      ],
      icon: <CalendarClock className="w-8 h-8 text-primary" />,
      cta: "Suscribirse",
      oferta: true,
      delay: 0.4,
    },
  ];

  const testimonials = [
    {
      quote: "Hola mi nombre es Jose Maria Aragon Dueñas paciente de Naomi Navarro y mi experiencia ha sido brutal, contentisimo con el progreso tanto personal como Deportivo. <br/><br/> Sin agobios ni prohibiciones, simplenente un orden y cambios de habitos alimentarios, desde que empecé hace 2 meses llevo 11 kilos bajados y seguimos trabajando en equipo. <br/><br/>Es super atenta a todas las dudas y siempre dispuesta ayudarte y hacerte disfutar de los placeres de una buena alimentacion. Es una gran profesional.",
      name: "Jose Maria",
      delay: 0.1,
    },
   
    {
      quote: "Hace unos meses mi padre tuvo un achaque bastante fuerte de gota y con la medicacion no encontraba mejora, me puse en contaco con Naomi y nos atendio maravillosamente, es una gran profesional, y muy atenta! <br/><br/>  Le hizo una dieta, alimentos que debe y que no debe tomar, un seguimiento de la dieta y todavia a dia de hoy ahun  se preocupa de saber  como le va. Estoy muy agradecida!! <br/><br/>Gracias Naomi!",
      name: "Alba",
      delay: 0.3,
    },
  ];

  const handleContactClickScroll = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `mailto:${naomiEmail}`;
      toast({
        title: "Redirigiendo a tu cliente de correo",
        description: `Listo para contactar a ${naomiEmail}`,
      });
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        delay,
      },
    }),
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (delay = 0) => ({
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        delay,
      },
    }),
  };

  return (
    <>
      <HeroSection
        logoUrl={logoUrl}
        onContactClick={handleContactClickScroll}
        sectionVariants={sectionVariants}
        itemVariants={itemVariants}
      />
      <AppAccessSection
        sectionVariants={sectionVariants}
        itemVariants={itemVariants}
        onContactClick={handleContactClickScroll}
      />
      <WhyChooseUsSection
        sectionVariants={sectionVariants}
        itemVariants={itemVariants}
      />
      <PlansSection
        plans={plans}
        onContactClick={handleContactClickScroll}
        sectionVariants={sectionVariants}
        itemVariants={itemVariants}
      />


      <TestimonialsSection
        testimonials={testimonials}
        sectionVariants={sectionVariants}
        itemVariants={itemVariants}
      />
      <FaqSection
        sectionVariants={sectionVariants}
        itemVariants={itemVariants}
        onContactClick={handleContactClickScroll}
      />
    </>
  );
};

export default HomePage;