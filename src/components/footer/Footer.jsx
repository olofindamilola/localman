import React from 'react'
import './footer.css'
import flag from '../../assets/flag-usa.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="link">
            <ul>
                <li><a href="">Terms</a></li>
                <li><a href="">Privacy</a></li>
                <li><a href="">Contact Us</a></li>
            </ul>
        </div>

        <div className="flag">
            <img src={flag} alt="" className='flag-usa' />
            <span>English</span>
            <a href="#"><i class="fa fa-angle-up" aria-hidden="true"></i></a>
        
        </div>
    </div>
    
  )
}

export default Footer