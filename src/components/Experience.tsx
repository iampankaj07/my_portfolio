import { useEffect, useState } from "react";
import { FaBriefcase } from "react-icons/fa";
import { getExperiences } from "../services/experienceServices";

interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
}

const Experience = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const data = await getExperiences();
        setExperiences(data);
      } catch (error) {
        console.error("Error fetching experiences:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchExperiences();
  }, []);

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
      {experiences.length > 0 && (
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Tech Stack</h2>
        )}
        {loading ? (
          <p className="text-center text-gray-600">Loading experiences...</p>
        ) : (
          <div className="max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative pl-8 pb-12 last:pb-0">
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
                  <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
