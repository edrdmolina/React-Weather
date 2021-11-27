// Hooks
import { makeStyles } from '@mui/styles';

// Helpers
import unixToHuman from '../../HelperFunctions/UnixTime';
import getDay from '../../HelperFunctions/getDay';

// Weather Icons
import WeatherIcons from '../../Icons/WeatherIcons/WeatherIcons.js';

const dailyStyles = makeStyles({
    daily: {
        width: '90%',
        maxWidth: '500px',
        height: '540px',
        color: 'white',
        backgroundColor: 'rgba(15,75,255,0.15)',
        borderRadius: '10px',
        margin: '2rem 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: '3px 3px 10px rgba(0,0,0,0.5)'

    },
    tag: {
        height: '40px',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        '& span': {
            marginLeft: '1rem'
        }
    },
    forecast: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '500px',
        width: '95%',
    },
    day: {
        borderTop: 'solid 1px rgba(255,255,255,0.5)',
        display: 'flex',
        flexDirection: 'row',
        height: '12%',
        alignItems: 'center',

    },
    weekday: {
        width: '20%',
        paddingLeft: '1rem',
    },

    icon: {
        width: '10%',

        '& img': {
            height: '60px',
            width: '60px',
        }
    },
    temps: {
        display: 'grid',
        gridTemplateRows: '1fr 1fr',
        gridTemplateColumns: '1fr 1fr 1fr',
        width: '70%',
    },
    temp: {
        textAlign: 'center'
    }
    
})

function Daily(props) {
    const classes = dailyStyles();
    const { weatherData } = props;
    const timezoneOffset = weatherData.timezone_offset;

    const days = weatherData.daily.map((d, i) => {
        let date = unixToHuman(d.dt, timezoneOffset)
        let weekday = getDay(date.month, date.date, date.year);
        return (
            <div className={classes.day} key={i}>
                <div className={classes.weekday}>
                    {weekday}
                </div>
                <div className={classes.icon}>
                    <img 
                        className={classes.icon} 
                        src={WeatherIcons[d.weather[0].icon]} 
                        alt={d.weather[0].description}
                    />
                </div>
                <div className={classes.temps}>
                    <div className={classes.temp}>
                        Low: {Math.trunc(d.temp.min)}°
                    </div>
                    <div className={classes.temp}>
                        Morn: {Math.trunc(d.temp.morn)}°
                    </div>
                    <div className={classes.temp}>
                        Day: {Math.trunc(d.temp.day)}°
                    </div>
                    <div className={classes.temp}>
                        High: {Math.trunc(d.temp.max)}°
                    </div>
                    <div className={classes.temp}>
                        Eve: {Math.trunc(d.temp.eve)}°
                    </div>
                    <div className={classes.temp}>
                        Night: {Math.trunc(d.temp.night)}°
                    </div>
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