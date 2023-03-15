import React from 'react'
import logo from '../../assets/localman.png'
import './nav.css'

const Navbar = () => {
  return (
    <nav>
        <div>
            <img src={logo} alt="" className='logo' />
        </div>

        <div className='navbar-inner'>
            <ul className='navbar-inner1'>
                <li> <a href="">About Us</a> </li>
                <li> <a href="">Contact Us</a></li>
                <li> <a href="">FAQ</a> </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar