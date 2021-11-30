// Hooks
import { makeStyles } from '@mui/styles';

// Icons
import WindIcon from '../../Icons/TagIcons/WindIcon.svg';
import Compass from '../../Icons/Compass.svg';
import CompassArrow from '../../Icons/CompassArrow.svg';

const WindStyles = makeStyles({
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
        height: '25px',
        width: '25px'
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
    wind: {
        width: '100%',
        aspectRatio: '1.25 / 1',
        backgroundImage: `url(${Compass})`,
        backgroundSize: '100% 100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    arrow: {
        width: '100%',
        aspectRatio: '1.25 / 1',
        backgroundImage: `url(${CompassArrow})`,
        backgroundSize: '100% 100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    speed: {
        height: '75px',
        aspectRatio: '1 / 1',
        backgroundColor: 'rgba(115,115,255)',
        borderRadius: '50%',
        boxShadow: '3px 3px 10px rgba(0,0,0,0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '20px',
    },
})

function Wind(props) {
    const classes = WindStyles();
    const { current, unit } = props;

    const deg = current.wind_deg
    const speed = current.wind_speed;
    
    let unitOfMeasurement = '';
    if(unit === 'imperial') unitOfMeasurement = 'mph';
    else unitOfMeasurement = 'kph'

    return (
        <div className={classes.box}>
            <div className={classes.tag}>
                <span>
                <img src={WindIcon} alt='Wind Icon' className={classes.icon} /> Wind
                </span>
            </div>
            <div className={classes.wind}>
                <div className={classes.arrow} style={{transform: `rotate(${deg}deg)`}}>
                    <div className={classes.speed} style={{transform: `rotate(-${deg}deg)`}} >
                        {speed} <br />
                        {unitOfMeasurement}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wind;