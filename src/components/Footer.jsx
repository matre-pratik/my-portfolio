import React from "react";
import { Github, Linkedin, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <p className="text-xl text-center md:text-left">
          © {new Date().getFullYear()} <span className="font-semibold text-primary">Pratik Matre</span>. All rights reserved.
        </p>

        <div className="flex items-center justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/pratik-matre/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#005582] transition"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6 text-[#0077B5]" />
          </a>

          <a
            href="https://github.com/matre-pratik"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#6e5494] transition"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6 text-foreground "/>
          </a>

          <a
            href="https://www.instagram.com/pratik__0.3/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C13584] transition"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6 text-[#E1306C]" />
          </a>
        </div>
      </div>
    </footer>
  );
};
