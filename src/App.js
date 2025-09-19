import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  // Default section "home"
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div>
      {/* Navbar */}
      <Navbar setActiveSection={setActiveSection} />

      {/* Conditional Rendering */}
      {activeSection === "home" && <Hero setActiveSection={setActiveSection} />}
      {activeSection === "about" && <About />}
      {activeSection === "skills" && <Skills />}
      {activeSection === "projects" && <Projects />}
      {activeSection === "contact" && <Contact />}

      {/* Footer */}
      <Footer setActiveSection={setActiveSection} />
    </div>
  );
}

export default App;
