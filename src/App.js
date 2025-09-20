import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingHireMeButton from "./components/FloatingHireMeButton";
import "nprogress/nprogress.css";   // default styles
import "./nprogress-custom.css";    // 👈 tumhara custom override

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // ✅ mobile menu state

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500">
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      {activeSection === "home" && <Hero setActiveSection={setActiveSection} />}
      {activeSection === "about" && <About />}
      {activeSection === "skills" && <Skills />}
      {activeSection === "projects" && <Projects />}
      {activeSection === "contact" && <Contact />}

      <Footer setActiveSection={setActiveSection} />

      {/* Floating Hire Me Button */}
      <FloatingHireMeButton
        setActiveSection={setActiveSection}
        setIsMenuOpen={setIsMenuOpen} // ✅ pass down to close menu
      />
    </div>
  );
}

export default App;
