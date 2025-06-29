import { motion } from "framer-motion";
import SkillCard from "./SkillCard";

const SkillsSection = () => {
  const skills = [
    {
      name: "HTML",
      icon: "https://img.icons8.com/color/96/html-5.png",
      level: "Advanced",
      percentage: 85,
    },
    {
      name: "CSS",
      icon: "https://img.icons8.com/color/96/css3.png",
      level: "Advanced",
      percentage: 80,
    },
    {
      name: "Tailwind CSS",
      icon: "https://img.icons8.com/color/96/tailwindcss.png",
      level: "Advanced",
      percentage: 80,
    },
    {
      name: "JavaScript",
      icon: "https://img.icons8.com/color/96/javascript--v1.png",
      level: "Intermediate",
      percentage: 60,
    },
    {
      name: "React",
      icon: "https://img.icons8.com/color/96/react-native.png",
      level: "Intermediate",
      percentage: 60,
    },
    {
      name: "Node.js",
      icon: "https://img.icons8.com/color/96/nodejs.png",
      level: "leading",
      percentage: 30,
    },
    {
      name: "Express.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg",
      level: "learning",
      percentage: 35,
    },
    {
      name: "MongoDB",
      icon: "https://img.icons8.com/color/96/mongodb.png",
      level: "leading",
      percentage: 50,
    },
    {
      name: "GitHub",
      icon: "https://img.icons8.com/color/96/github.png",
      level: "Tool",
      percentage: 90,
    },
    {
      name: "VS Code",
      icon: "https://img.icons8.com/color/96/visual-studio-code-2019.png",
      level: "Tool",
      percentage: 95,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
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
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl  font-bold text-white mb-4">
            Tools & <span className="text-primary">Technologies</span>
          </h2>
          <div className="w-24 h-1 bg-accent bg-gradient-to-r from-accent to-primary mx-auto mb-12"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} variants={cardVariants} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
