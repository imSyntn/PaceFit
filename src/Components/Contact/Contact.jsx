import React from 'react'
import '../../Styles/Contact/Contact.scss'

const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='Contact'>
      {/* <video src="Hero-Section-Video.mp4" autoPlay={true} loop muted></video> */}
      <h1>Contact Us</h1>
      <form action="" onSubmit={handleSubmit}>
        <p>Name</p>
        <input type='text' />
        <p>Email</p>
        <input type="email" />
        <p>Details</p>
        <textarea />
        <button>Send Message</button>
      </form>
    </div>
  )
}

export default Contact