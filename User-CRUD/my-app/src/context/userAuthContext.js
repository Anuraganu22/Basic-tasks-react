import { useContext, useEffect, useState } from "react";
import { auth} from "../firebase";
import{createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword,} from 'firebase/auth'

export function userAuthContextProvider({children})
{
const [user,setUser]=useState('');
// signup function
function signup(email,password){
    return createUserWithEmailAndPassword(auth,email,password)
}
//login function
function login(email,password){
    return signInWithEmailAndPassword(auth,email,password)
}
useEffect(()=>{
    const unSubscribe =onAuthStateChanged(auth,(currentuser)=>{
        setUser(currentuser)
    })
return()=>{
    unSubscribe();
}
},[])
return<userAuthContext.Provider value={{signup,login}}>{children}</userAuthContext.Provider>
}
export function userAuth(){
    return useContext(userAuthContext)
}