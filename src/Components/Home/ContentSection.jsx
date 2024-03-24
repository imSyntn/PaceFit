import React, { useEffect, useState } from 'react'
import '../../Styles/Home/ContentSection.scss'
import ContentCard from './ContentCard'
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import Data from '../../FakeData.json'

const ContentSection = ({ heading, id }) => {
    let arr = Object.values(Data)
    const [items, setItems] = useState(false)

    useEffect(() => {
        // Math.ceil()
        setItems(Math.floor((window.innerWidth - 100) / 280))
    }, [])

    const slideLeft = () => {
        document.querySelector(`.swipe${id}`).scrollLeft += 260;
    }
    const slideRight = () => {
        document.querySelector(`.swipe${id}`).scrollLeft -= 260;
    }

    return (
        <div className='Content'>
            <h1>{heading}</h1>
            {/* <Swiper
                className='swipe'

                freeMode={true}
                spaceBetween={10}
                slidesPerView={items}
                scrollbar={{
                    hide: false,
                  }}
                  modules={[FreeMode, Scrollbar]}
            > */}
            <div className='over'>
                <button className='left' onClick={slideRight}><FaAngleLeft /></button>
                <button className='right' onClick={slideLeft}><FaAngleRight /></button>
                <div className={`swipe${id} swipeCont`}>
                    {
                        arr.map((item, index) => (
                            // <SwiperSlide key={index}>
                            <ContentCard key={index} img={item.imageURL} />
                            // {/* </SwiperSlide> */}
                        ))
                    }
                </div>
            </div>
            {/* </Swiper> */}
        </div>
    )
}

export default ContentSection