import React from "react";
import "./weatherStyle.css"

class Weather extends React.Component{
    state={
        ShowInfo: false,
    }
    render() {

        return (
            <div className="InfoWeath">
            <>
                {this.props.city &&
                    <>
                        <ul>
                <li>Температура:{Math.floor(this.props.temp-273,15)}°</li>
                <li>Ощущается как:{Math.floor(this.props.feels_like-273,15)}°</li>
                        </ul>
                        <div>{this.state.ShowInfo==false ?<button onClick={() => this.setState({ShowInfo: true})}>
                            Показать больше информации</button> :
                            <ul>
                                <li>Город:{this.props.city}</li>
                                <li>Страна:{this.props.country}</li>
                                <li>Давление:{this.props.pressure}</li>
                                <li>Скорость ветра:{this.props.wind_speed}м/c</li>
                                <li>Рассвет:{this.props.sunrise}</li>
                            </ul>
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
