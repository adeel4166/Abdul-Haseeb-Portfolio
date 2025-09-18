"use client";
import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  const highlights = [
    "🐍 Python (Backend & Scripting)",
    "📱 Flutter (Cross-platform Apps)",
    "⚡ Node.js (APIs & Services)",
    "🍃 MongoDB (NoSQL Database)",
    "⚛️ React.js (Frontend UI)",
    "🎨 TailwindCSS (Modern Styling)",
    "💻 C++ (Core Programming)",
    "🌐 HTML5 & CSS3 (Web Basics)",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center 
      bg-gradient-to-b from-black via-gray-900 to-black text-white px-8 py-20"
    >
      {/* Left Image */}
      <motion.div
        className="flex-1 flex justify-center mb-10 md:mb-0"
        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, type: "spring" }}
        viewport={{ once: true }}
      >
        <img
          src="/about.png" // apni profile image ka path
          alt="About Me"
          className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-2xl 
          shadow-[0_0_40px_rgba(139,92,246,0.6)]"
        />
      </motion.div>

      {/* Right Content */}
      <motion.div
        className="flex-1 space-y-6 text-center md:text-left"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Heading */}
        <motion.h2
          className="text-5xl font-extrabold tracking-wider font-[Cinzel]"
          variants={item}
        >
          About <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Me</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-gray-300 leading-relaxed max-w-xl font-[Inter] text-lg"
          variants={item}
        >
          I’m <span className="text-indigo-400 font-semibold">Adeel Ahmad</span>, a passionate{" "}
          <span className="text-purple-400">Full-Stack Developer</span> skilled in building 
          modern, scalable, and user-friendly applications.  
          With expertise in <span className="text-indigo-400">Python, Flutter, Node.js</span>, 
          and <span className="text-indigo-400">React.js</span>, I create powerful solutions 
          that blend performance with sleek UI/UX.  
          My journey also includes working with databases like{" "}
          <span className="text-green-400">MongoDB</span>, core programming in{" "}
          <span className="text-blue-400">C++</span>, and styling expertise using{" "}
          <span className="text-sky-400">TailwindCSS</span>, <span className="text-orange-400">HTML5</span> &{" "}
          <span className="text-blue-300">CSS3</span>.  
          Always eager to learn, I aim to craft impactful digital experiences 🚀.
        </motion.p>

        {/* Highlights */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8"
          variants={container}
        >
          {highlights.map((skill, i) => (
            <motion.span
              key={i}
              className="px-4 py-2 bg-white/5 text-sm rounded-lg text-gray-300 
              border border-gray-700 font-[Poppins]
              hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600 
              hover:text-white transition-all duration-300 shadow-md"
              variants={item}
              whileHover={{ scale: 1.05 }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
