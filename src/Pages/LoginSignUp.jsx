import React from 'react'
import "./CSS/LoginSignUp.css"

const LoginSignUp = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type='text' placeholder='Enter your Name'/>
          <input type='email' placeholder='Email Address'/>
          <input type='password' placeholder='Password'/>
        </div>
        <button>Register</button>
        <p className='loginsignup-login'>Already have an account?<span>Login Here</span></p>
        <div className="loginsignup-agree">
          <input type='checkbox' name='' id=''/>
          <p>By Continuing, I agree to terms & Privacy Policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignUp