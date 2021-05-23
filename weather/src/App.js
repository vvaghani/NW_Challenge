import React, { Component } from 'react';
import "./App.css";
import Header from "./Components/Header";
import InputField from "./Components/InputField";
import Location from "./Components/Location";
import Display from "./Components/Display";
import Error from "./Components/ErrorHandling";
import axios from "axios";

const apiKey = process.env.REACT_APP_WEATHER_API_KEY
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="


class App extends Component {
  state = {
    city: undefined,
    country: undefined,
    temp: undefined,
    min: undefined,
    max: undefined,
    description: undefined,
    error: true,
  };

  /* Having the temperature round up to integer */
  roundTemp = (temp) => {
    return Math.floor(temp);
  };

  onChangeData = (input) => (e) => {
    this.setState({
      [input]: e.target.value,
    });
  };

  /* Changing the background as per the degree */
  selectBackground = (temp, error) => {
    return temp < 16 && error === false
      ? "App App-Cold"
      : temp > 25 && error === false
      ? "App App-Hot"
      : temp < 26 && temp > 15 && error === false
      ? "App App-Normal"
      : "App";
  };

  /* Getting the weather from the api when required information is entered */
  getWeather = () => {
    const { city, country } = this.state;
    
    axios
      .get(`${apiUrl}${city},${country}&units=imperial&appid=${apiKey}`)
      .then((response) => {
        const data = response.data;
        
        /* Update the information as per the search */
        this.setState({
          city: data.name,
          country: data.sys.country,
          temp: this.roundTemp(data.main.temp),
          min: this.roundTemp(data.main.temp_min),
          max: this.roundTemp(data.main.temp_max),
          description: data.weather[0].description,
          error: false,
        });
      })
      .catch((err) => {
        this.setState({ error: true });
      });
  };

  /* Returns all the information */
  render() {
    const { city, country, temp, min, max, description, error } = this.state;
    
    return (
      <div className={this.selectBackground(temp, error)}>
        <Header />
        
        {/* If entered incorrect city display the error message otherwise display the results */}
        <InputField
          handleChange={this.onChangeData}
          loadWeather={this.getWeather}
        />
        {error === false ? (
          <Location city={city} country={country} />
        ) : (
          <Error />
        )}
        {error === false ? (
          <Display min={min} max={max} temp={temp} description={description} />
        ) : null}
      </div>
    );
  }
}

export default App;