import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card flex flex-col items-start bg-white border border-gray-500 rounded-lg shadow-md w-80 hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
      {/* <img
        className="object-cover w-full h-40 rounded-t-lg"  // Set a consistent image height
        src={project.image} // If you have an image field, else remove this line
        alt={project.title}
      /> */}
      <div className="flex flex-col justify-between p-4 leading-normal w-full h-full overflow-hidden">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 text-center">
          {project.title}
        </h5>
        <p className="mb-1 font-normal text-gray-700">
          <span className="font-semibold">Tech Stack:</span> {project.technologies}
        </p>
        <p className="mb-1 font-normal text-gray-700">
          <span className="font-semibold">Duration:</span> {project.date}
        </p>
        <div className="mt-2">
          <p className="font-semibold">Key Responsibilities:</p>
          <ul className="list-disc list-inside text-gray-700">
            {project.description.map((responsibility, index) => (
              <li key={index} className="text-sm">
                {responsibility}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
