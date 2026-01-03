import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { caseStudies } from "../data/caseStudies";
import { portfolioData } from "../data/portfolio";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/carousel.css";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Projects = () => {
  const location = useLocation();
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const { projects: technicalProjects = [] } = portfolioData || {};

  const funMessages = [
    "🚧 Whoops! This project is still under construction! The developers are busy drinking coffee and debugging! 🚧",
    "🎮 Level Locked! This project is still in development. Come back when you've collected more experience points! 🎮",
    "🔒 Top Secret! This project is currently in stealth mode. Check back later for the big reveal! 🔒",
    "⏳ Patience, young padawan! This project is still in the making. The force will be strong with this one! ⏳",
    "🎨 The artists are still painting this masterpiece! Check back soon for the grand reveal! 🎨"
  ];

  const handleProjectClick = (project) => {
    if (project.isTechnical) {
      const randomMessage = funMessages[Math.floor(Math.random() * funMessages.length)];
      setPopupMessage(randomMessage);
      setShowPopup(true);
    } else {
      window.open(project.link, "_blank");
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  };

  const isProjectsPage = location.pathname === "/projects";

  return (
    <section
      id="projects"
      className={`min-h-screen py-20 px-4 ${isProjectsPage ? "pt-32" : ""
        }`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technicalProjects?.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => handleProjectClick(project)}
                    className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                  >
                    <FaExternalLinkAlt />
                    <span>View Project</span>
                  </button>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300"
                  >
                    <FaGithub />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {!isProjectsPage && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Consulting Case Studies</h2>
            <div className="relative">
              <Slider {...settings} className="case-study-slider">
                {caseStudies.map((study, index) => (
                  <div key={index} className="px-4">
                    <div className="bg-gray-900 rounded-md overflow-hidden">
                      <div className="md:flex">
                        <div className="md:w-2/5">
                          <div className="h-full">
                            <img
                              src={study.image}
                              alt={study.imageAlt}
                              className="w-full h-[550px] object-contain bg-gray-800"
                            />
                          </div>
                        </div>
                        <div className="md:w-3/5 p-8">
                          <div className="max-w-2xl">
                            <h3 className="text-2xl font-semibold mb-4">{study.name}</h3>
                            <p className="text-gray-300 mb-6 text-lg">{study.description}</p>
                            <div className="mb-6">
                              <h4 className="text-lg font-semibold mb-3 text-yellow-500">Key Impact</h4>
                              <ul className="list-disc list-inside text-gray-300 space-y-2">
                                {study.impact.map((point, i) => (
                                  <li key={i} className="text-base">{point}</li>
                                ))}
                              </ul>
                            </div>
                            <div className="mb-6">
                              <h4 className="text-lg font-semibold mb-3 text-yellow-500">Tools Used</h4>
                              <p className="text-gray-300 text-base">{study.tools}</p>
                            </div>
                            <Link
                              to={`/case-study/${study.id}`}
                              className="inline-block text-yellow-500 hover:underline text-lg"
                            >
                              View Full Case Study →
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        )}
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-md w-full mx-4 relative"
          >
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <IoMdClose size={24} />
            </button>
            <p className="text-center text-lg font-medium mb-4">{popupMessage}</p>
            <div className="flex justify-center">
              <button
                onClick={() => setShowPopup(false)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Got it!
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Projects;
