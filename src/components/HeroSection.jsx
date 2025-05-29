import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog';
import { Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import ContactDialog from '@/components/ContactDialog';


const HeroSection = ({ logoUrl, sectionVariants, itemVariants }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();
  const naomiEmail = "naominavarrogarriga@gmail.com";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      toast({
        title: "Campos incompletos",
        description: "Por favor, introduce tu nombre y email.",
        variant: "destructive",
      });
      return;
    }

    const subject = `Solicitud de transformación de: ${name}`;
    const body = `Hola Naomi,\n\nMe gustaría empezar mi transformación.\n\nNombre: ${name}\nEmail: ${email}\n\n¡Gracias!`;
    window.location.href = `mailto:${naomiEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    toast({
      title: "¡Formulario enviado!",
      description: "Redirigiendo a tu cliente de correo para enviar la información.",
    });
    setIsDialogOpen(false);
    setName('');
    setEmail('');
  };

  return (
    <motion.section
  className="section-padding text-center bg-cover bg-center"
  style={{
    backgroundImage: 'linear-gradient(rgba(244, 233, 216, 0.8), rgba(244, 233, 216, 0.9)), url("https://raw.githubusercontent.com/rbenitezm/naominavarro/main/src/images/logo-16-9-simple.png")',
    backgroundSize: '100% 100%', 
    backgroundPosition: 'center', 
    backgroundRepeat: 'no-repeat', 
    width: 'auto',
    height: '50%',
  }}
  variants={sectionVariants}
  initial="hidden"
  animate="visible"
>
      <div className="container mx-auto">
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
          <ContactDialog />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;