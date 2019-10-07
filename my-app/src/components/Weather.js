import React from 'react';

class Weather extends React.Component{
    render() {
                return (
            <div className="dataShown">
                <div className="row">

                    <div className="col-md-6">
                        {this.props.city && <p>Location: {this.props.city}</p>}
                        {this.props.country && <p>Country: {this.props.country} <img src={this.props.countryFlag}  alt={this.props.country}/> </p>}
                        {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
                        {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}

                    </div>
                    <div className="col-md-6">
                        {this.props.description==="broken clouds" && <div><img src="https://cdn3.iconfinder.com/data/icons/tango-icon-library/48/weather-few-clouds-128.png"/></div>}
                        {this.props.description==="clear sky" && <div><img src="https://cdn2.iconfinder.com/data/icons/rainy-weather/256/Cloudy-256.png"/></div>}
                        {this.props.description==="few clouds" && <div><img src="https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-02-128.png"/></div>}
                        {this.props.description==="scattered clouds" && <div><img src="https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-06-128.png"/></div>}
                        {this.props.description==="shower rain" && <div><img src="https://cdn2.iconfinder.com/data/icons/freecns-cumulus/32/519818-32_Cloud_Rain_Moon-128.png"/></div>}
                        {this.props.description==="rain" && <div><img src="https://cdn2.iconfinder.com/data/icons/freecns-cumulus/32/519933-30_Cloud_Rain-128.png"/></div>}
                        {this.props.description==="snow" && <div><img src="https://cdn4.iconfinder.com/data/icons/weather-29/256/sun_simple_cloudy_snow-128.png"/></div>}
                        {this.props.description==="mist" && <div><img src="https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_30-128.png"/></div>}
                    </div>
                </div>
            </div>
        );
    }

}

export default Weather;

