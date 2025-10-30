import React from "react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4 ">
        <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-10">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="space-y-6 text-start">
          <p className="text-lg md:text-xl leading-relaxed">
            Hi, I’m <strong>Pratik Ramesh Matre</strong>, an aspiring Web
            Developer with a passion for creating <strong>user-friendly</strong>{" "}
            and visually appealing websites. I am eager to learn, grow, and
            refine my skills in coding, designing, and optimizing web solutions.
          </p>

          <p className="text-lg md:text-xl leading-relaxed">
            I stay curious about the latest <strong>industry trends</strong> and
            aim to build <strong>dynamic and impactful websites</strong> that
            deliver great user experiences while supporting business goals. My
            fresh perspective and enthusiasm drive me to contribute creatively
            to every project I work on.
          </p>
        </div>
        <div className="flex justify-center items-center ">
          <a
            href="#projects"
            className="cosmic-button mt-8 mx-4 py-2 px-7"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
};
