import React from 'react'
import local from '../../assets/localman.png'
import './product.css'
const Product = () => {
  return (
    <div className='row2'>
        <div className="col2 local-1">

            <img src={local} alt="" className='local-man'width="100px" height="28px" />
            <p className='par'>Localman is a financial service that promotes credit culture and financial inclusion. Get it today</p>
            <div className="icon-4">
                <div className='social'>
                <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                </div>
                <div className="social">
                <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                </div>
                <div className="social">
                <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                </div>
                
            </div>
        </div>
        <div className="col2 local-2">
            <h2 className="company">Company</h2>
            <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Blog</a></li>
            </ul>
        </div>
        <div className="col2 local-2">
            <h2 className="company">Product</h2>
            <ul>
                <li><a href="#">LocalMan</a></li>
                <li><a href="#">LocalMan Pay - coming soon</a></li>
            </ul>
        </div>
        <div className="col2 ">
            <h2 className="company">Address</h2>
            <p className="pa">23 Ayodele Street,Fadeyi, Shomolu,Lagos, Nigeria.</p>
            <div className="email">
                <div className="send">
                    <h2 className="email-1">Send us an email</h2>
                    <li><a href="#">hello@localman.co</a></li>
                </div>
                <div className="send1">
                    <a href="#"><i class="fa-solid fa-envelope"></i></a>
                </div> 
  
            </div>
            
        </div>
    </div>
  )
}

export default Product