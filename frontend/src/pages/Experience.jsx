// src/pages/Experience.js

import React, { useEffect, useState } from "react";
import ExperienceCard from "../components/ExperienceCard";
import { fetchExperience } from "../services/api";

const Experience = () => {
  const [experienceData, setExperienceData] = useState([]);

  useEffect(() => {
    const getExperienceData = async () => {
      try {
        const response = await fetchExperience();
        console.log("Fetched Experience Data:", response.data); // Debug line
        setExperienceData(response.data);
      } catch (error) {
        console.error("Error fetching experience data:", error);
      }
    };
    getExperienceData();
  }, []);

  return (
    <div className="flex flex-wrap items-center justify-center min-h-screen bg-white">
      {experienceData.map((exp, index) => (
        <div key={index} className="m-4 w-full sm:w-1/2 md:w-1/3">
          <ExperienceCard experience={exp} />
        </div>
      ))}
    </div>
  );
};

export default Experience;
