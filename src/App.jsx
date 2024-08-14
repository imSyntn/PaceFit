import React, { lazy, Suspense, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Fallback from './Components/Fallback'
import { app } from '../Firebase'

import { useSelector, useDispatch } from 'react-redux'
import { add } from './Redux/slices/CartSlice'

import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore'

const Home = lazy(() => import('./Components/Home/Home'))
const About = lazy(() => import('./Components/About/About'))
const Shop = lazy(() => import('./Components/Shop/Shop'))
const Contact = lazy(() => import('./Components/Contact/Contact'))
const Cart = lazy(() => import('./Components/Cart/Cart'))
const User = lazy(() => import('./Components/User/User'))
const ProductDetails = lazy(() => import('./Components/Shop/ProductDetails'))
const Payment = lazy(()=> import('./Components/Payment/Payment'))
const NotAvailable = lazy(() => import('./Components/NotAvailable'))


const App = () => {

  const dispatch = useDispatch()
  const userDetails = useSelector(state => state.userSlice)
  const cartItems = useSelector(state => state.CartSlice.cartItems)

  const db = getFirestore(app)

  useEffect(() => {
    if (userDetails.uid) {
      const setData = async () => {

        // console.log('setData called.')
        // console.log('userId', userDetails.uid)

        try {
          const userDoc = doc(db, 'CartedItems', userDetails.uid)
          await setDoc(userDoc, {
            carted: cartItems
          }, {
            merge: true
          })
        } catch (error) {
          console.log(error)
        }
      }
      setData()
    }
  }, [cartItems])

  useEffect(() => {
    if (userDetails.uid) {
      // console.log('get Data Called')
      const getData = async () => {
        try {
          const querry = await getDoc(doc(db, 'CartedItems', userDetails.uid))
          if(querry.exists()) {
            // console.log('get data', querry.data().carted)
            querry.data().carted.forEach((item)=> {
              if(!cartItems.some(item => item.id === item.id)){
                dispatch(add(item))
              }
            })
          }
        } catch (error) {
          console.log(error)
        }

      }
      getData()
    }
  }, [userDetails])
  
  // useEffect(()=> {
  //   console.log(cartItems)
  //   console.log(1)
  // },[cartItems])

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
        <Route path='/payment' element={<Suspense fallback={<Fallback />}><Payment /></Suspense>} />
        <Route path='*' element={<Suspense fallback={<Fallback />}><NotAvailable /></Suspense>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App