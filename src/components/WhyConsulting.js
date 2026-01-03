import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import * as FaIcons from "react-icons/fa";
import { portfolioData } from "../data/portfolio";
import { ThemeContext } from "../context/ThemeContext";

const WhyConsulting = () => {
  const { consulting = {} } = portfolioData || {};
  const { journey = [] } = consulting;
  const { theme } = useContext(ThemeContext);

  const getIcon = (iconName) => {
    const IconComponent = FaIcons[iconName];
    return IconComponent ? <IconComponent size={24} /> : null;
  };

  return (
    <section className={`min-h-screen py-20 px-4 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link
            to="/"
            className={`inline-flex items-center text-lg font-medium mb-8 ${theme === 'dark' ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}
          >
            <FaArrowLeft className="mr-2" />
            Back to Home
          </Link>

          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Discovery to Delivery</h1>
            <p className={`text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              My journey from writing code to solving business problems.
            </p>
          </div>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className={`absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 transform md:-translate-x-1/2 ${theme === 'dark' ? 'bg-blue-900' : 'bg-blue-200'}`} />

          <div className="space-y-12">
            {journey?.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center`}
              >
                {/* Spacer for opposite side */}
                <div className="hidden md:block w-1/2" />

                {/* Timeline Node */}
                <div className={`absolute left-4 md:left-1/2 w-10 h-10 rounded-full flex items-center justify-center z-10 transform -translate-x-1/2 
                                    ${theme === 'dark' ? 'bg-blue-600 text-white border-4 border-gray-900' : 'bg-blue-500 text-white border-4 border-white shadow-lg'}`}>
                  {getIcon(item.icon)}
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className={`p-8 rounded-xl backdrop-blur-sm border shadow-lg hover:shadow-xl transition-all duration-300
                                        ${theme === 'dark'
                      ? 'bg-gray-800/80 border-gray-700 hover:border-blue-500/50'
                      : 'bg-white/80 border-gray-100 hover:border-blue-200'}`}>

                    <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                      {item.title}
                    </h3>

                    {item.content && (
                      <p className={`leading-relaxed text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                        {item.content}
                      </p>
                    )}

                    {item.points && (
                      <ul className="space-y-3 mt-4">
                        {item.points.map((point, i) => (
                          <li key={i} className="flex items-start">
                            <span className={`mr-2 mt-1.5 w-2 h-2 rounded-full ${theme === 'dark' ? 'bg-blue-400' : 'bg-blue-500'}`} />
                            <span className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyConsulting; 