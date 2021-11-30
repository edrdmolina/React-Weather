// Icons
import Sun from '../Icons/Sun.svg';
import Moon from '../Icons/Moon.svg'

// Hooks
import { makeStyles } from '@mui/styles';

const AnimationStyles = makeStyles({
    '01d': {
        position: 'fixed',
        minHeight: '100vh',
        width: '100vw',
        zIndex: '-1',
    },
    '01n': {
        position: 'fixed',
        minHeight: '100vh',
        width: '100vw',
        zIndex: '-1',
    },
    sun: {
        position: 'fixed',
        height: '250px',
        width: '250px',
        right: '0',
        animation: '$spinClockWise 60s linear Infinite',
    },
    moon: {
        position: 'fixed',
        height: '225px',
        width: '225px',
        right: '15px',
        top: '15px'
    },
    '@keyframes spinClockWise': {
        from: {
            transform: 'rotate(0deg)'
        },
        '50%' : {
            transform: 'rotate(180deg)'
        },
        to: {
            transform: 'rotate(360deg)'
        }
    }
})

function BackgroundAnimation(props) {
    const style = AnimationStyles();
    let { code } = props;

    code = '01n'

    switch(code) {
        case '01d':
            console.log('clear day');
            return (
                <div className={style[code]}>
                    <img src={Sun} alt='Sun' className={style.sun} />
                </div>
            )
        case '01n':
            console.log('clear night');
            return (
                <div className={style[code]}>
                    <img src={Moon} alt='Moon' className={style.moon} />
                </div>
            )
        case '02d':
            console.log('few clouds day');
            break;
        case '02n':
            console.log('few clouds night');
            break;
        case '03d':
            console.log('scattered clouds day');
            break;
        case '03n':
            console.log('scattered clouds night');
            break;
        case '04d':
            console.log('broken clouds day');
            break;
        case '04n':
            console.log('broken clouds night');
            break;
        case '09d':
            console.log('shower rain day');
            break;
        case '09n':
            console.log('shower rain night');
            break;
        case '10d':
            console.log('rain day');
            break;
        case '10n':
            console.log('rain night');
            break;
        case '11d':
            console.log('thunderstorm day');
            break;
        case '11n':
            console.log('thunderstorm night');
            break;
        case '13d':
            console.log('snow day');
            break;
        case '13n':
            console.log('snow night');
            break;
        case '50d':
            console.log('mist day');
            break;
        case '50n':
            console.log('mist night');
            break;
        default: 
            break;
    }
}

export default BackgroundAnimation;