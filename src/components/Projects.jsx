"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const project = {
  title: "Private Company Website",
  desc: "An advanced portfolio with AI-powered features, dark/light mode, and interactive animations to showcase professional work dynamically.",
  img: "/company.png", // ✅ apni image ka path do (public folder me rakho)
  demo: "https://www.chromapigmentanddyestuff.com/",
  code: "https://github.com/your-repo", // ✅ apna repo link dal do
  tags: ["PYTHON", "HTML", "CSS"],
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center 
      bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-20"
    >
      {/* Heading */}
      <motion.h2
        className="text-5xl font-extrabold mb-14 text-center tracking-wider font-[Cinzel]"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My{" "}
        <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Project
        </span>
      </motion.h2>

      {/* Project Card */}
      <motion.div
        className="relative w-full max-w-3xl flex flex-col items-center 
        bg-white/5 border border-gray-700 rounded-2xl shadow-xl p-6 backdrop-blur-lg 
        hover:shadow-[0_0_40px_rgba(139,92,246,0.6)] transition-all duration-500"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Image */}
        <div className="w-full overflow-hidden rounded-xl mb-6">
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-72 object-cover rounded-xl transform hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Title */}
        <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-[Poppins] text-center">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-300 text-base leading-relaxed max-w-xl text-center font-[Inter] mb-6">
          {project.desc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full shadow-md font-[Poppins]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-center space-x-6">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-5 py-2 bg-gradient-to-r 
            from-pink-500 via-purple-500 to-indigo-500 text-white rounded-lg 
            shadow-lg hover:scale-105 transition-all font-[Poppins]"
          >
            <ExternalLink size={18} /> <span>Live Demo</span>
          </a>
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-5 py-2 border border-gray-400 
            text-gray-300 rounded-lg hover:bg-gray-800 hover:text-white transition-all font-[Poppins]"
          >
            <Github size={18} /> <span>Source Code</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
