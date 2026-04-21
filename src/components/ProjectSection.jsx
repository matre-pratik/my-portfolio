import React, { useRef, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    name: "Foodie Website",
    image: "/projects/foodie.png",
    github: "https://github.com/matre-pratik/Foodie-Website",
    live: "https://foodie-website-psi.vercel.app",
  },
  {
    id: 2,
    name: "Personal Portfolio",
    image: "/projects/personal-portfolio.png",
    github: "https://github.com/matre-pratik/my-portfolio",
    live: "https://pratik-matre-portfolio.vercel.app",
  },
  {
    id: 3,
    name: "Hospital Management",
    image: "/projects/hms.png",
    github: "https://github.com/matre-pratik/hospital_management_system",
    code: "https://github.com/matre-pratik/hospital_management_system",
  },
  {
    id: 4,
    name: "Agrofuture",
    image: "/projects/agrofuture.png",
    github: "https://github.com/matre-pratik/Agrofuture",
    live: "https://agro-future-iota.vercel.app",
  },
  {
    id: 5,
    name: "Netflix Clone",
    image: "/projects/netflix-clone.png",
    github: "https://github.com/matre-pratik/Netflix-clone-",
    code: "https://github.com/matre-pratik/Netflix-clone-",
  },
];

export const ProjectsSection = () => {
  const scrollRef = useRef(null);

  const scroll = useCallback((direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollLeft, clientWidth } = el;
    const scrollAmount = Math.max(clientWidth - 100, 200);
    el.scrollTo({
      left:
        direction === "left"
          ? scrollLeft - scrollAmount
          : scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onKey = (e) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        scroll("left");
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        scroll("right");
      }
    };

    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
  }, [scroll]);

  return (
    <motion.section
      id="projects"
      className="py-16 relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 relative">
        <motion.h2
          className="text-2xl md:text-4xl font-bold mb-8 md:mb-10 text-foreground"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          My <span className="text-primary">Projects</span>
        </motion.h2>

        {/* ---- Desktop view ---- */}
        <div className="hidden md:flex items-center justify-center relative">
          {/* Left Button */}
          <button
            type="button"
            aria-label="Scroll projects left"
            onClick={() => scroll("left")}
            className="absolute -left-10 top-1/2 -translate-y-1/2 bg-foreground p-2 rounded-full shadow-lg hover:scale-105 transition focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <ChevronLeft size={28} className="text-primary-foreground" />
          </button>

          <div
            ref={scrollRef}
            role="region"
            aria-label="Projects carousel"
            tabIndex={0}
            className="flex overflow-x-auto space-x-6 scroll-smooth px-6 focus:outline-none"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {/* hide scrollbar for WebKit browsers */}
            <style>
              {`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}
            </style>

            {projects.map((project) => (
              <motion.article
                key={project.id}
                className="max-w-[300px] bg-card text-primary-foreground rounded-xl overflow-hidden border-2 border-border shadow-lg flex-shrink-0"
                aria-labelledby={`proj-${project.id}-title`}
                role="group"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.97 }}
              >
                <div>
                  <img
                    src={project.image}
                    alt={`${project.name} screenshot`}
                    loading="lazy"
                    className="w-full h-44 object-cover"
                  />
                </div>

                <div className="p-6 text-center">
                  <h3
                    id={`proj-${project.id}-title`}
                    className="text-2xl font-semibold mb-4"
                  >
                    {project.name}
                  </h3>
                  <div className="space-y-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-2 text-lg font-semibold text-white bg-blue-500 hover:bg-blue-700 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-blue-300"
                    >
                      <span>View on GitHub</span>
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.live ? project.live : project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-2 text-lg font-semibold text-white bg-gray-800 hover:bg-gray-900 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <span>{project.live ? "Visit Site" : "Visit Code"}</span>
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Right Button */}
          <button
            type="button"
            aria-label="Scroll projects right"
            onClick={() => scroll("right")}
            className="absolute -right-10 top-1/2 -translate-y-1/2 bg-foreground p-2 rounded-full shadow-lg hover:scale-105 transition focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <ChevronRight size={28} className="text-primary-foreground" />
          </button>
        </div>

        {/* ---- mobile view ---- */}
        <div className="md:hidden grid grid-cols-1 gap-8">
          {projects.map((project) => (
            <motion.article
              key={project.id}
              className="bg-card text-primary-foreground rounded-xl overflow-hidden border-2 border-card shadow-lg"
              aria-labelledby={`mproj-${project.id}-title`}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div>
                <img
                  src={project.image}
                  alt={`${project.name} screenshot`}
                  loading="lazy"
                  className="w-full h-44 object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3
                  id={`mproj-${project.id}-title`}
                  className="text-2xl font-semibold mb-4"
                >
                  {project.name}
                </h3>
                <div className="space-y-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-blue-300"
                  >
                    <span>View on GitHub</span>
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.live ? project.live : project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2 text-lg font-semibold text-white bg-gray-800 hover:bg-gray-900 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <span>{project.live ? "Visit Site" : "Visit Code"}</span>
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
