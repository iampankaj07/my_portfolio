import React from 'react';
import { FaCode, FaMobileAlt, FaRocket } from 'react-icons/fa'; // FontAwesome icons

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <FaCode className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Flutter Expert</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Specialized in building complex, production-ready Flutter applications
              with clean architecture and best practices.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <FaMobileAlt className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Mobile First</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Creating responsive and intuitive mobile experiences that work
              seamlessly across iOS and Android platforms.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <FaRocket className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Performance Focused</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Optimizing applications for speed and efficiency while maintaining
              high-quality user experiences.
            </p>
          </div>
        </div>
        
        <div className="mt-12 bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            With over 4 years of experience in Flutter development, I've had the
            privilege of working on diverse projects ranging from e-commerce
            applications to social networking platforms. My expertise includes
            Flutter, Dart, Firebase, REST APIs, and state management solutions.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I'm passionate about creating beautiful, performant applications that
            solve real-world problems. When I'm not coding, I enjoy contributing
            to the Flutter community through blog posts and open-source projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
