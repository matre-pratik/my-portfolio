import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    id: 1,
    skill: "HTML",
    image: "/skills/html5.png",
  },
  {
    id: 2,
    skill: "CSS",
    image: "/skills/css3.png",
  },
  {
    id: 3,
    skill: "Bootstrap",
    image: "/skills/bootstrap.png",
  },
  {
    id: 4,
    skill: "JavaScript",
    image: "/skills/javascript.png",
  },
  {
    id: 5,
    skill: "React",
    image: "/skills/react.png",
  },
  {
    id: 6,
    skill: "Tailwind CSS",
    image: "/skills/tailwindcss.png",
  },
  {
    id: 7,
    skill: "Node JS",
    image: "/skills/nodejs.png",
  },
  {
    id: 8,
    skill: "Java",
    image: "/skills/java.png",
  },
  {
    id: 9,
    skill: "Hibernate",
    image: "/skills/hibernate.png",
  },
  {
    id: 10,
    skill: "Spring",
    image: "/skills/spring.png",
  },
  {
    id: 11,
    skill: "Spring Boot",
    image: "/skills/spring-boot.png",
  },
  {
    id: 12,
    skill: "MySQL",
    image: "/skills/mysql.png",
  },
];

export const SkillsSection = () => {
  return (
    <motion.section
      id="skills"
      className="py-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-2xl md:text-4xl font-bold mb-8 md:mb-10 text-foreground"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          My <span className="text-primary">Skills</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className="flex flex-col items-center justify-center p-6 border-2 border-border rounded-xl hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 mb-4 flex items-center justify-center">
                <img
                  src={skill.image}
                  alt={skill.skill}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {skill.skill}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
