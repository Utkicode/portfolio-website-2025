import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Utkarsh Gupta. All rights reserved.
        </p>
        <div className="flex justify-center mt-4 space-x-4">
          <a
            href="https://linkedin.com/in/utkarsh-gupta-b17a44192"
            className="text-yellow-500 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/utkicode"
            className="text-yellow-500 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="mailto:utkarsh2255.iimt@gmail.com"
            className="text-yellow-500 hover:text-white"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
