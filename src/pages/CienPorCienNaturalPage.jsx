import React from 'react';
import ProviderPageLayout from '@/pages/SupplementsPage';

const CienPorCienNaturalPage = () => {
  const cienPorCienNaturalData = {
    name: "100% Natural",
    pageTitle: "Descuentos Exclusivos en 100% Natural",
    logoUrl: "https://www.cienporciennatural.com/themes/ee/site/default/images/logo_vertical.png", 
    intro: "Consigue productos de 100% Natural a precios ventajosos. Utiliza mi código de invitación para registrarte y acceder a complementos alimenticios de alta calidad.",
    discountCode: "GQKGT2BT", // This is an invitation code for registration
    websiteUrl: "https://www.cienporciennatural.com/",
    instructions: [
      "Accede a la página web: <a href=\"https://www.cienporciennatural.com/\" target=\"_blank\" rel=\"noopener noreferrer\">https://www.cienporciennatural.com/</a>.",
      "Si es tu primera vez: Haz clic en <em>\"Regístrate\"<em>.",
      "Completa el formulario con tus datos.",
      "Introduce el código de invitación <strong>GQKGT2BT</strong> en el campo correspondiente y pulsa <em>\"Guardar\"</em>.",
      "Si ya estás registrado: Haz login con tu usuario y contraseña.",
      "Una vez dentro, podrás explorar y comprar los complementos alimenticios de 100% Natural en condiciones especiales."
    ],
    codeNote: "Este código de invitación es personal e intransferible y es necesario para el registro en la plataforma de Venta Privada. No está permitido compartirlo sin la autorización expresa de Perfil Natural.",
    products: [
      { name: "CondroArtil® con colágeno UC-II®", description: "CondroArtil® con colágeno UC-II®, es un complemento alimenticio, que además del ingrediente principal: colágeno tipo 2 no desnaturalizado (UC-II®), incorpora vitaminas C, D3 y K2, cobre y manganeso. Un conjunto de nutrientes pensado para ayudar a mantener los huesos en buenas condiciones1, 2 y para la formación y mantenimiento del tejido conectivo (tejido de sostén)3, 4 y colágeno1.", imgPlaceholder: "CondroArtil® con colágeno UC-II®", altText: "CondroArtil® con colágeno UC-II®", productUrl: "https://www.cienporciennatural.com/productos/condroartil-colageno-uc-ii", productImg:"https://www.cienporciennatural.com/images/uploads/productos/uci-sin-fondo.png", delay: 0.1 },
      { name: "CurcuFit®", description: "CurcuFit® es un complemento alimenticio que contiene un extracto de curcumina (Meriva®), formulado con la tecnología Fitosoma® que permite ingerir dosis alimenticias de cúrcuma con un efecto altamente maximizado (hasta 30 veces mayor absorción que la misma curcumina sin aplicar la tecnología Fitosoma®), estandarizado al 18-22% de curcuminoides.", imgPlaceholder: "CurcuFit®", altText: "CurcuFit®", productUrl: "https://www.cienporciennatural.com/productos/curcufit", productImg: "https://www.cienporciennatural.com/images/uploads/productos/curcufitweb.png", delay: 0.2 },
      { name: "Magnesio", description: "Magnesio es un complemento alimenticio formulado con las dos formas más biodisponibles y mejor toleradas de este mineral: bisglicinato y citrato. Las formas aminoqueladas (bisglicinato) y las orgánicas (citrato), tienen mayor estabilidad, absorción y se toleran mejor en el organismo que las formas inorgánicas (óxido, carbonato, sulfato y cloruro).", imgPlaceholder: "Magnesio", altText: "Magnesio", productUrl: "https://www.cienporciennatural.com/productos/magnesio", productImg:"https://www.cienporciennatural.com/images/uploads/productos/magnesio_sinfondo_ok.png", delay: 0.3 },
      { name: "ProbiTec® Complet", description: "ProbiTec® Complet es un complemento alimenticio de la línea ProbiTec®, una fórmula que contiene una selecta combinación de ocho cepas de probióticos patentadas (FloraActive®), en cantidades adecuadas (con un recuento mínimo de 8000 millones de bacterias vivas), combinadas con fructooligosacáridos (FOS) y zinc.", imgPlaceholder: "ProbiTec® Complet", altText: "ProbiTec® Complet ", productUrl: "https://www.cienporciennatural.com/productos/probitec-complet", productImg: "https://www.cienporciennatural.com/images/uploads/productos/probiteccomplet_sinfondo.png",  delay: 0.4 },
    ],
    delay: 0.4,
  };

  return <ProviderPageLayout providerData={cienPorCienNaturalData} />;
};

export default CienPorCienNaturalPage;