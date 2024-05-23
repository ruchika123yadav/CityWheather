import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbCloudyIcon from '@mui/icons-material/WbCloudy';
import WindPowerIcon from '@mui/icons-material/WindPower';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import './wheather_info.css';

function Wheather_Info({Info}) {
  let sunny_url="https://i.pinimg.com/736x/3c/1d/cd/3c1dcd31969ebc949d1e50a77cebf4d0.jpg";
  let rainy_url="https://media.newstrack.in/uploads/other-news/trending-news/Jul/18/big_thumb/fotu_64b6498f17e02.JPG";
  let stormy_url="https://www.findingtheuniverse.com/wp-content/uploads/2017/01/Blue2Bhour2BFinland_by_Laurence2BNorah.jpg";
  let windy_url="https://t3.ftcdn.net/jpg/04/99/96/18/360_F_499961849_RTPjXHECUHBi4X9ZrpVTxb30Esx0bvIq.jpg";
  let cloudy_url="https://t4.ftcdn.net/jpg/05/13/26/73/360_F_513267391_QEmNGeOFLLqrILTnoq21dReUPp5UsoNr.jpg";

    
  return (
    <div className='container'>
       <Card sx={{ maxWidth: 360, minHeight:300 }} className='container' >
     <CardActionArea>
       <CardMedia
         component="img"
         height="180"
         image={Info.temp<5?stormy_url:Info.temp<18?cloudy_url:Info.Wind_Speed>12? windy_url:Info.humidity>80? rainy_url:sunny_url}
         alt="green iguana"
         sizes='large'
       />
       <CardContent className='card_content'>
         <Typography gutterBottom variant="h5" component="div">
           <div style={{ textTransform: 'uppercase' }}>

            {Info.city_name}&nbsp;
            {Info.temp<5?<AcUnitIcon/>:Info.temp<18? <WbCloudyIcon/>:Info.Wind_Speed>12? <WindPowerIcon/>:Info.humidity>80? <ThunderstormIcon/>:<WbSunnyIcon/>}

           </div> 
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
