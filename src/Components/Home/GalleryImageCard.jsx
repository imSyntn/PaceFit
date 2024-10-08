import React from 'react'
import '../../Styles/Home/GalleryImageCard.scss'
// import img from '../../Assets/Men-Nike.jpg'

const GalleryImageCard = ({item}) => {

  return (
    <div className='GalleryImageCard'>
        <img src={item.img} alt="gallery-img" />
        <div className="text">
            <h2>{item.type} for {item.gender}</h2>
        </div>
    </div>
  )
}

export default GalleryImageCard