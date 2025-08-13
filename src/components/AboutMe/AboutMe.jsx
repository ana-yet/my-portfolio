import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  const bio = {
    title: "About Me",
    paragraphs: [
      "I started my programming journey in October last year, beginning with C language fundamentals like functions, arrays, variables, loops, and conditionals through YouTube tutorials. At first, I struggled to find structured learning and reliable answers to my questions, which made progress slow and sometimes frustrating.",
      "That changed when I joined Programming Hero, where the disciplined, step-by-step approach motivated me to push harder and stay consistent.",
      "From childhood, I was curious about how video games work and how they are made. That curiosity fueled my passion for coding and led me to dive deeper into web development, especially the MERN stack.",
      "Learning React was challenging—I often understood concepts but struggled to implement them at first, which made me pause and rethink my approach. However, by building small projects, I gained confidence and eventually mastered React's logic.",
      "I enjoy working on both frontend and backend development, with a growing preference for backend work. Solving complex problems excites me because each solution boosts my confidence and drives me to learn more. I believe collaborating with a team is vital for growth and innovation.",
      "Outside of programming, I enjoy playing Clash of Clans and football, and I listen to podcasts about self-improvement and inspiring life journeys.",
      "My goal for the next two years is to become a highly skilled full-stack developer and share my knowledge by teaching junior developers. I also aim to work in a company environment where I can contribute to a team and continue growing professionally.",
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <section id="about" className="py-16 md:py-24 px-3 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Card Container */}
          <motion.div
            className="bg-[#111111] rounded-xl p-6 md:p-8 shadow-lg border border-gray-800"
            variants={itemVariants}
          >
            {/* Title Section */}
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              variants={itemVariants}
            >
              About <span className="text-primary">Me</span>
            </motion.h2>

            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-primary to-accent mb-8"
              variants={itemVariants}
            />

            {/* Content Section - Your exact text */}
            <div className="space-y-6 text-gray-300">
              {bio.paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  className="text-base md:text-lg leading-relaxed"
                  variants={itemVariants}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div className="mt-12" variants={itemVariants}>
              <a
                href="#contact"
                className="inline-block border-2 border-primary text-primary font-medium py-2 px-6 rounded-lg
                           transition-all duration-300 ease-in-out
                           hover:bg-primary hover:text-white hover:scale-105
                           focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
              >
                Get In Touch
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
