import React, { useEffect, useState } from 'react'
import '../Styles/Header.scss'
import { Link } from 'react-router-dom'
import { FaShoppingBag, FaUser } from "react-icons/fa";
import { useSelector } from 'react-redux';
import Logo from '../Assets/PaceFit Logo.png'

const Header = () => {
    const [showAccordian, setShowAccordian] = useState(false)
    const cartItems = useSelector(state=> state.CartSlice.cartItems)
    // const [showSearchInput, setShowSearchInput] = useState(false)
    // const [changeComponent, setChangeComponent] = useState({
    //     men: true,
    //     women: false,
    //     kids: false,
    // })

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 760) {
                setShowAccordian(false)
            }
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <>
            <header>
                <img src={Logo} alt="logo" />
                <div className="routes">
                    <Link to='/'>HOME</Link>
                    <Link to='/about'>ABOUT</Link>
                    <Link to='/shop'>SHOP</Link>
                    <Link to='/contact'>CONTACT</Link>
                    <Link to='/cart'>
                        <div className="cartIcon">
                            <FaShoppingBag />
                            <p>{cartItems.length}</p>
                        </div>
                    </Link>
                    <Link to='/user'><FaUser /></Link>
                </div>
            </header>
        </>
    )
}

export default Header