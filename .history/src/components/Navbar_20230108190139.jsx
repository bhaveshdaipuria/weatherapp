import React from 'react'

function Navbar({resultProp, cityProp}){

  return (
    <>
    <div>
    <div>
    <h1>Weather App</h1>
    </div>
    <div>
    <form className="d-flex" role="search" onSubmit={resultProp}>
        <input  type="search" placeholder="Search" aria-label="Search" onChange={cityProp}/>
        <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
    </div>
    </div>
    </>
  )
}

export default Navbar;
