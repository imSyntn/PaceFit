import React, { useEffect, useState } from 'react'
import '../../Styles/User/LoggedIn.scss'
import img from '../../Assets/casual-man.jpg'
import { app } from '../../../Firebase'
import { updateProfile, signOut, getAuth, deleteUser } from 'firebase/auth'
import { logout, updateProfileInRedux } from '../../Redux/slices/UserSlice'
import { useDispatch } from 'react-redux'

const auth = getAuth(app)

const LoggedIn = ({ user }) => {

  const [updates, setUpdates] = useState({
    photoURL: '',
    displayName: ''
  })

  const dispatch = useDispatch()
  // const user = useSelector(state=> state.userSlice)

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        dispatch(logout())
      })
      // localStorage.re
  }

  const imgUploaded = (e) => {
    // console.log(e)
    setUpdates(prev => ({
      ...prev,
      photoURL: URL.createObjectURL(e.target.files[0])
    }))
  }

  const updateUserDetails = () => {
    const currentUser = auth.currentUser
    // e.preventDefault()
    updateProfile(currentUser, updates)
      .then(() => {
        dispatch(updateProfileInRedux({
          photoURL: currentUser.photoURL,
          displayName: currentUser.displayName
        }))
        // console.log('success')
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const deleteUserAccount = ()=> {
    const currentUser = auth.currentUser
    deleteUser(currentUser).then(()=> {
      dispatch(logout())
    }).catch((e)=> console.log(e))
  }

  // console.log('loggedin', user)

  // useEffect(() => {
  //   console.log(updates)
  // }, [updates])

  return (
    <div className='LoggedIn'>
      <div className="header">
        <h2>Hello {user.displayName || user.email.slice(0, user.email.indexOf('@'))}</h2>
        <button className='logout' onClick={signOutUser}>Log out</button>
      </div>
      <div className="updateProfile">
        <div className='form'>
          <img src={updates.photoURL || img} alt="" />
          {/* <input type="image" src={img} alt="" /> */}
          <div className="drop">
            <p>or <br />Drop a file</p>
            <input type="file" accept='.jpg, .jpeg, .png, .webm' name="" id="" onChange={(e) => imgUploaded(e)} />
          </div>
          <input type="text" name="" id="" placeholder='Change name' onChange={(e) => setUpdates(prev => ({ ...prev, displayName: e.target.value }))} />
          <button onClick={updateUserDetails}>Update</button>
        </div>
        <button className='delete' onClick={deleteUserAccount}>Delete account</button>
      </div>
    </div>
  )
}

export default LoggedIn