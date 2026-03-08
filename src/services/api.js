import axios from "axios";

const API = axios.create({
  baseURL: "https://sales-analytics-backend-10.onrender.com",
});

export default API;