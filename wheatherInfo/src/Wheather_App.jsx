import React, { useState } from 'react'
import SeachWheather from './searchWheather';
import Wheather_Info from './Wheather_Info.jsx';

function Wheather_App() {

let [info,setInfo] = useState({
    city_name:"Delhi",
       country:"India",
       temp:35.05,
       max_temp:35.05,
       min_temp:35.05,
       Wheather:"Haze",
       feels_Like:39.29,
       humidity:46,
       Wind_Speed:5.66,
})

// yha result me wo search wala pura object pass kara denge jo ki yha set hoo jayega
let handleSearch =(updateInfo)=>{
    setInfo(updateInfo)
}

  return (
    <div>
    <SeachWheather searchInfo={handleSearch} />
    {/* yha se info grab krr rhe */}
    <br />
    <Wheather_Info Info={info}/>
    {/* yha se to info, render krara rhe */}
    </div>
  )
}

export default Wheather_App
