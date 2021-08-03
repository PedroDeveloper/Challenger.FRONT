import Axios from "axios";

const axios = Axios.create({
  baseURL: "https://challengertrelo.azurewebsites.net/",
  // baseURL: "http://localhost:63633/",
});

export default axios;
