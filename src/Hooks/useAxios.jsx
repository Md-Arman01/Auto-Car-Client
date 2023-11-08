import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const axiosSecure = axios.create({
    baseURL: 'https://assignment-11-server-phi-one.vercel.app',
    withCredentials: true,
  });

const useAxios = () => {
  const  user  = useContext(AuthContext)
  const logoutUser = user?.logoutUser || {}

  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        console.log("see error", error.response);
        if (error.response.status === 401 || error.response.status === 403) {
          logoutUser()
            .then(() => {
              // Sign-out successful.
            })
            .catch((error) => {
              // An error happened.
              console.log(error);
            });
        }
      }
    );
  }, []);
    return axiosSecure
};

export default useAxios;