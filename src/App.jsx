import React, { lazy, Suspense } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
// const MenComponent = lazy(()=> import('./Components/Men'))\
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Shop from './Components/Shop/Shop'
import Contact from './Components/Contact/Contact'
import Cart from './Components/Cart/Cart'
import User from './Components/User/User'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/user' element={<User />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App