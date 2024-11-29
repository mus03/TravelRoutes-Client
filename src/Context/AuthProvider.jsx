import { createContext, useEffect, useState } from "react";
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut,GoogleAuthProvider,FacebookAuthProvider, signInWithPopup, onAuthStateChanged, updateProfile } from "firebase/auth";
import auth from "../firsebase/firebase.config";


export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();
const faceBookProvider = new FacebookAuthProvider()
const AuthProvider = ({children}) => {
    const[user,setUser] = useState()
    const [loading,setLoading] = useState(true)
//registration
   const createUser=(email,password)=>{
    setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
   }
   //login
   const login = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
   }
   
   
   //update Profile
   const update = (displayName,photoURL)=>{
    setLoading(true)
    return updateProfile(auth.currentUser, {
      displayName: displayName, photoURL: photoURL
    })
   }
  


   const google =()=>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
   }
   const faceBook =()=>{
    setLoading(true)
    return signInWithPopup(auth, faceBookProvider)
   }

   const logOut = ()=>{
    return signOut(auth)
}
  const authInfo = {
    user,
    setUser,
    createUser,
    login,
    logOut,
    google,
    faceBook,
    update,
    loading,
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
          setUser(currentUser);
          setLoading(false)
        } else {
            setUser(null)
        }
      });
      return ()=>{unsubscribe()}
  },[])



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;