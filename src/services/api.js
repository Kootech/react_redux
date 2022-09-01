import axios from "axios";

const uri = "https://jsonplaceholder.typicode.com/posts";

export const getPosts = () => {
  const response = axios.get(uri, {
    params: {
      _limit: 20,
    },
  });
  if (response.data) {
    sessionStorage.setItem("posts", JSON.stringify(response.data));
  }
  return response;
};
