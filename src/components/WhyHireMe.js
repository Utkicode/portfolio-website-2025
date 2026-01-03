import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";
import { portfolioData } from "../data/portfolio";
import * as FaIcons from "react-icons/fa";

const WhyHireMe = () => {
    const { theme } = useContext(ThemeContext);
    const { cards = [] } = portfolioData.about || {};

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 50,
                damping: 20
            }
        },
        hover: {
            y: -10,
            boxShadow: theme === "dark"
                ? "0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.5)"
                : "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            transition: { type: "spring", stiffness: 300 }
        }
    };

    const getIcon = (iconName) => {
        const IconComponent = FaIcons[iconName];
        return IconComponent ? <IconComponent size={40} className="mb-4" /> : null;
    };

    return (
        <section
            id="why-hire-me"
            className={`py-20 ${theme === "dark" ? "bg-gray-800" : "bg-white"} transition-colors duration-300`}
        >
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                        Why Hire Me?
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover="hover"
                            className={`p-8 rounded-xl border ${theme === "dark"
                                ? "bg-gray-900 border-gray-700 text-gray-300"
                                : "bg-gray-50 border-gray-100 text-gray-700"
                                } transition-colors duration-300`}
                        >
                            <div className="text-blue-600 dark:text-blue-400">
                                {getIcon(card.icon)}
                            </div>
                            <h3 className={`text-xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                                {card.title}
                            </h3>
                            <p className="leading-relaxed">
                                {card.content}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-20 text-center"
                >
                    <h3 className={`text-2xl font-bold mb-8 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                        Featured Update
                    </h3>
                    <div className="flex justify-center">
                        <div className="rounded-xl overflow-hidden shadow-lg bg-white">
                            <iframe
                                src="https://www.linkedin.com/embed/feed/update/urn:li:share:7316685733824471040?collapsed=1"
                                height="263"
                                width="504"
                                frameBorder="0"
                                allowFullScreen=""
                                title="Embedded post"
                                className="max-w-full"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyHireMe;
