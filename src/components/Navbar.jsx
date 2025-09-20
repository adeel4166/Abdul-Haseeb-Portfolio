"use client";
import React, { useState, useEffect } from "react";
import {
  Menu,
  Sun,
  Moon,
  Home,
  User,
  Code,
  FolderKanban,
  Phone,
  ArrowLeft,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({
  activeSection,
  setActiveSection,
  isMenuOpen,
  setIsMenuOpen,
}) {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Load theme
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Scroll background change
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll lock when menu open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  // Toggle theme
  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  // Menu items
  const links = [
    { name: "Home", value: "home", icon: <Home size={22} /> },
    { name: "About", value: "about", icon: <User size={22} /> },
    { name: "Skills", value: "skills", icon: <Code size={22} /> },
    { name: "Projects", value: "projects", icon: <FolderKanban size={22} /> },
    { name: "Contact", value: "contact", icon: <Phone size={22} /> },
  ];

  const handleClick = (value) => {
    setActiveSection(value);
    setIsMenuOpen(false); // ✅ mobile menu close hoga
    setTimeout(() => {
      const section = document.getElementById(value);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const menuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: "100%", transition: { duration: 0.2 } },
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white font-[Cinzel]">
          <span className="text-indigo-500">Abdul</span>.Dev
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 font-[Poppins] text-base">
          {links.map((item) => (
            <button
              key={item.value}
              onClick={() => handleClick(item.value)}
              className={`relative transition-colors duration-300 group ${
                activeSection === item.value
                  ? "text-indigo-500"
                  : "text-gray-700 dark:text-gray-300 hover:text-indigo-500"
              }`}
            >
              {item.name}
              {/* Underline animation */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] rounded-full transition-all duration-300 
                ${
                  activeSection === item.value
                    ? "w-full bg-indigo-500"
                    : "w-0 bg-indigo-500 group-hover:w-full"
                }`}
              ></span>
            </button>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-300 transition"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden text-gray-900 dark:text-white p-2"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 h-screen w-screen z-[100] 
                       bg-gradient-to-b from-gray-900 via-black to-gray-900 
                       text-white flex flex-col p-6"
          >
            {/* Top Bar */}
            <div className="flex justify-between items-center mb-10">
              <h1 className="text-xl font-bold">
                <span className="text-indigo-500">Abdul</span>.Dev
              </h1>
              <button onClick={() => setIsMenuOpen(false)}>
                <ArrowLeft size={28} />
              </button>
            </div>

            {/* Menu Items */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {links.map((item) => (
                <button
                  key={item.value}
                  onClick={() => handleClick(item.value)}
                  className={`group flex flex-col items-center gap-2 p-4 rounded-lg transition-all duration-300 hover:bg-gray-800 
                  ${
                    activeSection === item.value
                      ? "text-indigo-400"
                      : "text-gray-300"
                  }`}
                >
                  {item.icon}
                  <span className="relative">
                    {item.name}
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
