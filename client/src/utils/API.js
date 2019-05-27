import axios from "axios";
export default {
  // Save message to the database
  saveMessage: function (message) {
    return axios.post("/api/message", message);
  }
};
