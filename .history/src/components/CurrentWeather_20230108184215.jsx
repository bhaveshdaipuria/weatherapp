import React from 'react';
import '../App.css';

function CurrentWeather({countryProp, locationProp, dayProp, dateProp, monthProp, currentIconProp, currentTempProp, currentStatusProp}){

  return(
    <div className='mt-5 ps-5'>
    <h2>{locationProp}, {countryProp}</h2>
    <h4>{dateProp} {monthProp}, {dayProp}</h4>
    <div className='flex'>

    <div className='flex'>
    <div>
    <img src={`${currentIconProp}`} alt='This is a weather Icon'/>
    </div>
    <div>
    <h2>{currentTempProp}</h2>
    <h4>{currentStatusProp}</h4>
    </div>
    </div>
    <div>
    
    </div>
    </div>
    </div>
  )
}

export default CurrentWeather;
