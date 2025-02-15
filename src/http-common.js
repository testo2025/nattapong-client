import axios from "axios";

export default axios.create({
  baseURL: "https://nattapong-api.onrender.com",
  headers: {
    "Content-type": "application/json"
  }
});
