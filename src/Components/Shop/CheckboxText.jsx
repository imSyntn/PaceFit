import React from 'react'

const CheckboxText = ({text}) => {
  return (
    <div className='CheckBoxText' style={{paddingLeft: '5px',paddingBlock: '2.5px'}}>
        <input type="checkbox" name="checkbox" id="" style={{marginRight: '2.5px'}}/>
        <span style={{fontSize: '18px'}}>{text}</span>
    </div>
  )
}

export default CheckboxText