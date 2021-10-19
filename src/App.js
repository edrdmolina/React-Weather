import { useEffect, useState } from 'react';

import axios from 'axios';

import Current from './components/Current';

import './App.css';


function App() {
  const [lat, updateLat] = useState();
  const [lon, updateLon] = useState();
  const [units, changeUnit] = useState('imperial');
  const [lang, changeLang] = useState('en')
  const [isLoading, toggleIsLoading] = useState(true);
  const [weatherData, updateWeatherData] = useState({});
  // const [inputZip, toggleInputZip] = useState(false);

  // Checks if location is supported by browser
  useEffect(() => {
    if ("geolocation" in navigator) {
      console.log("Geo-Location is available");
      getGeo()
    } else {
      console.log("Geo-Location is not available");
    }

    
  }, [])

  // Retrieves weather data from backend API.
  // useEffect(() => {
  //   async function getData() {
  //     try {
  //       const input = {
  //         lat, lon, units, lang
  //       }
  //       const res = await axios.post('/api/weather', input)
  //       console.log(res)
  //       updateWeatherData(res.data);
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }  

  //   if(!isLoading) {
  //     setTimeout(() => {
  //       getData();  
  //     }, 1500);
  //   }
  // }, [isLoading, lat, lon, units, lang])
  
  function getGeo() {
    navigator.geolocation.getCurrentPosition((p) => {
      updateLat(p.coords.latitude);
      updateLon(p.coords.longitude);
      toggleIsLoading(false);
    })
  }
  
  
  return (
    <div className="App">
      < Current {...weatherData} />
    </div>
  );
}

export default App;
