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
      title: "Nutricionista Deportiva en Centro Fitness XYZ",
      period: "2020 - Presente",
      description: "Asesoramiento nutricional personalizado para atletas de alto rendimiento y entusiastas del fitness. Desarrollo de planes de comidas y suplementación.",
      delay: 0.1,
    },
    {
      title: "Dietista Clínica en Hospital ABC",
      period: "2018 - 2020",
      description: "Evaluación y tratamiento nutricional para pacientes con diversas patologías. Colaboración con equipos multidisciplinares.",
      delay: 0.2,
    },
  ];

  const education = [
    {
      degree: "Máster en Nutrición Deportiva",
      institution: "Universidad Internacional de Deporte",
      year: "2019",
      delay: 0.1,
    },
    {
      degree: "Grado en Nutrición Humana y Dietética",
      institution: "Universidad Nacional de Salud",
      year: "2018",
      delay: 0.2,
    },
    {
      degree: "Certificación en Coaching Nutricional",
      institution: "Instituto de Bienestar Integral",
      year: "2021",
      delay: 0.3,
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
                className="rounded-lg shadow-2xl w-full h-auto max-w-sm mx-auto md:mx-0 object-cover aspect-square"
                alt="Naomi Navarro, nutricionista y entrenadora personal"
               src="https://images.unsplash.com/photo-1650289090342-ab792ac872c4" />
            </motion.div>
            <motion.div 
              className="w-full md:w-2/3"
              variants={itemVariants}
              custom={0.3}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Conoce a <span className="text-accent">Naomi Navarro</span>
              </h1>
              <p className="text-lg text-foreground/80 mb-4">
                ¡Hola! Soy Naomi, y mi pasión es ayudarte a transformar tu vida a través de una nutrición inteligente y un entrenamiento efectivo. Desde pequeña, me fascinó cómo la alimentación y el ejercicio podían impactar nuestro bienestar físico y mental.
              </p>
              <p className="text-lg text-foreground/80 mb-4">
                Mi misión va más allá de crear dietas; busco enseñarte a comer de forma saludable y sostenible, disfrutando del proceso y construyendo hábitos que te acompañen para siempre. Creo firmemente en la personalización, porque cada persona es única y merece un plan que se adapte a sus metas, gustos y ritmo de vida.
              </p>
              <p className="text-lg text-foreground/80">
                Me dedico a la dietética porque quiero ser esa guía que te impulse a alcanzar tu mejor versión, sintiéndote con energía, confianza y, sobre todo, ¡feliz con tu cuerpo y tu salud!
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
            Mi <span className="text-accent">Experiencia</span> Laboral
          </h2>
          <div className="space-y-8 max-w-3xl mx-auto">
            {experience.map((exp) => (
              <motion.div
                key={exp.title}
                className="p-6 glassmorphism-card rounded-lg"
                variants={itemVariants}
                custom={exp.delay}
              >
                <div className="flex items-start gap-4">
                  <Briefcase className="w-8 h-8 text-accent mt-1 shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-1">{exp.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{exp.period}</p>
                    <p className="text-foreground/80 text-sm">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
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