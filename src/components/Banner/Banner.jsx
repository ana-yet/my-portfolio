import React from "react";
import image from "../../assets/me.jpg";

// todo : add the social links

const Banner = () => {
  return (
    <section className="min-h-[calc(100vh-30vh)]  flex items-center  text-white relative">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4 md:px-12 ">
        {/* Left Side  content */}
        <div className="md:w-1/2 text-center md:text-left  space-y-6">
          <div className="inline-block bg-orange-600 px-4 py-2 relative">
            Hello I am
            <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-orange-600"></div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold">
            MD. Anayet <span className="text-primary">Miah</span>
          </h1>

          <p className="text-gray-400 text-lg">A Mearn stack web developer</p>

          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/cv.pdf"
              download
              className="bg-primary hover:bg-orange-700 text-white py-2 px-6 rounded-md transition"
            >
              Download CV
            </a>
            <a
              href="#about"
              className="border border-white hover:border-orange-600 hover:text-orange-600 py-2 px-6 rounded-md transition"
            >
              About Me
            </a>
          </div>
        </div>

        {/* image */}
        <div className="md:w-1/2 mt-10 md:mt-0 relative">
          <img
            src={image}
            alt="Profile"
            className="w-full max-w-md mx-auto rounded-lg"
          />
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="w-10 h-10 border-2 border-primary rounded-full flex items-center justify-center animate-bounce">
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
      </div>
    </section>
  );
};

export default Banner;
