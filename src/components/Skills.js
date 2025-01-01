const Skills = () => {
    const services = [
      {
        title: "Backend Development",
        description:
          "Building robust and scalable backend solutions with Java, Spring Boot, and RESTful APIs.",
        icon: "🔧",
      },
      {
        title: "Frontend Development",
        description:
          "Crafting responsive and interactive UIs using React.js and modern JavaScript.",
        icon: "🎨",
      },
      {
        title: "Database Management",
        description:
          "Expertise in relational and NoSQL databases such as MySQL and MongoDB.",
        icon: "💾",
      },
      {
        title: "Cloud Integration",
        description:
          "Integrating cloud solutions using AWS services to enhance application performance.",
        icon: "☁️",
      },
      {
        title: "DevOps Practices",
        description:
          "Streamlining CI/CD pipelines and deployment workflows with Jenkins and Docker.",
        icon: "🚀",
      },
      {
        title: "AI and Automation",
        description:
          "Implementing AI-driven features and exploring innovations with GenAI tools.",
        icon: "🤖",
      },
    ];
  
    return (
      <section id="skills" className="py-20 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">My Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="card shadow-md rounded-lg p-8 hover:shadow-lg transition-shadow bg-gradient-to-r from-blue-100 to-blue-200"
              >
                <div className="text-5xl mb-4 !text-black">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-2 !text-black">{service.title}</h3>
                <p className="!text-black">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;
  