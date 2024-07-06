import axios from "axios";
const api = axios.create({
  baseURL: `https://keemokazi-backend.vercel.app`,
  // baseURL: `https://keemokazibackend.vercel.app`,
  // baseURL: `http://localhost:4000`,
  headers: {
    "Content-Type": "Application/json",
  },
});
export default api;
