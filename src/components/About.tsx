import { useEffect, useState } from 'react';
import { FaCode, FaMobileAlt, FaRocket } from 'react-icons/fa'; // FontAwesome icons
import { fetchAboutSections, fetchAboutContent } from '../services/aboutServices'; // Import the service

interface AboutSection {
  id: string;
  title: string;
  description: string;
}

interface AboutContent {
  id: string;
  text: string;
}

const About = () => {
  const [sections, setSections] = useState<AboutSection[]>([]);
  const [content, setContent] = useState<AboutContent | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sectionsData = await fetchAboutSections();
        const contentData = await fetchAboutContent();
        setSections(sectionsData);
        setContent(contentData);
      } catch (error) {
        console.error("Error fetching About data:", error);
        setError("Failed to load About data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !content || sections.length === 0) {
    return <div>{error || "Error loading content"}</div>;
  }

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {sections.map((section) => (
            <div key={section.id} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                {section.title === "Flutter Expert" && <FaCode className="text-primary" size={24} />}
                {section.title === "Mobile First" && <FaMobileAlt className="text-primary" size={24} />}
                {section.title === "Performance Focused" && <FaRocket className="text-primary" size={24} />}
              </div>
              <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{section.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">{content.text}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
