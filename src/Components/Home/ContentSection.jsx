import React, { useEffect, useState } from 'react'
import '../../Styles/Home/Content.scss'
import ContentCard from './ContentCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';

const ContentSection = ({ heading, sectionImage }) => {
    let arr = [1, 2, 3, 1, 2, 2, 3]
    const [items, setItems] = useState(false)

    useEffect(() => {
        // Math.ceil()
        setItems(Math.floor((window.innerWidth - 100)/280))
    }, [])

    return (
        <div className='Content'>
            <h1>{heading}</h1>
            <Swiper
                className='swipe'

                freeMode={true}
                spaceBetween={10}
                slidesPerView={items}
                scrollbar={{
                    hide: false,
                  }}
                  modules={[FreeMode, Scrollbar]}
            >
                {
                    arr.map((item, index) => (
                        <SwiperSlide key={index}><ContentCard sectionImage={sectionImage} /></SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default ContentSection