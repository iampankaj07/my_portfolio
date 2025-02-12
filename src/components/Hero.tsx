import React, { useEffect, useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { getHeroData } from "../services/aboutServices"; // Assuming you have this service to fetch hero data

interface About {
  id:string;
  name: string;
  role: string;
  description: string;
  github: string;
  linkedin: string;
  email: string;
  profileImage: string;
}

const Hero = () => {
  // Use HeroData type instead of array
  const [heroData, setHeroData] = useState<About | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const data = await getHeroData();
        if (!data) {
          setError("No hero data found.");
        } else {
          setHeroData(data); // Set single object
          setError(null);
        }
      } catch (error) {
        console.error("Error fetching hero data:", error);
        setError("An error occurred while fetching hero data.");
      } finally {
        setLoading(false);
      }
    };

    fetchHeroData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !heroData) {
    return <div>{error || "Error loading hero data"}</div>;
  }

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm{" "}
              <span className="text-primary">{heroData.name}</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-6">
              {heroData.role}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-lg">
              {heroData.description}
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a
                href={heroData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <FaGithub size={24} />
              </a>
              <a
                href={heroData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href={`mailto:${heroData.email}`}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
                <img
                  src={heroData.profileImage}
                  alt={heroData.name}
                  className="w-full h-full object-cover"
                  style={{ objectFit: "cover" }}
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
