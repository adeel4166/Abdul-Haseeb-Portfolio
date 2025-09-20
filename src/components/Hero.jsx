"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaUnity, FaGithub, FaCode } from "react-icons/fa";
import { SiDotnet, SiFirebase } from "react-icons/si";
import { MdAnimation } from "react-icons/md";
import { GiLightningFrequency } from "react-icons/gi";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Hero({ setActiveSection }) {
  const titleWords = ["Hi,", "I’m", "Abdul", "Haseeb"];

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center 
      bg-gray-50 dark:bg-gradient-to-br dark:from-black dark:via-gray-900 dark:to-gray-800 
      text-gray-900 dark:text-white px-8 py-20 transition-colors duration-500"
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
          className="px-4 py-1 bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-sm font-[Poppins] font-medium rounded-full"
          variants={item}
        >
          🎮 Game Developer
        </motion.span>

        {/* Staggered Title */}
        <motion.h1
          className="text-4xl sm:text-6xl font-extrabold leading-tight flex flex-wrap justify-center md:justify-start gap-2 font-[Cinzel]"
          variants={container}
        >
          {titleWords.map((word, i) => (
            <motion.span
              key={i}
              variants={item}
              className={
                word === "Abdul" || word === "Haseeb"
                  ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                  : ""
              }
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg text-gray-700 dark:text-gray-300 max-w-xl font-[Inter]"
          variants={item}
        >
          I’m a passionate <span className="text-indigo-600 dark:text-indigo-400">Game Developer</span>  
          specialized in <span className="text-purple-600 dark:text-purple-400">Unity & C#</span>,  
          creating <span className="text-pink-600 dark:text-pink-400">2D/3D worlds</span>, smooth{" "}
          <span className="text-green-600 dark:text-green-400">UI animations with DOTween</span>,  
          and optimizing performance for an immersive{" "}
          <span className="text-yellow-600 dark:text-yellow-400">gaming experience</span> 🚀.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap justify-center md:justify-start gap-4"
          variants={container}
        >
          {/* View Projects */}
          <motion.a
            href="#projects"
            onClick={() => setActiveSection("projects")}
            className="px-6 py-3 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 
            text-white rounded-lg font-[Poppins] font-medium shadow-md transition-transform 
            hover:scale-105 hover:shadow-lg"
            variants={item}
          >
            🎮 View My Games
          </motion.a>

          {/* Contact Me */}
          <motion.a
            href="#contact"
            onClick={() => setActiveSection("contact")}
            className="px-6 py-3 border border-indigo-500 text-indigo-600 dark:text-indigo-400 rounded-lg 
            font-[Poppins] font-medium hover:bg-indigo-500 hover:text-white hover:scale-105 transition-all"
            variants={item}
          >
            📩 Contact Me
          </motion.a>

          {/* Download Resume */}
          <motion.a
            href="/Resume.pdf" // ✅ Resume.pdf ko "public" folder me rakho
            download
            className="px-6 py-3 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 
            text-white rounded-lg font-[Poppins] font-medium shadow-md transition-transform 
            hover:scale-105 hover:shadow-lg"
            variants={item}
          >
            📄 Download Resume
          </motion.a>
        </motion.div>

        {/* 🔹 Tech Stack Icons Row */}
        <motion.div
          className="flex flex-wrap justify-center md:justify-start gap-6 mt-8 text-4xl"
          variants={container}
        >
          <motion.div variants={item} className="text-gray-600 dark:text-white hover:text-indigo-500 transition">
            <FaUnity />
          </motion.div>
          <motion.div variants={item} className="text-gray-600 dark:text-white hover:text-purple-500 transition">
            <SiDotnet />
          </motion.div>
          <motion.div variants={item} className="text-gray-600 dark:text-white hover:text-pink-500 transition">
            <MdAnimation />
          </motion.div>
          <motion.div variants={item} className="text-gray-600 dark:text-white hover:text-orange-500 transition">
            <SiFirebase />
          </motion.div>
          <motion.div variants={item} className="text-gray-600 dark:text-white hover:text-gray-500 transition">
            <FaGithub />
          </motion.div>
          <motion.div variants={item} className="text-gray-600 dark:text-white hover:text-yellow-500 transition">
            <GiLightningFrequency />
          </motion.div>
          <motion.div variants={item} className="text-gray-600 dark:text-white hover:text-green-500 transition">
            <FaCode />
          </motion.div>
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
          src="Profile.jpeg" // ✅ apni profile image ka path do
          alt="Profile"
          className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover 
          shadow-[0_0_30px_rgba(139,92,246,0.6)]"
        />
      </motion.div>
    </section>
  );
}
