import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectCard = ({ project, index }) => {
  const isReversed = index % 2 !== 0;

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="bg-[#161616] rounded-xl shadow-2xl overflow-hidden mb-8"
      variants={cardVariants}
    >
      <div
        className={`flex flex-col ${
          isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        {/* Project Image */}
        <div className="w-full lg:w-1/2 flex items-center">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block overflow-hidden group w-full"
          >
            <img
              src={project.imageUrl}
              alt={`Screenshot of ${project.title}`}
              className="w-full h-auto max-h-64 object-contain transform transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          </a>
        </div>

        {/* Project Details */}
        <div className="w-full lg:w-1/2 p-6 flex flex-col justify-center">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm mb-4">{project.description}</p>

          <h4 className="font-semibold text-white text-sm mb-2">
            Core Features:
          </h4>
          <ul className="space-y-1 mb-4">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-start text-gray-300 text-sm">
                <FaCheckCircle className="text-accent w-3 h-3 mr-2 mt-1 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <h4 className="font-semibold text-white text-sm mb-2">
            Technologies Used:
          </h4>
          <div className="flex flex-wrap gap-1 mb-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="bg-primary/20 text-primary text-xs font-medium px-2 py-0.5 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 mt-auto">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-gray-700/50 text-white text-sm font-bold py-1.5 px-3 rounded-lg hover:bg-gray-700 transition-all duration-300"
            >
              <FaGithub className="w-3 h-3" />
              <span>GitHub</span>
            </a>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-accent text-[#111111] text-sm font-bold py-1.5 px-3 rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
            >
              <FaExternalLinkAlt className="w-3 h-3" />
              <span>Live Demo</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
