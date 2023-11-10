import React from 'react'
import '../Login/Login.css'
import { useState } from 'react'
import GoogleLogo from './Assets/google-logo.png'
import MainLogo from './Assets/Main-Logo.png'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from "react-router-dom";
import { AiOutlineClose } from 'react-icons/ai';



const Login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }
  
  return (
    <div className='Wrapper'>
  
        <div className="welcome">
            <h1 className='Title'> <img src={MainLogo} width={25}/> Welcome back </h1>
            <h1 className='SubTitle'>Glad to see you again, Login to your account below</h1>
        </div>
        <div className="Container">
        
            <div className="Left">
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <label htmlFor="Email">Email ID</label>
                    <input className='Email' type="email" placeholder='Enter your Email ID' value={email} /> <br />
                    <h4>We’ll send you job notifications </h4>
                    <label htmlFor="Password">Password</label>
                    <input className='Password' type="Password" placeholder='Enter your password here' value={pass} /> <br />
                    <h4>Minimum 6 characters required <span className='Frgtpss'>Forgot Password?</span> </h4>
                    
                    
                    <button type= "submit" className='btn_Login'>Login</button>
                    <h4>Don’t have an account? <span className='Sign_up'> Signup here </span></h4>
                </form>
            </div>
            <div className="Gap">
            </div>
            <h2 className='OR'>Or</h2>
            <div className="Right">
            <AiOutlineClose className='Close'/>
                <div className="text">
                    <h2 className="Cntnue">Continue with</h2>
                </div>
                <button className='google-Logo'> <img src= {GoogleLogo} width={35}/>Google</button>
            </div>
        </div>
    </div>
  )
}

export default Login