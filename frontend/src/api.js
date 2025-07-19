// frontend/src/api.js
import axios from 'axios';

console.log("🔗 Using API Base URL:", process.env.REACT_APP_API_BASE_URL);

const API = axios.create({
  
  baseURL: process.env.REACT_APP_API_BASE_URL,
  
  withCredentials: true,
});

export default API;
