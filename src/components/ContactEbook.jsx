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
import { addSubscriber } from '../services/mailerLite';
import MailerLiteFormEbook from './MailerLiteFormEbook';

const ContactEbook = ({ triggerText = "¡Consigue tu copia gratuita!", buttonClassName, onSubmit }) => {

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

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitToHubspot = async (e) => {
    e.preventDefault();
    if (!name || !email) {
      toast({
        title: "Campos incompletos",
        description: "Por favor, introduce tu nombre y email.",
        variant: "destructive",
      });
      return;
    }

    const portalId = "146279114";
    const formGuid = "2750ec94-d773-4234-ba83-289799b77a62";
    const endpoint = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`;

    const payload = {
      submittedAt: Date.now(),
      fields: [
        { name: "firstname", value: name },
        { name: "email", value: email }
      ],
      context: {
        pageUri: window.location.href,
        pageName: document.title
      }
    };

    setIsSubmitting(true);

    try {
      await addSubscriber(email);

    } catch {
    }

    toast({
      title: "¡Formulario enviado!",
      description: "Pronto Naomi se pondrá en contacto contigo.",
    });

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
        <MailerLiteFormEbook />

      </DialogContent>
    </Dialog>
  );
};

export default ContactEbook;

/*


*/