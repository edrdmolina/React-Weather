// Hooks
import { makeStyles } from '@mui/styles';
// Components
import { Grid } from '@mui/material';
import Current from "./Weather/Current";
// Styles
const weatherStyles = makeStyles({
    weather: {
        marginTop: '2rem',
        minHeight: '88.65vh',
    }
})

function Weather(props) {
    const { locationData, weatherData } = props;
    const { city } = locationData;
    const { current, daily } = weatherData;
    const classes = weatherStyles();

    return (
        <Grid container spacing={0} className={classes.weather}>
            <Grid item xs={12} >
                < Current city={city} current={current} daily={daily} />
            </Grid>
        </Grid>
    )
}

export default Weather