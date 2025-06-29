import { motion } from "framer-motion";

const SkillCard = ({ skill, variants }) => {
  return (
    <motion.div
      className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg text-center flex flex-col justify-between
                 transition-all duration-300 ease-in-out
                 hover:shadow-primary/20 hover:-translate-y-2"
      variants={variants}
    >
      <div>
        <img
          src={skill.icon}
          alt={`${skill.name} icon`}
          className="w-16 h-16 mx-auto mb-4 transition-transform duration-300 hover:scale-110"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/64x64/1a1a1a/ffffff?text=Icon";
          }}
        />
        <h4 className="font-bold text-white text-lg">{skill.name}</h4>
        <p className="text-sm text-gray-400 mb-4">{skill.level}</p>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-600 rounded-full h-2.5">
        <motion.div
          className="bg-gradient-to-r from-primary to-accent h-2.5 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.percentage}%` }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
};

export default SkillCard;
