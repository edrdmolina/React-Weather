// Hooks
import { makeStyles } from '@mui/styles';
// Components
import Current from "./Weather/Current";
import Hourly from './Weather/Hourly';
// Styles
const weatherStyles = makeStyles({
    weather: {
        marginTop: '2rem',
        minHeight: '88.65vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
})

function Weather(props) {
    const { locationData, weatherData } = props;
    const { city } = locationData;
    const { current, daily } = weatherData;
    const classes = weatherStyles();

    return (
        <div className={classes.weather}>
                < Current city={city} current={current} daily={daily} />
                < Hourly weatherData={weatherData} />
        </div>
    )
}

export default Weather