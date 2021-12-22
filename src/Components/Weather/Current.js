// Hooks
import { makeStyles } from '@mui/styles';

// Components


// Styles
const currentStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'white',
        width: '50%',
        textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
        margin: '1.5rem 0'
    },
    location: {
        textAlign: 'center',
        fontSize: '30px',
        margin: '0.25rem 1rem'

    },
    temp: {
        fontSize: '80px',
        margin: '0.25rem 1rem 0.25rem 30px',
    },
    weather: {
        fontSize: '30px',
        margin: '0.25rem 1rem'
    },
    highLow: {
        display: 'flex',
        fontSize: '20px',
        flexDirection: 'row',
        justifyContent: 'center',

        '& div': {
            margin: '0.25rem 1rem'
        },
    },
})

function Current(props) {
    const classes = currentStyles();
    const { city, current, daily } = props
    let weather = 'N/A';
    let min = 'N/A';
    let max = 'N/A';
    if(current) weather = current.weather[0].main;
    if(daily) {
        min = Math.abs(parseInt(daily[0].temp.min));
        max = Math.abs(parseInt(daily[0].temp.max));
    }

    return (
        <div className={classes.container}>
            <div className={classes.location}>
                { city ? city : 'N/A' }
            </div>
            <div className={classes.temp}>
                { current ? Math.abs(parseInt(current.temp)) + '°' : 'N/A'}
            </div>
            <div className={classes.weather}>
                { weather }
            </div>
            <div className={classes.highLow}>
                <div>
                    L: {min}°
                </div>
                <div>
                    H: {max}°
                </div>
            </div>
        </div>
    )
}

export default Current;