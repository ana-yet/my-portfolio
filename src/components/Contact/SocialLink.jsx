import { motion } from "framer-motion";

const SocialLink = ({ href, icon: Icon, "aria-label": ariaLabel }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ariaLabel}
    className="text-gray-400 hover:text-accent transition-colors duration-300"
    whileHover={{ scale: 1.2, y: -2 }}
  >
    <Icon size={24} />
  </motion.a>
);

export default SocialLink;
