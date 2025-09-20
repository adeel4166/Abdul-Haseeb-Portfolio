"use client";
import React from "react";
import { Handshake } from "lucide-react";

export default function FloatingHireMeButton({ setActiveSection, setIsMenuOpen }) {
  const handleClick = () => {
    // Active section update
    setActiveSection("contact");

    // Agar mobile menu open hai to band kar do
    if (setIsMenuOpen) {
      setIsMenuOpen(false);
    }

    // Smooth scroll to contact
    setTimeout(() => {
      const section = document.getElementById("contact");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <button
      onClick={handleClick}
      className="
        fixed bottom-6 right-6 z-50 
        flex items-center gap-2 
        rounded-full shadow-lg animate-pulse 
        bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 
        text-white font-[Poppins] font-medium 
        transition-transform hover:scale-110
        px-3 py-2 text-xs 
        sm:px-4 sm:py-2 sm:text-sm 
        md:px-5 md:py-3 md:text-base
      "
    >
      <Handshake className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
      <span>Hire Me</span>
    </button>
  );
}
