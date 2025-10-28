import { useState, useEffect } from "react";

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
          // Typing
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
    <section
      id="hero"
      className="min-h-screen flex-col-reverse md:flex-row flex items-center justify-evenly"
    >
      <div className="px-2 max-sm:min-w-full">
        <h1 className="text-center md:text-start text-2xl md:text-4xl font-bold">
          <span className="opacity-0 animate-fade-in">Hello, </span>
          <span className="opacity-0 animate-fade-in-delay-1">I'm </span>
          <span className="opacity-0 animate-fade-in-delay-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
            Pratik{' '}
          </span>
          <span className="opacity-0 animate-fade-in-delay-3">Matre</span>
        </h1>

        <p className="text-xl font-bold mt-2 text-center md:text-start  text-foreground opacity-0 animate-fade-in-delay-2">
          <span className="max-sm:hidden">A Passionate </span>
          <span className="text-primary">{text}</span>
          <span className="border-r-2 border-primary animate-blink ml-1"></span>
        </p>

        <div className="flex justify-center md:justify-between items-center opacity-0 animate-fade-in-delay-2">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=matrepratik8728@gmail.com"
            target="_blank"
            className="cosmic-button hidden sm:inline-block"
          >
            Hire Me
          </a>
          <a
            href="/Pratik_Matre_Resume.pdf"
            download="Pratik_Matre_Resume.pdf"
            className="cosmic-button  opacity-0 animate-fade-in-delay-3"
          >
            Download CV
          </a>
        </div>
      </div>
      <div className="max-sm:mt-4 z-0 flex justify-center md:justify-end">
        <img
          src="profile/profile.jpg"
          alt="Profile"
          className="w-[250px] h-[250px] rounded-full border-2 border-border shadow-lg 
           animate-profile-img hover:scale-105 transition-all duration-300"
        />
      </div>
    </section>
  );
};
