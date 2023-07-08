import React from "react";
import "./weatherStyle.css"


class WeatherForm extends React.Component{
    render(){
        return (
            <form onSubmit={this.props.weatherMethod}>
                <input type="text" name="city" placeholder="Город"/>
                <button className="formbutton">Получить погоду</button>
            </form>
    );
    }

}

export default WeatherForm;
