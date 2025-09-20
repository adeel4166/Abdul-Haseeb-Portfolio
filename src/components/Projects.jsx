"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Private Company Website",
    desc: "An advanced portfolio with AI-powered features, dark/light mode, and interactive animations.",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    demo: "https://www.chromapigmentanddyestuff.com/",
    code: "https://github.com/your-repo",
    tags: ["PYTHON", "HTML", "CSS"],
  },
  {
    title: "E-Commerce Platform",
    desc: "Full-stack MERN e-commerce app with payments, cart system, and admin dashboard.",
    video: "https://www.youtube.com/embed/ysz5S6PUM-U",
    demo: "#",
    code: "#",
    tags: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    title: "Real-Time Chat App",
    desc: "Socket.io based chat app with groups, emojis, and notifications.",
    video: "https://www.youtube.com/embed/ScMzIvxBSi4",
    demo: "#",
    code: "#",
    tags: ["Node.js", "Socket.io", "MongoDB"],
  },
  {
    title: "Flutter Mobile App",
    desc: "Cross-platform Flutter app with Firebase authentication and push notifications.",
    video: "https://www.youtube.com/embed/aqz-KE-bpKQ",
    demo: "#",
    code: "#",
    tags: ["Flutter", "Firebase"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center 
      bg-gray-50 dark:bg-gradient-to-b dark:from-black dark:via-gray-900 dark:to-black 
      text-gray-900 dark:text-white px-6 py-20 transition-colors duration-500"
    >
      {/* Heading */}
      <motion.h2
        className="text-5xl font-extrabold mb-14 text-center tracking-wider font-[Cinzel]"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My{" "}
        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Projects
        </span>
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center 
              bg-white 
              dark:bg-gradient-to-b dark:from-gray-950 dark:via-gray-900 dark:to-black
              border border-gray-200 dark:border-gray-800 
              rounded-2xl shadow-lg p-6 
              transition-colors duration-500"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Video */}
            <div className="w-full overflow-hidden rounded-xl mb-6">
              <iframe
                width="100%"
                height="250"
                src={project.video}
                title={project.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="rounded-xl shadow-md"
              ></iframe>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold mb-3 
              bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
              bg-clip-text text-transparent font-[Poppins] text-center"
            >
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed text-center font-[Inter] mb-4">
              {project.desc}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs bg-gradient-to-r from-indigo-500 to-purple-600 
                  text-white rounded-full shadow-md font-[Poppins]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex justify-center space-x-6">
              {/* Live Demo */}
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 
                bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 
                text-white rounded-lg shadow-lg hover:scale-105 
                transition-all font-[Poppins] text-sm"
              >
                <ExternalLink size={16} /> <span>Live Demo</span>
              </a>

              {/* Source Code */}
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 border 
                border-gray-300 dark:border-gray-600 
                text-gray-700 dark:text-gray-300 rounded-lg 
                hover:bg-gray-100 dark:hover:bg-gray-800 
                hover:text-black dark:hover:text-white 
                transition-all font-[Poppins] text-sm"
              >
                <Github size={16} /> <span>Source Code</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
