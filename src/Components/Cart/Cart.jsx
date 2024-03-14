import React from 'react'
import '../../Styles/Cart/Cart.scss'
// import img from '../../Assets/Men-Nike.jpg'
import { useSelector, useDispatch } from 'react-redux'
import AddRemove from './AddRemove'
// import { add, remove } from '../../Redux/slices/CartSlice'

const Cart = () => {

  const cartItems = useSelector(state => state.CartSlice.cartItems)
  // const dispatch = useDispatch()

  return (
    <div className='Cart'>
      <h1>Cart<span>.</span></h1>
      <div className="cartedItems">
        {
          cartItems.map((item, index) => (
            <div key={index} className="product">
              <img src={item.imageURL} alt="image" />
              <p>{item.name}</p>
              {/* <div className="quantity">
                <button onClick={() => dispatch(add({
                  id: item.id,
                  name: item.name,
                  brand: item.brand,
                  gender: item.gender,
                  price: item.price,
                  imageURL: item.imageURL,
                  quantity: 1,
                }))}>+</button>
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
                }))}>-</button>
              </div> */}
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
        <button>Proceed To Payment</button>
      </div>
    </div>
  )
}

export default Cart