import axios from "axios";

let axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  "content-Type":"application/json"
});

export default axiosInstance;


//? for CRUD use this http verb