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
  const logoUrl = "https://raw.githubusercontent.com/rbenitezm/naominavarro/main/src/images/logo-principal.png";

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
        "Preparación batch cooking para 3 días",
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
      quote: "Naomi transformó mi relación con la comida. ¡Ahora como saludable y disfruto cada bocado!",
      name: "Laura G.",
      delay: 0.1,
    },
    {
      quote: "Los entrenamientos personalizados son increíbles. He alcanzado metas que nunca pensé posibles.",
      name: "Carlos P.",
      delay: 0.2,
    },
    {
      quote: "El Pack Premium es una inversión en mi salud. El batch cooking me ahorra muchísimo tiempo.",
      name: "Sofía M.",
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
        onContactClick={handleContactClick} 
        sectionVariants={sectionVariants} 
        itemVariants={itemVariants} 
      />
      <AppAccessSection
        sectionVariants={sectionVariants}
        itemVariants={itemVariants}
        onContactClick={handleContactClick} 
      />
      <PlansSection 
        plans={plans} 
        onContactClick={handleContactClickScroll} 
        sectionVariants={sectionVariants} 
        itemVariants={itemVariants} 
      />
      <WhyChooseUsSection
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
        onContactClick={handleContactClick} 
      />
    </>
  );
};

export default HomePage;