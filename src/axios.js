import axios from "axios";
import React from "react";

const instance = axios.create({
  baseURL: "http://127.0.0.1:5001/clone-11e7e/us-central1/api",
});

export default instance;
