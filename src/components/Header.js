import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const { currentTheme, themes } = useContext(ThemeContext);
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
    <header className={`fixed top-0 left-0 right-0 z-50 ${theme.colors.primary} transition-colors duration-300`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className={`text-xl font-bold ${theme.colors.text}`}>Utkarsh Gupta</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path || `#${link.section}`}
                onClick={(e) => link.section && handleNavClick(e, link.section)}
                className={`text-sm font-medium transition-colors duration-300 ${
                  activeSection === link.section
                    ? theme.colors.accent
                    : theme.colors.text
                } hover:${theme.colors.accent}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FaTimes className={`w-6 h-6 ${theme.colors.text}`} />
            ) : (
              <FaBars className={`w-6 h-6 ${theme.colors.text}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden ${theme.colors.primary} transition-colors duration-300`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path || `#${link.section}`}
                  onClick={(e) => link.section && handleNavClick(e, link.section)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    activeSection === link.section
                      ? theme.colors.accent
                      : theme.colors.text
                  } hover:${theme.colors.accent}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
