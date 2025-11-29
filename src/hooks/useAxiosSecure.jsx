import axios from "axios";
import useAuth from "./useAuth";

const intance = axios.create({
  baseURL: "http://localhost:3000",
});

const useAxiosSecure = () => {
  const { user } = useAuth();

  // set token in the header for all the api call  using axiosSecure hook

  intance.interceptors.request.use((config) => {
    console.log(config);
    config.headers.Authorization = `Bearer ${user.accessToken}`;
    return config;
  });

  return intance;
};

export default useAxiosSecure;
