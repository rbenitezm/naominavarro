import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tag, ShoppingCart, Percent, ExternalLink, Info } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ProviderSection = ({ provider, sectionVariants, itemVariants, handleCopyCode }) => (
  <motion.section
    className="mb-16 md:mb-20"
    variants={sectionVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    custom={provider.delay}
  >
    <div className="text-center mb-8 md:mb-12">
      {provider.logoUrl ? (
        <img  src={provider.logoUrl} alt={`Logo de ${provider.name}`} className="h-16 md:h-20 mx-auto mb-4 object-contain" />
      ) : (
        <div className="h-16 md:h-20 flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl font-bold text-primary">{provider.name}</span>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">{provider.name}</h2>
      <p className="text-md text-foreground/70 max-w-2xl mx-auto">{provider.intro}</p>
    </div>

    <Card className="glassmorphism-card mb-10">
      <CardHeader>
        <CardTitle className="flex items-center text-xl text-primary">
          <Info className="w-6 h-6 mr-3 text-accent" />
          Instrucciones y Código de Descuento
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="list-decimal list-inside space-y-2 text-foreground/80 text-sm pl-2">
          {provider.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
        <div className="bg-secondary/50 p-4 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-3 shadow-inner">
          <div className="flex items-center gap-2">
            <Tag className="w-6 h-6 text-primary hidden sm:block" />
            <p className="text-sm text-foreground">Código:
              <span className="ml-2 text-lg font-bold text-accent bg-background/50 px-3 py-1 rounded">{provider.discountCode}</span>
            </p>
          </div>
          <Button onClick={() => handleCopyCode(provider.discountCode, provider.name)} size="sm" variant="outline" className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto">
            Copiar Código
          </Button>
        </div>
        {provider.codeNote && <p className="text-xs text-muted-foreground italic">{provider.codeNote}</p>}
        <Button asChild size="lg" className="w-full mt-4 bg-accent hover:bg-accent/90 text-accent-foreground shadow-md transform hover:scale-105 transition-transform duration-300">
          <a href={provider.websiteUrl} target="_blank" rel="noopener noreferrer">
            Visitar {provider.name} <ExternalLink className="ml-2 h-5 w-5" />
          </a>
        </Button>
      </CardContent>
    </Card>

    <h3 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
      Productos <span className="text-accent">Recomendados de {provider.name}</span>
    </h3>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {provider.products.map((product) => (
        <motion.div
          key={product.name}
          className="glassmorphism-card rounded-lg overflow-hidden flex flex-col"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          custom={product.delay}
        >
          <div className="aspect-video bg-gray-200 flex items-center justify-center overflow-hidden">
            <img  className="w-full h-full object-contain p-2" alt={product.altText} src="https://images.unsplash.com/photo-1587684730061-3318058b5a76" />
          </div>
          <div className="p-5 flex flex-col flex-grow">
            <h4 className="text-lg font-semibold text-primary mb-2">{product.name}</h4>
            <p className="text-foreground/80 text-sm mb-4 flex-grow">{product.description}</p>
            <Button asChild variant="outline" className="mt-auto w-full border-accent text-accent hover:bg-accent/10 hover:text-accent">
              <a href={provider.websiteUrl} target="_blank" rel="noopener noreferrer">
                Ver producto
              </a>
            </Button>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.section>
);


const SupplementsPage = () => {
  const { toast } = useToast();

  const providers = [
    {
      name: "N-PRO",
      logoUrl: "https://n-pro.es/img/n-pro-logo-1670587210.jpg", 
      intro: "Accede a suplementación de alta calidad con N-PRO utilizando mi código de descuento exclusivo.",
      discountCode: "521986",
      websiteUrl: "https://www.n-pro.es/", 
      instructions: [
        "1. Visita la web de N-PRO.",
        "2. Añade tus productos al carrito.",
        "3. Introduce el código de descuento 521986 antes de finalizar la compra.",
      ],
      codeNote: "Este código te proporcionará un descuento en tu compra.",
      products: [
        { name: "N-PRO Whey Protein", description: "Proteína de suero de alta calidad para el desarrollo muscular.", imgPlaceholder: "Bote de N-PRO Whey Protein", altText: "N-PRO Whey Protein", delay: 0.1 },
        { name: "N-PRO Creatine", description: "Creatina monohidrato para mejorar fuerza y rendimiento.", imgPlaceholder: "Envase de N-PRO Creatine", altText: "N-PRO Creatine", delay: 0.2 },
        { name: "N-PRO BCAA Complex", description: "Aminoácidos ramificados para recuperación y energía.", imgPlaceholder: "Frasco de N-PRO BCAA Complex", altText: "N-PRO BCAA Complex", delay: 0.3 },
        { name: "N-PRO Multivitamin Pro", description: "Complejo vitamínico avanzado para deportistas.", imgPlaceholder: "Caja de N-PRO Multivitamin Pro", altText: "N-PRO Multivitamin Pro", delay: 0.4 },
      ],
      delay: 0.2,
    },
    {
      name: "100% Natural (Perfil Natural Venta Privada)",
      logoUrl: "https://storage.googleapis.com/hostinger-horizons-assets-prod/1c5e7abd-ffa0-4121-b34d-e1c4c094ed5d/77c0eec9b5bb3175fe409f2aaeaa64b8.jpg",
      intro: "Consigue productos de 100% Natural a precios ventajosos a través de la Venta Privada con mi código de invitación.",
      discountCode: "GQKGT2BT", 
      websiteUrl: "https://www.ventaprivada.perfilnatural.com",
      instructions: [
        "1. Accede a la página web: https://www.ventaprivada.perfilnatural.com",
        "2. Si es tu primera vez: Regístrate, completa el formulario e introduce el código de invitación GQKGT2BT y pulsa guardar.",
        "3. Si ya estás registrado: Haz login con tu usuario y contraseña.",
        "4. Una vez dentro, podrás comprar los complementos alimenticios de 100% Natural en condiciones ventajosas."
      ],
      codeNote: "Este código de invitación es personal e intransferible, no está permitido compartirlo sin la autorización expresa de Perfil Natural. Es para registrarse en la venta privada.",
      products: [
        { name: "Vitamina C Liposomada", description: "Alta biodisponibilidad para un sistema inmune fuerte.", imgPlaceholder: "Frasco de Vitamina C Liposomada", altText: "100% Natural Vitamina C Liposomada", delay: 0.1 },
        { name: "Magnesio Bisglicinato", description: "Magnesio de alta absorción para músculos y sistema nervioso.", imgPlaceholder: "Bote de Magnesio Bisglicinato", altText: "100% Natural Magnesio Bisglicinato", delay: 0.2 },
        { name: "Probiótico Avanzado", description: "Mezcla de cepas para una salud intestinal óptima.", imgPlaceholder: "Caja de Probiótico Avanzado", altText: "100% Natural Probiótico Avanzado", delay: 0.3 },
        { name: "Colágeno con Magnesio y Vitamina C", description: "Para la salud de articulaciones, piel y huesos.", imgPlaceholder: "Envase de Colágeno con Magnesio y Vitamina C", altText: "100% Natural Colágeno", delay: 0.4 },
      ],
      delay: 0.4,
    }
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 15, stiffness: 100, delay },
    }),
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (delay = 0) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay },
    }),
  };

  const handleCopyCode = (code, providerName) => {
    navigator.clipboard.writeText(code);
    toast({
      title: "¡Código Copiado!",
      description: `El código ${code} para ${providerName} ha sido copiado a tu portapapeles.`,
    });
  };

  return (
    <div className="section-padding">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12 md:mb-16"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          custom={0.1}
        >
          <Percent className="w-16 h-16 text-accent mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Descuentos Exclusivos en <span className="text-accent">Suplementación</span>
          </h1>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Como cliente/a, tienes acceso a descuentos especiales y condiciones ventajosas en productos de mis marcas colaboradoras. Utiliza los códigos y enlaces proporcionados para mejorar tus resultados.
          </p>
        </motion.div>

        {providers.map((provider) => (
          <ProviderSection 
            key={provider.name}
            provider={provider}
            sectionVariants={sectionVariants}
            itemVariants={itemVariants}
            handleCopyCode={handleCopyCode}
          />
        ))}
      </div>
    </div>
  );
};

export default SupplementsPage;