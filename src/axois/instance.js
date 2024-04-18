import axios from "axios";

const instance = axios.create({
  baseURL: "https://jumia-apis-975b9bc92afd.herokuapp.com",
  // baseURL: "http://localhost:5000",
})

export default instance;
