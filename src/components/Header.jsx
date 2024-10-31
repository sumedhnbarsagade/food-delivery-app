import React from 'react'
import { Logo_URL } from '../utils/constants'

function Header() {
  return (
    <div className='header'>
        <div className='logo-container'>
            <img className='logo' src={Logo_URL}/>
        </div>
        <div className='nav-items'>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact Us</li>f
                <li>Cart</li>
            </ul>
        </div>
    </div>
  )
}

export default Header