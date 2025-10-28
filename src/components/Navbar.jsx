import React, { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";

const navItem = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed w-full z-40 transition-all duration-300",
          isScroll ? "py-3 bg-background/80 backdrop-blur-md shadow-lg" : "py-3"
        )}
      >
        <div className="container flex items-center justify-between">
          <a href="#hero" className="text-xl font-bold flex items-center">
            <span className="relative z-40 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
              <span className="text-glow text-foreground">Pratik </span>
              Matre
            </span>
          </a>

          {/* desktop nav */}
          <div className="hidden md:flex space-x-8 me-3">
            {navItem.map((item, key) => (
              <a
                href={item.href}
                key={key}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* mobile menu icon */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden py-2 pe-4 md:pe-0 text-primary z-50"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* mobile nav */}

          <div
            className={cn(
              "min-h-screen fixed inset-0 z-40 flex justify-end md:hidden",
              "bg-background/60 backdrop-blur-sm transition-all duration-500 ease-in-out",
              isMenuOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            )}
          >
            <div
              className={cn(
                "w-3/4 sm:w-2/5 h-full flex flex-col items-center justify-center space-y-8 text-xl p-5 border-l-2 border-primary bg-background rounded-l-2xl shadow-lg transform transition-transform duration-500 ease-in-out",
                isMenuOpen ? "translate-x-0" : "translate-x-[100%]"
              )}
            >
              {navItem.map((item, key) => (
                <a
                  href={item.href}
                  key={key}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
