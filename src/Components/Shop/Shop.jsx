import React, { useEffect, useState } from 'react'
import '../../Styles/Shop/Shop.scss'
import { FaBars } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import data from '../../FakeData.json'
import ProductCard from './ProductCard';

const Shop = () => {
  const[open, setOpen] = useState(false)

  const catagories = ['Kids', 'Men', 'Women', 'Sneakers', 'Running', 'Basketball', 'Football', 'Training & Gym']

  let arr = Object.values(data)
  console.log(arr)

  
  return (
    <div className='Shop'>
      <h1>Shop<span>.</span></h1>
      <div className="searchDiv">
        <div onClick={()=> setOpen(prev=> !prev)}><FaBars /><span>Filter</span></div>
        <div className="inpBtn">
          <input type="text" name="search" placeholder='Search here...' id="" />
          <button><FaSearch /></button>
        </div>
        <select name="sorting" id="select">
          <option value="default" defaultValue={true}>Default sorting</option>
          <option value="popularity">Sort by popularity</option>
          <option value="rating">Sort by average rating</option>
          <option value="date">Sort by latest</option>
          <option value="priceLow">Sort by price: low to high</option>
          <option value="priceHigh">Sort by price: high to low</option>
        </select>
      </div>
      <div className="shopContainer">
        <div className={`filterDiv ${ open && 'open'}`}>
          <h2>Catagories</h2>
          {
            catagories.map(item=> <p>{item}</p>)
          }
          <h2>Price</h2>
          <input type="range" />
          <input type="range" />
        </div>
        <div className="products">
          {
            arr.map(item => (
              <ProductCard key={item.id} name={item.name} brand={item.brand} gender={item.gender} category={item.category} price={item.price} items_left={item.items_left} imageURL={item.imageURL} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Shop