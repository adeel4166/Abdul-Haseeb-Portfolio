import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center 
      bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white px-6 py-20"
    >
      {/* Heading */}
      <motion.h2
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Get In <span className="text-indigo-400">Touch</span>
      </motion.h2>

      <motion.div
        className="grid md:grid-cols-2 gap-12 w-full max-w-6xl"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Left Side Info */}
        <motion.div className="space-y-6" variants={item}>
          <p className="text-lg text-gray-300">
            I’d love to hear from you! Whether you have a project idea, a
            question, or just want to say hello, feel free to drop me a message.
          </p>

          <div className="space-y-4">
            <motion.div className="flex items-center space-x-3" variants={item}>
              <Mail className="text-indigo-400" />
              <span>adeelkhan4128@gmail.com</span>
            </motion.div>
            <motion.div className="flex items-center space-x-3" variants={item}>
              <Phone className="text-indigo-400" />
              <span>+92 3004166107</span>
            </motion.div>
            <motion.div className="flex items-center space-x-3" variants={item}>
              <MapPin className="text-indigo-400" />
              <span>Lahore, Pakistan</span>
            </motion.div>
          </div>

          {/* Social Links */}
          <motion.div
            className="flex space-x-6 mt-6"
            variants={container}
          >
            <motion.a
              href="#"
              className="hover:text-indigo-400 transition transform hover:scale-110"
              variants={item}
            >
              <Github size={28} />
            </motion.a>
            <motion.a
              href="https://github.com/adeel4166"
              className="hover:text-indigo-400 transition transform hover:scale-110"
              variants={item}
            >
              <Linkedin size={28} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/adeel-ahmad-639b852ab"
              className="hover:text-indigo-400 transition transform hover:scale-110"
              variants={item}
            >
              <Twitter size={28} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Side Form */}
        <motion.form
          className="space-y-6 bg-white/5 backdrop-blur-md p-8 rounded-xl shadow-lg"
          variants={container}
        >
          <motion.div variants={item}>
            <label className="block text-sm mb-2">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-700 
              focus:border-indigo-500 focus:ring focus:ring-indigo-400/50 outline-none transition"
            />
          </motion.div>

          <motion.div variants={item}>
            <label className="block text-sm mb-2">Your Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-700 
              focus:border-indigo-500 focus:ring focus:ring-indigo-400/50 outline-none transition"
            />
          </motion.div>

          <motion.div variants={item}>
            <label className="block text-sm mb-2">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-700 
              focus:border-indigo-500 focus:ring focus:ring-indigo-400/50 outline-none transition"
            ></textarea>
          </motion.div>

          <motion.button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 
            text-white font-semibold rounded-lg shadow-md transition-all duration-300 
            hover:scale-105 hover:shadow-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
            viewport={{ once: true }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
}
