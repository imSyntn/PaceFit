import React, { useState } from 'react'
import '../../Styles/Home/Home.scss'
import GalleryImageCard from './GalleryImageCard';
// import vid from '../Assets/y2mate.com - Shoes by 2GO  Theatrical Ad Film  Commercial_1080p.mp4'


import one from '../../Assets/Hero Section/1.png'
import two from '../../Assets/Hero Section/2.png'
import three from '../../Assets/Hero Section/3.png'
import four from '../../Assets/Hero Section/4.png'
import five from '../../Assets/Hero Section/5.png'


import HeroSection from './HeroSection';
import TrendingLatest from './TrendingLatest';
import RemarkCard from './RemarkCard'
import casualImg from '../../Assets/casual-man.jpg'
import SaleBanner from './SaleBanner';
import AdvantageCard from './AdvantageCard';
import { FaLock } from "react-icons/fa6";
import { FaBox, FaHandHoldingHeart } from "react-icons/fa";



const Home = () => {

    const images = [one, two, three, four, five]

    // const [currentImage, setCurrentImage] = useState(0);
    let xIndex = 10;
    // setTimeout(()=>{
    //     let nextImg = currentImage+1;
    //     (nextImg>4)?(
    //         setCurrentImage(0)
    //     ):(
    //         setCurrentImage(nextImg)
    //     )
    // },1000)
    const userRemarks = [
        { name: 'JENNIFER LEWIS', desc: 'Fast shipping and excellent customer service. The product was even better than expected. I will definitely be a returning customer.', img: casualImg },
        { name: 'JENNIFER LEWIS', desc: 'Fast shipping and excellent customer service. The product was even better than expected. I will definitely be a returning customer.', img: casualImg },
        { name: 'JENNIFER LEWIS', desc: 'Fast shipping and excellent customer service. The product was even better than expected. I will definitely be a returning customer.', img: casualImg },
    ]
    const advantages = [
        { title: 'SECURE PAYMENT', desc: 'All our payments our SSL secured', icon: FaLock },
        { title: 'DELIVERED WITH CARE', desc: 'Super fast shipping to your door', icon: FaBox },
        { title: 'EXCELLENT SERVICE', desc: 'Live chat and phone support', icon: FaHandHoldingHeart }
    ]
    const galleryCardText = [
        { type: 'Sports shoes', gender: 'MEN' },
        { type: 'Sports shoes', gender: 'WOMEN' },
        { type: 'Sneakers', gender: 'MEN' },
        { type: 'Sneakers', gender: 'WOMEN' },
    ]

    return (
        <>
            <HeroSection images={images} />
            <TrendingLatest />
                <h1 className='aft'>COLLECTIONS</h1>
            <div className="gallery-section">
                {/* <div> */}
                    {
                        galleryCardText.map((item, index) => (
                            <GalleryImageCard key={index} item={item} />
                        ))
                    }
                {/* </div> */}
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
            {/* <video src={vid} muted loop></video> */}

        </>
    )
}

export default Home