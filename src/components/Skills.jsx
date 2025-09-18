"use client";
import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import {
  SiPython,
  SiFlutter,
  SiNodedotjs,
  SiMongodb,
  SiReact,
  SiTailwindcss,
  SiCplusplus,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

// ✅ Animated Counter Component
function Counter({ value }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, value, { duration: 1.5, ease: "easeOut" });
    return controls.stop;
  }, [value, count]);

  return <motion.span>{rounded}</motion.span>;
}

// ✅ Skill Card Component
function SkillCard({ name, desc, level, icon, delay }) {
  return (
    <motion.div
      className="relative bg-white/5 backdrop-blur-lg p-6 rounded-2xl shadow-md border border-gray-700 
      transition-all duration-500 flex flex-col items-center text-center
      hover:scale-105 hover:-translate-y-2 hover:border-indigo-500/60 hover:shadow-lg hover:shadow-indigo-500/40"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      {/* Gradient border effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/20 via-purple-600/20 to-pink-500/20 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      {/* Icon */}
      <div className="text-5xl mb-4 relative z-10">{icon}</div>

      {/* Title */}
      <h3 className="text-xl font-extrabold tracking-wide mb-2 font-[Poppins] relative z-10">
        {name}
      </h3>
      <p className="text-gray-400 text-sm mb-4 font-[Inter] relative z-10">
        {desc}
      </p>

      {/* Progress Bar */}
      <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden relative z-10">
        <motion.div
          className="h-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        />
      </div>

      {/* Percentage with animation */}
      <p className="text-sm text-gray-300 mt-3 font-medium relative z-10">
        <Counter value={level} />%
      </p>
    </motion.div>
  );
}

export default function Skills() {
  const categories = ["All", "Programming", "Mobile", "Frontend", "Database", "Styling"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  let skills = [
    {
      name: "TailwindCSS",
      desc: "Utility-first CSS framework",
      level: 92,
      icon: <SiTailwindcss className="text-sky-400" />,
      category: "Styling",
    },
    {
      name: "Python",
      desc: "Backend programming & scripting",
      level: 90,
      icon: <SiPython className="text-yellow-400" />,
      category: "Programming",
    },
    {
      name: "React.js",
      desc: "Frontend UI framework",
      level: 88,
      icon: <SiReact className="text-cyan-400" />,
      category: "Frontend",
    },
    {
      name: "Flutter",
      desc: "Cross-platform mobile development",
      level: 85,
      icon: <SiFlutter className="text-blue-400" />,
      category: "Mobile",
    },
    {
      name: "HTML5",
      desc: "Structure of web applications",
      level: 82,
      icon: <SiHtml5 className="text-orange-500" />,
      category: "Frontend",
    },
    {
      name: "Node.js",
      desc: "Server-side JavaScript runtime",
      level: 80,
      icon: <SiNodedotjs className="text-green-400" />,
      category: "Programming",
    },
    {
      name: "CSS3",
      desc: "Styling modern web applications",
      level: 80,
      icon: <SiCss3 className="text-blue-400" />,
      category: "Styling",
    },
    {
      name: "C++",
      desc: "High-performance programming",
      level: 78,
      icon: <SiCplusplus className="text-blue-500" />,
      category: "Programming",
    },
    {
      name: "MongoDB",
      desc: "NoSQL Database",
      level: 75,
      icon: <SiMongodb className="text-green-500" />,
      category: "Database",
    },
  ];

  // 🔢 Sort skills by level (high → low)
  skills = skills.sort((a, b) => b.level - a.level);

  // 🔍 Filtered skills
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
        className="text-5xl font-extrabold mb-10 text-center tracking-wider font-[Cinzel]"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My{" "}
        <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Skills
        </span>
      </motion.h2>

      {/* Search Bar */}
      <div className="w-full max-w-3xl flex flex-col sm:flex-row items-center gap-4 mb-8">
        <input
          type="text"
          placeholder="🔍 Search skills..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 px-5 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 
          focus:border-indigo-500 focus:ring focus:ring-indigo-400/50 outline-none transition font-[Inter]"
        />
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-14">
        {categories.map((cat, i) => (
          <button
            key={i}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all tracking-wide font-[Poppins]
              ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 text-white shadow-md"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
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
