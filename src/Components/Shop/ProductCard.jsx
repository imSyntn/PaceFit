import React from 'react'
import '../../Styles/Shop/ProductCard.scss'
import { FaRegStar } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const ProductCard = ({ name, brand, gender, category, price, items_left, imageURL }) => {
    return (
        <div className='ProductCard'>
            <div className="addToCart">
                <FaCartShopping />
            </div>
            <img src={imageURL} alt="image" />
            <div className="desc">
                <div className="brandStar">
                    <h3>{brand}</h3>
                    <div>
                        {
                            new Array(5).fill(1).map((item, index) => (
                                <FaRegStar key={index} />
                            ))
                        }
                    </div>
                </div>
                <p className='name'>{name}</p>
                <p className='price'><span>${price+100}</span>${price}</p>
            </div>
        </div>
    )
}

export default ProductCard