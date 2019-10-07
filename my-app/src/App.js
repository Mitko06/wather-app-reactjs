import  React from 'react';
import Titles from './components/Titles'
import Font from "./components/Font";
import Weather from "./components/Weather";
import Form from "./components/Form";
//import data from '../src/data';
import Chart from "./components/Chart";
import HomeComponent from "./components/SugestedPlace";

const API_KEY="2ce968a66303b225272fbe7808fc550f";
const GOOGLE_API_KEY="AIzaSyDClUT4qsTWzwDvNQ8rkbrmWOblTgHzA5w";
/*function getData() {
    return data;
}*/
//console.log(data);

class App extends React.Component{
    state={
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        countryFlag: undefined,
        chartData: []
    };
    getWeather = (e) => {
        e.preventDefault();
        let cityName = e.target.elements.city.value;
        let countryName = e.target.elements.country.value;
        const api_url = "http://api.openweathermap.org/data/2.5/weather?q="+cityName+","+countryName+"&appid="+API_KEY;

        console.log(api_url);
        fetch("https://cors-anywhere.herokuapp.com/"+api_url)
            .then((result) => {
                // Get the result
                // If we want text, call result.text()

                return result.json();
            }).then((jsonResult) => {
            // Do something with the result

            console.log("This is jsonResult: "+jsonResult);
            let countryFlag="https://www.countryflags.io/"+jsonResult.sys.country+"/flat/32.png";
            let currentHour;
            let currentHourTemp;
            let finalObj=[];
            let dataObj={
                name: undefined,
                uv: undefined,
                pv: 4300,
                amt: 2100,
            };
            console.log(countryFlag);
            fetch("https://cors-anywhere.herokuapp.com/"+"http://api.openweathermap.org/data/2.5/forecast?q="+cityName+","+countryName+"&appid="+API_KEY)
                .then((result)=> {
                    return result.json();
            }).then((jsonResult)=>{

                for(let i=jsonResult.list.length-5;i<jsonResult.list.length;i++){
                    currentHour=jsonResult.list[i].dt_txt;
                    currentHourTemp=jsonResult.list[i].main.temp;

                    //console.log(jsonResult.list.length + currentHour);
                    dataObj.name=currentHour;
                    dataObj.uv=currentHourTemp;
                    console.log(dataObj.hour+" "+dataObj.temp);

                    finalObj.push(dataObj);
                }
                finalObj=JSON.parse(JSON.stringify(finalObj));
                console.log(finalObj);

            });
            this.setState({
                temperature: jsonResult.main.temp,
                city: jsonResult.name,
                country: jsonResult.sys.country,
                humidity: jsonResult.main.humidity,
                description: jsonResult.weather[0].description,
                countryFlag: countryFlag,
                chartData: finalObj
            });

        });
        //console.log(data);

        console.log(this.state)
    };
    render() {
        return (
            <div className="wrapper">
                <div className="main">
                    <div className="container">

                        <div className="row">

                            <div className="col-xs-5 title-container">
                                <Titles />
                            </div>
                            <div className="col-xs-7 form-container">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-md-2">
                                                        <span className="glyphicon glyphicon-ok-sign"></span>
                                                    </div>
                                                    <div className="col-md-10">
                                                        <h5 className="card-title">Suggested Location</h5>
                                                        <p className="card-text">This is preferred location you are currently on!</p>
                                                        <button href="#" className="suggestion">Display weather for Skopje</button>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <Form data={this.getWeather}/>
                                        <Weather
                                            temperature={this.state.temperature}
                                            city={this.state.city}
                                            country={this.state.country}
                                            humidity={this.state.humidity}
                                            description={this.state.description}
                                            countryFlag={this.state.countryFlag}
                                        />
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <Chart data={this.state.chartData}/>
                                        </div>
                                    </div>
                                    <HomeComponent />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
export default App;
