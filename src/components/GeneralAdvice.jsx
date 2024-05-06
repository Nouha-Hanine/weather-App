import React from 'react'
import './GeneralAdvice.css'
import sunrise from '../assets/sunrise.png';
import sunset from '../assets/sunset.png';
import Sunhour from './Sunhour';
function GeneralAdvice() {
  //todo add in here some styling for grid items
  //TODO gerer l'animation du point of coucher/lever of sun inspi: weather by oppo
  return (
    <>
    <div className='gr-container'>
      <div className="gr-it">
        <p className='advice'>
            High risk of overnight frost
        </p>
      </div>
      <div className="gr-it">
        <p className='advice'>
            High level of air pollution
        </p>
      </div>
      <div className="gr-it">
      <p className='advice'>
        Use mosquitos repellent to avoid bites  
      </p>
      </div>
      <div className="gr-it">
      <p className='advice'>
      Be cautious of potential flooding risks
      </p>
      </div>
      <div className="gr-it">        
      <p className='advice'>
        Suitable for car washing.
      </p>
      </div>
      <div className="gr-it">
      <p className='advice'>
      Use more moisturizers
      </p>
      </div>
    </div>
    <div className="sunhour-container">
      <img src={sunrise} alt="sunrise" className="sunrise" />
      <Sunhour city="Constantine"/>
      <div className="line"></div>
      <img src={sunset} alt="sunset" className="sunset" />
    </div>
</>
  )
}

export default GeneralAdvice