import React, { lazy, Suspense } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Fallback from './Components/Fallback'
// const MenComponent = lazy(()=> import('./Components/Men'))\
const Home = lazy(() => import('./Components/Home/Home'))
const About = lazy(() => import('./Components/About/About'))
const Shop = lazy(() => import('./Components/Shop/Shop'))
const Contact = lazy(() => import('./Components/Contact/Contact'))
const Cart = lazy(() => import('./Components/Cart/Cart'))
const User = lazy(() => import('./Components/User/User'))
const ProductDetails = lazy(() => import('./Components/Shop/ProductDetails'))
const NotAvailable = lazy(()=> import('./Components/NotAvailable'))

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Suspense fallback={<Fallback />}><Home /></Suspense>} />
        <Route path='/about' element={<Suspense fallback={<Fallback />}><About /></Suspense>} />
        <Route path='/shop' element={<Suspense fallback={<Fallback />}><Shop /></Suspense>} />
        <Route path='/contact' element={<Suspense fallback={<Fallback />}><Contact /></Suspense>} />
        <Route path='/user' element={<Suspense fallback={<Fallback />}><User /></Suspense>} />
        <Route path='/cart' element={<Suspense fallback={<Fallback />}><Cart /></Suspense>} />
        <Route path='/ProductDetails/:id' element={<Suspense fallback={<Fallback />}><ProductDetails /></Suspense>} />
        <Route path='*' element={<Suspense fallback={<Fallback />}><NotAvailable /></Suspense>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App