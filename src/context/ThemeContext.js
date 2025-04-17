import React, { createContext, useContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

const themes = {
  light: {
    colors: {
      primary: 'bg-gradient-to-br from-white to-gray-100',
      secondary: 'bg-gray-100',
      text: 'text-gray-800',
      accent: 'text-blue-600',
      border: 'border-gray-200',
    },
  },
  dark: {
    colors: {
      primary: 'bg-gradient-to-br from-gray-900 to-gray-800',
      secondary: 'bg-gray-800',
      text: 'text-gray-100',
      accent: 'text-blue-400',
      border: 'border-gray-700',
    },
  },
  pastelPink: {
    colors: {
      primary: 'bg-gradient-to-br from-pink-50 to-pink-100',
      secondary: 'bg-pink-100',
      text: 'text-gray-800',
      accent: 'text-pink-600',
      border: 'border-pink-200',
    },
  },
  pastelBlue: {
    colors: {
      primary: 'bg-gradient-to-br from-blue-50 to-blue-100',
      secondary: 'bg-blue-100',
      text: 'text-gray-800',
      accent: 'text-blue-600',
      border: 'border-blue-200',
    },
  },
  pastelGreen: {
    colors: {
      primary: 'bg-gradient-to-br from-green-50 to-green-100',
      secondary: 'bg-green-100',
      text: 'text-gray-800',
      accent: 'text-green-600',
      border: 'border-green-200',
    },
  },
  pastelPurple: {
    colors: {
      primary: 'bg-gradient-to-br from-purple-50 to-purple-100',
      secondary: 'bg-purple-100',
      text: 'text-gray-800',
      accent: 'text-purple-600',
      border: 'border-purple-200',
    },
  },
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('pastelPink');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'pastelPink';
    setCurrentTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const themeOrder = ['pastelPink', 'pastelBlue', 'pastelGreen', 'pastelPurple', 'light', 'dark'];
    const currentIndex = themeOrder.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themeOrder.length;
    const nextTheme = themeOrder[nextIndex];
    
    setCurrentTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, themes, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
