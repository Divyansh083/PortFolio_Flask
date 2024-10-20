// src/pages/Education.js

import React, { useEffect, useState } from 'react';
import EducationCard from '../components/EducationCard';
import { api_url } from '../constant';

const Education = () => {
  const [educationData, setEducationData] = useState([]);

  useEffect(() => {
    const fetchEducationData = async () => {
      try {
        const response = await fetch(`${api_url}/education`); // Use the correct URL
        const data = await response.json();
        setEducationData(data);
      } catch (error) {
        console.error("Error fetching education data:", error);
      }
    };

    fetchEducationData();
  }, []);

  return (
    <div className="flex flex-wrap items-center justify-center min-h-screen bg-white">
      {educationData.map((edu, index) => (
        <div key={edu._id} className="m-4 w-full sm:w-1/2 md:w-1/3">
          <EducationCard education={{
            institution: edu.institution,
            location: edu.location,
            duration: edu.duration,
            degree: edu.degree,
            cgpa: edu.cgpa,
          }} />
        </div>
      ))}
    </div>
  );
};

export default Education;
