import React, { useEffect, useState } from 'react'
import '../../Styles/User/LoginSignup.scss'
import { TfiEmail } from "react-icons/tfi";
import { TfiLock } from "react-icons/tfi";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { app } from '../../../Firebase'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { logIn } from '../../Redux/slices/UserSlice';
import { useDispatch, useSelector } from 'react-redux';

const LoginSignup = () => {

    const [login, setLogin] = useState(false)
    const [hide, setHide] = useState(true)
    const [details, setDetails] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState({
        email: '',
        password: ''
    })

    const user = useSelector(state => state.userSlice)
    const dispatch = useDispatch()

    const auth = getAuth(app)

    const validation = () => {
        if (details.email.length > 0 && details.password.length > 5 && details.email.includes('@')) {
            console.log('ok')
            setError({
                email: '',
                password: ''
            })

            return true
        } else {
            console.log('not ok')
            setError({
                password: 'Password Required.',
                email: 'Email Required.'
            })
            if (details.email.length == 0 && details.password.length >5) {
                setError({
                    password: '',
                    email: 'Email Required.'
                })
            }
            if (details.email.length>0 && details.password.length <5) {
                setError({
                    email: '',
                    password: 'Minimum 6 characters.'
                })
            }
            if(details.email.length > 0 && details.password.length >5) {
                if(!details.email.includes('@')) {
                    setError({
                        email: 'Invalid Email.',
                        password: ''
                    })
                }
            }
            return false
        }
    }

    const signUpUser = () => {
        console.log('signUp')
        const validate = validation()
        if (validate) {
            createUserWithEmailAndPassword(auth, details.email, details.password)
                .then(data => {
                    console.log(data)
                    dispatch(logIn({
                        email: data.user.email,
                        uid: data.user.uid,
                        displayName: data.user.displayName,
                        photoURL: data.user.photoURL
                    }))
                })
                .catch(e => console.log(e))
        }
    }
    const logInUser = () => {
        console.log('login')
        const validate = validation()
        if (validate) {
            signInWithEmailAndPassword(auth, details.email, details.password)
                .then(data => {
                    console.log(data)
                    dispatch(logIn({
                        email: data.user.email,
                        uid: data.user.uid,
                        displayName: data.user.displayName,
                        photoURL: data.user.photoURL
                    }))
                })
                .catch(e => console.log(e))
        }
    }

    useEffect(() => {
        console.log(details)
    }, [details])

    useEffect(() => {
        console.log(user)
    }, [user])

    return (
        <div className='LoginSignup'>
            <h1>{login ? 'Login' : 'Signup'}</h1>
            <label htmlFor="email">Email <em>{error.email && error.email}</em></label>
            <div className="inp">
                <TfiEmail className='mail' />
                <input type="email" name="email" placeholder='Enter your Email' onChange={(e) => setDetails(prev => ({ ...prev, email: e.target.value }))} />
            </div>
            <label htmlFor="password">Password <em>{error.password && error.password}</em></label>
            <div className="inp">
                <TfiLock />
                <input type={hide ? 'password' : 'text'} name="password" placeholder={login ? 'Enter your Password' : 'Create new Password'} onChange={(e) => setDetails(prev => ({ ...prev, password: e.target.value }))} />
                <div className="eye" onMouseDown={() => setHide(false)} onMouseUp={() => setHide(true)}
                >
                    {
                        hide ? (<FaRegEye />) : (<FaRegEyeSlash />)
                    }
                </div>
            </div>
            {
                login ? (<button onClick={logInUser}>Login</button>) : (<button onClick={signUpUser}>Signup</button>)
            }
            {/* <a>Forgot your Password?</a> */}
            <p>or</p>
            <button onClick={() => setLogin(prev => !prev)}>{login ? 'Create New Account' : 'Already have an Account'}</button>
            {/* <div className="Modal">
                {
                    error.email && <p>Invalid Email</p>
                }{
                    
                    error.password && <p>Invalid Password</p>
                }
            </div> */}
        </div>
    )
}

export default LoginSignup