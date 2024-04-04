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
        { type: 'Sports shoes', gender: 'MEN' },
        { type: 'Sports shoes', gender: 'WOMEN' },
        { type: 'Sneakers', gender: 'MEN' },
        { type: 'Sneakers', gender: 'WOMEN' },
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