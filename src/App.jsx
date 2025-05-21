import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiHtml5, SiCss3, SiJavascript, SiPostgresql, SiShopify, SiRubyonrails, SiPhp, SiReact, SiTailwindcss, SiMysql, SiWordpress } from "react-icons/si";
import ProjectCard from "./components/ProjectCard";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import ContactForm from "./components/ContactForm";
import CursorTrail from "./components/CursorTrail";
import heroImage from "./assets/images/hero.png";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";

function Home() {
  return (
    <section className="relative text-center p-8 md:p-0 h-dvh overflow-hidden">
      <motion.h1 className="relative text-3xl md:text-6xl xl:text-8xl text-white uppercase font-R1 mb-6 z-10 title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Ib Mark Cruz
         <div class="aurora">
          <div class="aurora__item"></div>
          <div class="aurora__item"></div>
          <div class="aurora__item"></div>
          <div class="aurora__item"></div>
        </div>
      </motion.h1>
      <motion.p className="relative text-white text-1xl md:text-3xl xl:text-4xl mt-3 mb-6 z-10 uppercase font-OswaldBold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.7 }}
      >
        Full Stack | Front End Web Developer
      </motion.p>
      <motion.p className="relative text-white text-1xl mb-6 z-10 font-RobotoFlex subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.7 }}
      >
        Crafting sleek, modern, and memorable web experiences
      </motion.p>
      <motion.div className="relative z-10 mt-12 mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <Link to="/projects" className="btn"><span className="text text-black font-OswaldBold uppercase">View Projects</span><span class="shimmer"></span></Link>
      </motion.div>
    </section>
  );
}

function About() {
  return (
      <section className="relative text-center h-dvh overflow-hidden">
      <motion.h1 className="relative md:text-3xl text-5xl text-white uppercase font-R1 mb-6 z-10 title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        About Me
         <div class="aurora">
          <div class="aurora__item"></div>
          <div class="aurora__item"></div>
          <div class="aurora__item"></div>
          <div class="aurora__item"></div>
        </div>
      </motion.h1>
      <motion.p className="relative text-white text-left z-10 pt-6 font-RobotoFlex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.7 }}
      >
        Full Stack and Front-End Web Developer with 7 years of experience building responsive, accessible, and data-driven websites. I specialize in WordPress development, Shopify customization, and database management, with a strong focus on clean code and seamless user experiences.
      </motion.p>
      <motion.p className="relative text-white text-left z-10 pt-6 font-RobotoFlex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.7 }}
      >
        From full site migrations to custom API integrations and accessibility audits, I love helping businesses create smarter, faster, and more manageable online platforms.
      </motion.p>
      <motion.div className="relative z-10 mt-12"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
       <div className="flex justify-center space-x-8 text-4xl text-blue-600">
        <SiHtml5 />
        <SiCss3 />
        <SiJavascript />
        <SiPostgresql />
        <SiShopify />
        <SiRubyonrails />
        <SiPhp />
        <SiReact />
        <SiTailwindcss />
        <SiMysql />
        <SiWordpress />
      </div>
      </motion.div>
    </section>
  );
}

function Contact() {
  return (
    <section className="p-12 text-center">
      <h3 className="text-4xl font-bold mb-6">Contact Me</h3>
      <ContactForm />
    </section>
  );
}

function App() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="relative min-h-screen flex flex-col font-sans text-gray-900 overflow-hidden">
      <CursorTrail />

      {/* Background image + darker overlay */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/85 to-black/95"></div>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Routes */}
      <main className="relative z-10 flex-1 flex flex-col justify-center items-center mt-[150px] text-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/:projectId" element={<ProjectDetails />} />
          <Route path="*" element={<h1 className="p-12 text-center text-3xl text-white">404 Not Found</h1>} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="w-full bg-transparent backdrop-blur-sm border-t border-white/10 py-4 flex flex-col items-center mt-auto">
        <div className="flex space-x-6 text-2xl mb-2 text-slate-500">
          <a href="#"><FaGithub /></a>
          <a href="#"><FaLinkedin /></a>
          <a href="mailto:ibmark_cruz@hotmail.com"><FaEnvelope /></a>
        </div>
        <p className="text-sm text-gray-300">&copy; {currentYear} Ib Mark Cruz</p>
      </footer>
    </div>
  );
}

export default App;
