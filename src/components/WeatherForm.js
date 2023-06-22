import React from "react";
import {Navbar} from "react-bootstrap";


class WeatherForm extends React.Component{
    render(){
        return (
            <form onSubmit={this.props.weatherMethod}>
                <input type="text" name="city" placeholder="Город"/>
                <button>Получить погоду</button>
            </form>
    );
    }

}

export default WeatherForm;
