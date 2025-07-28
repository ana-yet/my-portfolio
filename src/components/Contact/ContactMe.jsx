import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import FormInput from "./FormInput";
import SocialLink from "./SocialLink";

//  contact information
const ContactInfoItem = ({ icon: Icon, text }) => (
  <motion.li
    className="flex items-center gap-4 text-gray-300"
    variants={itemVariants}
  >
    <div className="bg-[#1a1a1a] p-3 rounded-full shadow-lg">
      <Icon className="text-accent w-5 h-5" />
    </div>
    <span>{text}</span>
  </motion.li>
);

// Animation
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const ContactMe = () => {
  const [status, setStatus] = useState("idle");

  const contactInfo = {
    email: "mdanayet.dev@gmail.com",
    phone: "+880 1733-552322",
    location: "Habiganj, Sylhet, Bangladesh",
  };

  const socialLinks = [
    {
      href: "https://github.com/ana-yet",
      icon: FaGithub,
      label: "GitHub Profile",
    },
    {
      href: "https://www.linkedin.com/in/ana-yet",
      icon: FaLinkedin,
      label: "LinkedIn Profile",
    },
    {
      href: "https://facebook.com/ana.y37.h0",
      icon: FaFacebook,
      label: "Facebook Profile",
    },
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;

    const formData = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    setStatus("sending");

    try {
      const response = await fetch(`${import.meta.env.VITE_formApi}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        form.reset();

        setTimeout(() => {
          setStatus("idle");
        }, 5000);
      } else {
        setTimeout(() => {
          setStatus("error");
        }, 5000);
      }
    } catch (error) {
      setTimeout(() => {
        setStatus("error");
      }, 5000);
    }
  };

  return (
    <section id="contact" className="pb-24 pt-16">
      <div className="container mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl  font-bold text-white mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-accent bg-gradient-to-r from-accent to-primary mx-auto mb-12"></div>
        </motion.div>

        <div className="bg-[#161616] max-w-6xl mx-auto p-8 md:p-12 rounded-xl shadow-2xl">
          <motion.div
            className="grid md:grid-cols-2 gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/*  Contact Info */}
            <motion.div
              className="flex flex-col justify-between"
              variants={itemVariants}
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Contact Information
                </h3>
                <p className="text-gray-400 mb-6">
                  Have a project in mind or just want to say hi? Feel free to
                  reach out.
                </p>
                <ul className="space-y-5 text-lg">
                  <ContactInfoItem icon={FaEnvelope} text={contactInfo.email} />
                  <ContactInfoItem icon={FaPhoneAlt} text={contactInfo.phone} />
                  <ContactInfoItem
                    icon={FaMapMarkerAlt}
                    text={contactInfo.location}
                  />
                </ul>
              </div>
              {/* Social Links */}
              <motion.div
                className="flex items-center gap-6 mt-8"
                variants={itemVariants}
              >
                <p className="font-semibold text-white">Connect with me:</p>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <SocialLink
                      key={social.label}
                      {...social}
                      aria-label={social.label}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-white mb-6">
                Send Me a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <FormInput name="name" placeholder="Your Name" />
                <FormInput type="email" name="email" placeholder="Your Email" />
                <FormInput
                  name="message"
                  placeholder="Your Message"
                  isTextArea={true}
                />
                <motion.button
                  type="submit"
                  disabled={status === "sending" || status === "success"}
                  className="w-full bg-accent text-[#111111] font-bold py-4 px-8 rounded-lg shadow-lg
                             transition-all duration-300 ease-in-out
                             hover:bg-primary hover:text-white"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {status === "sending"
                    ? "Sending..."
                    : status === "success"
                    ? "Message Sent!"
                    : "Send Message"}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
