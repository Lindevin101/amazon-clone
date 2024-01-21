import axios from "axios";

const instance = axios.create({
  baseURL: "https://api-hwladzn5lq-uc.a.run.app",
  // "http://127.0.0.1:5001/clone-11e7e/us-central1/api"
});

export default instance;
