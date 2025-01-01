import React from "react";

const Projects = () => {
  const projects = [
    {
      name: "B2B & B2C Learning Platform",
      description: "A scalable platform built with Spring Boot and React.js.",
      link: "#",
    },
    {
      name: "Bug Tracking App",
      description: "Streamlined developer and QA workflows.",
      link: "#",
    },
    {
      name: "MongoDB POC",
      description: "Implemented features leveraging MongoDB Atlas Search.",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 md:px-8 lg:px-16 bg-gray-800 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-md hover:bg-gray-700 transition"
            >
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <p className="mt-2 text-gray-400">{project.description}</p>
              <a
                href={project.link}
                className="mt-4 inline-block text-yellow-500 hover:underline"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
