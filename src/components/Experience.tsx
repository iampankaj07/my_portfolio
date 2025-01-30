import React from 'react';
// import { Briefcase } from 'lucide-react';
import { FaBriefcase } from 'react-icons/fa';

const experiences = [
  {
    company: 'TechCorp Solutions',
    position: 'Senior Flutter Developer',
    period: '2022 - Present',
    description: 'Leading the development of enterprise-level Flutter applications, mentoring junior developers, and implementing best practices.',
  },
  {
    company: 'Mobile Innovations Inc',
    position: 'Flutter Developer',
    period: '2020 - 2022',
    description: 'Developed and maintained multiple Flutter applications, implemented complex UI designs, and integrated various third-party services.',
  },
  {
    company: 'StartUp Tech',
    position: 'Junior Mobile Developer',
    period: '2019 - 2020',
    description: 'Started journey with Flutter, worked on UI components, and assisted in developing mobile applications.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {index !== experiences.length - 1 && (
                <div className="absolute left-[11px] top-0 h-full w-0.5 bg-primary"></div>
              )}
              <div className="absolute left-0 top-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                <FaBriefcase size={14} className="text-white" />
              </div>
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg ml-6">
                <div className="flex flex-wrap justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold">{exp.position}</h3>
                  <span className="text-primary text-sm font-medium">
                    {exp.period}
                  </span>
                </div>
                <h4 className="text-gray-600 dark:text-gray-300 mb-4">{exp.company}</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;