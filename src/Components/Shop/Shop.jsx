import React, { useEffect, useState } from 'react'
import '../../Styles/Shop/Shop.scss'
import { FaBars } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import Data from '../../FakeData.json'
import ProductCard from './ProductCard';
import CheckboxText from './CheckboxText';

const Shop = () => {
  const [open, setOpen] = useState(false)
  const [data, setData] = useState({
    raw: Object.values(Data),
    filterd: []
  })
  const [currentFilters, setCurrentFilters]=useState([])
  const defaultSorting = Object.values(Data)

  const sorting = (value) => {
    if (value === 'default') {
      setData(prev => ({
        ...prev,
        raw: defaultSorting
      }))
    }
    if (value === 'popularity') {
      const sorted = data.raw.sort((a, b) => a.popularity - b.popularity)
      setData(prev => ({
        ...prev,
        raw: sorted
      }))
    }
    if (value === 'rating') {
      const sorted = data.raw.sort((a, b) => a.rating - b.rating)
      setData(prev => ({
        ...prev,
        raw: sorted
      }))
    }
    if (value === 'date') {
      const sorted = data.raw.sort((a, b) => new Date(a.dateAdded) - new Date(b.dateAdded))
      setData(prev => ({
        ...prev,
        raw: sorted
      }))
    }
    if (value === 'priceLow') {
      const sorted = data.raw.sort((a, b) => a.price - b.price)
      setData(prev => ({
        ...prev,
        raw: sorted
      }))
    }
    if (value === 'priceHigh') {
      const sorted = data.raw.sort((a, b) => b.price - a.price)
      setData(prev => ({
        ...prev,
        raw: sorted
      }))
    }
  }

  const catagoryFilter = (value) => {
    if(value==='All') {
      setData(prev => ({
        ...prev,
        filterd: []
      }))
    }
    const filteredVal = data.raw.filter(item => item.category.toLowerCase() == value.toLowerCase())
    setData(prev => ({
      ...prev,
      filterd: filteredVal
    }))
  }

  const catagories = ['All', 'Casual', 'Sneakers', 'Running', 'Basketball', 'Football', 'Training & Gym']
  const gender = ['Men', "Women", 'Unisex']
  const price = ['Under 1000', '1000 - 2000', '2000-3000', 'above 3000']


  return (
    <div className='Shop'>
      <h1>Shop<span>.</span></h1>
      <div className="searchDiv">
        <div onClick={() => setOpen(prev => !prev)}><FaBars /><span>Filter</span></div>
        <div className="inpBtn">
          <input type="text" name="search" placeholder='Search here...' id="" />
          <button><FaSearch /></button>
        </div>
        <select name="sorting" id="select" onChange={(e) => sorting(e.target.value)}>
          <option value="default" defaultValue={true}>Default sorting</option>
          <option value="popularity">Sort by popularity</option>
          <option value="rating">Sort by average rating</option>
          <option value="date">Sort by latest</option>
          <option value="priceLow">Sort by price: low to high</option>
          <option value="priceHigh">Sort by price: high to low</option>
        </select>
      </div>
      <div className="shopContainer">
        <div className={`filterDiv ${open && 'open'}`}>
          <div className="filters">

          </div>
          <h2>Catagories</h2>
          {
            catagories.map(item => <p key={item} onClick={() => catagoryFilter(item)}>{item}</p>)
          }
          <h2>Gender</h2>
          {
            gender.map((item, index) => (
              <CheckboxText key={index} text={item} />
            ))
          }
          <h2>Price</h2>
          {
            price.map((item, index) => (
              <CheckboxText key={index} text={item} />
            ))
          }
          <h2>Sale</h2>
          <CheckboxText text={'Sale'} />
        </div>
        <div className="products">
          {
            data.filterd.length === 0 ? (
              data.raw.map(item => (
                <ProductCard key={item.id} id={item.id} name={item.name} brand={item.brand} gender={item.gender} category={item.category} price={item.price} items_left={item.items_left} imageURL={item.imageURL} />
              ))
            ) : (
              data.filterd.map(item => (
                <ProductCard key={item.id} id={item.id} name={item.name} brand={item.brand} gender={item.gender} category={item.category} price={item.price} items_left={item.items_left} imageURL={item.imageURL} />
              ))
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Shop