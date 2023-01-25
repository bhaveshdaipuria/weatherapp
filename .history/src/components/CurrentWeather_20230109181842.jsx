import React, {useState} from 'react';
import Navbar from './Navbar';

function CurrentWeather(){

  const apiKey = process.env.REACT_APP_API_KEY;

    const[city, setCity] = useState();
    const[weatherData, setWeatherData] = useState([]);
    const[country, setCountry] = useState();
    const[location, setLocation] = useState();
    const[currentDate, setCurrentDate] = useState();
    const[currentDay, setCurrentDay] = useState();
    const[currentMonth, setCurrentMonth] = useState();
    const[currentIcon, setCurrentIcon] = useState();
    const[currentTemp, setCurrentTemp] = useState();
    const[currentStatus, setCurrentStatus] = useState();


    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  
    const currentAPI = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

     function getWeather(e){
      e.preventDefault();
      fetch(currentAPI).then(data => data.json())
      .then((response)=>{
        setWeatherData([response]);
        setCountry(response.location.country);
        setLocation(response.location.name);
        setCurrentDate(new Date(`${response.current.last_updated}`).getDate());
        setCurrentDay(new Date(`${response.current.last_updated}`).getDay());
        setCurrentMonth(new Date(`${response.current.last_updated}`).getMonth());
        setCurrentIcon(response.current.condition.icon);
        setCurrentTemp(response.current.temp_c);
        setCurrentStatus(response.current.condition.text);
      });
    }

  return(
    <>
    <Navbar resultProp={getWeather} cityProp={(e)=>{setCity(e.target.value)}}/>
    {weatherData.length !==0 && <div>
    <div className='mt-16'>
    <h2>{location}, {country}</h2>
    <h4>{currentDate} {months[currentMonth]}, {weekDays[currentDay]}</h4>
    </div>
    <div> 
    <div>
    <div>
    <img src={`${currentIcon}`} alt='This is a weather Icon'/>
    </div>
    <div>
    <h2>{currentTemp}<span>&#176;</span></h2>
    <h4>{currentStatus}</h4>
    </div>
    </div>
    </div>
    </div>}
    </>
  )
}

export default CurrentWeather;
