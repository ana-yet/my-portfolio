import React from "react";
import { motion } from "framer-motion";
import image from "../../assets/me.jpg";

const CheckIcon = () => (
  <svg
    className="w-5 h-5 mr-2 text-accent flex-shrink-0"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);

const AboutMe = () => {
  const bio = {
    greeting: "Hi! I'm MD Anayet Miah.",
    intro:
      "A passionate and self-taught MERN Stack Developer from Bangladesh, dedicated to building modern web applications with clean UI and robust functionality.",
    focus: [
      "Writing clean, efficient, and maintainable code.",
      "Building full-stack projects with the MERN stack.",
      "Continuously learning and embracing new technologies.",
      "Solving complex problems and turning ideas into reality.",
    ],
    cta: "I'm excited to collaborate, grow, and make a meaningful impact through code.",
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Left Column: Image */}
          <motion.div
            className="w-full max-w-sm lg:w-1/3"
            variants={itemVariants}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent to-primary rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <figure className="relative bg-[#111111] p-2 rounded-lg leading-none flex items-center">
                <img
                  className="w-full h-auto rounded-md shadow-lg"
                  src={image}
                  alt="My Image"
                />
              </figure>
            </div>
          </motion.div>

          {/*  Text Content */}
          <motion.div
            className="w-full lg:w-2/3 text-center lg:text-left"
            variants={itemVariants}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r to-primary from-accent mb-8 mx-auto lg:mx-0"></div>

            <div className="text-lg text-gray-300 space-y-4">
              <p className="font-semibold text-xl text-white">{bio.greeting}</p>
              <p>{bio.intro}</p>

              <ul className="space-y-3 pt-2 text-left inline-block">
                {bio.focus.map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    variants={itemVariants}
                  >
                    <CheckIcon />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>

              <p className="pt-4">{bio.cta}</p>
            </div>

            <motion.a
              href="#contact"
              className="inline-block mt-8 border-accent border-2 text-accent  font-bold py-3 px-8 rounded-lg shadow-lg
                         transition-all duration-300 ease-in-out
                         hover:text-primary hover:border-primary hover:scale-105
                         "
              variants={itemVariants}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
