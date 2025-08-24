import './LoginSignup.css'
import user_icon from '../../assets/email.png'
import email_icon from '../../assets/password.png'
import password_icon from '../../assets/person.png'
import { useState } from 'react'
const LoginSignup = () => {
    const [action , setAction] = useState("Sign Up");
    return (
        <div>
            <div className='container'>
                <div className="header">
                    <div className="text">{action}</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                   {
                    action==="Sign Up"? <div className="input">
                        <img src={user_icon} alt="" />
                        <input type="text" placeholder='Name'/>
                    </div>:null
                   }
                    <div className="input">
                        <img src={email_icon} alt="" />
                        <input type="email" placeholder='Email id'/>
                    </div>
                    <div className="input">
                        <img src={password_icon} alt="" />
                        <input type="password" placeholder='Password' />
                    </div>
                </div>
               {
                action==="Login"? <div className="forgot-password">
                      Lost Password? <span>Click Here!</span>
                </div>:null
               }
                <div className="submit-container">
                    <div className={action==='Login'?"submit grey":"submit"} onClick={() => setAction("Sign Up")}>Sign up</div>
                    <div className={action==='Sign Up'?"submit grey":"submit"} onClick={() => setAction("Login")}>Login</div>
                </div>
            </div>

        </div>
    )
}
export default LoginSignup