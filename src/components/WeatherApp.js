import React from "react";
import WeatherForm from "./WeatherForm";
import Weather from "./Weather";


const API_KEY="7c3eea84bff9dcdc629bc8aa262ed790";

class WeatherApp extends React.Component {

    state= {
        temp: undefined,
        feels_like: undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: undefined,
        sky: undefined,
        wind_speed: undefined,
        pressure: undefined
    }
    gettingWeather = async (e)=>{
        e.preventDefault();
        const city_name = e.target.elements.city.value;
        const api_url = await
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY}`);
        const data = await api_url.json();
        if(city_name){
            let sunrise = data.sys.sunrise;
            let date = new Date();
            date.setTime(sunrise);
            let sunrise_date = date.getHours()-12+":"+date.getMinutes()+":"+date.getSeconds();
            console.log(data)
            this.setState({
                temp:data.main.temp,
                feels_like:data.main.feels_like,
                city:data.name,
                country:data.sys.country,
                sunrise:sunrise_date,
                error:undefined,
                sky: data.weather.main,
                wind_speed: data.wind.speed,
                pressure: data.main.pressure
            })
        } else{
            this.setState({
                temp: undefined,
                feels_like: undefined,
                city: undefined,
                country: undefined,
                sunrise: undefined,
                sunset: undefined,
                error: "Введите название города",
                sky: undefined,
                wind_speed: undefined,
                pressure: undefined
            });
        }
    }
    render() {
        return (
            <>
                <WeatherForm weatherMethod={this.gettingWeather} />
                <Weather
                    temp={this.state.temp}
                    feels_like={this.state.feels_like}
                    city={this.state.city}
                    country={this.state.country}
                    sunrise={this.state.sunrise}
                    error={this.state.error}
                    sky={this.state.sky}
                    wind_speed={this.state.wind_speed}
                    pressure={this.state.pressure}
                    />


            </>
        );
    }
}
export default WeatherApp;