import React, { useState } from 'react'
import '../../Styles/User/LoginSignup.scss'
import { TfiEmail } from "react-icons/tfi";
import { TfiLock } from "react-icons/tfi";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

const LoginSignup = () => {
    const [login, setLogin] = useState(false)
    const [hide, setHide] = useState(true)
    return (
        <div className='LoginSignup'>
            <h1>{login ? 'Login' : 'Signup'}</h1>
            <label htmlFor="email">Email</label>
            <div className="inp">
                <TfiEmail className='mail' />
                <input type="email" name="email" placeholder='Enter your Email' id="" />
            </div>
            <label htmlFor="password">Password</label>
            <div className="inp">
                <TfiLock />
                <input type={hide ? 'password' : 'text'} name="password" placeholder={login ? 'Enter your Password' : 'Create new Password'} id="" />
                <div className="eye" onMouseDown={()=> setHide(false)} onMouseUp={()=> setHide(true)}
                 >
                    {
                        hide ? (<FaRegEye />) : (<FaRegEyeSlash />)
                    }
                </div>
            </div>
            {
                login ? (<button>Login</button>) : (<button>Signup</button>)
            }
            <a>Forgot your Password?</a>
            <button onClick={() => setLogin(prev => !prev)}>{login ? 'Create New Account' : 'Already have an Account'}</button>
        </div>
    )
}

export default LoginSignup