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
    "💻 Python Web Developer",
    "📱 Flutter Enthusiast",
    "⚡ Node.js Engineer",
    "🎨 UI/UX Lover",
    "☁️ Cloud & APIs",
    "🚀 Fast Learner",
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
          src="/about.png" // yahan apni profile pic ka path do
          alt="About Me"
          className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-2xl shadow-[0_0_40px_rgba(139,92,246,0.6)]"
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
          className="text-4xl font-bold"
          variants={item}
        >
          About <span className="text-indigo-400">Me</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-gray-300 leading-relaxed max-w-xl"
          variants={item}
        >
          I’m <span className="text-indigo-400">Adeel Ahmad</span>, a passionate
          developer specialized in building scalable and modern web & mobile
          applications. I enjoy turning complex problems into simple, beautiful,
          and intuitive designs. My goal is to keep growing as a{" "}
          <span className="text-purple-400">Full-Stack Developer</span> while
          delivering impactful solutions.
        </motion.p>

        {/* Highlights */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6"
          variants={container}
        >
          {highlights.map((skill, i) => (
            <motion.span
              key={i}
              className="px-4 py-2 bg-white/5 text-sm rounded-lg text-gray-300 
              border border-gray-700 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600 
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
