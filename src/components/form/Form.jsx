import React from 'react'
import './form.css'

const Form = () => {
  return (
    <div className='form'>
        <div className="heading1">
            <h2 className="heading-1">
            We'd love to hear from you
            </h2>
            <p className="subtitle">Send us a message and we will get back to you within 24 hours</p>
        </div>
        <form className="label-contanier-1">
            <div className="label-1">
                <label htmlFor="">YOUR NAME*</label>
                <input type="text" id="" name="name" placeholder="i.e. john Doe" />
            </div>
            <div className="label-1">
                <label htmlFor="">YOUR PHONE NUMBER</label>
                <input type="text" id="" name="phone" placeholder="i.e. +44(0)1234 5678" />
            </div>
        </form>
        <form className="label-contanier-1">
            <div className="label-2">
                <label htmlFor="">EMAIL ADDRESS*</label>
                <input type="text" placeholder='i.e. example@example.com' />
            </div>
            <div className="label-2">
                <label htmlFor="">SUBJECT*</label>
                <input type="text" placeholder='Webdesign' />
            </div>
        </form>
        <form action="" className='message'>
            <label htmlFor="">YOUR MESSAGE</label>
            <textarea name="" id="message" cols="20" rows="10" placeholder='i.e. The design is ....' required></textarea>
        </form>
    
        <button>submit</button>
        
    </div>
  )
}

export default Form