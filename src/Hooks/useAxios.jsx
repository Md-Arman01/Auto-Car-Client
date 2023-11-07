import axios from "axios";
import { useEffect } from "react";
// import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
  });

const useAxios = () => {
  // const {logoutUser} = useAuth()
  // console.log(logoutUser)
  // const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        console.log("see error", error.response);
        if (error.response.status === 401 || error.response.status === 403) {
          // logoutUser()
          //   .then(() => {
          //     // Sign-out successful.
          //     navigate("/login");
          //   })
          //   .catch((error) => {
          //     // An error happened.
          //     console.log(error);
          //   });
        }
      }
    );
  }, []);
    return axiosSecure
};

export default useAxios;