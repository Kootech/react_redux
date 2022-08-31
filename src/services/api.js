import axios from "axios";

const uri = "https://jsonplaceholder.typicode.com/posts";

export const getPosts = () =>
  axios.get(uri, {
    params: {
      _limit: 20,
    },
  });
