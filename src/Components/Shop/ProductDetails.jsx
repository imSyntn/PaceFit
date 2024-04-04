import React, { useState, useEffect, useRef } from 'react'
import '../../Styles/Shop/ProductDetails.scss'
import { useParams } from 'react-router-dom';
import data from '../../FakeData.json'
import AddToCart from './AddToCart';
import Stars from './Stars';
import ReviewCard from './ReviewCard';

const ProductDetails = () => {
    const [product, setProduct] = useState([])
    const [formData, setFormData] = useState({
        name: "",
        text: "",
        userRating: 0
    })
    const [handleReview, setHandleReview] = useState([])
    const { id } = useParams()
    const arr = Object.values(data)

    useEffect(() => {
        let prod = arr.find(item => item.id === Number(id))
        setProduct(prod)
        setHandleReview(prod.reviews)
    }, [])

    const handleStarClickedValue = (num)=> setFormData(prev => ({
        ...prev,
        userRating: num
    }))

    const resetClickedRef = useRef(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        resetClickedRef.current = true
        if(formData.name!=='' && formData.text!=='') {
            setHandleReview(prev=> ([
                ...prev,
                formData
            ]))
            setFormData({
                name: "",
                text: "",
                userRating: 0
            })
        }
        setTimeout(()=> resetClickedRef.current = false, 100)
    }

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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet non excepturi aut maxime nisi id nulla enim voluptatum cumque iusto, minima nobis dolorem quibusdam laboriosam quod quos pariatur. Dolorum architecto quis asperiores corporis minus, earum ab ut eveniet sunt commodi accusantium voluptatem iusto pariatur placeat assumenda maiores</p>
                    <h2>${product.price}</h2>
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
                <div className="reviewsContainer">
                    {
                        (handleReview?.length > 0) ? (
                            handleReview.map((review, index) => (
                                <ReviewCard key={index} review={review} />
                            ))
                        ) : (
                            <p>No reviews, submit one</p>
                        )
                    }
                </div>
                <form action="">
                    <p>Write your name <span>*</span>:</p>
                    <input type="text" name="" id="" value={formData.name} onChange={(e)=> setFormData(prev => ({
                        ...prev,
                        name: e.target.value
                    }))} />
                    <p>Write a Review <span>*</span>:</p>
                    <textarea type="text" name="text" id="" value={formData.text} onChange={(e)=> setFormData(prev => ({
                        ...prev,
                        text: e.target.value
                    }))} />
                    <p>Rating <span>*</span>:</p>
                    <Stars handleStarClickedValue={handleStarClickedValue} resetClicked={resetClickedRef.current} />
                    <button onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ProductDetails