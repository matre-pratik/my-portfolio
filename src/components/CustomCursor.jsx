import React, { useEffect, useRef } from "react";

export const CustomCursor = () => {
  const cursorDotRef = useRef(null);
  const cursorOutlineRef = useRef(null);

  let mouseX = 0;
  let mouseY = 0;
  let dotX = 0;
  let dotY = 0;
  let outlineX = 0;
  let outlineY = 0;

  const speed = 0.05; 

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      dotX += (mouseX - dotX) * speed;
      dotY += (mouseY - dotY) * speed;

      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate(${dotX}px, ${dotY}px) translate(-50%, -50%)`;
      }

      outlineX += (mouseX - outlineX) * speed;
      outlineY += (mouseY - outlineY) * speed;

      if (cursorOutlineRef.current) {
        cursorOutlineRef.current.style.transform = `translate(${outlineX}px, ${outlineY}px) translate(-50%, -50%)`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Cursor Dot */}
      <div
        ref={cursorDotRef}
        className="hidden md:fixed md:w-2 md:h-2 md:rounded-full md:pointer-events-none md:bg-red-500 md:z-[9999]"
      />

      {/* Cursor Outline */}
      <div
        ref={cursorOutlineRef}
        className="hidden md:fixed md:w-9 md:h-9 md:rounded-full md:pointer-events-none md:border-2 md:border-red-500 md:opacity-70 md:z-[9998]"
      />
    </>
  );
};
