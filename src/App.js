// Libraries
import React, { Component } from 'react'
import axios from 'axios';

// Components
import Background from './Components/Background';
import Loading from './Components/Loading';
import Weather from './Components/Weather';
import Search from './Components/Search';

const backendURL = 'https://multi-purpose-api.herokuapp.com/api/weather';

export class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lat: '',
            lon: '',
            units: 'imperial',
            lang: 'en',
            weatherData: {},
            locationData: {},
            hasLocation: false,
            hasWeather: false,
            input: ''
        }
    }

    componentDidMount = () => {
      if('geolocation' in navigator) this.getGeo(); 
      else console.error("Geo-Location is not available");
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
            const { lat, lon, units, lang } = this.state;
            const input = {lat, lon, units, lang};
            const res = await axios.post(backendURL, input);
            if(res.status !== 200) return console.error(res.status);
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
        const { weatherData, locationData, hasWeather, units } = this.state;

        return (
            <div>
                < Background weatherData={weatherData} hasWeather={hasWeather} />
                < Search updateLocationData={updateLocationData} />
                { hasWeather ? (
                    < Weather 
                    updateLocationData={updateLocationData}
                    locationData={locationData} 
                    weatherData={weatherData} 
                    unit={units} 
                    />
                ) : (
                    < Loading />
                )}
            </div>
        )
    }
}

export default App;