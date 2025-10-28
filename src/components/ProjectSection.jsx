import React, { useRef, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "Foodie Website",
    image: "/projects/project1.png",
    github: "https://github.com/matre-pratik/Foodie-Website",
    live: "https://foodie-website-psi.vercel.app",
  },
  {
    id: 2,
    name: "Agrofuture",
    image: "/projects/project2.png",
    github: "https://github.com/matre-pratik/Agrofuture",
    live: "https://agro-future-iota.vercel.app",
  },
  {
    id: 3,
    name: "Netflix Clone",
    image: "/projects/project3.png",
    github: "https://github.com/matre-pratik/Netflix-clone-",
    live: "https://netflix-clone-five-wheat-21.vercel.app",
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
    <section id="projects" className="py-16 relative">
      <div className="container mx-auto px-4 relative">
        <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-10 text-foreground">
          My <span className="text-primary">Projects</span>
        </h2>

        {/* ---- DESKTOP VIEW ---- */}
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
              <article
                key={project.id}
                className="max-w-[300px] bg-card text-primary-foreground rounded-xl overflow-hidden border-2 border-border shadow-lg flex-shrink-0"
                aria-labelledby={`proj-${project.id}-title`}
                role="group"
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
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-2 text-lg font-semibold text-white bg-gray-800 hover:bg-gray-900 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <span>Visit Site</span>
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </article>
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

        {/* ---- MOBILE VIEW ---- */}
        <div className="md:hidden grid grid-cols-1 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="bg-card text-primary-foreground rounded-xl overflow-hidden border-2 border-card shadow-lg"
              aria-labelledby={`mproj-${project.id}-title`}
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
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2 text-lg font-semibold text-white bg-gray-800 hover:bg-gray-900 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <span>Visit Site</span>
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
