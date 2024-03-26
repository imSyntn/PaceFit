import React, { useEffect } from 'react'
import '../../Styles/Cart/AddRemove.scss'
import { useSelector, useDispatch } from 'react-redux'
import { add, remove } from '../../Redux/slices/CartSlice'
import { FaPlus, FaMinus } from "react-icons/fa6";

const AddRemove = ({ item }) => {
    // const cartItems = useSelector(state => state.CartSlice.cartItems)
    const dispatch = useDispatch()
    // useEffect(()=>{
    //     let number = 
    //     console.log('num',number)
    // },[])
    return (
        <div className="quantity">
            <button onClick={() => dispatch(add({
                id: item.id,
                name: item.name,
                brand: item.brand,
                gender: item.gender,
                price: item.price,
                imageURL: item.imageURL,
                quantity: 1,
            }))}><FaPlus /></button>
            <div className="nums">
                <p>{item.quantity}</p>
            </div>
            <button onClick={() => dispatch(remove({
                id: item.id,
                name: item.name,
                brand: item.brand,
                gender: item.gender,
                price: item.price,
                imageURL: item.imageURL,
                quantity: 1,
            }))}><FaMinus /></button>
        </div>
    )
}

export default AddRemove