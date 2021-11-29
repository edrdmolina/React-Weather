// Hooks
import { makeStyles } from '@mui/styles';
// Components
import Current from "./Weather/Current";
import Hourly from './Weather/Hourly';
import Daily from './Weather/Daily';
import UVIndex from './Weather/UVIndex';
import FeelsLike from './Weather/FeelsLike';
import Sunrise from './Weather/Sunrise';
import Sunset from './Weather/Sunset';
import Wind from './Weather/Wind';

// Styles
const weatherStyles = makeStyles({
    weather: {
        margin: '2rem 0',
        minHeight: '88.65vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    squares: {
        width: '90%',
        maxWidth: '800px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
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
                < Daily weatherData={weatherData} />
                <div className={classes.squares}>
                    < UVIndex uvi={current.uvi} /> 
                    < FeelsLike feelsLike={current.feels_like} />
                    < Sunrise weatherData={weatherData} />
                    < Sunset weatherData={weatherData} />
                    < Wind current={current} />
                </div>
        </div>
    )
}

export default Weather