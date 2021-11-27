// Hooks
import { makeStyles } from '@mui/styles';

// Helpers
import unixToHuman from '../../HelperFunctions/UnixTime';
import getDay from '../../HelperFunctions/getDay';

// Weather Icons
// import WeatherIcons from '../../Icons/WeatherIcons/WeatherIcons.js';

const dailyStyles = makeStyles({
    daily: {
        width: '90%',
        maxWidth: '500px',
        height: '600px',
        color: 'white',
        backgroundColor: 'rgba(15,75,255,0.15)',
        borderRadius: '10px',
        margin: '2rem 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '3px 3px 10px rgba(0,0,0,0.5)'

    },
    tag: {
        height: '8%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderBottom: 'solid 1px white',
        '& span': {
            marginLeft: '1rem'
        }
    },
    forecast: {
        display: 'flex',
        flexDirection: 'column',
        height: '92%',
        width: '99%',
    },
    day: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})

function Daily(props) {
    const classes = dailyStyles();
    const { weatherData } = props;
    const timezoneOffset = weatherData.timezone_offset;

    const days = weatherData.daily.map(d => {
        let date = unixToHuman(d.dt, timezoneOffset)
        let weekday = getDay(date.month, date.date, date.year);
        return (
            <div className={classes.day}>
                <div className={classes.weekday}>
                    {weekday}
                </div>
            </div>
        )
    })

    return (
        <div className={classes.daily}>
            <div className={classes.tag}>
                <span>8 Day Forecast</span>
            </div>
            <div className={classes.forecast}>
                {days}
            </div>
        </div>
    )    
}

export default Daily;