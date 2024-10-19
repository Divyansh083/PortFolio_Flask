import React, { useEffect, useState } from "react";

const Extracurricular = () => {
  const [activities, setActivities] = useState([]); // Initialize with an empty array

  useEffect(() => {
    const fetchExtracurricularActivities = async () => {
      try {
        const response = await fetch("http://localhost:5000/extracurricular"); // Adjust URL if needed
        const data = await response.json();
        setActivities(data.extracurricular_activities || []); // Set activities data to state
      } catch (error) {
        console.error("Error fetching extracurricular activities:", error);
      }
    };

    fetchExtracurricularActivities(); // Call the fetch function
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-white">
      <div className="extracurricular-card bg-white border border-gray-500 rounded-lg shadow-lg p-6 w-full max-w-md hover:shadow-xl transform transition-all duration-500 ease-in-out hover:scale-105 animate-fadeIn">
        <h2 className="text-3xl font-roboto font-bold text-center text-gray-900 mb-6">
          Extracurricular
        </h2>
        <ul className="list-disc list-inside text-gray-700 font-lora">
          {activities.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Extracurricular;
