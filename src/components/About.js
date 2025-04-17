import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
        >
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Hi, I'm <span className="font-semibold text-blue-600 dark:text-blue-400">Utkarsh Gupta</span> — a Full Stack Java Developer with 3+ years of experience building scalable apps using Java, Spring Boot, and React.js.
            </p>

            <p className="text-lg leading-relaxed">
              While I've delivered clean, efficient code and robust backend systems, I've found my true strength lies in solving real business problems, collaborating across teams, and enhancing user experience. This has inspired my transition into Product Support Consulting.
            </p>

            <p className="text-lg leading-relaxed">
              I'm passionate about bridging the gap between technology and user needs—using my dev background to troubleshoot effectively, analyze data, and improve customer journeys. Backed by Google Ads certification, IT consulting experience, and self-driven case studies, I'm ready to drive impact at the intersection of tech and strategy.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
