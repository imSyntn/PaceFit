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
  const [input, setInput] = useState('')

  // useEffect(()=>{
  //   console.log(input)
  // },[input])

  const [currentFilters, setCurrentFilters] = useState({
    categories: '',
    gender: '',
    price: {
      start: false,
      end: false
    }
  })

  const selectedStyle = {
    color: '#ff2660',
    fontWeight: 'bold',
    letterSpacing: '1px'
  }

  const defaultSorting = Object.values(Data)

  const handleSearch = () => {
    const newData = defaultSorting.filter((item) => {
      let brandSearch = item.brand.toLowerCase().includes(input.toLowerCase())
      // if(brandSearch) {brandSearch = true;}
      let catagorySearch = item.category.toLowerCase().includes(input.toLowerCase())
      // if(catagorySearch.length == 0) {catagorySearch = true;}
      let nameSearch = item.name.toLowerCase().includes(input.toLowerCase())
      // if(nameSearch.length == 0) {nameSearch = true;}
      return brandSearch || catagorySearch || nameSearch
    })
    // console.log(newData)
    setData(prev => ({
      ...prev,
      filterd: newData
    }))
  }

  // useEffect(()=>{
  //   console.log(data)
  // },[data])

  const sorting = (value) => {
    if(data.filterd.length == 0) {
      sortingFunc(value, 'raw')
    } else sortingFunc(value, 'filtered')
  }

  const sortingFunc = (value, name) => {
    if (value === 'default') {
      setData(prev => ({
        ...prev,
        name: defaultSorting
      }))
    }else if (value === 'popularity') {
      const sorted = data[name].sort((a, b) => a.popularity - b.popularity)
      setData(prev => ({
        ...prev,
        name: sorted
      }))
    }else if (value === 'rating') {
      const sorted = data[name].sort((a, b) => a.rating - b.rating)
      setData(prev => ({
        ...prev,
        name: sorted
      }))
    }else if (value === 'date') {
      const sorted = data[name].sort((a, b) => new Date(a.dateAdded) - new Date(b.dateAdded))
      setData(prev => ({
        ...prev,
        name: sorted
      }))
    }else if (value === 'priceLow') {
      const sorted = data[name].sort((a, b) => a.price - b.price)
      setData(prev => ({
        ...prev,
        name: sorted
      }))
    }else if (value === 'priceHigh') {
      const sorted = data[name].sort((a, b) => b.price - a.price)
      setData(prev => ({
        ...prev,
        name: sorted
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
    if (currentFilters.categories != '' || currentFilters.gender != '' || currentFilters.price.start != false || currentFilters.price.start != false) {
      let filteredVal = filterReq(currentFilters.categories, currentFilters.gender, currentFilters.price)
      console.log('filteredVal', filteredVal)
      if (filteredVal.length === 0) {
        filteredVal = [{ noData: true }]
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
          <input type="text" name="search" placeholder='Search here...' id="" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => {if(e.key === 'Enter'){handleSearch()}}} />
          <button onClick={handleSearch}><FaSearch /></button>
        </div>
        <select name="sorting" id="select" onChange={(e) => sorting(e.target.value)}>
          <option value="default" defaultValue={true}>Default sorting</option>
          <option value="popularity">Popularity</option>
          <option value="rating">Rating</option>
          <option value="date">Latest</option>
          <option value="priceLow">Low to high</option>
          <option value="priceHigh">High to low</option>
        </select>
      </div>
      <div className="shopContainer">
        <div className={`filterDiv ${open && 'open'}`}>
          <div className="clearFilters">
            {
              (currentFilters.categories !== '' || currentFilters.gender !== '' || currentFilters.price.start !== false) && <button onClick={() => {
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
            catagories.map(item => <p key={item} style={(currentFilters.categories == item) ? selectedStyle : {}} onClick={() => setCurrentFilters(prev => ({ ...prev, categories: item }))}>{item}</p>)
          }
          <h2>Gender</h2>
          {
            gender.map((item, index) => (
              // <CheckboxText key={index} text={item} />
              <p key={item} style={(currentFilters.gender == item) ? selectedStyle : {}} onClick={() => setCurrentFilters(prev => ({ ...prev, gender: item }))}>{item}</p>
            ))
          }
          <h2>Price</h2>
          {
            price.map((item, index) => (
              // <CheckboxText key={index} text={item} />
              <p key={index} style={(currentFilters.price.end == item.end) ? selectedStyle : {}} onClick={() => setCurrentFilters(prev => ({ ...prev, price: { start: item.start, end: item.end } }))}>{item.start} - {item.end}</p>
            ))
          }
          {/* <h2>Sale</h2>
          <p onClick={() => setCurrentFilters(prev => ({...prev, sale: true}))}>Sale</p> */}

        </div>
        <div className="products" key="products">
          {
            data.filterd.length === 0 ? (
              (input.length > 0) ? (
                <h1 key="no-result">No Result</h1>
              ) : (
                data.raw.map(item => (
                  <ProductCard key={item.id} item={item} />
                ))
              )
            ) : (
              data.filterd.map(item => (
                <ProductCard key={item.id} item={item} />
              ))
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Shop