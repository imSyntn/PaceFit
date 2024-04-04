import React, { useEffect, useState } from 'react'
import '../../Styles/Shop/AddToCart.scss'
import { FaCartShopping, FaCheck } from "react-icons/fa6";
import { add } from '../../Redux/slices/CartSlice'
import { useDispatch, useSelector } from 'react-redux'

const AddToCart = ({ id, name, brand, gender, price, imageURL, quantity = 1 }) => {

    const cartItems = useSelector(state => state.CartSlice.cartItems)

    const [added, setAdded] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        const isAvailable = cartItems.find(item => item.id == id)
        if (isAvailable) setAdded(true)
    }, [cartItems,id])

    return (
        <div className="addToCart" onClick={(e) => {
            e.preventDefault()
            if (!added) {
                dispatch(add({
                    id,
                    name,
                    brand,
                    gender,
                    price,
                    imageURL,
                    quantity
                }))
                setAdded(true)
            }
        }}>
            {
                added ? (
                    <FaCheck />
                ) : (
                    <FaCartShopping />
                )
            }
        </div>
    )
}

export default AddToCart