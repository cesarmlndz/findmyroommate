import React from 'react'
import { auth, provider } from "../config/firebase"
import { signInWithPopup} from "firebase/auth"
import { useNavigate } from 'react-router-dom'
import googleLogo from '../icons/google-logo.png'
import '../css/Login.css'

export default function Login() {
   const navigate = useNavigate()

   const signInWithGoogle =  async () => {
        const result = await signInWithPopup(auth, provider)

        navigate("/")
   }

  return (
    <div className='login-page'>
        <div className='login-card' onClick={signInWithGoogle}>
            <div className='google-image'>
              <img src={googleLogo}/>
            </div>
            <div className='sign-up-text'>
              <h1>Sign in with Google</h1>
            </div>
          </div>
    </div>
  )
}