import React, { useState, useEffect } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("default");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "default"; // Default to "default"
    setTheme(storedTheme);
    document.body.className = storedTheme; // Apply the theme to the body
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "default" ? "dark" : "default";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.body.className = newTheme;
  };

  const handleNavItemClick = () => {
    setIsOpen(false); // Close the hamburger menu
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 py-4 px-6 shadow-lg transition-all backdrop-blur-md ${
        theme === "dark"
          ? "bg-gradient-to-r from-gray-800 via-purple-800 to-gray-800 text-gray-100"
          : "bg-gradient-to-r from-pink-100 via-white to-purple-100 text-gray-900"
      }`}
      style={{
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
        transform: "translateZ(0) perspective(1000px)",
      }}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Custom Logo with Glowing Gradient Effect */}
        <div
          className={`text-3xl font-extrabold transform transition-transform ${
            theme === "dark"
              ? "text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500"
              : "text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600"
          }`}
          style={{
            textShadow: theme === "dark"
              ? "0px 0px 15px rgba(255, 255, 255, 0.4)"
              : "0px 0px 15px rgba(0, 0, 0, 0.2)",
          }}
        >
          <a href="#home">U</a>
        </div>

        {/* Hamburger Menu (Mobile View) */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full sm:static sm:block sm:w-auto`}
        >
          <ul className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 text-lg font-medium">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`block px-4 py-2 rounded transition-all ${
                    theme === "dark"
                      ? "hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-400 hover:to-purple-500"
                      : "hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600"
                  }`}
                  onClick={handleNavItemClick}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Theme Switcher */}
        <button
          onClick={toggleTheme}
          className={`ml-4 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
            theme === "dark"
              ? "bg-gradient-to-r from-gray-800 to-gray-700 text-white"
              : "bg-gradient-to-r from-pink-200 to-purple-300 text-gray-900"
          }`}
          style={{
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </div>
    </header>
  );
};

export default Header;
