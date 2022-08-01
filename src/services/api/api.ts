import axios from "axios";

export default axios.create({
  baseURL: "https://api.invertexto.com/v1/currency/",
  headers: {
    "Content-type": "application/json"
  }
});