import React from "react";
import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <motion.section
      id="about"
      className="py-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 ">
        <motion.h2
          className="text-2xl md:text-4xl font-bold mb-8 md:mb-10"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          About <span className="text-primary">Me</span>
        </motion.h2>

        <div className="space-y-6 text-start">
         <motion.p
  className="text-lg md:text-xl leading-relaxed"
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
>
  Hi, I’m <strong>Pratik Ramesh Matre</strong>, a passionate{" "}
  <strong>Full Stack Java Developer</strong> with a strong interest in
  building modern, scalable, and user-friendly web applications. I enjoy
  turning ideas into real-world solutions by combining clean frontend
  design with efficient backend development.
</motion.p>

<motion.p
  className="text-lg md:text-xl leading-relaxed"
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
>
  I have knowledge of <strong>HTML, CSS, JavaScript, React.js, Java,
  Spring Boot, MySQL, and REST APIs</strong>, which help me create
  complete end-to-end web applications. From designing responsive user
  interfaces to developing secure backend systems and managing databases,
  I focus on writing clean, maintainable, and efficient code.
</motion.p>

<motion.p
  className="text-lg md:text-xl leading-relaxed"
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
>
  I am constantly learning new technologies, improving my problem-solving
  skills, and exploring better development practices. My goal is to build
  impactful digital products that deliver excellent user experiences while
  solving real business problems.
</motion.p>
        </div>
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <a href="#projects" className="cosmic-button mt-8 mx-4 py-2 px-7">
            View Projects
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};
