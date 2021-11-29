// Hooks
import { makeStyles } from '@mui/styles';

// Icons
import HumidityIcon from '../../Icons/HumidityIcon.svg'

const HumidityStyles = makeStyles({
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
        height: '30px',
        width: '30px',
        verticalAlign: 'sub',
    },

    humidity: {
        width: '100%',
        aspectRatio: '1.25 / 1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',

        '& p': {
            padding: '2rem',
        }
    },
    percent: {
        fontSize: '35px',
        padding: '2rem 0 0 2rem'
    },

    
})

function Humidity(props) {
    const classes = HumidityStyles();
    const { current } = props;

    return (
        <div className={classes.box}>
            <div className={classes.tag}>
                <span>
                    <img src={HumidityIcon} alt='Humidity Icon' className={classes.tagIcon} /> Humidity
                </span>
            </div>
            <div className={classes.humidity}>
                <div className={classes.percent}>{current.humidity}%</div>
                <p>The dew point is {Math.trunc(current.dew_point)}° right now.</p>
            </div>
        </div>
    )
}

export default Humidity;