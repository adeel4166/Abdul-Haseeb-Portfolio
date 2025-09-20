"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import {
  Github,
  Linkedin,
  Facebook,
  MessageCircle,
  Mail,
  Phone,
  CheckCircle,
} from "lucide-react";

export default function Contact() {
  const formRef = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0c8s1ya", // ✅ apna Service ID
        "template_27sz6qd", // ✅ apna Template ID
        formRef.current,
        "x3hnknxKPDOPA5JPw" // ✅ apna Public Key
      )
      .then(
        () => {
          if (formRef.current) {
            formRef.current.reset();
          }

          // 🔊 Play success sound
          const audio = new Audio(
            "https://actions.google.com/sounds/v1/cartoon/wood_plank_flicks.ogg"
          );
          audio.play();

          setIsSent(true);

          // 2 sec ke baad success hatado
          setTimeout(() => setIsSent(false), 2000);
        },
        (error) => {
          console.error("Message failed ❌", error.text);
          alert("Failed to send message. Try again.");
        }
      );
  };

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
        Get in{" "}
        <span className="text-indigo-500 dark:text-indigo-400">Touch</span>
      </motion.h2>

      <p className="text-gray-600 dark:text-gray-400 text-center mb-8 max-w-xl font-[Inter]">
        Feel free to reach out for collaborations, opportunities, or just a
        friendly chat.
      </p>

      {/* Social Icons */}
      <div className="flex flex-wrap justify-center gap-6 mb-12 font-[Poppins]">
        {[
          {
            href: "mailto:abdulhaseeb0847179@gmail.com",
            icon: <Mail size={26} />,
          },
          { href: "tel:+923074058316", icon: <Phone size={26} /> },
          {
            href: "https://www.facebook.com/share/1BfvWMhmdy/",
            icon: <Facebook size={26} />,
          },
          {
            href: "https://wa.me/923074058316",
            icon: <MessageCircle size={26} />,
          },
          { href: "https://share.google/z4idK2IpJcDlV6hmP", icon: <Github size={26} /> },
          {
            href: "https://www.linkedin.com/in/abdul-haseeb-533302214?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            icon: <Linkedin size={26} />,
          },
        ].map((social, i) => (
          <a
            key={i}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 dark:hover:text-indigo-400 transition transform hover:scale-125"
          >
            {social.icon}
          </a>
        ))}
      </div>

      {/* Contact Form / Success Tick */}
      {!isSent ? (
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="space-y-6 bg-white dark:bg-gradient-to-b dark:from-gray-950 dark:via-gray-900 dark:to-black 
          backdrop-blur-md p-8 rounded-xl shadow-lg w-full max-w-lg font-[Poppins] transition-colors duration-500"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-md bg-gray-50 dark:bg-gray-800 
            text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 
            focus:border-green-500 focus:ring focus:ring-green-400/50 outline-none transition"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded-md bg-gray-50 dark:bg-gray-800 
            text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 
            focus:border-green-500 focus:ring focus:ring-green-400/50 outline-none transition"
          />

          <textarea
            rows="5"
            name="message"
            placeholder="Your Message"
            required
            className="w-full px-4 py-3 rounded-md bg-gray-50 dark:bg-gray-800 
            text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 
            focus:border-green-500 focus:ring focus:ring-green-400/50 outline-none transition"
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md transition-all duration-300 
            hover:scale-105 hover:shadow-xl"
          >
            Send Message
          </button>
        </form>
      ) : (
        <motion.div
          className="flex flex-col items-center justify-center text-center"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, type: "spring" }}
        >
          <CheckCircle className="w-20 h-20 text-green-500 mb-4" />
          <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            Message Sent Successfully!
          </p>
        </motion.div>
      )}
    </section>
  );
}
