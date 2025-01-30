import React from 'react';

const skills = {
  'Mobile Development': [
    { name: 'Flutter', level: 95 },
    { name: 'Dart', level: 90 },
    { name: 'iOS', level: 75 },
    { name: 'Android', level: 75 },
  ],
  'Backend & Database': [
    { name: 'Firebase', level: 85 },
    { name: 'REST APIs', level: 85 },
    { name: 'GraphQL', level: 70 },
    { name: 'SQLite', level: 80 },
  ],
  'Tools & Others': [
    { name: 'Git', level: 90 },
    { name: 'CI/CD', level: 80 },
    { name: 'Testing', level: 85 },
    { name: 'UI/UX Design', level: 75 },
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, categorySkills]) => (
            <div key={category} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-6">{category}</h3>
              <div className="space-y-4">
                {categorySkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-primary">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div
                        className="bg-primary rounded-full h-2 transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;