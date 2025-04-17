import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const WhyConsulting = () => {
  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
          >
            <FaArrowLeft className="mr-2" />
            Back to Home
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
        >
          <h1 className="text-4xl font-bold mb-8 text-center">My Journey to Consulting</h1>
          
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg"
            >
              <h2 className="text-2xl font-semibold mb-4">The Transition</h2>
              <p className="text-lg leading-relaxed">
                After over 3 years in software development, I found my biggest strengths lie not just in building systems—but in understanding user challenges, analyzing product issues, and collaborating across teams to solve real business problems. That insight led me to Product Support Consulting.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg"
            >
              <h2 className="text-2xl font-semibold mb-4">The Realization</h2>
              <p className="text-lg leading-relaxed">
                In my current role, I've often stepped beyond the developer scope—troubleshooting user issues, gathering feedback, improving support workflows, and working closely with QA and product teams. I realized I enjoy being at the intersection of product, user experience, and technology—making sure what we build actually solves what people need.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg"
            >
              <h2 className="text-2xl font-semibold mb-4">Why Product Support Consulting?</h2>
              <ul className="space-y-4 text-lg leading-relaxed">
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  Problem-solving with empathy and urgency
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  Analyzing data to find product improvement opportunities
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  Collaborating with stakeholders to improve customer experience
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  Bridging gaps between tech teams and business goals
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg"
            >
              <h2 className="text-2xl font-semibold mb-4">The Value Proposition</h2>
              <p className="text-lg leading-relaxed">
                This path lets me use my development background to understand technical complexities, while also working on the frontlines of product impact. I see it not just as a career shift, but as a meaningful way to deliver value through technology and insight—which is exactly what excites me most.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyConsulting; 