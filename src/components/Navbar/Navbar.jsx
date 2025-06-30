import React, { useState, useEffect } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";

// Navigation links
const NAV_LINKS = [
  { href: "/#about", name: "About Me" },
  { href: "/#skills", name: "Skills" },
  { href: "/#projects", name: "Projects" },
  { href: "/#contact", name: "Contact Me" },
];

// Logo Component
const Logo = () => (
  <a
    href="/"
    className="text-white font-bold text-2xl md:text-3xl hover:text-primary transition-colors duration-300"
  >
    MD<span className="text-primary">A</span>M
  </a>
);

// CV Download Button
const DownloadButton = ({ className = "" }) => (
  <a
    href="/path-to-your-cv.pdf"
    download
    className={`bg-primary hover:bg-primary-dark py-2 px-6 rounded-md text-white font-medium transition duration-300 transform hover:scale-105 ${className}`}
  >
    Download CV
  </a>
);

// NavLinks Component
const NavLinks = ({ onLinkClick }) => {
  const [active, setActive] = useState("");

  useEffect(() => {
    setActive(window.location.hash);

    const handleHashChange = () => setActive(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <nav className="text-white text-base font-medium flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
      {NAV_LINKS.map((item) => (
        <a
          key={item.name}
          href={item.href}
          onClick={onLinkClick}
          className={`relative group transition-colors duration-300 ${
            active === item.href ? "text-primary" : "hover:text-primary"
          }`}
        >
          {item.name}
          <span
            className={`absolute left-0 -bottom-1 h-[2px] bg-primary transition-all duration-300
              ${active === item.href ? "w-full" : "w-0 group-hover:w-full"}`}
          ></span>
        </a>
      ))}
    </nav>
  );
};

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => (document.body.style.overflow = "unset");
  }, [isMenuOpen]);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="relative flex justify-between items-center py-4 container mx-auto px-4 sm:px-6 lg:px-8">
      <Logo />

      {/*  Desktop Nav */}
      <div className="hidden md:flex items-center space-x-8">
        <NavLinks />
        <DownloadButton />
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="text-white text-3xl focus:outline-none"
          aria-label="Toggle menu"
          aria-controls="mobile-menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <IoMdClose /> : <IoMdMenu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      >
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-gray-800 shadow-lg p-6 z-50 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/*  Mobile NavLinks */}
          <div className="flex flex-col space-y-8 pt-10">
            <NavLinks onLinkClick={closeMenu} />
            <DownloadButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
