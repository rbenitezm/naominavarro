import React from 'react';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';
import { Zap, ShoppingBag, Utensils, CalendarClock } from 'lucide-react';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PlansSection from '@/components/PlansSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import AppAccessSection from '@/components/AppAccessSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FaqSection from '@/components/FaqSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const App = () => {
  const { toast } = useToast();
  const naomiEmail = "naominavarrogarriga@gmail.com";
  const logoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/1c5e7abd-ffa0-4121-b34d-e1c4c094ed5d/f34b30550ff400d2be6d2f6d6dbcb237.jpg";

  const plans = [
    {
      name: "Pack Básico",
      price: "74€",
      features: [
        "Plan nutricional adaptado a objetivos y preferencias",
        "Seguimiento semanal por 1 mes",
      ],
      icon: <Zap className="w-8 h-8 text-primary" />,
      cta: "Empezar Ahora",
      delay: 0.1,
    },
    {
      name: "Pack Intermedio",
      price: "111€",
      features: [
        "Todo lo del Pack Básico",
        "Entrenamiento personalizado",
        "Lista de la compra",
        "Acceso a software de dietas",
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
        "Todo lo del Pack Intermedio",
        "Preparación batch cooking para 3 días",
        "Acompañamiento de compra",
        "Entreno individualizado",
      ],
      icon: <Utensils className="w-8 h-8 text-primary" />,
      cta: "Conseguir Premium",
      delay: 0.3,
    },
    {
      name: "Pack Abonado",
      price: "400€",
      features: [
        "Todo lo del Pack Premium",
        "Seguimiento trimestral continuo",
        "Acceso prioritario a consultas",
        "Planificación avanzada de temporada",
      ],
      icon: <CalendarClock className="w-8 h-8 text-primary" />,
      cta: "Suscribirse",
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

  const handleContactClick = () => {
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
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-secondary via-background to-accent/10 text-foreground font-sans">
      <Toaster />
      <Header onContactClick={handleContactClick} />
      <main className="flex-grow">
        <HeroSection 
          logoUrl={logoUrl} 
          onContactClick={handleContactClick} 
          sectionVariants={sectionVariants} 
          itemVariants={itemVariants} 
        />
        <PlansSection 
          plans={plans} 
          onContactClick={handleContactClick}
          sectionVariants={sectionVariants} 
          itemVariants={itemVariants} 
        />
        <WhyChooseUsSection
          sectionVariants={sectionVariants}
          itemVariants={itemVariants}
        />
        <AppAccessSection
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
        />
        <ContactSection 
          naomiEmail={naomiEmail}
          sectionVariants={sectionVariants}
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;