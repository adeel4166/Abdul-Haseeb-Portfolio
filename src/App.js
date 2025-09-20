import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingHireMeButton from "./components/FloatingHireMeButton"; // add

function App() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500">
      <Navbar setActiveSection={setActiveSection} />

      {activeSection === "home" && <Hero setActiveSection={setActiveSection} />}
      {activeSection === "about" && <About />}
      {activeSection === "skills" && <Skills />}
      {activeSection === "projects" && <Projects />}
      {activeSection === "contact" && <Contact />}

      <Footer setActiveSection={setActiveSection} />

      {/* Floating Hire Me Button */}
      <FloatingHireMeButton setActiveSection={setActiveSection} />
    </div>
  );
}

export default App;
