import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/e-clone-56597/us-central1/api",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "*",
  },
});

export default instance;
