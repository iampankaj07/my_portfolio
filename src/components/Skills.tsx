import React, { useEffect, useState } from "react";
import { getSkills } from "../services/skillsServices"; // Replace with your actual service to get skills

interface Skill {
  id: string;
  name: string;
  image: string;
  description: string;
}

const Skills = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const data = await getSkills();  // Replace with Firebase function to fetch skills
        setSkills(data);
      } catch (error) {
        console.error("Error fetching skills:", error);
        setError("Failed to load skills. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
      {skills.length > 0 && (
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Tech Stack</h2>
        )}
        {loading ? (
          <p className="text-center text-gray-600">Loading skills...</p>
        ) : error ? (
          <p className="text-center text-red-600">{error}</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {skills.map((skill) => (
              <div key={skill.id} className="group flex flex-col items-center relative">
                <div className="mb-2">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <p className="text-center px-4">{skill.description}</p>
                </div>
                <span className="text-lg font-semibold mt-2">{skill.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
