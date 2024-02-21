import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './infobox.css'

function InfoBox( {info}) {
    let img_url = "https://media.istockphoto.com/id/1254778015/photo/woman-crossing-street-downtown-in-rain.webp?b=1&s=170667a&w=0&k=20&c=clwiJ6mkTx7spVMDOfYYQhLdYRJEFfuOFTuO5lSVGMU="
 
  return (
    <>
     <div className="container">
     <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image={img_url}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Temprature = {info.temp}</p>
          <div>Max Temprature = {info.tempMax}</div>
          <div>Min Temprature = {info.tempMin}</div>
          <div>Humidity = {info.humidity}</div>
          <div>weather = {info.weather}</div>
          <div>feels_like = {info.feelsLikes}</div>
        </Typography>
      </CardContent>
    </Card></div> 
    </>
  );
}

export default InfoBox;
