import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import logo from "../../assets/logo.webp";
import { VscGithubInverted } from "react-icons/vsc";
import { SiLinkedin } from "react-icons/si";
import resume from "../../assets/Anayet-resume.pdf";
import { MdDownloading } from "react-icons/md";

const NAV_LINKS = [
  { href: "#home", name: "Home" },
  { href: "#about", name: "About" },
  { href: "#skills", name: "Skills" },
  { href: "#projects", name: "Projects" },
  { href: "#contact", name: "Contact" },
];

const Logo = () => (
  <a href="/" className="flex-shrink-0">
    <img className="w-12 h-12 md:w-14 md:h-14" src={logo} alt="logo" />
  </a>
);

const DownloadButton = ({ isMobile = false }) => (
  <motion.a
    href={resume}
    download
    className={`font-bold inline-flex items-center justify-center gap-1.5 text-white py-2 px-4 md:py-2.5 md:px-6 rounded-lg transition-all duration-300 ease-in-out shadow-lg ${
      isMobile
        ? "w-full text-center bg-primary"
        : "bg-primary hover:bg-opacity-80"
    }`}
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.95 }}
  >
    <MdDownloading size={20} className="md:size-6" />
    <span className="text-sm md:text-base">Resume</span>
  </motion.a>
);

const NavLinks = ({ onLinkClick, isMobile = false }) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map((link) =>
        document.querySelector(link.href)
      );
      const scrollPosition = window.scrollY + 100;

      let currentSection = "";
      for (const section of sections) {
        if (
          section &&
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          currentSection = section.id;
          break;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass =
    "relative text-base md:text-base font-medium transition-colors duration-300 group py-2";
  const activeClass = "text-primary";
  const inactiveClass = "text-white";

  return (
    <nav
      className={`flex ${
        isMobile
          ? "flex-col space-y-6 items-center w-full"
          : "flex-row items-center space-x-4 md:space-x-8"
      }`}
    >
      {NAV_LINKS.map((link) => {
        const isActive = activeSection === link.href.substring(1);
        return (
          <a
            key={link.name}
            href={link.href}
            onClick={onLinkClick}
            className={`${linkClass} ${
              isActive ? activeClass : `${inactiveClass} hover:text-primary`
            }`}
          >
            {link.name}
            {isActive ? (
              <motion.span
                layoutId="underline"
                className="absolute left-0 -bottom-1 h-0.5 w-full bg-primary"
                initial={false}
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            ) : (
              <span
                className="absolute left-0 -bottom-1 h-0.5 w-full bg-primary
                           transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"
              />
            )}
          </a>
        );
      })}
    </nav>
  );
};

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`sticky top-0 left-0 w-full z-50 transition-all duration-300 ${
        hasScrolled
          ? "py-2 md:py-4 bg-[#111111]/90 backdrop-blur-sm shadow-lg"
          : "py-3 md:py-6 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 md:px-0">
        <div className="flex items-center gap-3 md:gap-5">
          <Logo />
          <div className="hidden sm:flex gap-2 md:gap-3 items-center">
            <a
              target="_blank"
              href="https://github.com/ana-yet"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <VscGithubInverted
                size={24}
                className="text-gray-400 hover:text-white hover:scale-105 transition-all duration-300 ease-in-out"
              />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/ana-yet"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <SiLinkedin
                size={24}
                className="text-gray-400 hover:text-white hover:scale-105 transition-all duration-300 ease-in-out"
              />
            </a>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <NavLinks />
          <DownloadButton />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden z-50">
          <motion.button
            onClick={toggleMenu}
            className="text-white text-2xl p-2"
            aria-label="Toggle Menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
              >
                <IoMdMenu size={28} />
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu - Right Side */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="md:hidden fixed inset-0 bg-black/70 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />
            <motion.div
              className="md:hidden fixed top-0 right-0 h-screen w-3/4 max-w-sm bg-[#161616] p-6 flex flex-col space-y-8 z-50 overflow-y-auto shadow-xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", ease: "easeInOut" }}
            >
              <div className="w-full flex justify-between items-center">
                <Logo />
                <button
                  onClick={closeMenu}
                  className="text-white text-2xl p-2"
                  aria-label="Close Menu"
                >
                  <IoMdClose size={28} />
                </button>
              </div>

              <div className="flex sm:hidden gap-4">
                <a
                  target="_blank"
                  href="https://github.com/ana-yet"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <VscGithubInverted
                    size={24}
                    className="text-gray-400 hover:text-white hover:scale-105 transition-all duration-300 ease-in-out"
                  />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/ana-yet"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <SiLinkedin
                    size={24}
                    className="text-gray-400 hover:text-white hover:scale-105 transition-all duration-300 ease-in-out"
                  />
                </a>
              </div>

              <NavLinks onLinkClick={closeMenu} isMobile />
              <div className="w-full">
                <DownloadButton isMobile />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
