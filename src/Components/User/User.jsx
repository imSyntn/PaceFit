import React from 'react'
import '../../Styles/User/User.scss'
import LoginSignup from './LoginSignup'
import { useSelector } from 'react-redux'
import LoggedIn from './LoggedIn'

const User = () => {

  const user = useSelector(state=> state.userSlice)

  return (
    <div className='User'>
        {
          !user.uid ? (
            <LoginSignup />
          ) : (
            <LoggedIn user={user} />
          )
        }
    </div>
  )
}

export default User