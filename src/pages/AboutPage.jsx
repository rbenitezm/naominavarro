import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, UserCircle } from 'lucide-react';

const AboutPage = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 15, stiffness: 100, delay },
    }),
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (delay = 0) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay },
    }),
  };

  const experience = [
    {
      title: "",
      period: "",
      description: "Más de 10 años como dietista clínica en hospitales y centros de salud, ayudando a pacientes con patologías complejas a mejorar su calidad de vida. También he liderado nuevos servicios de nutrición y presoterapia en el ámbito privado. Con base sólida en cocina profesional, combino ciencia y sabor en cada recomendación.",
      delay: 0.1,
    },
    {
      title: "",
      period: "",
      description: "<ul><li>Mejorar la composición corporal</li>" +
        "<li>Dieta mediterrénea</li>" +
        "<li>Dieta cetogénica</li>" +
        "<li>Diabetes tipo II</li></ul>",
      delay: 0.1,
    },
    {
      title: "",
      period: "",
      description: "Diabetes tipo II, hipertensión, sindrome metabólico, nutrición deportiva, hipedema, transtornos hormolales, interpretación de analíticas, antropometría, ayuno intermitente",
      delay: 0.1,
    },
  ];

  const education = [
    {
      degree: "Grado Superior en Dietética",
      institution: "Centre d'Estudis de Catalunya (Barcelona)",
      year: "2010",
      delay: 0.1,
    },
    {
      degree: "Máster en Composición Corporal y Nutrición Deportiva",
      institution: "UCAM",
      year: "2025",
      delay: 0.3,
    },

    {
      degree: "Curso ISAK nivel I",
      institution: "Universitat Blanquerna (Barcelona)",
      year: "2025",
      delay: 0.4,
    },
  ];

  return (
    <div className="section-padding">
      <div className="container mx-auto">
        <motion.section
          className="mb-16 md:mb-24"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          custom={0.1}
        >
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <motion.div
              className="w-full md:w-1/3"
              variants={itemVariants}
              custom={0.2}
            >
              <img
                className="rounded-lg shadow-2xl w-full h-auto max-w-sm mx-auto md:mx-0 object-cover "
                alt="Naomi Navarro, nutricionista y entrenadora personal"
                src="https://raw.githubusercontent.com/rbenitezm/naominavarro/main/src/images/naomi.png" />
            </motion.div>
            <motion.div
              className="w-full md:w-2/3"
              style={{ textAlign: 'justify' }}
              variants={itemVariants}
              custom={0.3}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 ">
                Conoce a <span className="text-accent">Naomi Navarro</span>
              </h1>
              <p className="text-lg text-foreground/80 mb-4">
                <b>¡Hola! Soy Naomi</b>, y si hay algo que me hace vibrar es ver cómo la alimentación y el entrenamiento pueden cambiar vidas… ¡de verdad!
              </p>
              <p className="text-lg text-foreground/80 mb-4">
                Mi historia empieza entre cazuelas, fogones y el bullicio del restaurante de mis abuelos. Allí crecí entre estofados, espiando recetas y aprendiendo, plato a plato, lo que significa cocinar con amor. Mi abuela, una crack de la cocina, me enseñó muchísimos platos que aún hoy sigo preparando (con su toque, claro).
              </p>
              <p className="text-lg text-foreground/80 mb-4">
                Pero no me quedé ahí. Un día pensé: “¿Y si llevo todo esto un poco más allá?” Y así empezó todo. Me metí de lleno en el mundo de la nutrición, formándome sin parar y descubriendo que mi pasión no era solo comer bien (que también), sino <b>ayudar a los demás a sentirse bien a través de lo que comen.</b>
              </p>
              <p className="text-lg text-foreground/80 mb-4">
                No hago dietas milagro. No creo en restricciones absurdas. Lo que hago es enseñarte a comer bien, a disfrutarlo y a que te sientas a gusto en tu piel. Porque cada persona es única, y tu plan también debería serlo.
              </p>
              <p className="text-lg text-foreground/80">
                Quiero acompañarte, motivarte y darte herramientas para que aprender a cuidar tu cuerpo se convierta en una experiencia positiva, respetuosa y llena de descubrimientos. Con bienestar, con alegría… <b>¡y con ganas de comerte el mundo!</b>
              </p>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          className="mb-16 md:mb-24"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={0.2}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
            Mi <span className="text-accent">Experiencia</span>
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 text-center">
            <motion.div
              className="w-full md:w-2/3"
              style={{ textAlign: 'justify' }}
              variants={itemVariants}
              custom={0.3}
            >
              <p className="text-lg text-foreground/80 mb-4">
                Más de 10 años como dietista clínica en hospitales y centros de salud, ayudando a pacientes con patologías complejas a mejorar su calidad de vida. También he liderado nuevos servicios de nutrición y presoterapia en el ámbito privado. Con base sólida en cocina profesional, combino ciencia y sabor en cada recomendación.
              </p>
              <ul className="list-disc list-inside ml-6 space-y-2 text-foreground/80 grid sm:grid-cols-1 md:grid-cols-2 gap-x-8">
                <li>Mejorar la composición corporal</li>
                <li>Dieta mediterránea</li>
                <li>Dieta cetogénica</li>
                <li>Diabetes tipo II</li>
                <li>Hipertensión</li>
                <li>Síndrome metabólico</li>
                <li>Nutrición deportiva</li>
                <li>Lipedema</li>
                <li>Transtornos hormonales</li>
                <li>Interpretación de analíticas</li>
                <li>Antropometría</li>
                <li>Ayuno intermitente</li>
              </ul>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={0.3}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
            Mi <span className="text-accent">Formación</span> Académica
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {education.map((edu) => (
              <motion.div
                key={edu.degree}
                className="p-6 glassmorphism-card rounded-lg"
                variants={itemVariants}
                custom={edu.delay}
              >
                <div className="flex flex-col items-center text-center">
                  <GraduationCap className="w-10 h-10 text-accent mb-3" />
                  <h3 className="text-lg font-semibold text-primary mb-1">{edu.degree}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{edu.institution}</p>
                  <p className="text-xs text-muted-foreground">{edu.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default AboutPage;