// Libraries
import React, { Component } from 'react'
import axios from 'axios';

// Components
import Background from './Components/Background';
import Loading from './Components/Loading';
import Weather from './Components/Weather';
import Search from './Components/Search';

// const backendURL = 'https://multi-purpose-api.herokuapp.com/api/weather';

export class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lat: '',
            lon: '',
            unit: 'imperial',
            lang: 'en',
            weatherData: {},
            locationData: {},
            hasLocation: false,
            hasWeather: false,
            input: ''
        }
    }

    componentDidMount = () => {
      if('geolocation' in navigator) {
        console.log("Geo-Location is available");
        this.getGeo();
      } else {
        console.log("Geo-Location is not available");
      }
    }

    componentDidUpdate = () => {
      if(this.hasLocation) this.getWeatherData();
    }

    // Update the Latitude and Longitude state.
    updateLatLon = (lat, lon) => this.setState({lat, lon});
    // Update Location Data
    updateLocationData = (locationData) => {
        this.setState({
            locationData: locationData, 
            lat: locationData.latitude, 
            lon: locationData.longitude, 
            hasLocation: true 
        })
        this.getWeatherData()
    }

    // Gets weather data from backend
    getWeatherData = async () => {
        try {
            const { lat, lon, unit, lang } = this.state;

            const input = {lat, lon, unit, lang};

            const res = await axios.post('http://localhost:5000/api/weather', input);

            if(res.status !== 200) return console.log(res.status);

            const { weatherData, location } = res.data;

            this.setState({ weatherData: weatherData, hasWeather: true, locationData: location })

        } catch (err) {
            console.error(err)
        }
    }

    // Get geolocation from browser navigator
    getGeo = () => {
        // https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition

        const { updateLatLon, getWeatherData } = this;

        const options = {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        }

        function success(pos) {
          const { latitude, longitude } = pos.coords;
          updateLatLon(latitude, longitude);
          return getWeatherData();
        }

        function error(err) {
          console.warn(`ERROR(${err.code}): ${err.message}`);
        }

        navigator.geolocation.getCurrentPosition(success, error, options)
    }
    
    render() {
        const { updateLocationData } = this;
        const { weatherData, locationData, hasWeather } = this.state;

        return (
            <div>
                < Background />
                < Search updateLocationData={updateLocationData} />
                { hasWeather ? (
                    < Weather locationData={locationData} weatherData={weatherData} />
                ) : (
                    < Loading />
                )}
            </div>
        )
    }
}

export default App;