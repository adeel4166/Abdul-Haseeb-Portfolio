import React from "react";
import { motion } from "framer-motion";

// Variants for staggered animation
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }, // delay between words
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Hero() {
  const titleWords = ["Hi,", "I’m", "Adeel", "Ahmad"];

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center 
      bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-8 py-20"
    >
      {/* Left Content */}
      <motion.div
        className="flex-1 text-center md:text-left space-y-6"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        {/* Badge */}
        <motion.span
          className="px-4 py-1 bg-indigo-500/20 text-indigo-400 text-sm font-medium rounded-full"
          variants={item}
        >
          ✨ Available for Work
        </motion.span>

        {/* Staggered Title */}
        <motion.h1
          className="text-4xl sm:text-6xl font-extrabold leading-tight flex flex-wrap justify-center md:justify-start gap-2"
          variants={container}
        >
          {titleWords.map((word, i) => (
            <motion.span
              key={i}
              variants={item}
              className={
                word === "Adeel" || word === "Ahmad"
                  ? "bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                  : ""
              }
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p className="text-lg text-gray-300 max-w-xl" variants={item}>
          A passionate{" "}
          <span className="text-indigo-400">Python Web Developer</span>,{" "}
          <span className="text-purple-400">Flutter Enthusiast</span> and{" "}
          <span className="text-pink-400">Node.js Engineer</span> — building
          modern applications with clean UI and smooth experiences.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap justify-center md:justify-start gap-4"
          variants={container}
        >
          <motion.a
            href="#projects"
            className="px-6 py-3 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 
            text-white rounded-lg font-medium shadow-md transition-transform hover:scale-105 hover:shadow-lg"
            variants={item}
          >
            🚀 View Projects
          </motion.a>
          <motion.a
            href="#contact"
            className="px-6 py-3 border border-indigo-500 text-indigo-400 rounded-lg 
            font-medium hover:bg-indigo-500 hover:text-white hover:scale-105 transition-all"
            variants={item}
          >
            📩 Contact Me
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="flex-1 flex justify-center mt-10 md:mt-0"
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.5, type: "spring" }}
      >
        <img
          src="Profile.jpeg" // apni profile image ka path do
          alt="Profile"
          className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-[0_0_30px_rgba(139,92,246,0.6)]"
        />
      </motion.div>
    </section>
  );
}
