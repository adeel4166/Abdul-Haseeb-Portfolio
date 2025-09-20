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

// Animation Variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center 
      bg-gray-100 dark:bg-gradient-to-b dark:from-black dark:via-gray-900 dark:to-black 
      text-gray-900 dark:text-white px-6 py-20 transition-colors duration-500"
    >
      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold mb-4 text-center font-[Cinzel]"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        Get in <span className="text-indigo-500 dark:text-indigo-400">Touch</span>
      </motion.h2>

      <p className="text-gray-600 dark:text-gray-400 text-center mb-8 max-w-xl font-[Inter]">
        Feel free to reach out for collaborations, opportunities, or just a
        friendly chat.
      </p>

      {/* Social + Contact Icons */}
      <motion.div
        className="flex flex-wrap justify-center gap-6 mb-12 font-[Poppins]"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {[
          { href: "mailto:abdulhaseeb0847179@gmail.com", icon: <Mail size={26} /> },
          { href: "tel:+923074058316", icon: <Phone size={26} /> },
          { href: "https://www.facebook.com/share/1CNHJpcrZj/", icon: <Facebook size={26} /> },
          { href: "https://wa.me/923074058316", icon: <MessageCircle size={26} /> },
          { href: "https://github.com/adeel4166", icon: <Github size={26} /> },
          {
            href: "https://www.linkedin.com/in/adeel-ahmad-639b852ab",
            icon: <Linkedin size={26} />,
          },
        ].map((social, i) => (
          <motion.a
            key={i}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 dark:hover:text-indigo-400 transition transform hover:scale-125"
            variants={item}
          >
            {social.icon}
          </motion.a>
        ))}
      </motion.div>

      {/* Contact Form */}
      <motion.form
        className="space-y-6 
        bg-white dark:bg-gradient-to-b dark:from-gray-950 dark:via-gray-900 dark:to-black 
        backdrop-blur-md p-8 rounded-xl shadow-lg w-full max-w-lg 
        font-[Poppins] transition-colors duration-500"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={item}>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-md 
            bg-gray-50 dark:bg-gray-800 
            text-gray-900 dark:text-white 
            border border-gray-300 dark:border-gray-700 
            focus:border-indigo-500 focus:ring focus:ring-indigo-400/50 outline-none transition"
          />
        </motion.div>

        <motion.div variants={item}>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-md 
            bg-gray-50 dark:bg-gray-800 
            text-gray-900 dark:text-white 
            border border-gray-300 dark:border-gray-700 
            focus:border-indigo-500 focus:ring focus:ring-indigo-400/50 outline-none transition"
          />
        </motion.div>

        <motion.div variants={item}>
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full px-4 py-3 rounded-md 
            bg-gray-50 dark:bg-gray-800 
            text-gray-900 dark:text-white 
            border border-gray-300 dark:border-gray-700 
            focus:border-indigo-500 focus:ring focus:ring-indigo-400/50 outline-none transition"
          ></textarea>
        </motion.div>

        <motion.button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 
          text-white font-semibold rounded-lg shadow-md transition-all duration-300 
          hover:scale-105 hover:shadow-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, type: "spring" }}
          viewport={{ once: true }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </section>
  );
}
