import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const useAuth = () => {
    const authUtilities = useContext(AuthContext)


    return authUtilities
};

export default useAuth;