// Libraries
import axios from 'axios';
// Hooks
import { useEffect, useState } from 'react';
// Components
import Background from './Components/Background';
import Loading from './Components/Loading';
import Current from './Components/Current';
// Styles


function App() {
  const [lat, updateLat] = useState();
  const [lon, updateLon] = useState();
  const [units, changeUnit] = useState('imperial');
  const [lang, changeLang] = useState('en')
  const [weatherData, updateWeatherData] = useState({});
  const [locationData, updateLocationData] = useState({});
  const [hasData, updateHasData] = useState(false);
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
          updateHasData(true);
        } catch (err) {
          console.log(err)
        }
      }  
      // If found geo location
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

    return (
      <div className="App">
        < Background />
        { hasData ? (
          <div>
            < Current {...weatherData} locationData={locationData} />
          </div>
        ) : (
          < Loading />
        )}
      </div>
    );
  
}

export default App;