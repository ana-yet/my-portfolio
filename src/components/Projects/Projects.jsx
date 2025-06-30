import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    fetch("ProjectData.json")
      .then((res) => res.json())
      .then((data) => {
        setProjectData(data);
      });
  }, []);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.4 } },
  };

  return (
    <section id="projects" className="py-24 container mx-auto">
      {/* title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl text-center font-bold text-white mb-4">
          My <span className="text-primary">Projects</span>
        </h2>
        <div className="w-24 h-1 bg-accent bg-gradient-to-r from-accent to-primary mx-auto mb-12"></div>
      </motion.div>

      {/* project card */}
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projectData.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
