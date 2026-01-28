import React from 'react'
import './SignUpBox.css'
import {useNavigate} from 'react-router-dom'

function SignUpBox() {
    const navigate = useNavigate()
  return (
    <div className=''>
    <div className='outerBox'>
        <div className="signUpBox">
            <h1 className='title-signUp'>Sign Up</h1>
            <input type='email' className="inputField" placeholder='Email Address'></input>
            <input type='password' className="inputField" placeholder='Password'></input>
            <button className='signUpButton'>Sign Up</button>
            <button className='guestLoginButton' 
            onClick={()=>navigate('/home')}
            >Guest Login</button>
        </div>
    </div>
    </div>
  )
}

export default SignUpBox