import React from 'react'

function Navbar({resultProp, cityProp}){

  return (
    <>
    
    <div>
    <div className="collapse navbar-collapse flex justify-content-around" id="navbarSupportedContent">
    <div>
    <h1>Weather App</h1>
    </div>
    <div>
    <form className="d-flex" role="search" onSubmit={resultProp}>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={cityProp}/>
        <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
    </div>
    </div>
    </div>
    </>
  )
}

export default Navbar;
