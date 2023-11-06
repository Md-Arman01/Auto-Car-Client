import { createContext, useEffect, useState} from "react";
import PropTypes from 'prop-types'
import auth from "../firebase/Firebase.confiq";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const loginWithGoogle =() => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const loginWithGithub = ()=> {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }
    const logoutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    

    const authInfo = {
        user,
        setUser,
        createUser,
        loginUser,
        logoutUser,
        loginWithGoogle,
        loginWithGithub,
        loading




    }

    useEffect(()=> {

            const unSubscribe = onAuthStateChanged(auth, (user) => {
                setLoading(false)
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