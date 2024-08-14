import React, { useEffect, useState } from 'react'
import '../../Styles/Payment/Payment.scss'
import { useNavigate } from 'react-router-dom'

const Payment = () => {
    const [data, setData] = useState({
        txt: 'Taking Your Products From Store.',
        img: 'https://i.gifer.com/7uwP.gif'
    })

    const navigate = useNavigate()

    useEffect(()=>{
        const func = () => {
            setData({
                txt: 'You are being redirected...',
                img: 'https://i.gifer.com/7efs.gif'
            })
        }
        const redirect = () => {
            navigate('/')
        }
        setTimeout(func, 5000)
        setTimeout(redirect, 10000)

        return () => {
            clearTimeout(func)
            clearTimeout(redirect)
        }
    },[])

  return (
    <div className='Payment'>
        <h2>{data.txt}</h2>
        <img src={data.img} alt="" />
    </div>
  )
}

export default Payment