import React, { useState } from 'react'
import '../../Styles/User/User.scss'
import LoginSignup from './LoginSignup'
import { useSelector } from 'react-redux'
import LoggedIn from './LoggedIn'

const User = () => {

  const user = useSelector(state => state.userSlice)

  const [loader, setLoader] = useState(false)

  return (
    <div className='User'>
      {
        !user.uid ? (
          <LoginSignup loader={loader} setLoader={setLoader} />
        ) : (
          <LoggedIn user={user} loader={loader} setLoader={setLoader} />
        )
      }
    </div>
  )
}

export default User