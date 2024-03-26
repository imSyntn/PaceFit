import React, { useEffect, useState } from 'react'
import '../../Styles/Shop/Shop.scss'
import { FaBars } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import Data from '../../FakeData.json';
import ProductCard from './ProductCard';
// import CheckboxText from './CheckboxText';

const Shop = () => {
  const [open, setOpen] = useState(false)
  const [data, setData] = useState({
    raw: Object.values(Data),
    filterd: []
  })

  useEffect(() => {
    console.log(data)
  }, [data])

  const [currentFilters, setCurrentFilters] = useState({
    categories: '',
    gender: '',
    price: {
      start: false,
      end: false
    }
  })

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

  const filterReq = (categories, gender, price) => {
    return defaultSorting.filter(item => {
      const categoryFilter = (categories !== '') ? item.category == categories.toUpperCase() : true;
      const genderFilter = (gender !== '') ? item.gender == gender.toUpperCase() : true;
      const priceFilter = (price.start !== false) ? price.start <= item.price && item.price <= price.end : true;
      return categoryFilter && genderFilter && priceFilter
    })
  }

  useEffect(() => {
    console.log('eff')
    if (currentFilters.categories != '' || currentFilters.gender != '' || currentFilters.price.start != false || currentFilters.price.start != false) {
      let filteredVal = filterReq(currentFilters.categories, currentFilters.gender, currentFilters.price)
      console.log('filteredVal', filteredVal)
      if (filteredVal.length === 0) {
        filteredVal = [{noData: true}]
        setData(prev => ({ ...prev, filterd: filteredVal }))
      } else {
        setData(prev => ({ ...prev, filterd: filteredVal }))
      }
    }
  }, [currentFilters.categories, currentFilters.gender, currentFilters.price])

  const catagories = ['Casual', 'Sneakers', 'Running', 'Basketball', 'Football', 'Training & Gym']
  const gender = ['Men', "Women", 'Kids', 'Unisex']
  const price = [{ start: 0, end: 100 }, { start: 100, end: 200 }, { start: 200, end: 3000 }]


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
          <div className="clearFilters">
            {
              (currentFilters.categories !== '' || currentFilters.gender !== '' || currentFilters.price.start !==false) && <button onClick={() => {
                setData(prev => ({ ...prev, filterd: [] }))
                setCurrentFilters({
                  categories: '',
                  gender: '',
                  price: {
                    start: false,
                    end: false
                  }
                })
              }}>Clear</button>
            }
          </div>
          <h2>Catagories</h2>
          {
            catagories.map(item => <p key={item} style={(currentFilters.categories == item)? {color: 'red'}:{}} onClick={() => setCurrentFilters(prev => ({ ...prev, categories: item }))}>{item}</p>)
          }
          <h2>Gender</h2>
          {
            gender.map((item, index) => (
              // <CheckboxText key={index} text={item} />
              <p key={item} style={(currentFilters.gender == item)? {color: 'red'}:{}} onClick={() => setCurrentFilters(prev => ({ ...prev, gender: item }))}>{item}</p>
            ))
          }
          <h2>Price</h2>
          {
            price.map((item, index) => (
              // <CheckboxText key={index} text={item} />
              <p key={index} style={(currentFilters.price.end == item.end)? {color: 'red'}:{}} onClick={() => setCurrentFilters(prev => ({ ...prev, price: { start: item.start, end: item.end } }))}>{item.start} - {item.end}</p>
            ))
          }
          {/* <h2>Sale</h2>
          <p onClick={() => setCurrentFilters(prev => ({...prev, sale: true}))}>Sale</p> */}

        </div>
        <div className="products">
          {
            data.filterd.length === 0 ? (
              data.raw.map(item => (
                <ProductCard key={item.id} item={item} />
              ))
            ) : (
              data.filterd.map(item => (
                <ProductCard key={item.id} item={item}/>
              ))
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Shop