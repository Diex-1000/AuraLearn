import axios from "axios";

const client = axios.create({
  baseURL: "https://moviles-2tjf.onrender.com/api/profiles", 
});

client.interceptors.request.use(async (config) => config);

export default client;
