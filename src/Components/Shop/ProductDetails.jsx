import React, { useState, useEffect, useReducer } from 'react'
import '../../Styles/Shop/ProductDetails.scss'
// import AddRemove from '../Cart/AddRemove';
import { useParams } from 'react-router-dom';
// import { useSelector } from 'react-redux'
import data from '../../FakeData.json'
import AddToCart from './AddToCart';
// import StarsCantChanged from './StarsCantChanged'
import Stars from './Stars';

const ProductDetails = () => {
    // const cartItems = useSelector(state => state.CartSlice.cartItems)
    const [product, setProduct] = useState(false)
    // const [availableInCart, setAvailableInCart] = useState(false)
    // const [, forceUpdate] = useReducer(x=>x+1,0)
    const { id } = useParams()
    const arr = Object.values(data)

    useEffect(() => {
        let prod = arr.find(item => item.id === Number(id))
        // console.log('prod', prod.rating)
        setProduct(prod)
        // available()
    }, [])

    // const available = () => {
    //     const isAvailable = cartItems.find(item => item.id === Number(id))
    //     isAvailable && setAvailableInCart(isAvailable)
    //     // console.log('av',isAvailable)
    // }

    // useEffect(() => {
    //     console.log(product.rating)
    // }, [product])

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
                <div className="right">
                    <p>{product.gender}</p>
                    <h1>{product.brand}</h1>
                    <h2>{product.name}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet non excepturi aut maxime nisi id nulla enim voluptatum cumque iusto, minima nobis dolorem quibusdam laboriosam quod quos pariatur. Dolorum architecto quis asperiores corporis minus, earum ab ut eveniet sunt commodi accusantium voluptatem iusto pariatur placeat assumenda maiores sed officiis eaque a molestias sit hic corrupti rem. Sit quo, quis maiores maxime commodi repellat soluta veritatis</p>
                    <h2>${product.price}</h2>
                    {/* <AddRemove item={product} /> */}
                    <div className="cartDiv" >
                        {
                            <AddToCart id={product.id} name={product.name} brand={product.brand} gender={product.gender} price={product.price} imageURL={product.imageURL} quantity={1} />
                        }
                    </div>
                    <p>Catagory <span>{product.category}</span></p>
                </div>
            </div>
            <div className="reviewsDiv">
                <div className="cont">
                    <h1>Reviews</h1>
                    <div className="stars">
                        <Stars rating={product.rating} />
                    </div>
                </div>
                <p>No reviews, submit one</p>
                <form action="">
                    <p>Write a Review <span>*</span>:</p>
                    <textarea type="text" name="text" id="" />
                    <p>Rating <span>*</span>:</p>
                    <Stars />
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ProductDetails