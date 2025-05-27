import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';

const ContactSection = ({ naomiEmail, sectionVariants }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:${naomiEmail}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
    toast({
      title: "Redirigiendo a tu cliente de correo",
      description: `Listo para enviar tu mensaje a ${naomiEmail}`,
    });
  };

  return (
    <motion.section
      id="contact"
      className="section-padding bg-secondary/30"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      custom={0.4}
    >
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto bg-background/80 backdrop-blur-md shadow-2xl rounded-lg overflow-hidden md:flex">
          <div className="w-full md:w-1/3 bg-primary/10 p-8 text-primary">
            <h2 className="text-3xl font-bold mb-4 text-primary">Contacta conmigo</h2>
            <p className="text-foreground/80 mb-6 text-sm">
              ¿Tienes alguna pregunta o estás listo para comenzar tu transformación? Envíame un mensaje y me pondré en contacto contigo lo antes posible.
            </p>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 text-primary">Email</h3>
              <a href={`mailto:${naomiEmail}`} className="flex items-center text-foreground/80 hover:text-accent transition-colors">
                <Mail className="w-4 h-4 mr-2" />
                {naomiEmail}
              </a>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-primary">Sígueme</h3>
              <div className="flex space-x-4">
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-accent transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-accent transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-accent transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-foreground/90">Nombre</Label>
                <Input type="text" id="name" value={formData.name} onChange={handleChange} placeholder="Tu nombre completo" required className="mt-1 bg-white/70 border-primary/30 focus:border-accent focus:ring-accent" />
              </div>
              <div>
                <Label htmlFor="email" className="text-foreground/90">Email</Label>
                <Input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="tu@email.com" required className="mt-1 bg-white/70 border-primary/30 focus:border-accent focus:ring-accent" />
              </div>
              <div>
                <Label htmlFor="subject" className="text-foreground/90">Asunto</Label>
                <Input type="text" id="subject" value={formData.subject} onChange={handleChange} placeholder="Motivo de tu consulta" required className="mt-1 bg-white/70 border-primary/30 focus:border-accent focus:ring-accent" />
              </div>
              <div>
                <Label htmlFor="message" className="text-foreground/90">Mensaje</Label>
                <Textarea id="message" value={formData.message} onChange={handleChange} placeholder="Escribe tu mensaje aquí..." rows={4} required className="mt-1 bg-white/70 border-primary/30 focus:border-accent focus:ring-accent" />
              </div>
              <div>
                <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-md transform hover:scale-105 transition-transform duration-300">
                  Enviar mensaje
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;