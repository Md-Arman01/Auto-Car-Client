import { createContext, useEffect, useState} from "react";
import PropTypes from 'prop-types'
import auth from "../firebase/Firebase.confiq";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";



export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    console.log(user)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    

    const authInfo = {
        createUser,
        loginUser,
        

    }

    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
        })
        return ()=> {
            unSubscribe()
        }
    }, [])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,

}

export default AuthProvider;