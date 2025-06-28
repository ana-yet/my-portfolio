const SkillCard = ({ skill }) => {
  return (
    <div className="bg-[#111111] p-4 rounded-xl shadow-md text-center hover:shadow-xl transition-all">
      <img
        src={skill.icon}
        alt={skill.name}
        className="w-12 h-12 mx-auto mb-2"
      />
      <h4 className="font-bold text-white">{skill.name}</h4>
      <p className="text-sm text-accent">
        {skill.level} ({skill.percentage}%)
      </p>
    </div>
  );
};
export default SkillCard;
