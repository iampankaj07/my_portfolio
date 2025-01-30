// import React from 'react';
import { FaEnvelope, FaGithub, FaLink, FaLinkedin } from 'react-icons/fa';
import profileImage from '../assets/profile.jpg'; // Adjust path if necessary


const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm{' '}
              <span className="text-primary">
                Pankaj Dulal
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-6">
              Flutter Developer with 4+ years of experience
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-lg">
              I craft beautiful, high-performance mobile applications using Flutter.
              Passionate about creating exceptional user experiences and solving complex problems.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
            <div className="flex space-x-4 justify-center md:justify-start">
              <a
                href="https://github.com/pankajdulal"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/pankajdulal"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="mailto:contact@pankajdulal.com"
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <FaEnvelope size={24} />
              </a>
            </div>

            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
                <img
                
                 src={profileImage}
                  alt="Pankaj Dulal"
                  className="w-full h-full object-cover"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;