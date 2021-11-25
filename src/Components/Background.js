// Hooks
import { makeStyles } from '@mui/styles';

// Icons
// import Sun from '../Icons/Sun.svg';
// import HeavyRain from '../Icons/HeavyRain.svg';
// import Lightning from '../Icons/Lightning.svg';
// import LightRain from '../Icons/LightRain.svg';
// import MostlyCloudy from '../Icons/MostlyCloudy.svg';
// import MostlySunny from '../Icons/MostlySunny.svg';
// import Stars from '../Icons/Stars.svg';

// Styles
const backgroundStyles = makeStyles({
    background: {
        position: 'absolute',
        minHeight: '100vh',
        width: '100vw',
        background: 'linear-gradient(180deg, rgba(50, 50, 150, 1), rgba(150, 150, 255, 1), rgba(255,150,150,1))', 
        zIndex: '-1',
    },
    sun: {
        height: '100px',
        width: '100px'
    },
    stars: {
        height: '100px',
        width: '75px'
    }
})

function Background(props) {
    const classes = backgroundStyles();
    return (
        <div className={classes.background}>
            {/* <img src={Sun} className={classes.sun} alt='Sun' />
            <img src={Stars} className={classes.stars} alt='Stars' />
            <img src={Stars} className={classes.stars} alt='Stars' />
            <img src={Stars} className={classes.stars} alt='Stars' />
            <img src={Stars} className={classes.stars} alt='Stars' />
            <img src={Stars} className={classes.stars} alt='Stars' />
            <img src={Stars} className={classes.stars} alt='Stars' />
            <img src={Stars} className={classes.stars} alt='Stars' />
            <img src={Stars} className={classes.stars} alt='Stars' /> */}
            {/* <img src={HeavyRain} alt='HeavyRain' />
            <img src={LightRain} alt='LightRain' />
            <img src={Lightning} alt='Lightning' />
            <img src={MostlyCloudy} alt='MostlyCloudy' />
            <img src={MostlySunny} alt='MostlySunny' /> */}
        </div>
    )
}

export default Background;