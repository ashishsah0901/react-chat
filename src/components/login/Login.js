import { Button } from '@mui/material'
import React from 'react'
import './login.css'
import { auth, provider } from '../../firebase/firebase'
import { signInWithPopup } from '@firebase/auth'

const Login = () => {

    const signIn = () => {
        signInWithPopup(auth, provider)
            .catch((error) => alert(error.message));
    }

    return (
        <div className='login'>
            <div className="login_logo">
                <img src="https://upload.wikimedia.org/wikipedia/en/9/98/Discord_logo.svg" alt="" />
            </div>
            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
