import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './wheather_info.css';

function Wheather_Info() {
   let Info={
       country:"India",
       city_name:"Delhi",
       temp:35.05,
       max_temp:35.05,
       min_temp:35.05,
       Wheather:"Haze",
       feels_Like:39.29,
       humidity:46,
       Wind_Speed:5.66,

   }
  return (
    <div className='container'>
       <Card sx={{ maxWidth: 360, minHeight:300 }} className='container' >
     <CardActionArea>
       <CardMedia
         component="img"
         height="180"
         image="https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?cs=srgb&dl=pexels-pixabay-209831.jpg&fm=jpg"
         alt="green iguana"
         sizes='large'
       />
       <CardContent className='card_content'>
         <Typography gutterBottom variant="h5" component="div">
            {Info.city_name}
         </Typography>
         <Typography variant="body2" color="text.secondary">
           <div>
           <div className='wheather_info'>Country = {Info.country}</div>
           <div className='wheather_info'>Temperature = {Info.temp}&deg;C</div>
           <div className='wheather_info'>Max_Temp = {Info.max_temp}&deg;C</div>
           <div className='wheather_info'>Min_Temp = {Info.min_temp}&deg;C</div>
            <div className='wheather_info'>Humidity = {Info.humidity}</div>
           <div className='wheather_info'>Wind Speed = {Info.Wind_Speed}</div>
           <p>The Wheather can be describe as <b><i>{Info.Wheather}</i></b> and feels like <b><i>{Info.feels_Like}</i></b>&deg;C </p>
           </div>
         </Typography>
       </CardContent>
     </CardActionArea>
   </Card>
    </div>
  )
}

export default Wheather_Info;
