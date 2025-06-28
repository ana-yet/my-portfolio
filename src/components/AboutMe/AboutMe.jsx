import React from "react";

const AboutMe = () => {
  return (
    <section className="bg-secondary container mx-auto bg-[#111111] py-16 my-16 px-4">
      <div className="max-w-4xl mx-auto  shadow-xl rounded-md  text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 relative inline-block after:block after:h-[3px] after:w-20 after:bg-accent after:mx-auto after:mt-2">
          About Me
        </h2>

        <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-5">
          <p>
            Hi! I'm{" "}
            <span className="font-semibold text-accent">MD Anayet Miah</span>, a
            passionate and self-taught web developer from Bangladesh. I enjoy
            building modern web applications with clean UI and solid
            functionality.
          </p>
          <p>
            I'm currently learning and working with{" "}
            <span className="font-medium text-white">
              React, Tailwind CSS, Node.js, Express,
            </span>{" "}
            and <span className="font-medium text-white">MongoDB</span>, and
            building full-stack projects like{" "}
            <span className="italic text-accent">Zap Shift</span>.
          </p>
          <p>
            My focus is on writing clean code, learning new technologies, and
            growing every day as a developer. I love solving problems and
            turning ideas into real, useful websites.
          </p>
          <p>
            I'm excited to collaborate, grow, and make a meaningful impact
            through code.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
