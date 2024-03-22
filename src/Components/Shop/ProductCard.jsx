import React, { useEffect } from 'react'
import '../../Styles/Shop/ProductCard.scss'
import { FaRegStar } from "react-icons/fa";
// import { add } from '../../Redux/slices/CartSlice'
import AddToCart from './AddToCart';
import { Link } from 'react-router-dom';

const ProductCard = ({ name, brand, gender, category, price, items_left, imageURL, id }) => {


    return (
        <Link to={`/ProductDetails/${id}`} className='ProductCard'>
            {/* <div className="addToCart" onClick={(e) => {
                e.preventDefault()
                dispatch(add({
                    id,
                    name,
                    brand,
                    gender,
                    price,
                    imageURL,
                    quantity: 1
                }))
            }}>
                <FaCartShopping />
            </div> */}
            <AddToCart id={id} name={name} brand={brand} gender={gender} price={price} imageURL={imageURL} quantity={1} />
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
                <p className='price'><span>${price + 100}</span>${price}</p>
            </div>
        </Link>
    )
}

export default ProductCard