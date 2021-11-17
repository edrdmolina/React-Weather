// Libraries
import axios from 'axios';
// Hooks
import { useEffect, useState } from 'react';
// Components
import Current from './components/Current';
// Styles
import './App.css';

function App() {
  const [lat, updateLat] = useState();
  const [lon, updateLon] = useState();
  const [units, changeUnit] = useState('imperial');
  const [lang, changeLang] = useState('en')
  const [weatherData, updateWeatherData] = useState({});
  const [locationData, updateLocationData] = useState({});
  // const [inputZip, toggleInputZip] = useState(false);

  // Checks if location is supported by browser
  useEffect(() => {
    if ("geolocation" in navigator) {
      console.log("Geo-Location is available");
      // get geolocation coordinates
      getGeo()

      async function getData() {
        try {
          const input = {
            lat, lon, units, lang
          }
          const res = await axios.post('https://multi-purpose-api.herokuapp.com/api/weather', input)
          updateLocationData(res.data.location[0]);
          updateWeatherData(res.data.weatherData);
        } catch (err) {
          console.log(err)
        }
      }  
      // 
      if(lat && lon) getData();
    } else {
      console.log("Geo-Location is not available");
    }
  }, [lat, lon, units, lang])

  // Get geolocation
  function getGeo() {
    navigator.geolocation.getCurrentPosition((p) => {
      updateLat(p.coords.latitude);
      updateLon(p.coords.longitude);
    })
  }
  
  console.log(weatherData)

  return (
    <div className="App">
      < Current {...weatherData} locationData={locationData} />
    </div>
  );
  
}

export default App;
