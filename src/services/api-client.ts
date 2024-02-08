import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2b8b9e6d0be04778b31576550e367729",
  },
});
