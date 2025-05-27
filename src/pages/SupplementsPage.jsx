import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tag, ShoppingCart, Percent, ExternalLink, Info, Copy, Check } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { useState } from 'react';

const ProductCard = ({ product, providerUrl, itemVariants }) => (
  <motion.div
    variants={itemVariants}
    custom={product.delay}
    className="bg-card border border-border rounded-xl shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300"
  >
    <div className="w-full h-48 bg-muted overflow-hidden">
      <img
        className="w-full h-full object-contain"
        alt={product.altText}
        src={product.productImg} />
    </div>
    <div className="p-5 flex flex-col flex-grow">
      <h4 className="text-lg font-semibold text-primary mb-2">{product.name}</h4>
      <p className="text-foreground/80 text-sm mb-4 flex-grow">{product.description}</p>
      <Button asChild variant="outline" className="mt-auto w-full border-accent text-accent hover:bg-accent/10 hover:text-accent">
        <a href={product.productUrl} target="_blank" rel="noopener noreferrer">
          Ver producto en {product.providerName || "sitio"}
        </a>
      </Button>
    </div>
  </motion.div>
);


const ProviderPageLayout = ({ providerData }) => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

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
    setCopied(true);
    toast({
      title: "¡Código Copiado!",
      description: `El código ${code} para ${providerName} ha sido copiado a tu portapapeles.`,
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="section-padding bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12 md:mb-16"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          custom={0.1}
        >
          {providerData.logoUrl && (
            <img src={providerData.logoUrl} alt={`Logo de ${providerData.name}`} className="h-16 md:h-20 mx-auto mb-6 object-contain" />
          )}
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {providerData.pageTitle || `Descuentos en ${providerData.name}`}
          </h1>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            {providerData.intro}
          </p>
        </motion.div>

        <motion.section
          className="mb-12 md:mb-16 p-6 md:p-8 bg-card border border-border rounded-xl shadow-lg"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          custom={0.2}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-6 text-center">
            <Tag className="inline-block w-7 h-7 mr-2 text-accent" />
            Tu Descuento Exclusivo
          </h2>

          <div className="text-center mb-6">
            <p className="text-lg text-foreground/90 mb-2">Utiliza el siguiente código:</p>
            <div className="inline-flex items-center bg-muted p-3 rounded-lg">
              <span className="text-2xl md:text-3xl font-bold text-accent tracking-wider mr-4">{providerData.discountCode}</span>
              <Button onClick={() => handleCopyCode(providerData.discountCode, providerData.name)} size="sm" variant="ghost" className="text-accent hover:bg-accent/10">
                {copied ? <Check className="w-5 h-5 mr-1" /> : <Copy className="w-5 h-5 mr-1" />}
                {copied ? "Copiado" : "Copiar"}
              </Button>
            </div>
            {providerData.codeNote && <p className="text-xs text-foreground/60 mt-3 max-w-md mx-auto">{providerData.codeNote}</p>}
          </div>

          <div className="text-center mb-8">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <a href={providerData.websiteUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-5 w-5" /> Visitar {providerData.name}
              </a>
            </Button>
          </div>

          {providerData.instructions && providerData.instructions.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold text-primary mb-3 flex items-center">
                <Info className="w-5 h-5 mr-2 text-primary" />
                Instrucciones para el descuento:
              </h3>
              <ul className="list-decimal list-outside ml-6 space-y-1 text-foreground/80">
                {providerData.instructions.map((step, index) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: step }} />
                ))}
              </ul>
            </div>
          )}
        </motion.section>

        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          custom={0.3}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-8 text-center">
            <ShoppingCart className="inline-block w-7 h-7 mr-2 text-accent" />
            Productos Recomendados
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {providerData.products.map((product) => (
              <ProductCard
                key={product.name}
                product={{ ...product, providerName: providerData.name }}
                providerUrl={providerData.websiteUrl}
                itemVariants={itemVariants}
              />
            ))}
          </div>
        </motion.section>

      </div>
    </div>
  );
};

export default ProviderPageLayout;
