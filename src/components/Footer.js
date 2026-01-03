import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { portfolioData } from "../data/portfolio";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const { contact } = portfolioData;

  return (
    <footer className={`py-12 border-t ${theme === 'dark' ? 'bg-gray-900 border-gray-800 text-gray-300' : 'bg-gray-50 border-gray-200 text-gray-700'}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Brand */}
          <div>
            <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Utkarsh Gupta
            </h3>
            <p className="mb-4 text-sm leading-relaxed">
              Helping businesses solve complex problems through technology and strategic consulting.
            </p>
            <p className="text-sm">
              © {new Date().getFullYear()} Utkarsh Gupta.<br />All rights reserved.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className={`text-lg font-semibold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/" className="hover:text-blue-500 transition-colors">Home</a></li>
              <li><a href="/#about" className="hover:text-blue-500 transition-colors">About</a></li>
              <li><a href="/#projects" className="hover:text-blue-500 transition-colors">Projects</a></li>
              <li><a href="/case-studies" className="hover:text-blue-500 transition-colors">Case Studies</a></li>
              <li><a href="/#contact" className="hover:text-blue-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className={`text-lg font-semibold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Contact
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-blue-500" />
                <a href={`mailto:${contact.email}`} className="hover:text-blue-500 transition-colors">
                  {contact.email}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-blue-500" />
                <span>{contact.phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-blue-500" />
                <span>{contact.location}</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div>
            <h4 className={`text-lg font-semibold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Connect
            </h4>
            <p className="mb-6 text-sm">
              Open for collaborations and consulting opportunities. Let's build something great together.
            </p>
            <div className="flex space-x-4">
              {contact.socialLinks.linkedin && (
                <a
                  href={contact.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full transition-colors ${theme === 'dark' ? 'bg-gray-800 hover:bg-blue-600 text-white' : 'bg-gray-200 hover:bg-blue-600 hover:text-white text-gray-700'}`}
                >
                  <FaLinkedin size={20} />
                </a>
              )}
              {contact.socialLinks.github && (
                <a
                  href={contact.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full transition-colors ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-gray-200 hover:bg-gray-300 hover:text-black text-gray-700'}`}
                >
                  <FaGithub size={20} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
