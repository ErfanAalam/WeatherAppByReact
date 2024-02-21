import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { useScrollTrigger } from "@mui/material";
import './infobox.css'

function SearchBox({updateInfo}) {
    const [city, setCity] = useState("");
      let API_URL = "https://api.openweathermap.org/data/2.5/weather"
      let API_KEY = "e284f5d0cc8ea3e40ba6fbd78a32452e"

      let getWeatherInfo =  async () =>{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
        let jsonresponse = await response.json();
        console.log(jsonresponse)
        let result = {
            city: city,
            temp: jsonresponse.main.temp,
            tempMin: jsonresponse.main.temp_min,
            tempMax: jsonresponse.main.temp_max,
            humidity: jsonresponse.main.humidity,
            feelsLikes: jsonresponse.main.feels_like,
            weather: jsonresponse.weather[0].description,
        }
        console.log(result);
        return result
      }
 

  let handleChange = (e) => {
    setCity(e.target.value);
  };

  let handleSubmit =async (event) =>{
    event.preventDefault();
    console.log(city);
    setCity("")
    let information = await getWeatherInfo();
    updateInfo(information)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
      <TextField
        id="city"
        label="City Name"
        variant="outlined"
        required
        value={city}
        onChange={handleChange}
      />
      <br /> <br />
      <Button
        variant="contained"
        type="submit"
        size="large"
        color="success"
        startIcon={<SearchIcon />}
      >
        Search
      </Button>
      </form>
      
    </>
  );
}

export default SearchBox;
