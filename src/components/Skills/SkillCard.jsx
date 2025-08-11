import { motion } from "framer-motion";

const SkillCard = ({ skill }) => {
  const borderClass = "bg-gradient-to-br from-primary to-accent";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={`p-[2px] rounded-lg shadow-lg transition-colors duration-300 ease-in-out
                  hover:shadow-primary/20 ${borderClass}`}
    >
      <div className="bg-[#1a1a1a] p-6 rounded-[7px] h-full flex flex-col justify-between">
        <div>
          <img
            src={skill.icon}
            alt={`${skill.name} icon`}
            className="w-16 h-16 mx-auto mb-4 transition-transform duration-300 hover:scale-110"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/64x64/1a1a1a/ffffff?text=Icon";
            }}
          />
          <h4 className="font-bold text-white text-lg">{skill.name}</h4>
          <p className="text-sm text-gray-400 mb-4">{skill.level}</p>
        </div>

        <div className="w-full bg-gray-600 rounded-full h-2.5">
          <motion.div
            className="bg-gradient-to-r from-primary to-accent h-2.5 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.percentage}%` }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
