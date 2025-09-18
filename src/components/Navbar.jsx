"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar({ setActiveSection }) {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home"); // track active link

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", value: "home" },
    { name: "About", value: "about" },
    { name: "Skills", value: "skills" },
    { name: "Projects", value: "projects" },
    { name: "Contact", value: "contact" },
  ];

  const handleClick = (value) => {
    setActive(value);
    setActiveSection(value);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/90 backdrop-blur-lg shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold tracking-tight text-white font-[Cinzel]">
          <span className="text-indigo-500">Adeel</span> Portfolio
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 font-[Poppins] text-base">
          {links.map((item) => (
            <button
              key={item.value}
              onClick={() => handleClick(item.value)}
              className={`relative transition-colors duration-300 ${
                active === item.value
                  ? "text-indigo-400"
                  : "text-gray-200 hover:text-white"
              }`}
            >
              {item.name}
              {/* Gradient underline */}
              <span
                className={`absolute left-0 -bottom-1 h-[3px] rounded-full transition-all duration-500 ${
                  active === item.value
                    ? "w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                    : "w-0 group-hover:w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                }`}
              ></span>
            </button>
          ))}
        </nav>

        {/* CTA */}
        <button
          onClick={() => handleClick("contact")}
          className="hidden md:inline-block px-5 py-2 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 
          text-white font-[Poppins] font-medium rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Hire Me
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenu(true)}
          className="md:hidden text-white p-2"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenu && (
        <div className="fixed top-0 right-0 h-full w-64 bg-gray-900 text-white shadow-2xl p-6 font-[Poppins]">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold">Menu</h2>
            <button onClick={() => setMobileMenu(false)}>
              <X size={22} />
            </button>
          </div>
          <nav className="flex flex-col space-y-6 font-medium text-lg">
            {links.map((item) => (
              <button
                key={item.value}
                onClick={() => {
                  handleClick(item.value);
                  setMobileMenu(false);
                }}
                className={`relative text-left transition ${
                  active === item.value
                    ? "text-indigo-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.name}
                <span
                  className={`absolute left-0 -bottom-1 h-[3px] rounded-full transition-all duration-500 ${
                    active === item.value
                      ? "w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                      : "w-0 group-hover:w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                  }`}
                ></span>
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
