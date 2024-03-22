import React from 'react'
import '../../Styles/Shop/AddToCart.scss'
import { FaCartShopping } from "react-icons/fa6";
import { add } from '../../Redux/slices/CartSlice'
import { useDispatch } from 'react-redux'

const AddToCart = ({id, name, brand, gender, price, imageURL, quantity=1 }) => {
    const dispatch = useDispatch()
    return (
        <div className="addToCart" onClick={(e) => {
            e.preventDefault()
            dispatch(add({
                id,
                name,
                brand,
                gender,
                price,
                imageURL,
                quantity
            }))
        }}>
            <FaCartShopping />
        </div>
    )
}

export default AddToCart