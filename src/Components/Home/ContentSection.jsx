import React, { useEffect, useState } from 'react'
import '../../Styles/Home/ContentSection.scss'
import ContentCard from './ContentCard'
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const ContentSection = ({ heading, id, arr }) => {
    // const [items, setItems] = useState(false)

    // useEffect(() => {
    //     // Math.ceil()
    //     setItems(Math.floor((window.innerWidth - 100) / 280))
    // }, [])

    const slideLeft = () => {
        document.querySelector(`.swipe${id}`).scrollLeft += 200;
    }
    const slideRight = () => {
        document.querySelector(`.swipe${id}`).scrollLeft -= 200;
    }

    return (
        <div className='Content'>
            <h1>{heading}</h1>
            <div className='over'>
                <button className='left' onClick={slideRight}><FaAngleLeft /></button>
                <button className='right' onClick={slideLeft}><FaAngleRight /></button>
                <div className={`swipe${id} swipeCont`}>
                    {
                        [...arr].splice(0,6).map((item, index) => (
                            <ContentCard key={index} item={item} />
                        ))
                    }
                </div>
            </div>
            {/* </Swiper> */}
        </div>
    )
}

export default ContentSection