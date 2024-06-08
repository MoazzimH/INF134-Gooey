import React, { useState } from 'react';
import './LoginSignup.css';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import { useNavigate } from 'react-router-dom';

const LoginSignup = () => {
    const [action, setAction] = useState("Login");
    const navigate = useNavigate(); 

    const handleLogin = () => {
        setAction("Login");
        navigate('/home'); 
    }

    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>Safe Space</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                <div className='input'>
                    <img src={email_icon} alt=''/>
                    <input type='email' placeholder='Email Id'/>
                </div>
                <div className='input'>
                    <img src={password_icon} alt=''/>
                    <input type='password' placeholder='Password'/>
                </div>
            </div>
            {action === "Sign Up" ? <div></div> : <div className='forgot-password'>Lost Password? <span>Click Here</span> </div>}
            <div className='submit-container'>
                <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={handleLogin}>Login</div>
            </div>
        </div>
    );
}

export default LoginSignup;
