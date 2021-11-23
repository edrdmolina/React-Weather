// Libraries
import axios from 'axios';

// Hooks
import useChangeInput from '../Hooks/useChangeInput';
import { useState } from 'react';
import { makeStyles } from '@mui/styles';

// Components
import { Button } from '@mui/material';
import Country from './Search/Country';
import Address from './Search/Address';

// Styles
const searchStyles = makeStyles({
    nav: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      paddingTop: '2rem',
      margin: '0 auto 0 auto'
    },
})

// const backendURL = 'https://multi-purpose-api.herokuapp.com/api/weather';

function Search(props) {
    const [countryCode, setCountryCode] = useState('')
    const [address, setAddress, clearAddress] = useChangeInput('')
    const { updateLocationData } = props;
    const classes = searchStyles();

    async function geoLocation(e) {
        e.preventDefault();
        console.log('submitting form')
        document.getElementById('address').blur();
        
        const input = { countryCode, address}

        const res = await axios.post('http://localhost:5000/api/weather/geolocation', input);

        const { error, location } = res.data;
        if(error) return console.error(error);
        return updateLocationData(location);
    }

    return (
        <form className={classes.nav} onSubmit={geoLocation}>
            <Country setCountryCode={setCountryCode} />
            <Address address={address} setAddress={setAddress} clearAddress={clearAddress} />
            <Button type='submit' variant="outlined" size="small">Submit</Button>
        </form>
    )
}

export default Search;