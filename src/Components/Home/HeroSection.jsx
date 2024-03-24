import React from 'react'
import '../../Styles/Home/HeroSection.scss'
import { FaShoppingBag } from "react-icons/fa";
import { BsPercent } from "react-icons/bs";

const HeroSection = ({ images, currentImage }) => {
    return (
        <div className="Hero-section">
            <div className="stoked-text">
                <h1>NIKE</h1>
                <h1>NIKE</h1>
            </div>
            <div className="hero-image-section">
                <img src={images[0]} alt="Product Image" className="hero-image-1" />
                {/* <div className="scroller">
                        {
                            images.map((item) => (
                                <img src={item} style={{zIndex: 1}} alt="Product Image" className="hero-image-1" />
                                // <div className="imgDiv"></div>
                            ))
                        }
                    </div> */}
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="svg" width="160" height="120">
                <path d="M50 100 Q100 10 130 110" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" marker-end="url(#arrowhead)" stroke-dasharray="5,5" />
                <marker id="arrowhead" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto">
                    <polygon points="0,0 5,2.5 0,5" fill="rgb(0, 0, 0)" />
                </marker>
            </svg>

            <div className="hero-discount">
                <div className="percent">
                    <BsPercent />
                </div>
                <p>Get upto 30% off</p>
            </div>
            <div className="hero-image-details">
                <div className="featured"><p>FEATURED</p></div>
                <div className="collections">
                    <h1>NIKE <span>2024</span><span>COLLECTIONS</span></h1>
                </div>
                <div className="btns">
                    <button className='sho-now'>Shop Now</button>
                    <button className="add-to-bag">Add to Bag <FaShoppingBag /></button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection