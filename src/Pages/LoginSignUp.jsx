import React, { useState } from 'react'
import "./CSS/LoginSignUp.css"

const LoginSignUp = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    name:"",
    email: "",
    password: ""
  })
  const changeHandler = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
    const login = async() =>{
      console.log("Login Successfully", formData);
      let responseData;
      await fetch("http://localhost:4000/login",{
        method: "POST",
        headers:{
          Accept: "application/form-data",
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      .then((response)=>response.json())
      .then((data)=>responseData=data)

      if(responseData.success){
        localStorage.setItem("auth-token", responseData.token);
        window.location.replace("/");
      }else{
        alert(responseData.errors);
      }
    }
    const signup = async() =>{
      console.log("Registered Successfully", formData);
      let responseData;
      await fetch("http://localhost:4000/signup",{
        method: "POST",
        headers:{
          Accept: "application/form-data",
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      .then((response)=>response.json())
      .then((data)=>responseData=data)

      if(responseData.success){
        localStorage.setItem("auth-token", responseData.token);
        window.location.replace("/");
      }else{
        alert(responseData.errors);
      }
    }


  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
         {state === "Sign Up"? <input type='text' name='name' value={formData.name} onChange={changeHandler} placeholder='Enter your Name'/> : <></> }
          <input type='email' name='email' value={formData.email} onChange={changeHandler} placeholder='Email Address'/>
          <input type='password' name='password' value={formData.password} onChange={changeHandler} placeholder='Password'/>
        </div>
        <button onClick={()=>{state==="Login"? login() : signup()}}>{state==="Sign Up"? "Register" : "Login"}</button>
        {state === "Sign Up" ? <p className='loginsignup-login'>Already have an account?<span onClick={()=>{setState("Login")}}>Login Here</span></p> 
        : <p className='loginsignup-login'>Create an account?<span onClick={()=>{setState("Sign Up")}}>Click Here</span></p>} 
        <div className="loginsignup-agree">
          <input type='checkbox' name='' id=''/>
          <p>By Continuing, I agree to terms & Privacy Policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignUp