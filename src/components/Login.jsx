import React from 'react'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';
import { getAuth } from "firebase/auth";


const Login = () => {

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
const handleLogin = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
        const user = result.user;
        console.log(user)
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
}

  return (
    <div className='h-screen w-full flex gap-10 items-center justify-center bg-slate-200'>
        <h1 className='text-lg'>Simple Login with Firebase</h1>
        <button className="bg-blue px-8 py-2 text-white" onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
