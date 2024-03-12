import React from 'react'

const CheckboxText = ({text}) => {
  return (
    <div className='RadioText'>
        <input type="checkbox" name="checkbox" id="" />
        <span>{text}</span>
    </div>
  )
}

export default CheckboxText