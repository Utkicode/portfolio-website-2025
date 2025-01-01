import { FiSettings } from "react-icons/fi";
import { useState } from "react";

const ThemeSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleThemeChange = (theme) => {
    // Set the theme class on the body
    document.body.className = theme;
    localStorage.setItem("theme", theme); // Store the theme in localStorage
  };

  return (
    <div className="fixed top-1/2 right-5 transform -translate-y-1/2 z-50">
      {/* Gear Button */}
      <button
        className="p-3 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FiSettings size={24} />
      </button>

      {/* Theme Options */}
      {isOpen && (
        <div className="mt-4 bg-white shadow-md rounded-lg p-4 flex flex-col space-y-2">
          <button
            className="bg-orange-400 text-white py-2 px-4 rounded hover:bg-orange-600"
            onClick={() => handleThemeChange("default")}
          >
            Default
          </button>
          <button
            className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-800"
            onClick={() => handleThemeChange("dark")}
          >
            Dark
          </button>
          <button
            className="bg-blue-400 text-white py-2 px-4 rounded hover:bg-blue-600"
            onClick={() => handleThemeChange("blue")}
          >
            Blue
          </button>

          <button
            className="bg-pink-400 text-white py-2 px-4 rounded hover:bg-pink-600"
            onClick={() => handleThemeChange("pink")}
          >
            Pink
          </button>
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
