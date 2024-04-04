import React from 'react'
import '../../Styles/Cart/Cart.scss'
import { useSelector } from 'react-redux'
import AddRemove from './AddRemove'

const Cart = () => {

  const cartItems = useSelector(state => state.CartSlice.cartItems)

  return (
    <div className='Cart'>
      <h1>Cart<span>.</span></h1>
      <div className="cartedItems">
        {
          cartItems.map((item, index) => (
            <div key={index} className="product">
              <img src={item.imageURL} alt="image" />
              <p className='itemName'>{item.name}</p>
              <AddRemove item={item} />
              <p>${item.price * item.quantity}</p>
            </div>
          ))
        }
      </div>
      <div className="totalPay">
        <h1>Total: <span>${
          cartItems.reduce((sum, i)=> sum+(i.price*i.quantity),0)
        }</span></h1>
        {
          cartItems.length > 0 && <button>Proceed To Payment</button>
        }
      </div>
    </div>
  )
}

export default Cart