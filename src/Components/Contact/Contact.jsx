import React from 'react'
import '../../Styles/Contact/Contact.scss'

const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thanks')
  }

  return (
    <div className='Contact'>
      <form action="" onSubmit={handleSubmit}>
      <h1>Contact Us</h1>
        <label htmlFor="name">Name</label>
        <input placeholder='Enter your name' type='text'  name="name" />
        <label htmlFor="email">Email</label>
        <input placeholder='Enter your email' type="email" name="email" />
        <label htmlFor="details">Details</label>
        <textarea placeholder='Enter details' name="details" />
        <button>Send Message</button>
      </form>
    </div>
  )
}

export default Contact