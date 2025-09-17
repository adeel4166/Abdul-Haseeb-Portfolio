import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

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

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white px-6 py-12 !mt-0">

      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Branding */}
        <motion.div className="space-y-4" variants={item}>
          <h2 className="text-2xl font-extrabold">
            <span className="text-indigo-400">Adeel</span> Portfolio
          </h2>
          <p className="text-gray-400 text-sm">
            Building modern web applications with clean UI and smooth
            experiences.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div className="space-y-4" variants={item}>
          <h3 className="font-semibold text-lg">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            {["Home", "About", "Skills", "Projects", "Contact"].map(
              (link, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 5, color: "#818cf8" }} // Indigo hover
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a href={`#${link.toLowerCase()}`}>{link}</a>
                </motion.li>
              )
            )}
          </ul>
        </motion.div>

        {/* Social Links */}
        <motion.div className="space-y-4" variants={item}>
          <h3 className="font-semibold text-lg">Connect With Me</h3>
          <div className="flex space-x-6">
            <motion.a
              href="#"
              whileHover={{ scale: 1.2, color: "#818cf8" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Github size={28} />
            </motion.a>
            <motion.a
              href="https://github.com/adeel4166"
              whileHover={{ scale: 1.2, color: "#818cf8" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Linkedin size={28} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/adeel-ahmad-639b852ab"
              whileHover={{ scale: 1.2, color: "#818cf8" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Twitter size={28} />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Text */}
      <motion.div
        className="text-center text-gray-500 text-sm mt-12 border-t border-gray-800 pt-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        © {new Date().getFullYear()} Adeel Portfolio. All Rights Reserved.
      </motion.div>
      
    </footer>
  );
}
