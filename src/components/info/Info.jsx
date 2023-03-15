import React from 'react'
import './info.css'
const Info = () => {
  return (
    <div className='info'>
        <div className="inf">
            <div className="icon">
                <i class="fa fa-map-marker info_1" aria-hidden="true"></i>
            </div>
            <p>Address</p>
            <p>33 Bishop Street, off Akinhanmi Road, Surulere, Lagos.</p>
        </div>
        <div className="inf">
            <div className="icon">
                <i class="fa fa-envelope-o info_1" aria-hidden="true"></i>
            </div>
            <p>Email</p>
            <a href="#">hello@localman.co</a>
        </div>
        <div className="inf">
            <div className="icon">
                <i class="fa fa-phone info_1" aria-hidden="true"></i>
            </div>
            <p>Phone Number</p>
            <a href="#">+2349095685594</a>
        </div>
        <div className="inf">
            <div className="icon">
                <i class="fa fa-headphones info_1" aria-hidden="true"></i>
            </div>
            <p>WhatsApp Chat</p>
            <a href="#">+2349095685594</a>
        </div>
    </div>
  )
}

export default Info