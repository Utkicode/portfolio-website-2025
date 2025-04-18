import React, { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";
import Modal from "./Modal";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const About = () => {
  const { theme } = useContext(ThemeContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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

  const cards = [
    {
      title: "Tech Meets Business",
      content: "I bring the best of both worlds—strong technical skills as a full stack developer and a consulting mindset focused on solving business problems."
    },
    {
      title: "Customer-Centric Approach",
      content: "I don't just build software—I ensure it works for the people using it. My solutions are driven by user needs, data, and empathy."
    },
    {
      title: "Problem Solver",
      content: "Whether it's optimizing backend performance or improving product support workflows, I take ownership and deliver results with measurable impact."
    },
    {
      title: "Adaptable & Proactive",
      content: "From writing clean code to leading consulting case studies, I'm quick to learn, ready to lead, and always eager to improve."
    },
    {
      title: "Certified & Ready",
      content: "With certifications in Google Ads, IT Consulting, and Business Analytics, I'm equipped to step into cross-functional roles and contribute from day one."
    }
  ];

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <section
      id="about"
      className={`py-20 ${
        theme === "dark" ? "bg-gray-900" : "bg-gray-50"
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
            className={`text-4xl font-bold mb-8 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            About Me
          </h2>
          <p
            className={`text-lg mb-8 ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            I'm Utkarsh Gupta, a Full Stack Java Developer turned Product Support
            Consultant. With 2+ years of experience in Java development and 1.5+
            years in consulting, I've developed a unique ability to bridge the gap
            between technical solutions and business needs.
          </p>
          <p
            className={`text-lg mb-8 ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            My journey from development to consulting has given me a comprehensive
            understanding of both technical implementation and user experience. I
            specialize in solving complex problems, optimizing processes, and
            delivering solutions that drive real business value.
          </p>
          <p
            className={`text-lg mb-8 ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            What sets me apart is my ability to combine technical expertise with
            strong communication skills and a deep understanding of user needs. I
            believe in creating solutions that not only work technically but also
            provide exceptional user experiences.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              href="#contact"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                theme === "dark"
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
            >
              Hire Me
            </motion.a>
            <motion.button
              onClick={openModal}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                theme === "dark"
                  ? "bg-gray-700 hover:bg-gray-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-900"
              }`}
            >
              Why Hire Me?
            </motion.button>
          </div>
        </motion.div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="h-full flex flex-col">
          <motion.h3 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8"
          >
            Why You Should Hire Me
          </motion.h3>
          
          <div className="flex-1 flex items-center justify-center relative">
            <button
              onClick={prevCard}
              className="absolute left-0 z-10 p-2 rounded-full bg-white dark:bg-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <FaChevronLeft className="text-gray-700 dark:text-gray-300" size={24} />
            </button>

            <div className="w-full max-w-2xl mx-auto flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentCard}
                  initial={{ opacity: 0, x: -100, rotateY: -45 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  exit={{ opacity: 0, x: 100, rotateY: 45 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }}
                  className="transform-gpu w-[400px] h-[400px]"
                >
                  <div className={`h-full p-8 rounded-xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 transform-gpu flex flex-col justify-center ${
                    theme === "dark" 
                      ? "bg-gradient-to-br from-gray-900 to-gray-800" 
                      : "bg-gradient-to-br from-gray-50 to-gray-100"
                  }`}>
                    <h4 className="font-semibold text-2xl text-gray-900 dark:text-white mb-4">
                      {cards[currentCard].title}
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                      {cards[currentCard].content}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              onClick={nextCard}
              className="absolute right-0 z-10 p-2 rounded-full bg-white dark:bg-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <FaChevronRight className="text-gray-700 dark:text-gray-300" size={24} />
            </button>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentCard(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentCard === index
                    ? "bg-blue-600 w-6"
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default About;
