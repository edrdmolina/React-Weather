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
import MyLocationIcon from '@mui/icons-material/MyLocation';
import AddLocationIcon from '@mui/icons-material/AddLocation';

// Styles
const searchStyles = makeStyles({
    nav: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
    },
    form: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'rgba(252,244,3,1)',
        borderRadius: '0px 0px 10px 10px',
        boxShadow: '0px 3px 20px rgba(0,0,0,0.5)',
        height: '150px',
        width: '90vw',
        maxWidth: '600px',
        top: '-160px',
    },
    inputs: {
        display: 'flex',
        width: '95%',
        justifyContent: 'space-around',
    },
    open: {
        margin: '25px',
        color: 'white',
        '&:hover': {
            cursor: 'pointer',
            transform: 'scale(1.05)',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
        },
        '&:active': {
            transform: 'translate(1px, 1px)'
        }
    },
    location: {
        color: 'rgba(25,25,25)',
        borderRadius: '50%',
        '&:hover': {
            cursor: 'pointer',
            transform: 'scale(1.05)',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            backgroundColor: 'rgba(50,50,50,0.05)',
        },
        '&:active': {
            transform: 'translate(1px, 1px)',
            backgroundColor: 'rgba(50,50,50,0.05)',
        }
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
    opening: {
        animation: '$opening 0.5s ease-out forwards'
    },
    '@keyframes opening': {
        from: { transform: 'translateY(0)' },
        to: { transform: 'translateY(160px)' }
    },
    closing: {
        animation: '$closing 0.5s ease-in forwards'
    },
    '@keyframes closing': {
        from: { transform: 'translateY(160px)' },
        to: { transform: 'translateY(0)' }
    }
})

const backendURL = 'https://multi-purpose-api.herokuapp.com/api/weather/geolocation';

function Search(props) {
    const [countryCode, setCountryCode] = useState('')
    const [showNav, toggleShowNav] = useState(false);
    const [address, setAddress, clearAddress] = useChangeInput('')
    const { updateLocationData, getGeo } = props;
    const classes = searchStyles(showNav);

    async function geoLocation(e) {
        e.preventDefault();
        document.getElementById('address').blur();
        
        const input = { countryCode, address}

        const res = await axios.post(backendURL, input);

        const { error, location } = res.data;
        if(error) return console.error(error);
        return updateLocationData(location);
    }

    function toggleNav(e) {
        e.preventDefault();
        toggleShowNav(!showNav);
    }

    return (
        <div className={`${classes.nav}`}>
            < AddLocationIcon className={classes.open} onClick={toggleNav} />
            <form className={`${classes.form} ${showNav ? classes.opening : classes.closing}`} onSubmit={geoLocation}>
                <div className={classes.inputs}>
                    <Country setCountryCode={setCountryCode} />
                    <Address address={address} setAddress={setAddress} clearAddress={clearAddress} />
                    <Button sx={{height: '40px', width: '10%'}} type='submit' variant="outlined" size="small">Submit</Button>
                </div>
                < MyLocationIcon className={classes.location} onClick={getGeo} />
                < CloseIcon className={classes.close} onClick={toggleNav} />
            </form>
        </div>
    )
}

export default Search;