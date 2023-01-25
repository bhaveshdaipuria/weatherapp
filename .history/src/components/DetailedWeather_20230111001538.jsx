import React from 'react'

function DetailedWeather({maxTempProp, minTempProp, sunriseProp, windSpeedProp, rainChanceProp, sunsetProp}) {
  return (
    <div className='grid grid-cols-3 pt-4 gap-x-4'>

        <div>
        <h3 className='text-center'>{maxTempProp}</h3>
        <p className='text-center'>High</p>
        </div>
        <div>
        <h3>{minTempProp}</h3>
        <p className='text-center'>Low</p>
        </div> 
        <div>
        <h3>{sunriseProp}</h3>
        <p className='text-center'>Sunrise</p>
        </div>
        <div>
        <h3>{windSpeedProp}kph</h3>
        <p className='text-center'>Wind</p>
        </div>
        <div>
        <h3>{rainChanceProp}%</h3>
        <p className='text-center'>Rain</p>
        </div>
        <div>
        <h3>{sunsetProp}</h3>
        <p className='text-center'>Sunset</p>
        </div>

    </div>
  )
}

export default DetailedWeather
