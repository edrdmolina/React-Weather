// Hooks
import { makeStyles } from '@mui/styles';

// Helpers
import unixToHuman from '../../HelperFunctions/UnixTime';

// Icons
import SunriseIcon from '../../Icons/SunriseIcon.svg'

const SunsetStyles = makeStyles({
    box: {
        width: '45%',
        maxWidth: '225px',
        aspectRatio: '1 / 1',
        backgroundColor: 'rgba(15,75,255,0.15)',
        boxShadow: '3px 3px 10px rgba(0,0,0,0.5)',
        borderRadius: '10px',
        margin: '1rem 0',
        color: 'white',
    },
    icon: {
        height: '30px',
        width: '30px'
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
    time: {
        fontSize: '35px',
        width: '100%',
        aspectRatio: '1.25 / 1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    }
})

function Sunrise(props) {
    const classes = SunsetStyles();
    const { weatherData } = props;

    const timezoneOffset = weatherData.timezone_offset;

    const time = unixToHuman(weatherData.current.sunrise, timezoneOffset);

    let hour = '';
    let minute = '';
    let isAfternoon = false;

    // Format Hour for display
    if(time.hour === 0) {
        isAfternoon = false;
        hour = '12';
    } else if(time.hour > 12) {
        isAfternoon = true;
        hour = String(time.hour - 12);
    } else {
        isAfternoon = false;
        hour = String(time.hour);
    }

    // Format Minutes for display
    if(time.minute < 10) minute = '0' + String(time.minute);
    else minute = String(time.minute);


    return (
        <div className={classes.box}>
            <div className={classes.tag}>
                <span>
                <img src={SunriseIcon} alt='Sunrise Icon' className={classes.icon} /> Sunrise
                </span>
            </div>
            <div className={classes.time}>
                {hour}:{minute} {isAfternoon ? 'PM' : 'AM'}
            </div>
        </div>
    )
}

export default Sunrise;