import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
// import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
  });

const useAxios = () => {
  const  user  = useContext(AuthContext)
  const logoutUser = user?.logoutUser || {}
  console.log(logoutUser)
  // const navigate = useNavigate();

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
              // navigate("/login");
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