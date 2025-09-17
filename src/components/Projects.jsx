import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Private Company Website",
    desc: "An advanced portfolio with AI-powered features, dark/light mode, and interactive animations to showcase professional work dynamically.",
    img: "/public/company.png",
    demo: "https://www.chromapigmentanddyestuff.com/",
    code: "#",
    tags: ["Next.js", "Framer Motion", "TailwindCSS"],
  },
  {
    title: "E-Commerce Platform",
    desc: "Full-stack MERN e-commerce app with product management, secure payments, cart system, and admin dashboard for analytics.",
    img: "https://source.unsplash.com/1000x700/?ecommerce,shopping",
    demo: "#",
    code: "#",
    tags: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    title: "Real-Time Chat App",
    desc: "Real-time chat with Socket.io, Node.js and MongoDB. Features include groups, notifications, emojis, and cross-device sync.",
    img: "https://source.unsplash.com/1000x700/?chat,application",
    demo: "#",
    code: "#",
    tags: ["Node.js", "Socket.io", "MongoDB"],
  },
  {
    title: "Flutter Mobile App",
    desc: "Cross-platform mobile app built with Flutter and Firebase. Includes authentication, cloud storage, and push notifications.",
    img: "https://source.unsplash.com/1000x700/?mobile,app",
    demo: "#",
    code: "#",
    tags: ["Flutter", "Firebase"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-6"
    >
      {/* Heading */}
      <motion.h2
        className="text-4xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My <span className="text-indigo-400">Projects</span>
      </motion.h2>

      {/* Projects Container */}
      <div className="max-w-5xl mx-auto flex flex-col items-center space-y-16">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="relative w-full max-w-3xl flex flex-col md:flex-row items-center gap-8 
              bg-white/5 border border-gray-700 rounded-2xl shadow-xl p-6 
              backdrop-blur-lg group transition-all duration-500 hover:shadow-[0_0_35px_rgba(139,92,246,0.6)]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Animated Underline (bottom border) */}
            <span className="absolute bottom-0 left-0 w-full h-[4px] rounded-b-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 animate-gradient-x transition-opacity duration-700"></span>

            {/* Image */}
            <div className="flex-1 overflow-hidden rounded-xl">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-64 object-cover rounded-xl transform group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Content */}
            <div className="flex-1 space-y-4 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                {project.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs bg-gradient-to-r 
                    from-indigo-500 to-purple-600 text-white rounded-full shadow-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex justify-center md:justify-start space-x-4 pt-4">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-5 py-2 bg-gradient-to-r 
                  from-pink-500 via-purple-500 to-indigo-500 text-white 
                  rounded-lg shadow-lg hover:scale-105 transition-all"
                >
                  <ExternalLink size={18} /> <span>Live Demo</span>
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-5 py-2 border border-gray-400 
                  text-gray-300 rounded-lg hover:bg-gray-800 hover:text-white transition-all"
                >
                  <Github size={18} /> <span>Source Code</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
