// Hooks
import { makeStyles } from '@mui/styles';

// Helpers
// import unixToHuman from '../../HelperFunctions/UnixTime';

const hourlyStyles = makeStyles({
    hourly: {

    },
    tag: {

    },
    forecast: {

    },

})

function Hourly(props) {
    const classes = hourlyStyles();
    // const { weatherData } = props;
    
    

    // Map each hour as a div
    const hours = [];

    return (
        <div className={classes.hourly}>
            <div className={classes.tag}>Hourly Forecast</div>
            <div className={classes.forecast}>
                {hours}
            </div>
        </div>
    )
}

export default Hourly;