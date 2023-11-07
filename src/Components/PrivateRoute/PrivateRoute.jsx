import { Navigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import PropTypes from 'prop-types'
import Lottie from "lottie-react";
import loader from '../../assets/Lotties/loader.json'

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth()


    if(loading){
        return <div className="flex justify-center mt-64"><Lottie className="w-40" animationData={loader}></Lottie></div>
    }
    if(user){
        return children
    }
    
    
    return(
        <Navigate to="/login"></Navigate>
    )
};
PrivateRoute.propTypes = {
    children: PropTypes.node
}

export default PrivateRoute;