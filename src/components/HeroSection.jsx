import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const roles = [
  "Front-End Developer",
  "Web Developer",
  "React Enthusiast",
  "UI/UX Lover",
];

export const HeroSection = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) return;

    const currentRole = roles[roleIndex];

    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(currentRole.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);

          if (charIndex + 1 === currentRole.length) {
            setPause(true);
            setTimeout(() => {
              setDeleting(true);
              setPause(false);
            }, 1000);
          }
        } else {
          setText(currentRole.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);

          if (charIndex - 1 === 0) {
            setDeleting(false);
            setRoleIndex((roleIndex + 1) % roles.length);
          }
        }
      },
      deleting ? 80 : 120
    );

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex, pause]);

  return (
    <motion.section
      id="hero"
      className="min-h-screen flex-col-reverse md:flex-row flex items-center justify-evenly"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      {/* Left content */}
      <motion.div
        className="px-2 max-sm:min-w-full"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h1 className="text-center md:text-start text-2xl md:text-4xl font-bold">
          <span >Hello, </span>
          <span >I'm </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
            Pratik{" "}
          </span>
          <span >Matre</span>
        </h1>

        <p className="text-xl font-bold mt-2 text-center md:text-start text-foreground">
          <span className="max-sm:hidden">A Passionate </span>
          <span className="text-primary">{text}</span>
          <span className="border-r-2 border-primary animate-blink ml-1"></span>
        </p>

        <motion.div
          className="flex justify-center md:justify-between items-center "
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=matrepratik8728@gmail.com"
            target="_blank"
            className="cosmic-button mt-8 mx-4 py-2 px-7 hidden sm:inline-block"
          >
            Hire Me
          </a>
          <a
            href="/Pratik_Matre_Resume.pdf"
            download="Pratik_Matre_Resume.pdf"
            className="cosmic-button mt-8 mx-4 py-2 px-7 "
          >
            Download CV
          </a>
        </motion.div>
      </motion.div>

      {/* Right profile image */}
      <motion.div
        className="max-sm:mt-4 z-0 flex justify-center md:justify-end"
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img
          src="profile/profile.jpg"
          alt="Profile"
          className="w-[250px] h-[250px] rounded-full border-2 border-border shadow-lg 
            hover:scale-105 transition-all duration-300"
        />
      </motion.div>
    </motion.section>
  );
};
