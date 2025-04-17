import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaPalette } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const { currentTheme, themes, toggleTheme } = useContext(ThemeContext);
  const theme = themes[currentTheme];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(currentSection || "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, section) => {
    e.preventDefault();
    if (location.pathname === "/") {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setActiveSection(section);
      }
    } else {
      navigate("/", { state: { scrollTo: section } });
    }
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", section: "home" },
    { name: "About", section: "about" },
    { name: "Skills", section: "skills" },
    { name: "Projects", section: "projects" },
    { name: "Why Consulting", path: "/why-consulting" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Contact", section: "contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${theme.colors.primary} shadow-md`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className={`text-2xl font-bold ${theme.colors.accent}`}>
            Utkarsh Gupta
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              {navLinks.map((link) => (
                link.section ? (
                  <a
                    key={link.name}
                    href={`#${link.section}`}
                    onClick={(e) => handleNavClick(e, link.section)}
                    className={`${
                      activeSection === link.section
                        ? theme.colors.accent
                        : theme.colors.text
                    } hover:${theme.colors.accent} transition-colors`}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`${theme.colors.text} hover:${theme.colors.accent} transition-colors`}
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </nav>
            <button
              onClick={toggleTheme}
              className={`w-10 h-10 rounded-full flex items-center justify-center ${theme.colors.secondary} hover:${theme.colors.accent} transition-all duration-300 transform hover:scale-110`}
              aria-label="Toggle theme"
            >
              <FaPalette className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`w-10 h-10 rounded-full flex items-center justify-center ${theme.colors.secondary} hover:${theme.colors.accent} transition-all duration-300`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  link.section ? (
                    <a
                      key={link.name}
                      href={`#${link.section}`}
                      onClick={(e) => handleNavClick(e, link.section)}
                      className={`${
                        activeSection === link.section
                          ? theme.colors.accent
                          : theme.colors.text
                      } hover:${theme.colors.accent} transition-colors py-2`}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      key={link.name}
                      to={link.path}
                      className={`${theme.colors.text} hover:${theme.colors.accent} transition-colors py-2`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )
                ))}
                <button
                  onClick={toggleTheme}
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${theme.colors.secondary} hover:${theme.colors.accent} transition-all duration-300 transform hover:scale-110`}
                  aria-label="Toggle theme"
                >
                  <FaPalette className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
