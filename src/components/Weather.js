import React from "react";


class Weather extends React.Component{
    render() {
        return (
            <>
                {this.props.city &&
                    <>
                <p>Температура:{Math.floor(this.props.temp-273,15)}</p>
                <p>Ощущается как:{Math.floor(this.props.feels_like-273,15)}</p>
                {/*<p>Город:{this.props.city}</p>*/}
                {/*<p>Рассвет:{this.props.sunrise}</p>*/}
                    </>
    }
    <p>{ this.props.error }</p>
            </>

        );
    }
}

export default Weather;
