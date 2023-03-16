import React from 'react'
import './wave.css'
const Wave = ({ fill }) => {
  return (
    <svg className='wav' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgb(231, 76, 60);" fill-opacity="1" d="M0,224L48,218.7C96,213,192,203,288,213.3C384,224,480,256,576,245.3C672,235,768,181,864,170.7C960,160,1056,192,1152,208C1248,224,1344,224,1392,224L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
  )
}

export default Wave;