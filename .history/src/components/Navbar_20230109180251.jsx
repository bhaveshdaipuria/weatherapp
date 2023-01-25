import React from 'react'

function Navbar({resultProp, cityProp}){

  return (
    <>
    <div className='flex justify-around mt-12'>
    <div>
    <h1>Weather App</h1>
    </div>
    <div className='pt-4'>
    <form role="search" onSubmit={resultProp}>
        <label htmlFor='searchLocation'>Enter City Name: </label>
        <input id='searchLocation' placeholder='Search' onChange={cityProp}/>
        <button type="submit">Search</button>
    </form>
    </div>
    </div>
    </>
  )
}

export default Navbar;
