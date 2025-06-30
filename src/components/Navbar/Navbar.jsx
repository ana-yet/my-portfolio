import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import logo from "../../assets/logo.png";

const NAV_LINKS = [
  { href: "#about", name: "About" },
  { href: "#skills", name: "Skills" },
  { href: "#projects", name: "Projects" },
  { href: "#contact", name: "Contact" },
];

const Logo = () => <img className="w-60" src={logo} alt="logo" />;

const DownloadButton = ({ isMobile = false }) => (
  <motion.a
    href="/cv.pdf"
    download
    className={`font-bold text-white py-2.5 px-6 rounded-lg transition-all duration-300 ease-in-out shadow-lg ${
      isMobile
        ? "w-full text-center bg-primary"
        : "bg-primary hover:bg-opacity-80"
    }`}
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.95 }}
  >
    Download CV
  </motion.a>
);

const NavLinks = ({ onLinkClick, isMobile = false }) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    // active section
    const handleScroll = () => {
      const sections = NAV_LINKS.map((link) =>
        document.querySelector(link.href)
      );
      const scrollPosition = window.scrollY + 150;

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
    "relative text-lg md:text-base font-medium transition-colors duration-300 group py-2";
  const activeClass = "text-primary";
  const inactiveClass = "text-white";

  return (
    <nav
      className={`flex ${
        isMobile
          ? "flex-col space-y-6 items-center"
          : "flex-row items-center space-x-8"
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

  //navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
  }, [isMenuOpen]);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);
  const closeMenu = () => setMenuOpen(false);

  const navClass = `fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
    hasScrolled
      ? "py-4 bg-[#111111]/80 backdrop-blur-sm shadow-lg"
      : "py-6 bg-transparent"
  }`;

  return (
    <header className={navClass}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <NavLinks />
          <DownloadButton />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <motion.button
            onClick={toggleMenu}
            className="text-white text-3xl z-50"
            aria-label="Toggle Menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                >
                  <IoMdClose />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                >
                  <IoMdMenu />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="md:hidden fixed inset-0 bg-black/50 z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />
            <motion.div
              className="md:hidden fixed top-0 right-0 h-full w-4/5 max-w-sm bg-[#161616] p-8 flex flex-col items-center justify-center space-y-10 z-40"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", ease: "easeInOut" }}
            >
              <NavLinks onLinkClick={closeMenu} isMobile />
              <DownloadButton isMobile />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
