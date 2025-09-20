"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Facebook,
  MessageCircle,
  Mail,
  Phone,
} from "lucide-react";

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

// ✅ setActiveSection prop add kiya
export default function Footer({ setActiveSection }) {
  return (
    <footer className="bg-gray-100 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black text-gray-900 dark:text-white px-6 py-14 !mt-0 transition-colors duration-500">
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Branding */}
        <motion.div className="space-y-4" variants={item}>
          <h2 className="text-2xl font-extrabold font-[Cinzel]">
            <span className="text-indigo-600 dark:text-indigo-400">Abdul</span>{" "}
            Portfolio
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm font-[Inter] leading-relaxed">
            Crafting immersive and high-performance games with a focus on
            stunning visuals, smooth gameplay, and optimized experiences.
            Passionate about bringing virtual worlds to life by blending
            creativity with cutting-edge technology.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div className="space-y-4 font-[Poppins]" variants={item}>
          <h3 className="font-semibold text-lg">Quick Links</h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            {["Home", "About", "Skills", "Projects", "Contact"].map(
              (link, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 5, color: "#818cf8" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <button
                    onClick={() => {
                      setActiveSection(link.toLowerCase());
                      setTimeout(() => {
                        const section = document.getElementById(
                          link.toLowerCase()
                        );
                        if (section) {
                          section.scrollIntoView({ behavior: "smooth" });
                        }
                      }, 100);
                    }}
                    className="hover:text-indigo-600 dark:hover:text-indigo-400 transition"
                  >
                    {link}
                  </button>
                </motion.li>
              )
            )}
          </ul>
        </motion.div>

        {/* Contact + Social */}
        <motion.div className="space-y-4 font-[Poppins]" variants={item}>
          <h3 className="font-semibold text-lg">Connect With Me</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 font-[Inter]">
            Let’s connect on social platforms or drop me a quick message.
          </p>
          <div className="flex flex-wrap gap-5">
            {[
              {
                href: "mailto:abdulhaseeb0847179@gmail.com",
                icon: <Mail size={22} />,
              },
              { href: "tel:+923074058316", icon: <Phone size={22} /> },
              {
                href: "https://wa.me/923074058316",
                icon: <MessageCircle size={22} />,
              },
              {
                href: "https://github.com/adeel4166",
                icon: <Github size={22} />,
              },
              {
                href: "https://www.linkedin.com/in/adeel-ahmad-639b852ab",
                icon: <Linkedin size={22} />,
              },
              {
                href: "https://www.facebook.com/share/1CNHJpcrZj/",
                icon: <Facebook size={22} />,
              },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition transform hover:scale-125"
                whileHover={{ scale: 1.2 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* Contact Info */}
          <div className="mt-4 text-sm text-gray-600 dark:text-gray-400 space-y-1 font-[Inter]">
            <p>
              📍{" "}
              <span className="text-gray-800 dark:text-gray-300">
                Lahore, Pakistan
              </span>
            </p>
            <p>
              📧{" "}
              <a
                href="mailto:abdulhaseeb0847179@gmail.com"
                className="hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                abdulhaseeb0847179@gmail.com
              </a>
            </p>
            <p>
              📞{" "}
              <a
                href="tel:+923074058316"
                className="hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                +92 307 4058316
              </a>
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Text */}
      <motion.div
        className="text-center text-gray-500 dark:text-gray-400 text-sm mt-6 border-t border-gray-300 dark:border-gray-800 pt-3 font-[Inter]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        © {new Date().getFullYear()} Abdul Portfolio. All Rights Reserved. |
        Designed & Developed with 💜 by Abdul Haseeb
      </motion.div>
    </footer>
  );
}
