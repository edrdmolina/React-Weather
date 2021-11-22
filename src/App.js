// Libraries
import axios from 'axios';

// Hooks
import { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import useChangeInput from './Hooks/useChangeInput';

// Components
import Background from './Components/Background';
import Loading from './Components/Loading';
import Current from './Components/Current';
import { TextField } from '@mui/material';

// Styles
const appStyles = makeStyles({
  nav: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    height: '20%',
    width: '50%',
    paddingTop: '1rem',
    margin: '0 auto 0 auto'
  }
})

function App() {
  const [lat, updateLat] = useState();
  const [lon, updateLon] = useState();
  const [units, changeUnit] = useState('imperial');
  const [lang, changeLang] = useState('en')
  const [weatherData, updateWeatherData] = useState({});
  const [locationData, updateLocationData] = useState({});
  const [hasData, updateHasData] = useState(false);
  const [zipCode, updateZipCode, clearZipCode] = useChangeInput('');

  const classes = appStyles();

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

  async function submitGetGeo(e) {
    e.preventDefault();
    document.getElementById('zipCode').blur();
    // Empties the lat and lon state
    updateLat(null);
    updateLon(null);
    // Request lat and lon from back end
    const res = await axios.post('https://multi-purpose-api.herokuapp.com/api/weather/location', { input: zipCode });
    // If no location found trigger error
    if (res.data.error) {
      // ERROR HANDLER
      return console.log(res.data.error)
    }
    // update lat and lon from results
    const { lat, lon } = res.data
    updateLat(lat);
    updateLon(lon);
  }

  return (
    <div className={classes.App}>
      < Background />
      <form className={classes.nav} onSubmit={submitGetGeo} >
        <TextField label="Zip Code or City" size='small' fullWidth
        value={zipCode} onChange={updateZipCode} onFocus={clearZipCode}
        className={classes.zipCode} id='zipCode' autoComplete='off'
        />   
      </form>
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