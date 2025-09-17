import React from "react";
import { motion } from "framer-motion";
import { SiPython, SiFlutter, SiNodedotjs, SiMongodb, SiReact, SiTailwindcss } from "react-icons/si";

// Circle chart component
function CircularSkill({ name, level, icon, delay }) {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const progress = (level / 100) * circumference;

  return (
    <motion.div
      className="flex flex-col items-center bg-white/5 backdrop-blur-lg p-6 rounded-xl shadow-md border border-gray-700 hover:shadow-indigo-500/30 transition-all duration-500"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
    >
      <div className="relative w-32 h-32">
        {/* Background Circle */}
        <svg className="w-full h-full -rotate-90">
          <circle
            cx="64"
            cy="64"
            r={radius}
            stroke="gray"
            strokeWidth="8"
            fill="transparent"
            className="opacity-20"
          />
          {/* Animated Progress */}
          <motion.circle
            cx="64"
            cy="64"
            r={radius}
            stroke="url(#gradient)"
            strokeWidth="8"
            fill="transparent"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - progress}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: circumference - progress }}
            transition={{ duration: 1.2, delay }}
            viewport={{ once: true }}
          />
          {/* Gradient Defs */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>

        {/* Percentage in Center */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-xl font-bold">{level}%</span>
          <span className="text-2xl mt-1">{icon}</span>
        </div>
      </div>

      {/* Skill Name */}
      <p className="mt-4 text-sm text-gray-300 font-medium">{name}</p>
    </motion.div>
  );
}

export default function Skills() {
  const skills = [
    { name: "Python", level: 90, icon: <SiPython className="text-yellow-400" /> },
    { name: "Flutter", level: 80, icon: <SiFlutter className="text-blue-400" /> },
    { name: "Node.js", level: 85, icon: <SiNodedotjs className="text-green-400" /> },
    { name: "MongoDB", level: 75, icon: <SiMongodb className="text-green-500" /> },
    { name: "React.js", level: 88, icon: <SiReact className="text-cyan-400" /> },
    { name: "TailwindCSS", level: 92, icon: <SiTailwindcss className="text-sky-400" /> },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center 
      bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-20"
    >
      {/* Heading */}
      <motion.h2
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My <span className="text-indigo-400">Skills</span>
      </motion.h2>

      {/* Skills Grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
        {skills.map((skill, i) => (
          <CircularSkill
            key={i}
            name={skill.name}
            level={skill.level}
            icon={skill.icon}
            delay={i * 0.2}
          />
        ))}
      </div>
    </section>
  );
}
