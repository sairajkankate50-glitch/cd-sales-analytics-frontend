import axios from "axios";

const API = axios.create({
  baseURL: "https://sales-analytics-backend-dfnv.onrender.com",
});

export default API;