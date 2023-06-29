import React from "react";
import "./weatherStyle.css"

class Weather extends React.Component{
    state={
        ShowInfo: false,
    }
    render() {

        return (
            <div className="infoWeath">
            <>
                {this.props.city &&
                    <>
                    <p>Температура:{Math.floor(this.props.temp-273,15)}°  <img src="pngwing.com.png" alt="My Image" /></p>

                <p>Ощущается как:{Math.floor(this.props.feels_like-273,15)}°</p>
                        <div>{this.state.ShowInfo===false ?<button className="formbutton"
                            onClick={() => this.setState({ShowInfo: true})}>
                            Показать больше информации</button> :
                           <p>
                               <p>Город:{this.props.city} <img src="city.logo.png" alt="My Image" /></p>
                               <p>Давление:{this.props.pressure}  <img src="bar.logo.png" alt="My Image" /></p>
                               <p>Скорость ветра:{this.props.wind_speed}м/c <img src="wind.logo.png" alt="My Image"/></p>
                               <p>Рассвет:{this.props.sunrise} <img src="sunrise.logo.png" alt="My Image" /></p>
                            </p>
                        }</div>
                    </>
    }
    <p className="error">{ this.props.error }</p>
            </>
            </div>
        );
    }
}

export default Weather;
