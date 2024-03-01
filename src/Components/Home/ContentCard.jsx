import React, { useEffect } from 'react'
import '../../Styles/Home/ContentCard.scss'
import VanillaTilt from 'vanilla-tilt';

const ContentCard = ({ sectionImage }) => {

  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll('.ContentCard'), {
      max: 15,
      speed: 300,
      glare: false
    })
  }, [])

  return (
    <div className='ContentCard'>
      <img src={sectionImage} alt="" />
      <div className="after">
        <h2>Nike</h2>
        <p className="type">Casuals for men</p>
        <div className="priceDetails">
          <span>$2139</span>
          <span>$4295</span>
          <span>50% off</span>
        </div>
        <div className="deliveryStock">
          <span className='delivery'>Free delivery</span>
          <span className='stock'>Only 4 left</span>
        </div>
      </div>
    </div>
  )
}

export default ContentCard