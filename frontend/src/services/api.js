// src/services/api.js

import axios from 'axios';

const API = axios.create({
  baseURL: 'https://divyanshgupta-portfolio.onrender.com',  // Adjust this if your Flask app is running on a different port
});


// Fetch Education Data
export const fetchEducation = () => API.get('/education');

// Fetch Experience Data
export const fetchExperience = () => API.get('/experience');
