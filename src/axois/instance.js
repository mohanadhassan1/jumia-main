import axios from "axios";

const instance = axios.create({
  baseURL: "https://jumia-apis-37e7643eb63e.herokuapp.com",
});

export default instance;
