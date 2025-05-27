import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';

const Layout = () => {
  const location = useLocation();
  const { toast } = useToast();
  const naomiEmail = "naominavarrogarriga@gmail.com";

  const handleContactClick = () => {
    if (location.pathname === "/") {
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
    } else {
       window.location.href = `mailto:${naomiEmail}?subject=Consulta desde la web&body=Hola Naomi, me gustaría contactar contigo.`;
        toast({
          title: "Redirigiendo a tu cliente de correo",
          description: `Listo para contactar a ${naomiEmail}`,
        });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-secondary via-background to-accent/10 text-foreground font-sans">
      <Toaster />
      <Header onContactClick={handleContactClick} />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;