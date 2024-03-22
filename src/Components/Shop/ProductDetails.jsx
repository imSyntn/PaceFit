import React, { useState, useEffect, useReducer } from 'react'
import '../../Styles/Shop/ProductDetails.scss'
import AddRemove from '../Cart/AddRemove';
import { FaRegStar } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux'
import data from '../../FakeData.json'
import AddToCart from './AddToCart';

const ProductDetails = () => {
    const cartItems = useSelector(state => state.CartSlice.cartItems)
    const [product, setProduct] = useState(false)
    const [availableInCart, setAvailableInCart] = useState(false)
    // const [, forceUpdate] = useReducer(x=>x+1,0)
    const { id } = useParams()
    let arr = Object.values(data)

    useEffect(() => {
        let prod = arr.find(item => item.id === Number(id))
        // console.log('prod', prod)
        setProduct(prod)
        available()
    }, [])

    const available = () => {
        const isAvailable = cartItems.find(item => item.id === Number(id))
        isAvailable && setAvailableInCart(isAvailable)
        // console.log('av',isAvailable)
    }

    // useEffect(() => {
    //     console.log(availableInCart)
    // }, [availableInCart])

    return (
        <div className='ProductDetails'>
            <div className="imageDesc">
                <div className="imgSection">
                    <div className="imgsDiv">
                        {
                            new Array(5).fill(' ').map((item, index) => (
                                <img key={index} src={product.imageURL} />
                            ))
                        }
                    </div>
                    <img src={product.imageURL} alt="" />
                </div>
                <div className="right" data-lenis-prevent>
                    <p>{product.gender}</p>
                    <h1>{product.brand}</h1>
                    <h2>{product.name}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet non excepturi aut maxime nisi id nulla enim voluptatum cumque iusto, minima nobis dolorem quibusdam laboriosam quod quos pariatur. Dolorum architecto quis asperiores corporis minus, earum ab ut eveniet sunt commodi accusantium voluptatem iusto pariatur placeat assumenda maiores sed officiis eaque a molestias sit hic corrupti rem. Sit quo, quis maiores maxime commodi repellat soluta veritatis</p>
                    <h2>${product.price}</h2>
                    {/* <AddRemove item={product} /> */}
                    <div className="cartDiv" >
                        {
                            (availableInCart) ? (
                                <p>Added to Cart.</p>
                            ) : (
                                <AddToCart id={product.id} name={product.name} brand={product.brand} gender={product.gender} price={product.price} imageURL={product.imageURL} quantity={1} 
                                onClick={setTimeout(available,100)} />
                            )
                        }
                    </div>
                    <p>Catagory <span>{product.category}</span></p>
                </div>
            </div>
            <div className="reviews">
                <div className="cont">
                    <h1>Reviews</h1>
                    <div className="stars">
                        {
                            new Array(5).fill(" ").map((item, index) => (
                                <FaRegStar key={index} />
                            ))
                        }
                    </div>
                </div>
                <p>No reviews, submit one</p>
                <form action="">
                    <label htmlFor="text">Write</label>
                    <input type="text" name="text" id="" />
                </form>
            </div>
        </div>
    )
}

export default ProductDetails