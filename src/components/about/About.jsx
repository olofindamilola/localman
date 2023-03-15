import React from 'react'
import './about.css'
import family from '../../assets/family.png'
import bmeeting from '../../assets/b-meeting.png'
import filter from '../../assets/filter-organization.png'

const About = () => {
  return (
    <div className='about'>
        <div className="text">
            <h2 className="text1">LOCALMAN HELP WHEN YOU NEED IT</h2>
            <h3 className="text2">A simple, fast and ready to use way to get quick cash for your needs.</h3>
        </div>
        <div className="row1">
            <div className="col1">
                <div className="arran">
                    <img src={family} alt="" className='family' />
                    <h3 className='loan'>Loan Credit</h3>
                </div>
                <p className='credit'><span  className='spa'>Loan Credit.</span>Now it had see nunable uneasy. Drawings can followed by improved out sociable not. Earnestly so do instantly pretended.</p>
            </div>
            <div className="col1">
                <div className="arran">
                    <img src={bmeeting} alt=""  className='family'/>
                    <h3>Money Transfer</h3>
                </div>
                <p><span className='spa'>No more Mulitple Platforms.</span>Now it had see nunable uneasy. Drawings can followed by improved out sociable not. Earnestly so do instantly pretended.</p>
            </div>
            <div className="col1">
                <div className="arran">
                    <img src={filter} alt="" className='family'/>
                    <h3>Bill Payment</h3>
                </div>
                <p><span className='spa'>No more Mulitple Platforms.</span>Now it had see nunable uneasy. Drawings can followed by improved out sociable not. Earnestly so do instantly pretended.</p>
            </div>
        </div>
    </div>
  )
}

export default About