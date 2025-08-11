import React from "react";
import image from "../../assets/me.png";
import { motion } from "framer-motion";

const Banner = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-30vh)]  flex items-center  text-white relative my-14"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto flex flex-col-reverse md:flex-row items-center px-4 md:px-12 "
      >
        {/* Left Side  content */}
        <div className="md:w-1/2 text-center md:text-left  space-y-6">
          <motion.div
            variants={itemVariants}
            className="inline-block bg-orange-600 px-4 py-2 relative"
          >
            Hello I am
            <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-orange-600"></div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold"
          >
            MD. Anayet <span className="text-primary">Miah</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-gray-400 text-lg">
            A creative{" "}
            <span className="text-primary">Mearn stack developer</span>
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row gap-4 justify-center md:justify-start"
          >
            <motion.a
              variants={itemVariants}
              href="#projects"
              className="bg-primary hover:bg-orange-700 text-white py-2 px-6 rounded-md transition"
            >
              Projects
            </motion.a>
            <motion.a
              variants={itemVariants}
              href="#about"
              className="border border-white hover:border-orange-600 hover:text-orange-600 py-2 px-6 rounded-md transition"
            >
              About Me
            </motion.a>
          </motion.div>
        </div>

        {/*image*/}
        <motion.div
          className="lg:w-1/2 mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
          variants={itemVariants}
        >
          <div className="relative group">
            <div
              className="absolute -inset-1.5 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-50
                                            group-hover:opacity-75 transition duration-500 animate-pulse"
            ></div>
            <figure className="relative bg-black p-2 rounded-full leading-none flex items-center">
              <img
                src={image}
                alt=" MD. Anayet Miah"
                className="w-full h-auto rounded-full shadow-2xl"
              />
            </figure>
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute -bottom-14 md:bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="w-10 h-10 border-2 border-primary rounded-full flex items-center justify-center animate-bounce">
          <a href="#about">
            <svg
              className="w-5 h-5 text-primary"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
