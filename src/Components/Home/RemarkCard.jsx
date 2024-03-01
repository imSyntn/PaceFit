import React from 'react'
import '../../Styles/Home/RemarkCard.scss'
import { FaQuoteLeft } from "react-icons/fa6";

const RemarkCard = ({desc, img, name}) => {
  return (
    <div className='RemarkCard'>
      <FaQuoteLeft />
      <p>{desc}</p>
      <img src={img} alt="img" />
      <p>{name}</p>
    </div>
  )
}

export default RemarkCard;