import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import './wheather.css';
import Button from '@mui/material/Button';



function SeachWheather() {
let api_url="http://api.openweathermap.org/data/2.5/weather";
let api_key="59215788f9f16b68242ec3d1bec0210b";

let [city,setCity]=useState("");
 

let getWheatherInfo = async()=>{
      let response= await fetch(`${api_url}?q=${city}&appid=${api_key}&units=metric`)
    //   units=metics add krne se temperature kelivin ki jagah celsious me ane laga
      let jsonResp= await response.json();
      console.log(jsonResp);
      let result={
        city_Name:city,
        Country:jsonResp.sys.country,
        temp:jsonResp.main.temp,
        maxTemp:jsonResp.main.temp_max,
        Feels_Like:jsonResp.main.feels_like,
        minTemp:jsonResp.main.temp_min,
        humidity:jsonResp.main.humidity,
        Wheather:jsonResp.weather[0].description,
        Wind_Speed:jsonResp.wind.speed,
         
      }
      console.log(result);
}


let handleIn=(event)=>{
         setCity(event.target.value)
}

let handleForm=(event)=>{
event.preventDefault();
console.log(city);
setCity("");
getWheatherInfo();
}

  return (
    <div>
      <h2> <i>Search for a Wheather for any City!</i></h2>
      <form action="#" onSubmit={handleForm}>
      <TextField className='textField'
      value={city}
      onChange={handleIn}
      label="City Name" 
      required
      color="secondary" focused

      InputProps={{
        style: { color: 'white' },
      }}
      />

       <br /><br />

<Button color="secondary" className='button'
type='submit'
>Search</Button>

</form>
    </div>
  )
}

export default SeachWheather
