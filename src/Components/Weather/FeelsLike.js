// Hooks
import { makeStyles } from '@mui/styles';

// Components
import ThermostatIcon from '@mui/icons-material/Thermostat';

const feelsLikeStyles = makeStyles({
    box: {
        width: '45%',
        maxWidth: '225px',
        aspectRatio: '1 / 1',
        backgroundColor: 'rgba(15,75,255,0.15)',
        boxShadow: '3px 3px 10px rgba(0,0,0,0.5)',
        borderRadius: '10px',
        margin: '2rem 0',
        color: 'white',
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

    temp: {
        fontSize: '35px',
        width: '100%',
        aspectRatio: '1.25 / 1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    }
    
})

function FeelsLike(props) {
    const classes = feelsLikeStyles();
    const { feelsLike } = props;

    return (
        <div className={classes.box}>
            <div className={classes.tag}>
                <span>
                    < ThermostatIcon fontSize='small' className={classes.tagIcon} /> Feels Like
                </span>
            </div>
            <div className={classes.temp}>
                {feelsLike}°
            </div>
        </div>
    )
}

export default FeelsLike;