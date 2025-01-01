import React from "react";

const About = ({ theme }) => {
  return (
    <section
      id="about"
      className={`py-20 ${
        theme === "dark" ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10 px-5">
        {/* Profile Picture */}
        <div className="flex-shrink-0">
          <img
            src="/images/Profile.png"
            alt="Profile"
            className="rounded-lg shadow-lg w-64 h-64 object-cover mx-auto lg:mx-0"
          />
        </div>

        {/* About Text */}
        <div className="text-center lg:text-left">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="mb-6">
            Hi! My name is{" "}
            <span
              className={`font-semibold ${
                theme === "dark" ? "text-pink-400" : "text-pink-500"
              }`}
            >
              Utkarsh Gupta
            </span>
            . I am a passionate Full Stack Java Developer with over 3 years of experience in
            designing and developing cloud-based solutions, RESTful APIs, and scalable applications
            using <strong>Java</strong>, <strong>Spring Boot</strong>, and <strong>React.js</strong>.
          </p>
          <p className="text-lg leading-relaxed">
            I specialize in building robust backend systems, architecting efficient microservices, 
            and enhancing user experiences through responsive frontend designs. My expertise extends 
            to implementing CI/CD pipelines and optimizing application performance for high traffic systems.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            {/* Download CV Button */}
            <a
              href="https://drive.google.com/file/d/17ojbF_N-aUtY3Ae2Jas3BTxS3EMxoZQy/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-3 rounded-lg text-lg font-semibold text-white shadow-lg transition transform hover:scale-105 active:translate-y-1 bg-gradient-to-r from-purple-600 to-indigo-500 hover:shadow-xl`}
            >
              Download CV
            </a>

            {/* Hire Me Button */}
            <a
              href="#contact"
              className={`px-6 py-3 rounded-lg text-lg font-semibold text-white shadow-lg transition transform hover:scale-105 active:translate-y-1 bg-gradient-to-r from-purple-600 to-indigo-500 hover:shadow-xl`}
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
