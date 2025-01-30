// import React from 'react';

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
  <a href="https://github.com/pankajdulal" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
    GitHub
  </a>
  <a href="https://linkedin.com/in/pankajdulal" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
    LinkedIn
  </a>
  <a href="mailto:contact@pankajdulal.com" className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
    Mail
  </a>
</div>

            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
                <img
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=800"
                  alt="Pankaj Dulal"
                  className="w-full h-full object-cover"
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