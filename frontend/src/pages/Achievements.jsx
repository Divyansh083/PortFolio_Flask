import React, { useEffect, useState } from "react";
import { api_url } from "../constant";

const Achievements = () => {
  const [achievements, setAchievements] = useState([]); // Initialize with an empty array

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const response = await fetch(`${api_url}/achievements`); // Adjust URL if needed
        const data = await response.json();
        setAchievements(data.achievements || []); // Set achievements data to state
      } catch (error) {
        console.error("Error fetching achievements data:", error);
      }
    };

    fetchAchievements(); // Call the fetch function
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-white">
      <div className="achievement-card bg-white border border-gray-500 rounded-lg shadow-lg p-6 w-full max-w-md hover:shadow-xl transform transition-all duration-500 ease-in-out hover:scale-105 animate-fadeIn mb-8">
        <h2 className="text-3xl font-roboto font-bold text-center text-gray-900 mb-6">
          Achievements
        </h2>
        <ul className="list-disc list-inside text-gray-700 font-lora">
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Achievements;
