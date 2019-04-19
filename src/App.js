import React from "react";
import Titles from "./components/Title.js"
import Forms from "./components/Forms.js"
import Weather from "./components/Weather.js"

const API_KEY = "1de6cc64d2d0778d603ca74b012b18d6";

class App extends React.Component{
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if(city && country){
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });  
    }
    
  }
  render(){
    return(
        <div>
          <h1>YOOOOOO !!!!</h1>
          <Titles />
          <Forms getWeather={this.getWeather} />
          <Weather 
            temperature = {this.state.temperature}
            city = {this.state.city}
            country = {this.state.country}
            humidity = {this.state.humidity}
            description = {this.state.description}
            error = {this.state.error}
          />
        </div>
      );

  }
}

export default App;