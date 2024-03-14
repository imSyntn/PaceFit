import React, { useState, useEffect } from 'react'
import '../../Styles/Shop/ProductDetails.scss'
import AddRemove from '../Cart/AddRemove';
import { FaRegStar } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import data from '../../FakeData.json'

const ProductDetails = () => {

    const [product, setProduct] = useState(false)
    const params = useParams()
    let arr = Object.values(data)

    useEffect(() => {
        let prod = arr.find(item => item.id === Number(params.id))
        setProduct(prod)
    }, [])
    useEffect(() => {
        console.log(product)
    }, [product])

    return (
        <div className='ProductDetails'>
            <div className="imageDesc">
                <img className="left" src={product.imageURL} alt="" />
                <div className="right" data-lenis-prevent>
                    <h1>{product.brand}</h1>
                    <h2>{product.gender}</h2>
                    <h2>{product.name}</h2>
                    <AddRemove item={product} />
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