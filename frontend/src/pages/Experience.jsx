// src/pages/Experience.js

import React, { useEffect, useState } from "react";
import ExperienceCard from "../components/ExperienceCard";
// import { fetchExperience } from "../services/api";
import { api_url } from "../constant";

const Experience = () => {
  const [experienceData, setExperienceData] = useState([]);

  useEffect(() => {
    const getExperienceData = async () => {
      try {
        // const response = await fetchExperience();
        // console.log("Fetched Experience Data:", response.data);
        const response = await fetch(`${api_url}/experience`); // Use the correct URL
        const data = await response.json(); // Debug line
        setExperienceData(data);
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
