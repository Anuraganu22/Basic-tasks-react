import { createContext, useEffect, useState,useContext } from "react";
import{createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged,GoogleAuthProvider,signInWithPopup} from 'firebase/auth'
import { auth} from "../firebase";

const userAuthContext=createContext();

export function UserAuthContextProvider({children}){
 const [user,setUser]=useState('')
    function SignUp(email,password){
        return createUserWithEmailAndPassword(auth,email,password)
    }
    function Login(email,password){
        return signInWithEmailAndPassword(auth,email,password)
    }

    function GoogleAuth(){
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider);
    }    
    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth,(currentuser)=>{
            setUser(currentuser)
        })
        return()=>{
            unsubscribe();
        }
    },[])
    return <userAuthContext.Provider value={{SignUp,Login,GoogleAuth}}>{children}</userAuthContext.Provider>
}
export function useUserAuth(){
    return useContext(userAuthContext)
}