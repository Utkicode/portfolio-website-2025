import React, { useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FaPalette } from 'react-icons/fa';

const ThemeSwitcher = () => {
  const { currentTheme, themes, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  const themeColors = {
    light: 'bg-white text-gray-900',
    dark: 'bg-gray-900 text-white',
    pastelBlue: 'bg-blue-100 text-blue-900',
    pastelPink: 'bg-pink-100 text-pink-900',
    pastelGreen: 'bg-green-100 text-green-900',
    pastelPurple: 'bg-purple-100 text-purple-900',
  };

  return (
    <div className="fixed top-4 right-4 z-[100]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${
          themeColors[currentTheme]
        }`}
        aria-label="Theme switcher"
      >
        <FaPalette className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-lg shadow-xl overflow-hidden">
          {Object.entries(themes).map(([key, theme]) => (
            <button
              key={key}
              onClick={() => {
                toggleTheme(key);
                setIsOpen(false);
              }}
              className={`w-full px-4 py-2 text-left hover:bg-opacity-80 transition-colors duration-200 ${
                themeColors[key]
              } ${currentTheme === key ? 'ring-2 ring-blue-500' : ''}`}
            >
              {theme.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
