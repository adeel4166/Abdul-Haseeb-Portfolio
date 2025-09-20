"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaUnity, FaGithub, FaCode } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { GiLightningFrequency } from "react-icons/gi";
import { MdAnimation } from "react-icons/md";

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
    {
      icon: (
        <span className="flex items-center justify-center w-5 h-5">
          <FaUnity size={22} className="text-indigo-500 dark:text-indigo-400" />
        </span>
      ),
      text: "Unity (2D & 3D Game Dev)",
    },
    {
      icon: (
        <span className="flex items-center justify-center w-5 h-5">
          <MdAnimation size={22} className="text-pink-500 dark:text-pink-400" />
        </span>
      ),
      text: "DOTween (Animations & UI)",
    },
    {
      icon: (
        <span className="flex items-center justify-center w-5 h-5">
          <FaGithub size={22} className="text-gray-600 dark:text-gray-300" />
        </span>
      ),
      text: "GitHub (Version Control)",
    },
    {
      icon: (
        <span className="flex items-center justify-center w-5 h-5">
          <GiLightningFrequency
            size={22}
            className="text-yellow-500 dark:text-yellow-400"
          />
        </span>
      ),
      text: "Optimization (Mobile/PC)",
    },
    {
      icon: (
        <span className="flex items-center justify-center w-5 h-5">
          <SiFirebase
            size={22}
            className="text-orange-500 dark:text-orange-400"
          />
        </span>
      ),
      text: "Firebase (Cloud & Auth)",
    },
    {
      icon: (
        <span className="flex items-center justify-center w-5 h-5">
          <FaCode size={22} className="text-green-600 dark:text-green-400" />
        </span>
      ),
      text: "General Coding & Algorithms",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center 
      bg-gray-50 dark:bg-gradient-to-b dark:from-black dark:via-gray-900 dark:to-black 
      text-gray-900 dark:text-white px-8 py-20 transition-colors duration-500"
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
          src="/about.png"
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
          About{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Me
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl font-[Inter] text-lg"
          variants={item}
        >
          Hi, I’m{" "}
          <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
            Abdul Haseeb
          </span>
          , a{" "}
          <span className="text-purple-600 dark:text-purple-400">
            Game Developer
          </span>{" "}
          and{" "}
          <span className="text-pink-600 dark:text-pink-400">
            Full-Stack Engineer
          </span>
          . I specialize in creating{" "}
          <span className="text-indigo-600 dark:text-indigo-400">
            immersive 2D & 3D games
          </span>{" "}
          using Unity and DOTween, while also building scalable{" "}
          <span className="text-green-600 dark:text-green-400">
            web & mobile apps
          </span>{" "}
          with modern stacks. My expertise lies in combining{" "}
          <span className="text-yellow-600 dark:text-yellow-400">
            performance optimization
          </span>
          , clean coding to deliver engaging digital experiences 🚀.
        </motion.p>

        {/* Highlights with Icons */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8"
          variants={container}
        >
          {highlights.map((skill, i) => (
            <motion.span
              key={i}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-white/5 text-sm rounded-lg text-gray-700 dark:text-gray-300 
              border border-gray-300 dark:border-gray-700 font-[Poppins]
              hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600 
              hover:text-white transition-all duration-300 shadow-md"
              variants={item}
              whileHover={{ scale: 1.05 }}
            >
              {skill.icon} {skill.text}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
