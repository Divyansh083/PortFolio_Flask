import React from "react";
import { Link } from "react-router-dom";

const ExperienceCard = ({ experience }) => {
  return (
    <Link
      to="#"
      className="flex flex-col items-center bg-white border border-gray-500 rounded-lg shadow-md md:flex-row md:max-w-xl transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out fade-in h-64" // Changed border to gray-500 for a grey border
    >
      <div className="flex flex-col justify-between p-4 leading-normal h-full overflow-hidden"> {/* Added overflow-hidden */}
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-roboto transition-colors duration-300 ease-in-out hover:text-blue-600">
          {experience.title || experience.company || "Unknown Title"}
        </h5>

        <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
          <span className="font-semibold">Internship Duration:</span>{" "}
          {experience.duration}
        </p>
        <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
          <span className="font-semibold">Position:</span> {experience.position}
        </p>
        <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
          <span className="font-semibold">Location:</span> {experience.location}
        </p>
        <div className="mt-2 flex-grow overflow-y-auto"> {/* Allow vertical scrolling */}
          <p className="font-semibold">Key Responsibilities:</p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-400">
            {experience.responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
};

export default ExperienceCard;
