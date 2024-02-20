import axios from "axios";

const instance = axios.create({
  baseURL: "https://jumia-apis-975b9bc92afd.herokuapp.com",
});

export default instance;
