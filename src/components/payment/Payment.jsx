import React from 'react'
import './payment.css'
import apple from '../../assets/app-store.png'
import google from '../../assets/google-play.png'
import mymoblie from '../../assets/mobile2.png'
const Payment = () => {
  return (
    <div className='row_1'>
      <div className="col_1">
        <p className="text_1">LocalMan! credit on</p>
        <p className="text_2">Localman is a financial service that promotes credit culture and financial inclusion.</p>
        <div className="btn_1">
          <img src={apple} alt="" className='apple' />
          <img src={google} alt="" className='google' />
        </div>
      </div>
      <div className="col_2">
        <img src={mymoblie} alt="" className='moblie' width="500px"/>
        <div className='purple'></div>
      </div>
    </div>
  )
}

export default Payment