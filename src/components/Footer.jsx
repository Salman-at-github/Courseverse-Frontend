import React from "react";
import {FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex space-x-4">
          <a href="https://github.com/Salman-at-github" className="hover:text-gray-300">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/dev-salman1508/" className="hover:text-gray-300">
            <FaLinkedin size={24} />
          </a>
          <a href="/" className="hover:text-gray-300">
            <FaInstagram size={24} />
          </a>
        </div>
        <p className="text-sm mt-2">© 2023 CourseVerse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
