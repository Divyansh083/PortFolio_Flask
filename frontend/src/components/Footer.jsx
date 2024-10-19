import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-100 rounded-lg shadow m-4 dark:bg-gray-100 border-4 border-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-600 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <Link
            to="http://localhost:3000/"
            className="hover:underline transition duration-300 ease-in-out text-blue-600 hover:text-blue-500"
          >
            DG™
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-600 dark:text-gray-400 sm:mt-0">
          <li>
            <Link
              to="https://www.linkedin.com/in/divyanshguptasde/"
              className="hover:underline me-4 md:me-6 transition duration-300 ease-in-out text-blue-600 hover:text-blue-500"
            >
              LinkedIn
            </Link>
          </li>
          <li>
            <Link
              to="https://leetcode.com/u/Divyansh_Gupta/"
              className="hover:underline me-4 md:me-6 transition duration-300 ease-in-out text-blue-600 hover:text-blue-500"
            >
              LeetCode
            </Link>
          </li>
          <li>
            <Link
              to="https://github.com/Divyansh083"
              className="hover:underline me-4 md:me-6 transition duration-300 ease-in-out text-blue-600 hover:text-blue-500"
            >
              GitHub
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
