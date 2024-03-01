import React from 'react'
import '../../Styles/GalleryImageCard.scss'
import img from '../../Assets/Men-Nike.jpg'

const GalleryImageCard = () => {


  return (
    <div className='GalleryImageCard'>
        <img src={img} alt="gallery-img" />
        <div className="text">
            <p>Sporty chic for Everyday Comfort</p>
            <h1>sports shoes for men</h1>
        </div>
    </div>
  )
}

export default GalleryImageCard