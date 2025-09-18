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

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white px-6 py-14 !mt-0">
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
            <span className="text-indigo-400">Adeel</span> Portfolio
          </h2>
          <p className="text-gray-400 text-sm font-[Inter] leading-relaxed">
            Crafting modern and scalable web & mobile applications with a focus
            on clean UI, smooth user experiences, and performance-driven
            solutions. Passionate about blending creativity with technology.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div className="space-y-4 font-[Poppins]" variants={item}>
          <h3 className="font-semibold text-lg">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            {["Home", "About", "Skills", "Projects", "Contact"].map(
              (link, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 5, color: "#818cf8" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a href={`#${link.toLowerCase()}`}>{link}</a>
                </motion.li>
              )
            )}
          </ul>
        </motion.div>

        {/* Contact + Social */}
        <motion.div className="space-y-4 font-[Poppins]" variants={item}>
          <h3 className="font-semibold text-lg">Connect With Me</h3>
          <p className="text-sm text-gray-400 mb-3 font-[Inter]">
            Let’s connect on social platforms or drop me a quick message.
          </p>
          <div className="flex flex-wrap gap-5">
            {[
              { href: "mailto:adeelkhan4128@gmail.com", icon: <Mail size={22} /> },
              { href: "tel:+923004166107", icon: <Phone size={22} /> },
              { href: "https://wa.me/923004166107", icon: <MessageCircle size={22} /> },
              { href: "https://github.com/adeel4166", icon: <Github size={22} /> },
              {
                href: "https://www.linkedin.com/in/adeel-ahmad-639b852ab",
                icon: <Linkedin size={22} />,
              },
              
              
              { href: "https://www.facebook.com/share/1CNHJpcrZj/", icon: <Facebook size={22} /> },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition transform hover:scale-125"
                whileHover={{ scale: 1.2 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* Contact Info */}
          <div className="mt-4 text-sm text-gray-400 space-y-1 font-[Inter]">
            <p>
              📍 <span className="text-gray-300">Lahore, Pakistan</span>
            </p>
            <p>
              📧 <a href="mailto:adeelkhan4128@gmail.com" className="hover:text-indigo-400">adeelkhan4128@gmail.com</a>
            </p>
            <p>
              📞 <a href="tel:+923004166107" className="hover:text-indigo-400">+92 300 4166107</a>
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Text */}
      <motion.div
        className="text-center text-gray-500 text-sm mt-6 border-t border-gray-800 pt-3 font-[Inter]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        © {new Date().getFullYear()} Adeel Portfolio. All Rights Reserved. | Designed & Developed with 💜 by Adeel Ahmad
      </motion.div>
    </footer>
  );
}
