import React, { useEffect, useState } from "react";
import { api_url } from "../constant";

const Skills = () => {
  const [skills, setSkills] = useState({
    languages: [],
    developer_tools: [],
    technologies_frameworks: []
  }); // Initialize with an empty structure

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch(`${api_url}/skills`); // Adjust URL if needed
        const data = await response.json();
        setSkills(data); // Set skills data to state
      } catch (error) {
        console.error("Error fetching skills data:", error);
      }
    };

    fetchSkills(); // Call the fetch function
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="skills-card bg-white border border-gray-500 rounded-lg shadow-lg p-6 w-full max-w-md hover:shadow-xl transform transition-all duration-500 ease-in-out hover:scale-105">
        <h2 className="text-3xl font-roboto font-bold text-center text-gray-900 mb-6">
          Skills
        </h2>

        {/* Languages */}
        <div className="mb-4">
          <h3 className="text-xl font-roboto font-semibold text-gray-800 mb-2">Languages</h3>
          <p className="font-lora text-gray-700">{skills.languages.join(", ")}</p>
        </div>

        {/* Developer Tools */}
        <div className="mb-4">
          <h3 className="text-xl font-roboto font-semibold text-gray-800 mb-2">Developer Tools</h3>
          <p className="font-lora text-gray-700">{skills.developer_tools.join(", ")}</p>
        </div>

        {/* Technologies/Frameworks */}
        <div className="mb-4">
          <h3 className="text-xl font-roboto font-semibold text-gray-800 mb-2">Technologies/Frameworks</h3>
          <p className="font-lora text-gray-700">{skills.technologies_frameworks.join(", ")}</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
