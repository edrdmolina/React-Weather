// Hooks
import { makeStyles } from '@mui/styles';

// Components
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

// Helpers
import unixToHuman from '../../HelperFunctions/UnixTime';
import getDay from '../../HelperFunctions/getDay';

// Weather Icons
import WeatherIcons from '../../Icons/WeatherIcons/WeatherIcons.js';

const dailyStyles = makeStyles({
    daily: {
        width: '90%',
        maxWidth: '800px',
        height: '540px',
        color: 'white',
        backgroundColor: 'rgba(15,75,255,0.15)',
        borderRadius: '10px',
        margin: '1rem 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: '3px 3px 10px rgba(0,0,0,0.5)'

    },
    tag: {
        color: 'rgba(225,225,225,1.0)',
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
    tagIcon: {
        verticalAlign: 'bottom',
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
        width: '10%',
        paddingLeft: '1rem',
    },

    icon: {
        width: '20%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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
    },
    '@media (max-width: 576px)': {
        daily: {
            height: '740px'
        },
        forecast: {
            height: '700px'
        },
        temps: {
            gridTemplateRows: '1fr 1fr 1fr',
            gridTemplateColumns: '1fr 1fr',
            height: '85%',
            width: '60%',
            margin: '0 auto 0 auto',
        }
    },
    
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
                <span>
                    < CalendarTodayIcon fontSize='small' className={classes.tagIcon} /> 8 Day Forecast
                </span>
            </div>
            <div className={classes.forecast}>
                {days}
            </div>
        </div>
    )    
}

export default Daily;