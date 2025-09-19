"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUnity, FaGithub, FaCode } from "react-icons/fa";
import { SiDotnet, SiFirebase } from "react-icons/si";
import { GiLightningFrequency } from "react-icons/gi";
import { MdAnimation } from "react-icons/md";

// Skill Card Component
function SkillCard({ name, desc, level, icon, delay }) {
  return (
    <motion.div
      className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl shadow-md border border-gray-700 
      hover:shadow-indigo-500/30 hover:scale-105 transition-all duration-500 flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      {/* Icon */}
      <div className="text-4xl mb-3">{icon}</div>

      {/* Title */}
      <h3 className="text-lg font-[Cinzel] font-bold mb-1">{name}</h3>
      <p className="text-gray-400 text-sm mb-4 font-[Inter]">{desc}</p>

      {/* Progress Bar */}
      <div className="w-full bg-gray-800 rounded-full h-2">
        <motion.div
          className="h-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        />
      </div>

      {/* Percentage */}
      <p className="text-sm text-gray-300 mt-2 font-[Poppins]">{level}%</p>
    </motion.div>
  );
}

export default function Skills() {
  const categories = ["All", "Game Dev", "Programming", "Tools", "Cloud"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  const skills = [
    {
      name: "Unity Engine",
      desc: "2D & 3D Game Development",
      level: 90,
      icon: <FaUnity className="text-indigo-400" />,
      category: "Game Dev",
    },
    {
      name: "C# / .NET",
      desc: "Core programming for gameplay & systems",
      level: 85,
      icon: <SiDotnet className="text-purple-400" />,
      category: "Programming",
    },
    {
      name: "DOTween",
      desc: "Smooth animations & UI transitions",
      level: 80,
      icon: <MdAnimation className="text-pink-400" />,
      category: "Tools",
    },
    {
      name: "Git/GitHub",
      desc: "Version control & collaboration",
      level: 75,
      icon: <FaGithub className="text-gray-300" />,
      category: "Tools",
    },
    {
      name: "Optimization",
      desc: "Performance tuning for mobile & PC",
      level: 70,
      icon: <GiLightningFrequency className="text-yellow-400" />,
      category: "Programming",
    },
    {
      name: "Firebase",
      desc: "Auth & cloud-based services for games",
      level: 65,
      icon: <SiFirebase className="text-orange-400" />,
      category: "Cloud",
    },
    {
      name: "General Coding",
      desc: "Problem solving & algorithms",
      level: 78,
      icon: <FaCode className="text-green-400" />,
      category: "Programming",
    },
  ];

  // Filter logic
  const filteredSkills = skills.filter(
    (skill) =>
      (selectedCategory === "All" || skill.category === selectedCategory) &&
      skill.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center 
      bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-20"
    >
      {/* Heading */}
      <motion.h2
        className="text-4xl font-[Cinzel] font-extrabold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My{" "}
        <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Skills
        </span>
      </motion.h2>

      {/* Search Bar */}
      <div className="w-full max-w-2xl flex flex-col sm:flex-row items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="🔍 Search skills..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 
          focus:border-indigo-500 focus:ring focus:ring-indigo-400/50 outline-none transition font-[Poppins]"
        />
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat, i) => (
          <button
            key={i}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-[Poppins] font-medium transition-all 
              ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
        {filteredSkills.map((skill, i) => (
          <SkillCard
            key={i}
            name={skill.name}
            desc={skill.desc}
            level={skill.level}
            icon={skill.icon}
            delay={i * 0.1}
          />
        ))}
      </div>
    </section>
  );
}
