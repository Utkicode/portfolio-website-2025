import React from "react";
import { useParams, Link } from "react-router-dom";
import { caseStudies } from "../data/caseStudies";

const CaseStudyDetail = () => {
  const { id } = useParams();
  const study = caseStudies.find(study => study.id === id);

  if (!study) {
    return (
      <div className="min-h-screen bg-gray-800 text-white py-20 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold mb-6">Case Study Not Found</h1>
          <Link to="/#projects" className="text-yellow-500 hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-800 text-white py-20 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto max-w-6xl">
        <Link to="/#projects" className="text-yellow-500 hover:underline mb-8 inline-block">
          ← Back to Projects
        </Link>
        
        <h1 className="text-4xl font-bold mb-8">{study.name}</h1>

        <div className="md:flex gap-8">
          {/* Image Section */}
          <div className="md:w-1/3">
            <div className="rounded-lg overflow-hidden shadow-xl sticky top-8">
              <img 
                src={study.detailImage} 
                alt={study.imageAlt}
                className="w-full h-[calc(100vh-200px)] object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-2/3 mt-6 md:mt-0">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-yellow-500">Overview</h2>
              <p className="text-gray-300">{study.overview}</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-yellow-500">Problem</h2>
              <p className="text-gray-300">{study.problem}</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-yellow-500">Solution</h2>
              <p className="text-gray-300">{study.solution}</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-yellow-500">Key Features</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {study.keyFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-yellow-500">Business Impact</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {study.businessImpact.map((impact, index) => (
                  <li key={index}>{impact}</li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-yellow-500">Tools & Approach</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {study.toolsList.map((tool, index) => (
                  <li key={index}>{tool}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-yellow-500">Project Status</h2>
              <p className="text-gray-300">{study.status}</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetail; 