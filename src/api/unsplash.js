import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 87et9L7rpTJdzYlg9vf4IsANHDPa7Yb07JmN9aipbcI",
  },
});
