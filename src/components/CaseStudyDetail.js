import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { caseStudies } from "../data/caseStudies";
import { ThemeContext } from "../context/ThemeContext";

const CaseStudyDetail = () => {
  const { id } = useParams();
  const { theme } = useContext(ThemeContext);
  const study = caseStudies.find(study => study.id === id);

  if (!study) {
    return (
      <div className={`min-h-screen pt-24 px-4 md:px-8 lg:px-16 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
        <div className="container mx-auto text-center">
          <h1 className={`text-3xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Case Study Not Found</h1>
          <Link to="/case-studies" className={`${theme === 'dark' ? 'text-yellow-500 hover:text-yellow-400' : 'text-blue-600 hover:text-blue-500'}`}>
            Back to Case Studies
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen pt-24 px-4 md:px-8 lg:px-16 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="container mx-auto max-w-6xl">
        <Link
          to="/case-studies"
          className={`inline-block mb-8 ${theme === 'dark' ? 'text-yellow-500 hover:text-yellow-400' : 'text-blue-600 hover:text-blue-500'}`}
        >
          ← Back to Case Studies
        </Link>

        <h1 className={`text-4xl font-bold mb-8 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{study.name}</h1>

        {study.embedUrl ? (
          <div className="w-full">
            <iframe
              src={study.embedUrl}
              width="100%"
              height="800px"
              frameBorder="0"
              allowFullScreen
              className={`rounded-lg shadow-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
              title={study.name}
            />
          </div>
        ) : (
          <div className="flex flex-col md:flex-row gap-8">
            {/* Image Section */}
            <div className="md:w-1/3">
              <div className={`rounded-lg overflow-hidden shadow-xl sticky top-8 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
                <img
                  src={study.detailImage}
                  alt={study.imageAlt}
                  className="w-full h-[calc(100vh-200px)] object-cover"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="md:w-2/3">
              <section className="mb-8">
                <h2 className={`text-2xl font-semibold mb-4 ${theme === 'dark' ? 'text-yellow-500' : 'text-blue-600'}`}>Overview</h2>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{study.overview}</p>
              </section>

              <section className="mb-8">
                <h2 className={`text-2xl font-semibold mb-4 ${theme === 'dark' ? 'text-yellow-500' : 'text-blue-600'}`}>Problem</h2>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{study.problem}</p>
              </section>

              <section className="mb-8">
                <h2 className={`text-2xl font-semibold mb-4 ${theme === 'dark' ? 'text-yellow-500' : 'text-blue-600'}`}>Solution</h2>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{study.solution}</p>
              </section>

              <section className="mb-8">
                <h2 className={`text-2xl font-semibold mb-4 ${theme === 'dark' ? 'text-yellow-500' : 'text-blue-600'}`}>Key Features</h2>
                <ul className={`list-disc list-inside space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  {study.keyFeatures.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </section>

              <section className="mb-8">
                <h2 className={`text-2xl font-semibold mb-4 ${theme === 'dark' ? 'text-yellow-500' : 'text-blue-600'}`}>Business Impact</h2>
                <ul className={`list-disc list-inside space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  {study.businessImpact.map((impact, index) => (
                    <li key={index}>{impact}</li>
                  ))}
                </ul>
              </section>

              <section className="mb-8">
                <h2 className={`text-2xl font-semibold mb-4 ${theme === 'dark' ? 'text-yellow-500' : 'text-blue-600'}`}>Tools & Approach</h2>
                <ul className={`list-disc list-inside space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  {study.toolsList.map((tool, index) => (
                    <li key={index}>{tool}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className={`text-2xl font-semibold mb-4 ${theme === 'dark' ? 'text-yellow-500' : 'text-blue-600'}`}>Project Status</h2>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{study.status}</p>
              </section>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseStudyDetail; 