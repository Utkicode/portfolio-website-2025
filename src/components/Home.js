import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Home = () => {
  const { currentTheme, themes } = useContext(ThemeContext);
  const theme = themes[currentTheme];

  const getGradientOverlay = () => {
    switch (currentTheme) {
      case 'light':
        return 'from-white/50 to-gray-100/50';
      case 'dark':
        return 'from-gray-900/50 to-gray-800/50';
      case 'pastelPink':
        return 'from-pink-50/50 to-pink-100/50';
      case 'pastelBlue':
        return 'from-blue-50/50 to-blue-100/50';
      case 'pastelGreen':
        return 'from-green-50/50 to-green-100/50';
      case 'pastelPurple':
        return 'from-purple-50/50 to-purple-100/50';
      default:
        return 'from-pink-50/50 to-pink-100/50';
    }
  };

  const getButtonStyles = () => {
    switch (currentTheme) {
      case 'light':
        return {
          primary: 'border-gray-300 hover:bg-gray-100/50',
          secondary: 'bg-gray-100/80 hover:bg-gray-200/80'
        };
      case 'dark':
        return {
          primary: 'border-gray-600 hover:bg-gray-800/50',
          secondary: 'bg-gray-800/80 hover:bg-gray-700/80'
        };
      case 'pastelPink':
        return {
          primary: 'border-pink-300 hover:bg-pink-100/50',
          secondary: 'bg-pink-100/80 hover:bg-pink-200/80'
        };
      case 'pastelBlue':
        return {
          primary: 'border-blue-300 hover:bg-blue-100/50',
          secondary: 'bg-blue-100/80 hover:bg-blue-200/80'
        };
      case 'pastelGreen':
        return {
          primary: 'border-green-300 hover:bg-green-100/50',
          secondary: 'bg-green-100/80 hover:bg-green-200/80'
        };
      case 'pastelPurple':
        return {
          primary: 'border-purple-300 hover:bg-purple-100/50',
          secondary: 'bg-purple-100/80 hover:bg-purple-200/80'
        };
      default:
        return {
          primary: 'border-pink-300 hover:bg-pink-100/50',
          secondary: 'bg-pink-100/80 hover:bg-pink-200/80'
        };
    }
  };

  const buttonStyles = getButtonStyles();

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center ${theme.colors.primary} transition-colors duration-300 relative overflow-hidden`}
    >
      {/* Gradient overlay for enhanced effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${getGradientOverlay()} mix-blend-overlay`}></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1
            className={`text-5xl md:text-6xl font-bold mb-6 ${theme.colors.text} drop-shadow-lg`}
          >
            Hi, I'm Utkarsh Gupta
          </h1>
          <p className={`text-xl md:text-2xl mb-8 ${theme.colors.text} drop-shadow-sm`}>
            A passionate software developer and consultant
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#contact"
              className={`px-6 py-3 rounded-lg ${theme.colors.accent} border-2 ${buttonStyles.primary} transition-all duration-300 shadow-sm hover:shadow-md`}
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className={`px-6 py-3 rounded-lg ${buttonStyles.secondary} ${theme.colors.text} transition-all duration-300 shadow-sm hover:shadow-md`}
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
