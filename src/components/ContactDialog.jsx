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
import { useToast } from '@/components/ui/use-toast';

const ContactDialog = ({ triggerText = "¡Empieza tu transformación!", buttonClassName, onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

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

    if (onSubmit) {
      onSubmit({ name, email });
    } else {
      const naomiEmail = "naominavarrogarriga@gmail.com";
      const subject = `Solicitud de transformación de: ${name}`;
      const body = `Hola Naomi,\n\nMe gustaría empezar mi transformación.\n\nNombre: ${name}\nEmail: ${email}\n\n¡Gracias!`;
      window.location.href = `mailto:${naomiEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      toast({
        title: "¡Formulario enviado!",
        description: "Redirigiendo a tu cliente de correo para enviar la información.",
      });
    }

    setIsDialogOpen(false);
    setName('');
    setEmail('');
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className={
            buttonClassName || // Si `buttonClassName` está definido, úsalo
            "bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-lg transform hover:scale-105 transition-transform duration-300"
          }
        >
          <Zap className="mr-2 h-5 w-5" /> {triggerText}
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
  );
};

export default ContactDialog;