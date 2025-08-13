import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SkillCard from "./SkillCard";

const SkillsSection = () => {
  const skills = [
    {
      name: "HTML",
      icon: "https://img.icons8.com/color/96/html-5.png",
      level: "Advanced",
      percentage: 85,
      category: "Frontend",
    },
    {
      name: "CSS",
      icon: "https://img.icons8.com/color/96/css3.png",
      level: "Advanced",
      percentage: 80,
      category: "Frontend",
    },
    {
      name: "Tailwind CSS",
      icon: "https://img.icons8.com/color/96/tailwindcss.png",
      level: "Advanced",
      percentage: 80,
      category: "Frontend",
    },
    {
      name: "JavaScript",
      icon: "https://img.icons8.com/color/96/javascript--v1.png",
      level: "Advanced",
      percentage: 88,
      category: "Frontend",
    },
    {
      name: "React",
      icon: "https://img.icons8.com/color/96/react-native.png",
      level: "Advanced",
      percentage: 85,
      category: "Frontend",
    },
    {
      name: "Node.js",
      icon: "https://img.icons8.com/color/96/nodejs.png",
      level: "Advanced",
      percentage: 85,
      category: "Backend",
    },
    {
      name: "Express.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg",
      level: "Advanced",
      percentage: 85,
      category: "Backend",
    },
    {
      name: "MongoDB",
      icon: "https://img.icons8.com/color/96/mongodb.png",
      level: "Advanced",
      percentage: 80,
      category: "Backend",
    },
    {
      name: "Firebase",
      icon: "https://img.icons8.com/color/96/firebase.png",
      level: "Intermediate",
      percentage: 75,
      category: "Backend",
    },
    {
      name: "GitHub",
      icon: "https://img.icons8.com/color/96/github.png",
      level: "Tool",
      percentage: 90,
      category: "Tools",
    },
    {
      name: "VS Code",
      icon: "https://img.icons8.com/color/96/visual-studio-code-2019.png",
      level: "Tool",
      percentage: 95,
      category: "Tools",
    },
    {
      name: "Vercel",
      icon: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png",
      level: "Tool",
      percentage: 85,
      category: "Tools",
    },
    {
      name: "JWT",
      icon: "https://jwt.io/img/pic_logo.svg",
      level: "Tool",
      percentage: 80,
      category: "Tools",
    },
    {
      name: "Stripe",
      icon: "https://cdn.worldvectorlogo.com/logos/stripe-4.svg",
      level: "Tool",
      percentage: 75,
      category: "Tools",
    },
    {
      name: "Canva",
      icon: "https://img.icons8.com/color/96/canva.png",
      level: "Advanced",
      percentage: 90,
      category: "Tools",
    },
  ];

  const [activeCategory, setActiveCategory] = useState("All");
  console.log(activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  console.log(filteredSkills);

  const categories = ["All", "Frontend", "Backend", "Tools"];

  return (
    <section id="skills" className="py-20 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Tools & <span className="text-primary">Technologies</span>
          </h2>
          <div className="w-24 h-1 bg-accent bg-gradient-to-r from-accent to-primary mx-auto mb-12"></div>
        </motion.div>

        <div className="flex justify-center items-center gap-2 sm:gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`capitalize px-4 py-2 text-sm sm:text-base font-semibold rounded-lg transition-all duration-300
                ${
                  activeCategory === category
                    ? "bg-primary text-white"
                    : "bg-[#2a2a2a] text-gray-300 hover:bg-primary/50"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
