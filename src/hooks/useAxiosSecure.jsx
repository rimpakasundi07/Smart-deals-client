import axios from "axios";

const intance = axios.create({
  baseURL: "http://localhost:3000",
});

const useAxiosSecure = () => {
  // set token in the header for all the api call
  // using axiosSecure hook
  return intance;
};

export default useAxiosSecure;
