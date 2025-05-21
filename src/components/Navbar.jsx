import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaHome, FaInfo, FaProjectDiagram, FaEnvelopeOpen } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="animatedNav">
      <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-sm border-b border-white/10 px-6 py-4 flex justify-between items-center">
        
        {/* Desktop Animated Menu (hidden on mobile) */}
        <div className="hidden md:flex gap-4">
          {["Home", "About", "Projects", "Contact"].map((label) => (
            <Link key={label} to={label === "Home" ? "/" : `/${label.toLowerCase()}`}>
              <button type="button" className="nav-link-button" title={label}>
                <span>{label}</span>
                <span aria-hidden="true">
                  {label === "Home" && <FaHome />}
                  {label === "About" && <FaInfo />}
                  {label === "Projects" && <FaProjectDiagram />}
                  {label === "Contact" && <FaEnvelopeOpen />}
                </span>
                <svg viewBox="0 0 300 300" aria-hidden="true">
                  <g>
                    <text fill="currentColor">
                      <textPath href="#circlePath">{label}</textPath>
                    </text>
                    <text fill="currentColor">
                      <textPath href="#circlePath" startOffset="50%">{label}</textPath>
                    </text>
                  </g>
                </svg>
              </button>
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger Button (hidden on desktop) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-3xl"
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Menu (only shows when open) */}
        {menuOpen && (
          <div className="mobile-menu md:hidden absolute top-full left-0 w-full bg-black/90 flex flex-col items-center py-6 gap-6 z-50">
            <Link to="/" onClick={() => setMenuOpen(false)} className="text-white text-xl">Home</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)} className="text-white text-xl">About</Link>
            <Link to="/projects" onClick={() => setMenuOpen(false)} className="text-white text-xl">Projects</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)} className="text-white text-xl">Contact</Link>
          </div>
        )}
      </nav>

      {/* SVG path needed for animated circular text */}
      <svg version="1.1" viewBox="0 0 300 300" width="0" height="0">
        <defs>
          <path id="circlePath" d="M 150, 150 m -50, 0 a 50,50 0 0,1 100,0 a 50,50 0 0,1 -100,0" />
        </defs>
      </svg>
    </section>
  );
}

export default Navbar;
