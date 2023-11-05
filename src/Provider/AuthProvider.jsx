import { createContext, useEffect, useState} from "react";
import PropTypes from 'prop-types'
import auth from "../firebase/Firebase.confiq";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const loginWithGoogle =() => {
        return signInWithPopup(auth, googleProvider)
    }
    const loginWithGithub = ()=> {
        return signInWithPopup(auth, githubProvider)
    }
    const logoutUser = () => {
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