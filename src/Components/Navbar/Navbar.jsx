import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

export const Navbar = () => {
  return (
    <div className="navbar">  
        <div className="nav-logo">
            <img src={logo} alt="Shopper Logo" />
            <p>Shopper</p>
        </div>
        <ul className="nav-menu">
            <li>Shop <hr /></li>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
        </ul>
        <div className="nav-login-cart">
            <button>login</button>
            <img src={cart_icon} alt="Shopping Cart" />
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}
