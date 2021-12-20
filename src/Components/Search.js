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
import CloseIcon from '@mui/icons-material/Close';

// Styles
const searchStyles = makeStyles({
    nav: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'rgba(252,244,3,1)',
        height: '12vh',
        maxWidth: '500px',
        borderRadius: '0px 0px 10px 10px',
        boxShadow: '0px 3px 20px rgba(0,0,0,0.5)',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '90vw',
    },
    form: {
        width: '90%',
        height: '50%',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '1rem',
    },
    close: {
        margin: '0 auto',
        color: 'rgba(25,25,25)',
        borderRadius: '50%',
        padding: '0.5rem',

        '&:hover': {
            backgroundColor: 'rgba(50,50,50,0.05)',
            cursor: 'pointer'
        }
    },
    // hidden: {
    //    animation: '$slideUp 1s ease-out forwards'
    // },
    // '@keyframes slideUp': {
    //     from: { transform: 'translateX(-50%)' },
    //     to: { transform: 'translate(-50%, -15vh)' }
    // }
})

// const backendURL = 'https://multi-purpose-api.herokuapp.com/api/weather';

function Search(props) {
    const [countryCode, setCountryCode] = useState('')
    const [address, setAddress, clearAddress] = useChangeInput('')
    const { updateLocationData, toggleFunction } = props;
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
        <div className={`${classes.nav}`}>
            <form className={classes.form} onSubmit={geoLocation}>
                <Country setCountryCode={setCountryCode} />
                <Address address={address} setAddress={setAddress} clearAddress={clearAddress} />
                <Button sx={{height: '40px'}} type='submit' variant="outlined" size="small">Submit</Button>
            </form>
            <CloseIcon onClick={toggleFunction} className={classes.close} />
        </div>
    )
}

export default Search;