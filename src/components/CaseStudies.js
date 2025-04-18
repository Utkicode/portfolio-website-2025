import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { caseStudies } from "../data/caseStudies";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/carousel.css";
import { ThemeContext } from "../context/ThemeContext";

const CaseStudies = () => {
  const { theme } = useContext(ThemeContext);
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  };

  return (
    <div className={`min-h-screen pt-24 px-4 md:px-8 lg:px-16 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="container mx-auto">
        <h1 className={`text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Case Studies</h1>
        
        <div className="relative">
          <Slider {...settings} className="case-study-slider">
            {caseStudies.map((study, index) => (
              <div key={index} className="px-2 md:px-4">
                <div className={`rounded-md overflow-hidden ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
                  <div className="flex flex-col md:flex-row">
                    {/* Image Section */}
                    <div className="w-full md:w-2/5">
                      <div className="h-[300px] md:h-[550px]">
                        <img
                          src={study.image}
                          alt={study.imageAlt}
                          className={`w-full h-full object-contain p-4 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}
                        />
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full md:w-3/5 p-6 md:p-8">
                      <div className="max-w-2xl">
                        <h3 className={`text-xl md:text-2xl font-semibold mb-3 md:mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{study.name}</h3>
                        <p className={`mb-4 md:mb-6 text-base md:text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{study.description}</p>
                        <div className="mb-4 md:mb-6">
                          <h4 className={`text-base md:text-lg font-semibold mb-2 md:mb-3 ${theme === 'dark' ? 'text-yellow-500' : 'text-blue-600'}`}>Key Impact</h4>
                          <ul className={`list-disc list-inside space-y-1 md:space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                            {study.impact.map((point, i) => (
                              <li key={i} className="text-sm md:text-base">{point}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="mb-4 md:mb-6">
                          <h4 className={`text-base md:text-lg font-semibold mb-2 md:mb-3 ${theme === 'dark' ? 'text-yellow-500' : 'text-blue-600'}`}>Tools Used</h4>
                          <p className={`text-sm md:text-base ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{study.tools}</p>
                        </div>
                        <Link
                          to={`/case-study/${study.id}`}
                          className={`inline-block text-base md:text-lg ${theme === 'dark' ? 'text-yellow-500 hover:text-yellow-400' : 'text-blue-600 hover:text-blue-500'}`}
                        >
                          View Full Case Study →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Grid View of Case Studies */}
        <div className="mt-16">
          <h2 className={`text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>All Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {caseStudies.map((study, index) => (
              <Link
                key={index}
                to={`/case-study/${study.id}`}
                className={`block rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={study.image}
                    alt={study.imageAlt}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className={`text-lg md:text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{study.name}</h3>
                  <p className={`text-sm md:text-base mb-4 line-clamp-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{study.description}</p>
                  <span className={`inline-flex items-center text-sm md:text-base ${theme === 'dark' ? 'text-yellow-500' : 'text-blue-600'}`}>
                    Read More
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies; 