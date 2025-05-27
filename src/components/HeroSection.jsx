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
      style={{ backgroundImage: 'linear-gradient(rgba(244, 233, 216, 0.8), rgba(244, 233, 216, 0.9)), url("https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bnV0cml0aW9uJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=80")' }}
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto">
        <motion.div
          className="mb-8 inline-block p-2 bg-white/50 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
        >
          <img src={logoUrl} alt="Naomi Navarro Logo" className="w-64 h-auto md:w-80 mx-auto rounded-md" />
        </motion.div>
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
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-lg transform hover:scale-105 transition-transform duration-300">
                <Zap className="mr-2 h-5 w-5" /> ¡Empieza tu transformación!
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-background text-foreground">
              <DialogHeader>
                <DialogTitle className="text-primary">Comienza tu Viaje</DialogTitle>
                <DialogDescription>
                  Rellena tus datos y Naomi se pondrá en contacto contigo lo antes posible.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit}>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right text-foreground/80">
                      Nombre
                    </Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="col-span-3 bg-background border-border focus:ring-accent"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="email" className="text-right text-foreground/80">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="col-span-3 bg-background border-border focus:ring-accent"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                     <Button type="button" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                        Cancelar
                      </Button>
                  </DialogClose>
                  <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Comienza ya
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;