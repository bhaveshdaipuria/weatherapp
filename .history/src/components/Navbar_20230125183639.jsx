import React from 'react';

function Navbar({resultProp, cityProp}){

  return (
    <>
    <div className='flex justify-around ml-20 mt-12'>
    <h1 className='text-slate-50 font-bold text-sm'>Weather App</h1>
    <div className='pt-2'>
    <form role="search" onSubmit={resultProp} className='flex gap-x-4'>
        <label htmlFor='cityName' className='pt-2 text-slate-50 font-bold'>Enter City: </label>
        <input type='text' className='text-center' placeholder='Enter City Name' onChange={cityProp} id='cityName'/>
        <button type="submit" className='btn btn-dark' onClick={resultProp}>Search</button>
    </form>
    </div>
    </div>
    </>
  )
}

export default Navbar;
