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
            Hi, I’m <strong>Pratik Ramesh Matre</strong>, an aspiring Web
            Developer with a passion for creating <strong>user-friendly</strong>{" "}
            and visually appealing websites. I am eager to learn, grow, and
            refine my skills in coding, designing, and optimizing web solutions.
          </motion.p>

          <motion.p
            className="text-lg md:text-xl leading-relaxed"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            I stay curious about the latest <strong>industry trends</strong> and
            aim to build <strong>dynamic and impactful websites</strong> that
            deliver great user experiences while supporting business goals. My
            fresh perspective and enthusiasm drive me to contribute creatively
            to every project I work on.
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
