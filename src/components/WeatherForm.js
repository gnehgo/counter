import React from "react";


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
