import React from 'react'
import '../ForgotPage/ForgotPage.css'
import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { HiMail } from 'react-icons/hi';


const ForgotPage = () => {

  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }
  return(
    <div className="wrapper">
        <div className="container">
            <AiOutlineClose  className='Close-1'/>
            <div className="content">
                <form onSubmit={handleSubmit}>
                    <div className="Title-2">
                        <h1 className='frgtpass'>Forgot password</h1>
                    </div>
                    <div className="subTitle">
                        <h1 className="SubTitle">Enter your resgistered mail here</h1>
                    </div>
                    <label htmlFor="">Email</label>
                    <input className='Email-ID' type="email" placeholder='Enter your email...' value={email} /><HiMail className='Mail-ikon'/> <br />
                    <button type='submit' className="reset_Pass">Reset Password</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ForgotPage