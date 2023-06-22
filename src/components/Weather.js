import React from "react";
import weatherlogo from "../img/weather_logo.png";
class Weather extends React.Component{
    state={
        ShowInfo: false,
    }
    render() {

        return (
            <>
                {this.props.city &&
                    <>
                        <ol>
                <li>Температура:{Math.floor(this.props.temp-273,15)}°</li>
                <li>Ощущается как:{Math.floor(this.props.feels_like-273,15)}°</li>
                        </ol>
                        <div>{this.state.ShowInfo==false ?<button onClick={() => this.setState({ShowInfo: true})}>
                            Показать больше информации</button> :
                            <p>
                                Город:{this.props.city}
                                Страна:{this.props.country}
                                Давление:{this.props.pressure}
                                Скорость ветра:{this.props.wind_speed}м/c
                                Что там над нами:{this.props.sky}
                                Рассвет:{this.props.sunrise}
                                Ощущается как:{Math.floor(this.props.feels_like-273,15)}
                            </p>
                        }</div>
                    </>
    }
    <p>{ this.props.error }</p>
            </>
        );
    }
}

export default Weather;
