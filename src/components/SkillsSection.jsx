import React from "react";

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
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold mb-8  md:mb-10 text-foreground">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="flex flex-col items-center justify-center p-6 border-2 border-border rounded-xl  hover:scale-105 transition-transform duration-300"
            >
              <div className="w-20 h-20 mb-4 flex items-center justify-center ">
                <img
                  src={skill.image}
                  alt={skill.skill}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {skill.skill}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
