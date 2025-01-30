import React from 'react';
// import { ExternalLink, Github as GitHub } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce App',
    description: 'A full-featured e-commerce application built with Flutter and Firebase, featuring real-time updates, cart management, and secure payments.',
    image: 'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&q=80&w=800',
    technologies: ['Flutter', 'Firebase', 'Stripe'],
    github: 'https://github.com/pankajdulal/ecommerce-app',
    demo: 'https://ecommerce-app.demo',
  },
  {
    title: 'Social Network',
    description: 'A social networking platform with real-time messaging, post sharing, and user interactions.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800',
    technologies: ['Flutter', 'Firebase', 'Cloud Functions'],
    github: 'https://github.com/pankajdulal/social-network',
    demo: 'https://social-network.demo',
  },
  {
    title: 'Task Manager',
    description: 'A beautiful and intuitive task management app with calendar integration and reminders.',
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=800',
    technologies: ['Flutter', 'SQLite', 'Provider'],
    github: 'https://github.com/pankajdulal/task-manager',
    demo: 'https://task-manager.demo',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                {/* <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <GitHub className="text-gray-900" size={20} />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <ExternalLink className="text-gray-900" size={20} />
                    </a>
                  </div>
                </div> */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;