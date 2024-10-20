import React, { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard"; // Ensure this path is correct
import { api_url } from "../constant";

const Projects = () => {
  const [projects, setProjects] = useState([]); // Initialize state as an empty array
  // const [loading, setLoading] = useState(true); // State to manage loading

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${api_url}/projects`); // Adjust the URL as needed
        const data = await response.json();
        setProjects(data); // Set the projects state with fetched data
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []); // Run once on component mount

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white"> {/* Centering the content */}
      <div className="flex flex-wrap justify-center space-x-4 space-y-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
