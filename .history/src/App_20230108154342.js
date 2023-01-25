import React, { useState } from 'react';
import './App.css';
import CurrentWeather from './components/CurrentWeather';
import Navbar from './components/Navbar';

function App() {

    const apiKey = process.env.REACT_APP_API_KEY;

    const[city, setCity] = useState();
  
    const currentAPI = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    let weatherData = [];
    let fullDate;
    let currentDate;
    let currentDay;
    let location;
  
    const getWeather =(e)=>{
      e.preventDefault();
      fetch(currentAPI).then(data => data.json())
      .then((response)=>{
        weatherData.push(response);
        console.log(weatherData);
        let fullDate = new Date(`${weatherData[0].current.last_updated}`);
        currentDate = fullDate.getDate();
        currentDay = fullDate.getDay();
        location = weatherData[0].location.name
      });
    }
  return (
    <>
    <Navbar resultProp={getWeather} cityProp={(e)=>{setCity(e.target.value)}}/>
    <CurrentWeather locationProp={location} dayProp={currentDay} dateProp={currentDate}/>
    </>
  );
}

export default App;
