import React from 'react'
import '../Styles/Footer.scss'
import img from '../Assets/PaceFit Logo.png'

function Footer() {
    return (
        <footer>
            <div className="left">
                <img src={img} alt="logo" />
                <h1>PaceFit</h1>
            </div>
            <p>Copyright © 2024 Planet Earth Store</p>
        </footer>
    )
}

export default Footer