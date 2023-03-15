import React from 'react'
import myimage from '../../assets/moblie.png'
import myapple from '../../assets/app-store.png'
import mygoogle from '../../assets/google-play.png'
import './main.css'

const Main = () => {
  return (
    <>
     <div className='row'>
      <div className="col-1">
        <p className="text-1">Have a stand by Backup back.</p>
        <p className="text-2">Have a ready to go backup cash.</p>
        <p className="text-3">Localman is a financial service that promotes credit culture and financial inclusion. Get it today</p>
        <div className="btn-1">
          <img src={myapple} alt="" className='myapple' />
          <img src={mygoogle} alt="" className='mygoogle' />
        </div>
        <div className="watch">
          <i class="fa fa-play-circle-o icon-play" aria-hidden="true"></i>
          <p className="text-4">Watch our video</p>
        </div>
      </div>
      <div className="col-2">
        <img src={myimage} alt="" className='myimage'/>
      </div>
    </div>
    
    </>
   
  )
}

export default Main