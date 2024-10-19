import React, { useEffect, useState } from "react";

const EducationCard = ({ education }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Delay for fade-in effect
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-500 transition-transform transform duration-300 ease-in-out ${
        isVisible ? "opacity-100 animate-slideIn" : "opacity-0"
      }`}
      style={{ height: "300px" }} // Set a fixed height for all cards
    >
      <div className="p-6 transition-transform duration-300 ease-in-out transform hover:scale-105">
        <div className="font-bold text-2xl text-gray-800 mb-2">
          {education.institution}
        </div>
        <p className="text-gray-600 text-sm mb-1">{education.location}</p>
        <p className="text-gray-500 text-xs mb-4">{education.duration}</p>
        <p className="text-gray-800 text-lg mb-1">{education.degree}</p>
        <p className="text-gray-700 text-md mb-2">{education.field}</p>
        <p className="text-gray-500 text-sm">CGPA: {education.cgpa}</p>
      </div>
    </div>
  );
};

export default EducationCard;
