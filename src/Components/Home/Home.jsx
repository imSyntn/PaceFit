import React, { useState } from 'react'
import '../../Styles/Home/Home.scss'
import GalleryImageCard from './GalleryImageCard';

import HeroSection from './HeroSection';
import ContentSection from './ContentSection';
import RemarkCard from './RemarkCard'
import casualImg from '../../Assets/casual-man.jpg'
import SaleBanner from './SaleBanner';
import AdvantageCard from './AdvantageCard';
import { FaLock, FaHandshake } from "react-icons/fa6";
import { FaBox } from "react-icons/fa";
import Data from '../../FakeData.json'



const Home = () => {

    const arr = Object.values(Data)

    const userRemarks = [
        { name: 'JENNIFER LEWIS', desc: 'Fast shipping and excellent customer service. The product was even better than expected. I will definitely be a returning customer.', img: casualImg },
        { name: 'JENNIFER LEWIS', desc: 'Fast shipping and excellent customer service. The product was even better than expected. I will definitely be a returning customer.', img: casualImg },
        { name: 'JENNIFER LEWIS', desc: 'Fast shipping and excellent customer service. The product was even better than expected. I will definitely be a returning customer.', img: casualImg },
    ]
    const advantages = [
        { title: 'SECURE PAYMENT', desc: 'All our payments our SSL secured', icon: FaLock },
        { title: 'DELIVERED WITH CARE', desc: 'Super fast shipping to your door', icon: FaBox },
        { title: 'EXCELLENT SERVICE', desc: 'Live chat and phone support', icon: FaHandshake }
    ]
    const galleryCardText = [
        { type: 'Sports shoes', gender: 'MEN', img: 'https://image.lexica.art/full_webp/02cd9804-48e1-4b12-86eb-a632f77cd1c3' },
        { type: 'Sports shoes', gender: 'WOMEN', img: 'https://image.lexica.art/full_webp/0c1521ab-59cf-4c52-b836-3de91f75469f' },
        { type: 'Sneakers', gender: 'MEN', img: 'https://image.lexica.art/full_webp/160d00eb-f257-48f3-86f3-bfbc0c02d8ba' },
        { type: 'Sneakers', gender: 'WOMEN', img: 'https://image.lexica.art/full_webp/185bd967-2993-4b26-a2c4-f1ecdaa6d02a' },
    ]

    return (
        <>
            <HeroSection />
            <div className="Trending-Latest">
                <ContentSection heading={"TRENDING"} arr={arr} id={1} />
                <ContentSection heading={"LATEST"} arr={arr} id={2} />
            </div>
            <h1 className='aft'>COLLECTIONS</h1>
            <div className="gallery-section">
                {
                    galleryCardText.map((item, index) => (
                        <GalleryImageCard key={index} item={item} />
                    ))
                }
            </div>
            <h1 className='aft'>REMARKS</h1>
            <div className="remarks">
                {
                    userRemarks.map((item, index) => (
                        <RemarkCard key={index} desc={item.desc} img={item.img} name={item.name} />
                    ))
                }
            </div>
            <SaleBanner />
            <div className="advantages">
                {
                    advantages.map((item, index) => (
                        <AdvantageCard key={index} title={item.title} desc={item.desc} Icon={item.icon} />
                    ))
                }
            </div>
        </>
    )
}

export default Home