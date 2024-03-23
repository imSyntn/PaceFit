import React, { useEffect, useState } from 'react'
import '../Styles/Header.scss'
import { Link } from 'react-router-dom'
import { FaShoppingBag, FaUser } from "react-icons/fa";
import { useSelector } from 'react-redux';
import Logo from '../Assets/PaceFit Logo.png'

const Header = () => {
    const [showAccordian, setShowAccordian] = useState(false)
    const cartItems = useSelector(state => state.CartSlice.cartItems)
    const [active, setActive] = useState({
        home: true,
        about: false,
        shop: false,
        contact: false,
        cart: false,
        user: false
    })
    // const [showSearchInput, setShowSearchInput] = useState(false)
    // const [changeComponent, setChangeComponent] = useState({
    //     men: true,
    //     women: false,
    //     kids: false,
    // })

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 760) {
                setShowAccordian(true)
            }
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    useEffect(() => {
        const path = window.location.pathname.split('/')[1]
        if (path == '') {
            setActive({
                home: true,
                about: false,
                shop: false,
                contact: false,
                cart: false,
                user: false
            })
        } else if (path == 'about') {
            setActive({
                home: false,
                about: true,
                shop: false,
                contact: false,
                cart: false,
                user: false
            })
        } else if (path == 'shop' || path == 'ProductDetails') {
            setActive({
                home: false,
                about: false,
                shop: true,
                contact: false,
                cart: false,
                user: false
            })
        } else if (path == 'contact') {
            setActive({
                home: false,
                about: false,
                shop: false,
                contact: true,
                cart: false,
                user: false
            })
        } else if (path == 'cart') {
            setActive({
                home: false,
                about: false,
                shop: false,
                contact: false,
                cart: true,
                user: false
            })
        } else if (path == 'user') {
            setActive({
                home: false,
                about: false,
                shop: false,
                contact: false,
                cart: false,
                user: true
            })
        }
    }, [])

    return (
        <>
            <header>
                <img src={Logo} alt="logo" />
                <div className="routes">
                    <Link to='/' className={active.home && 'active'} onClick={() => setActive({
                        home: true,
                        about: false,
                        shop: false,
                        contact: false,
                        cart: false,
                        user: false
                    })}>HOME</Link>
                    <Link to='/about' className={active.about && 'active'} onClick={() => setActive({
                        home: false,
                        about: true,
                        shop: false,
                        contact: false,
                        cart: false,
                        user: false
                    })}>ABOUT</Link>
                    <Link to='/shop' className={active.shop && 'active'} onClick={() => setActive({
                        home: false,
                        about: false,
                        shop: true,
                        contact: false,
                        cart: false,
                        user: false
                    })} >SHOP</Link>
                    <Link to='/contact' className={active.contact && 'active'} onClick={() => setActive({
                        home: false,
                        about: false,
                        shop: false,
                        contact: true,
                        cart: false,
                        user: false
                    })}>CONTACT</Link>
                    <Link to='/cart' onClick={() => setActive({
                        home: false,
                        about: false,
                        shop: false,
                        contact: false,
                        cart: true,
                        user: false
                    })}>
                        <div className="cartIcon">
                            <FaShoppingBag style={active.cart ? {fill: '#ff9205'} : ''} />
                            <p>{cartItems.length}</p>
                        </div>
                    </Link>
                    <Link to='/user' onClick={() => setActive({
                        home: false,
                        about: false,
                        shop: false,
                        contact: false,
                        cart: false,
                        user: true
                    })}><FaUser  style={active.user ? {fill: '#ff9205'} : ''}/></Link>
                </div>
            </header>
        </>
    )
}

export default Header