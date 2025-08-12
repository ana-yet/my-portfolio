import React from "react";
import image from "../../assets/me.png";
import { VscGithubInverted } from "react-icons/vsc";
import { SiLinkedin } from "react-icons/si";
import { FiTwitter } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";

const Banner = () => {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-15vh)] max-w-6xl mx-auto flex items-center justify-start text-white relative py-20 md:py-0 bg-[#0a0a0a]"
    >
      <div className="w-full flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16 lg:gap-24">
        {/* Left Side - Content */}
        <div className="w-full md:w-1/2 space-y-8 md:space-y-10 text-center md:text-left animate-fadeIn">
          <div className="inline-block bg-orange-600 px-4 py-2 rounded-md relative animate-float">
            Hello I am
            <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-orange-600"></div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight animate-fadeInUp">
            MD. Anayet <span className="text-primary">Miah</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-lg mx-auto md:mx-0 animate-fadeInUp delay-100">
            A creative
            <span className="text-primary font-medium">
              MERN stack developer
            </span>{" "}
            passionate about building modern web applications
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fadeInUp delay-200">
            <a
              href="#projects"
              className="bg-primary hover:bg-orange-700 text-white py-3 px-8 rounded-md transition-all duration-300 font-medium text-lg transform hover:scale-105 active:scale-95"
            >
              View Projects
            </a>
            <a
              href="#about"
              className="border border-gray-300 hover:border-orange-600 hover:text-orange-600 py-3 px-8 rounded-md transition-all duration-300 font-medium text-lg transform hover:scale-105 active:scale-95"
            >
              About Me
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center md:justify-start pt-4 animate-fadeInUp delay-300">
            <a
              href="https://github.com/ana-yet"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-all duration-300 transform hover:-translate-y-1"
            >
              <VscGithubInverted size={24} />
            </a>
            <a
              href="https://linkedin.com/in/ana-yet"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-all duration-300 transform hover:-translate-y-1"
            >
              <SiLinkedin size={24} />
            </a>
            <a
              href="https://twitter.com/md_anayet_m"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-all duration-300 transform hover:-translate-y-1"
            >
              <FiTwitter size={24} />
            </a>
            <a
              href="https://www.facebook.com/ana.y37.h0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-all duration-300 transform hover:-translate-y-1"
            >
              <FaFacebookF size={24} />
            </a>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 max-w-md lg:max-w-lg animate-fadeIn delay-300">
          <div className="relative group">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
            <figure className="relative bg-black p-2 rounded-full overflow-hidden border-4 border-gray-800  ">
              <img
                src={image}
                alt="MD. Anayet Miah"
                className="w-full h-auto rounded-full shadow-2xl group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
                width="500"
                height="500"
              />
            </figure>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-1 md:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="block">
          <div className="w-10 h-10 border-2 border-primary rounded-full flex items-center justify-center bg-black bg-opacity-50">
            <svg
              className="w-5 h-5 text-primary"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Banner;
