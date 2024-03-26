import React, { useEffect } from 'react'
import '../../Styles/Shop/ProductCard.scss'
// import { add } from '../../Redux/slices/CartSlice'
import AddToCart from './AddToCart';
import { Link } from 'react-router-dom';
// import StarsCanChange from './StarsCanChange'
import Stars from './Stars';

const ProductCard = ({ item }) => {


    return (
        <>
            {
                (item.noData) ? (
                    <div className="noData">
                        <h1>No products to show.</h1>
                    </div>
                ) : (
                    <Link to={`/ProductDetails/${item.id}`} className='ProductCard'>
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
                        <AddToCart id={item.id} name={item.name} brand={item.brand} gender={item.gender} price={item.price} imageURL={item.imageURL} quantity={1} />
                        <img src={item.imageURL} alt="image" />
                        <div className="desc">
                            <div className="brandStar">
                                <h3>{item.brand}</h3>
                                <Stars rating={item.rating} />
                            </div>
                            <p className='name'>{item.name}</p>
                            <p className='price'><span>${item.price + 100}</span>${item.price}</p>
                        </div>
                    </Link>
                )
            }
        </>
    )
}

export default ProductCard