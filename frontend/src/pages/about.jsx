import React, { useEffect, useState } from "react";
import img1 from "../images/Profile_Pic.jpg";
import { api_url } from "../constant";

const About = () => {
  const [aboutData, setAboutData] = useState({});

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await fetch(`${api_url}/about`); // Make sure to use the correct URL
        const data = await response.json();
        setAboutData(data);
      } catch (error) {
        console.error("Error fetching about data:", error);
      }
    };

    fetchAboutData();
  }, []);

  return (
    <div className="flex items-center h-screen w-full justify-center">
      <div className="max-w-lg">
        <div className="bg-white shadow-lg rounded-lg py-6 px-4">
          <div className="photo-wrapper p-4">
            <img
              className="w-48 h-48 rounded-full mx-auto"
              src={img1}
              alt="Divyansh Gupta"
            />
          </div>
          <div className="p-4">
            <h3 className="text-center text-2xl text-gray-900 font-medium leading-8">
              {aboutData.name || "Divyansh Gupta"}
            </h3>
            <div className="text-center text-gray-400 text-sm font-semibold">
              <p>{aboutData.position || "Data Engineer"}</p>
            </div>
            <table className="text-sm my-4">
              <tbody>
                <tr>
                  <td className="px-4 py-3 text-gray-500 font-semibold">Address</td>
                  <td className="px-4 py-3">{aboutData.contact_info?.address || "Address not available"}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-500 font-semibold">Phone</td>
                  <td className="px-4 py-3">{aboutData.contact_info?.phone || "Phone not available"}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-500 font-semibold">Email</td>
                  <td className="px-4 py-3">{aboutData.contact_info?.email || "Email not available"}</td>
                </tr>
              </tbody>
            </table>
            <div className="text-center my-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

