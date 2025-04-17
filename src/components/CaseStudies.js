import React from "react";
import { Link } from "react-router-dom";
import { caseStudies } from "../data/caseStudies";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/carousel.css";

const CaseStudies = () => {
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
    <div className="min-h-screen bg-gray-800 text-white pt-24 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center">Case Studies</h1>
        
        <div className="relative">
          <Slider {...settings} className="case-study-slider">
            {caseStudies.map((study, index) => (
              <div key={index} className="px-4">
                <div className="bg-gray-900 rounded-md overflow-hidden">
                  <div className="md:flex">
                    {/* Image Section */}
                    <div className="md:w-2/5">
                      <div className="h-full">
                        <img
                          src={study.image}
                          alt={study.imageAlt}
                          className="w-full h-[550px] object-contain bg-gray-800"
                        />
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="md:w-3/5 p-8">
                      <div className="max-w-2xl">
                        <h3 className="text-2xl font-semibold mb-4">{study.name}</h3>
                        <p className="text-gray-300 mb-6 text-lg">{study.description}</p>
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold mb-3 text-yellow-500">Key Impact</h4>
                          <ul className="list-disc list-inside text-gray-300 space-y-2">
                            {study.impact.map((point, i) => (
                              <li key={i} className="text-base">{point}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold mb-3 text-yellow-500">Tools Used</h4>
                          <p className="text-gray-300 text-base">{study.tools}</p>
                        </div>
                        <Link
                          to={`/case-study/${study.id}`}
                          className="inline-block text-yellow-500 hover:underline text-lg"
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
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center">All Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Link
                key={index}
                to={`/case-study/${study.id}`}
                className="block bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={study.image}
                    alt={study.imageAlt}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{study.name}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{study.description}</p>
                  <span className="text-yellow-500 inline-flex items-center">
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