import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/utkicode",
      icon: <FaGithub className="w-5 h-5" />,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/utkarsh-gupta-b17a44192/",
      icon: <FaLinkedin className="w-5 h-5" />,
    },
   
    {
      name: "Email",
      url: "utkarsh2255.iimt@gmail.com",
      icon: <FaEnvelope className="w-5 h-5" />,
    },
  ];

  return (
    <footer className={`py-8 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Social Links */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors duration-300 ${
                  theme === 'dark'
                    ? 'text-gray-400 hover:text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className={`text-sm ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            © {new Date().getFullYear()} Utkarsh Gupta. All rights reserved.
          </div>

          {/* Quick Links */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#about"
              className={`text-sm transition-colors duration-300 ${
                theme === 'dark'
                  ? 'text-gray-400 hover:text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              About
            </a>
            <a
              href="#projects"
              className={`text-sm transition-colors duration-300 ${
                theme === 'dark'
                  ? 'text-gray-400 hover:text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Projects
            </a>
            <a
              href="#contact"
              className={`text-sm transition-colors duration-300 ${
                theme === 'dark'
                  ? 'text-gray-400 hover:text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
