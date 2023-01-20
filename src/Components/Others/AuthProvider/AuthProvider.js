import React, { createContext, useEffect, useState } from 'react';
import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithPopup,
} from "firebase/auth";
import app from '../../Firebase/firebase.config';
export const AuthContex = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
   
    //creating acc
    const createaccount = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //update name photourl
    const updatephoto = (profileInfo)=>{
        setLoading(true)
        return updateProfile(auth.currentUser,profileInfo)
    }

    //google login
    const withgoogle = (provider)=>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    //login
    const login = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //logout
    const logout = ()=>{
        window.location.reload(true)
        return signOut(auth)
    }

    //emaiverify  -assignment check korar jonno email send kora theke biroto theke user k bydefault vabe verify true false kore deya hobe
    // const verifyUser = ()=>{
    //     sendEmailVerification(auth.currentUser)
    // }

    //objerb
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser)
            setLoading(false)
        })

        return ()=>{
            unSubscribe()
        }
    },[])

    const authInfo = {
      user,
      login,
      logout,
      updatephoto,
      withgoogle,
      loading,
      setLoading,
      createaccount,
    };
    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;