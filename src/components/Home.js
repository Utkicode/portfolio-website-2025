import React from "react";

const Home = ({ theme }) => {
  return (
    <section
      id="home"
      className="h-screen flex items-center"
      style={{
        backgroundImage:
          theme === "dark"
            ? "linear-gradient(135deg, #1e3a8a, #2c2c54)" // Gradient for dark theme
            : "linear-gradient(135deg, #f8b500, #f54ea2)", // Gradient for light theme
        color: "var(--text-color)", // Dynamic text color
      }}
    >
      <div className="container mx-auto text-center">
        {/* 3D Styled Title */}
        <h1
          className="text-4xl md:text-6xl font-bold relative inline-block"
          style={{
            textShadow: theme === "dark" ? "2px 2px 10px #000" : "2px 2px 10px #ccc",
          }}
        >
          Hi, I'm <span className="text-accent">Utkarsh Gupta</span>
        </h1>

        {/* Subtext */}
        <p className="mt-4 text-lg md:text-xl">
          Full Stack Java Developer specializing in optimized and scalable solutions.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center space-x-4">
          <a
            href="#projects"
            className="px-8 py-4 text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            style={{
              backgroundImage:
                theme === "dark"
                  ? "linear-gradient(45deg, #81c784, #66bb6a)"
                  : "linear-gradient(45deg, #ff9f43, #ff6b81)", // Button gradient
              color: "var(--button-text)",
              border: "none",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)", // Subtle shadow
            }}
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="px-8 py-4 text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            style={{
              backgroundImage:
                theme === "dark"
                  ? "linear-gradient(45deg, #64b5f6, #42a5f5)"
                  : "linear-gradient(45deg, #fbc2eb, #a18cd1)", // Alternative button gradient
              color: "var(--button-text)",
              border: "none",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)", // Subtle shadow
            }}
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
