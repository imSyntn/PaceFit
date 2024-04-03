import React from 'react'
import '../../Styles/Shop/ReviewCard.scss'
import Stars from './Stars'

const ReviewCard = ({ review }) => {
    return (
        <div className='ReviewCard'>
            <h2>{review.name}</h2>
            <p>{review.text}</p>
            <Stars rating={review.userRating} />
        </div>
    )
}

export default ReviewCard