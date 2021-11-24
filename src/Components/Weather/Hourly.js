// Hooks
import { makeStyles } from '@mui/styles';

// Helpers
import unixToHuman from '../../HelperFunctions/UnixTime';

// Icons
import Sun from '../../Icons/Sun.svg'
import MostlySunny from '../../Icons/MostlySunny.svg'

const hourlyStyles = makeStyles({
    hourly: {
        width: '90%',
        maxWidth: '500px',
        height: '200px',
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
        height: '20%',
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
        flexDirection: 'row',
        height: '78%',
        width: '99%',
        borderTop: 'solid 1px white',
        overflowX: 'scroll',

        '&::-webkit-scrollbar': {
            background: 'none',
            height: '3px',
        },
        '&::-webkit-scrollbar-thumb': {
            background: 'rgba(255,255,255,0.5)',
            borderRadius: '10px',
        }
    },
    hour: {
        margin: '1rem',
        height: '75%',
        width: '10%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    time: {

    },
    icon: {
        height: '30px',
        width: '30px',
    }

})

function Hourly(props) {
    const classes = hourlyStyles();
    const { weatherData } = props;

    console.log(weatherData.hourly[0])

    // Map each hour as a div
    const hours = weatherData.hourly.map((h, i) => {
        
        let hour = unixToHuman(h.dt, 'hour');
        if(hour === 0) hour = '12AM';
        else if(hour > 12) hour = String(hour - 12) + 'PM'
        else hour = String(hour + 'AM')
        return (
            <div key={i} className={classes.hour}>
                <div className={classes.time}>
                    {hour}
                </div>
                <img className={classes.icon} src={MostlySunny} alt={h.weather[0].description} />
                <div className={classes.temp}>
                    {Math.trunc(h.temp)}
                </div>
            </div>
        )
    });

    return (
        <div className={classes.hourly}>
            <div className={classes.tag}>
                <span>Hourly Forecast</span>
            </div>
            <div className={classes.forecast}>
                {hours}
            </div>
        </div>
    )
}

export default Hourly;