import SkillCard from "./SkillCard";

const skills = [
  {
    name: "HTML",
    icon: "https://img.icons8.com/color/48/html-5.png",
    level: "Advanced",
    percentage: 85,
  },
  {
    name: "CSS",
    icon: "https://img.icons8.com/color/48/css3.png",
    level: "Advanced",
    percentage: 80,
  },
  {
    name: "Tailwind CSS",
    icon: "https://img.icons8.com/color/48/tailwindcss.png",
    level: "Advanced",
    percentage: 80,
  },
  {
    name: "JavaScript",
    icon: "https://img.icons8.com/color/48/javascript--v1.png",
    level: "Intermediate",
    percentage: 55,
  },
  {
    name: "React",
    icon: "https://img.icons8.com/color/48/react-native.png",
    level: "Intermediate",
    percentage: 50,
  },
  {
    name: "Express.js",
    icon: "https://img.icons8.com/ios/48/express-js.png",
    level: "learning",
    percentage: 30,
  },
  {
    name: "MongoDB",
    icon: "https://img.icons8.com/color/48/mongodb.png",
    level: "learning",
    percentage: 30,
  },
];

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="my-20 container mx-auto px-4 text-center text-white"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 relative inline-block after:block after:h-[3px] after:w-20 after:bg-accent after:mx-auto after:mt-2">
        My Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-3  mx-auto">
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
