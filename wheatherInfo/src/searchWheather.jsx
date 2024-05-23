import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import './wheather.css';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';




function SeachWheather({searchInfo}) {
let api_url="http://api.openweathermap.org/data/2.5/weather";
let api_key="59215788f9f16b68242ec3d1bec0210b";

let [city,setCity]=useState("");
let [err,setErr]= useState(false);
 

let getWheatherInfo = async()=>{ 
    
 try{
     let response= await fetch(`${api_url}?q=${city}&appid=${api_key}&units=metric`)
    //   units=metics add krne se temperature kelivin ki jagah celsious me ane laga
        let jsonResp= await response.json();
      console.log(jsonResp);
      let result={
        city_name:city,
        country:jsonResp.sys.country,
        temp:jsonResp.main.temp,
        max_temp:jsonResp.main.temp_max, 
        min_temp:jsonResp.main.temp_min,     
        Wheather:jsonResp.weather[0].description,
        feels_Like:jsonResp.main.feels_like,
        humidity:jsonResp.main.humidity,
        Wind_Speed:jsonResp.wind.speed,
    }     
      console.log(result);
      return result;

}  catch(err){ throw err;}
   

};


let handleIn=(event)=>{
         setCity(event.target.value)
}

let handleForm= async (event)=>{
    try{
      event.preventDefault();
      setErr(false);
console.log(city);
setCity("");
let updateInfo=await getWheatherInfo();
searchInfo(updateInfo);
}catch(err){
    setErr(true)
}

}

  return (
    <div>
      <h2> <i>Search for a Wheather for any City !</i></h2>
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
>Search</Button><br />
{err && <Alert severity="error">No such place in our api!<br/>Please try with another place</Alert>}

</form>
    </div>
  )
}

export default SeachWheather
