import React, { useEffect } from 'react'
import '../../Styles/Home/ContentCard.scss'
import { Link } from 'react-router-dom'

const ContentCard = ({ item }) => {
// console.log(item)
  return (
    <Link to={`/ProductDetails/${item.id}`} className='ContentCard'>
      <img src={item.imageURL} alt="" />
      <div className="after">
        <h2>{item.brand}</h2>
        <p className="type">{item.name}</p>
        <div className="priceDetails">
          <span>${item.price + 100}</span>
          <span>${item.price}</span>
          <span>{((item.price/(item.price + 100))*100).toFixed(2)}% off</span>
        </div>
        <div className="deliveryStock">
          <span className='delivery'>Free delivery</span>
          <span className='stock'>Only {item.items_left} left</span>
        </div>
      </div>
    </Link>
  )
}

export default ContentCard