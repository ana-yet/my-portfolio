import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

const ContactMe = () => {
  return (
    <section className="py-16 px-4 container mx-auto bg-secondary dark:bg-gray-900 text-white">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div>
          <h2 className="text-3xl font-bold text-primary mb-6">Get In Touch</h2>
          <p className="text-accent mb-6">
            Feel free to reach out for any project, collaboration, or just to
            say hi!
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-white">
              <FaEnvelope className="text-accent" />
              <span>mdanayet.dev@gmail.com</span>
            </li>
            <li className="flex items-center gap-3 text-white">
              <FaPhoneAlt className="text-accent" />
              <span>+880 17 3355 2322</span>
            </li>
            <li className="flex items-center gap-3 text-white">
              <FaMapMarkerAlt className="text-accent" />
              <span>Habiganj, Sylhet, Bangladesh</span>
            </li>
          </ul>

          {/* Social Links */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-gray-800 p-3 rounded-full hover:bg-accent transition"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-gray-800 p-3 rounded-full hover:bg-accent transition"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://facebook.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-gray-800 p-3 rounded-full hover:bg-accent  transition"
            >
              <FaFacebook size={20} />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-3xl font-bold text-primary mb-6">
            Send a Message
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded bg-[#111111] text-white border border-gray-700 focus:outline-accent"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded bg-[#111111] text-white border border-gray-700 focus:outline-accent"
              required
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 rounded bg-[#111111] text-white border border-gray-700 focus:outline-accent"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-primary text-white px-6 py-3 rounded hover:bg-opacity-80 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
