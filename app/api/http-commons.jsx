import axios from "axios";

export default axios.create({
  baseURL: "https://react-ui-ff2e7-default-rtdb.firebaseio.com/",
  headers: {
    "Content-type": "application/json"
  }
});