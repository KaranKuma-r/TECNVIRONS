import axios from "axios";

const API = axios.create({
  baseURL: "https://tecnvirons-backend.onrender.com/api"
});

export default API;