import React from 'react';
import ProviderPageLayout from '@/pages/SupplementsPage';

const NproPage = () => {
  const nproData = {
    name: "N-PRO",
    pageTitle: "Descuentos Exclusivos en N-PRO",
    logoUrl: "https://npro.es/wp-content/uploads/2024/02/NPRO-NEW-LOGO-1536x557.png?q=80&w=400&auto=format&fit=crop",
    intro: "Accede a suplementación de alta calidad con N-PRO utilizando mi código de descuento exclusivo. Productos formulados para optimizar tu salud digestiva.",
    discountCode: "521986",
    websiteUrl: "https://www.npro.es/",
    instructions: [
      "Visita la web de <a href=\"https://www.npro.es/\" target=\"_blank\" rel=\"noopener noreferrer\">https://www.npro.es/</a>.",
      "Añade tus productos al carrito.",
      "Introduce el código de descuento <strong>521986</strong> en la casilla correspondiente antes de finalizar la compra.",
    ],
    codeNote: "Este código te proporcionará un descuento especial en todos los productos de N-PRO.",
    products: [
      { name: "NPRO ENZIMDIGEST 60 caps", description: "NPro Enzimdigest es un complemento alimenticio que combina enzimas digestivas, betaína clorhidrato y extractos de plantas como hinojo y manzanilla.", imgPlaceholder: "NPRO ENZIMDIGEST 60 caps", altText: "NPRO ENZIMDIGEST 60 caps", productUrl: "https://npro.es/producto/enzimdigest-60caps", productImg: "https://npro.es/wp-content/uploads/2024/04/NPRO-ENZIMDIGEST-60caps.png", delay: 0.1 },
      { name: "NPRO METANINTEST 90 caps", description: "Npro Metanintest contiene una mezcla innovadora de extractos de plantas ricas en polifenoles, aceites aceites esenciales microencapsulados y cepas probióticas.", imgPlaceholder: "NPRO METANINTEST 90 caps", altText: "NPRO METANINTEST 90 caps", productUrl: "https://npro.es/producto/npro-metanintest-90-caps/", productImg: "https://npro.es/wp-content/uploads/2024/04/NPRO-METANINTEST-90caps.png", delay: 0.4 },
      { name: "N-PRO NPRO CLEANINTEST 60 caps", description: "NPro Cleanintest está formulado con extractos vegetales de neem, orégano, agracejo, tomillo, romero, menta y clavo. El tomillo tiene un efecto antibacteriano y el orégano y la menta contribuyen al funcionamiento normal del tracto intestinal.", imgPlaceholder: "N-PRO NPRO CLEANINTEST 60 caps", altText: "N-PRO NPRO CLEANINTEST 60 caps", productUrl: "https://npro.es/producto/cleanintest/", productImg: "https://npro.es/wp-content/uploads/2024/04/NPRO-CLEANINTEST-60caps.png", delay: 0.2 },
      { name: "NPRO REGENINTEST 60 caps", description: "NPro Regenintest contiene una combinación de ingredientes de alta calidad, tales como la cúrcuma, que tiene acción antiinflamatoria y que ayuda a mantener la eficacia del sistema inmunitario, y el zinc, que contribuye al mantenimiento de la piel en condiciones normales, al proceso de división celular y a la protección de las células frente al daño oxidativo.", imgPlaceholder: "NPRO REGENINTEST 60 caps", altText: "NPRO REGENINTEST 60 caps", productUrl: "https://npro.es/producto/npro-regenintest-60-caps/", productImg: "https://npro.es/wp-content/uploads/2022/07/NPRO-REGENINTEST-60caps.png", delay: 0.3 },
    ],
    delay: 0.2,
  };

  return <ProviderPageLayout providerData={nproData} />;
};

export default NproPage;