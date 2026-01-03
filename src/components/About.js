import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";
import { portfolioData } from "../data/portfolio";

const About = () => {
  const { theme } = useContext(ThemeContext);
  const { bio = [] } = portfolioData.about || {};

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <section
      id="about"
      className={`py-20 ${theme === "dark" ? "bg-gray-900" : "bg-gray-50"
        } transition-colors duration-300`}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2
            className={`text-4xl font-bold mb-8 ${theme === "dark" ? "text-white" : "text-gray-900"
              }`}
          >
            About Me
          </h2>
          {bio?.map((paragraph, index) => (
            <p
              key={index}
              className={`text-lg mb-8 ${theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
            >
              {paragraph}
            </p>
          ))}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              href="#contact"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${theme === "dark"
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "bg-blue-600 hover:bg-blue-700 text-white"
                }`}
            >
              Hire Me
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
