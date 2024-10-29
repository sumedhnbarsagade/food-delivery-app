import React from 'react'

function Header() {
  return (
    <div className='header'>
        <div className='logo-container'>
            <img className='logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNl1WcEr1Wv0VlscNKDZKcM-x0WkVFKNn2Zg&s'/>
        </div>
        <div className='nav-items'>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
  )
}

export default Header