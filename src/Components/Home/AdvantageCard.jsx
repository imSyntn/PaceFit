import React from 'react'
import '../../Styles/Home/AdvantageCard.scss'

const AdvantageCard = ({title, desc, Icon}) => {
  return (
    <div className='AdvantageCard'>
        <div className="left">
            <Icon />
        </div>
        <div className="right">
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    </div>
  )
}

export default AdvantageCard