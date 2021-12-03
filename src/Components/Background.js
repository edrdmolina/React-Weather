// Hooks
import { makeStyles } from '@mui/styles';

// Component
import BackgroundAnimation from './BackgroundAnimation';

// Styles
const backgroundStyles = makeStyles({
    background: {
        position: 'fixed',
        minHeight: '100vh',
        width: '100vw',
        zIndex: '-20',
    },
})

function Background(props) {
    const classes = backgroundStyles();
    const { weatherData, hasWeather } = props;
    
    if(hasWeather) {
        let { dt, sunset, sunrise } = weatherData.current;

        // Night
        dt += 8000;
        // Sunset
        // dt += 3600;
        // Sunrise
        // dt -= 35000;
        const style = { background: '' }

        if(isDay(dt, sunrise, sunset)) style.background = 'linear-gradient(180deg, rgba(100, 100, 200, 1), rgba(150, 150, 255, 1))';
        else if(isNight(dt, sunrise, sunset)) style.background = 'linear-gradient(180deg, rgba(20, 20, 80, 1), rgba(30, 30, 80, 1))';
        else if(isSunset(dt, sunset)) style.background = 'linear-gradient(180deg, rgb(8, 24, 58), rgb(21, 40, 82, 1), rgb(75, 61, 96), rgb(253,94,83), rgb(252,156,84), rgb(255,227,115))';
        else if(isSunrise(dt, sunrise)) style.background = 'linear-gradient(0deg, rgb(8, 24, 58), rgb(21, 40, 82, 1), rgb(75, 61, 96), rgb(253,94,83), rgb(252,156,84), rgb(255,227,115))';

        return (
            <div className={classes.background} style={style}>
                < BackgroundAnimation code={weatherData.current.weather[0].icon} />
            </div>
        )
    } else {
        const style = {
            background: 'linear-gradient(180deg, rgba(100, 100, 200, 1), rgba(150, 150, 255, 1))'
        }
        return (
            <div className={classes.background} style={style} />

        )
    }
}


export default Background;

function isDay(dt, sunrise, sunset) {
    let sunriseDiff = dt - sunrise;
    let sunsetDiff = sunset - dt;
    if(sunriseDiff > 3600 && sunsetDiff > 3600) return true;
    else return false;
}

function isNight(dt, sunrise, sunset) {
    if(dt > sunset || dt < sunrise) return true;
    else return false;
}

function isSunrise(dt, sunrise) {
    let diff = dt - sunrise;
    if(diff > 0 && diff < 3600) return true;
    else return false;
}

function isSunset(dt, sunset) {
    let diff = sunset - dt;
    if(diff > 0 && diff < 3600) return true;
    else return false;
}