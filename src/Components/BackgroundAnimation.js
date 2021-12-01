// Icons
import Sun from '../Icons/Sun.svg';
import Moon from '../Icons/Moon.svg';
import LightCloud from '../Icons/LightCloud.svg';
import DarkCloud from '../Icons/DarkCloud.svg';

// Hooks
import { makeStyles } from '@mui/styles';

const AnimationStyles = makeStyles({
    '01d': {
        position: 'fixed',
        minHeight: '100vh',
        width: '100vw',
        zIndex: '-19',
    },
    '01n': {
        position: 'fixed',
        minHeight: '100vh',
        width: '100vw',
        zIndex: '-19',
    },
    sun: {
        position: 'fixed',
        height: '200px',
        width: '200px',
        right: '0',
        animation: '$spinClockWise 60s linear Infinite',
        boxShadow: 'inset 0px 0px 100px 100px rgba(255,255,255,.5), 0px 0px 100px 10px white',
        borderRadius: '50%',
        zIndex: '-18',
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
    },
    moon: {
        position: 'fixed',
        height: '200px',
        width: '200px',
        right: '15px',
        top: '15px',
        boxShadow: 'inset 0px 0px 100px 100px rgba(255,255,255,.25), 0px 0px 75px 5px rgba(255,255,255,.5)',
        borderRadius: '50%',
        zIndex: '-18',
    },
    // Cloud Movement
    clouds: {
        position: 'fixed',
        height: '20vh',
        width: '100vw',
        zIndex: '-17',
    },
    cloud0: { animation: '$slideRight 55s linear Infinite', position: 'absolute', transform: 'scale(1)' },
    cloud1: { animation: '$slideRight 53s linear Infinite', position: 'absolute', transform: 'scale(1.2)', top: '25%', left: '10%',},
    cloud2: { animation: '$slideRight 50s linear Infinite', position: 'absolute', transform: 'scale(0.8)', top: '50%', left: '25%',},
    cloud3: { animation: '$slideRight 58s linear Infinite', position: 'absolute', transform: 'scale(1.3)', top: '75%', left: '15%',},
    cloud4: { animation: '$slideRight 52s linear Infinite', position: 'absolute', transform: 'scale(0.9)', top: '100%', left: '5%',},
    cloud5: { animation: '$slideRight 52s linear Infinite', position: 'absolute', transform: 'scale(1.1)', top: '55%', left: '-25%',},
    cloud6: { animation: '$slideLeft 53s linear Infinite', position: 'absolute', transform: 'scale(1.2)', top: '25%', left: '30%',},
    cloud7: { animation: '$slideLeft 50s linear Infinite', position: 'absolute', transform: 'scale(0.8)', top: '50%', left: '40%',},
    cloud8: { animation: '$slideLeft 58s linear Infinite', position: 'absolute', transform: 'scale(1.3)', top: '75%', left: '55%',},
    cloud9: { animation: '$slideLeft 52s linear Infinite', position: 'absolute', transform: 'scale(0.9)', top: '100%', left: '5%',},
    cloud10: { animation: '$slideLeft 52s linear Infinite', position: 'absolute', transform: 'scale(1.1)', top: '55%', left: '25%',},
    cloud11: { animation: '$slideLeft 52s linear Infinite', position: 'absolute', transform: 'scale(1.1)', top: '55%', left: '25%',},
    '@keyframes slideRight': {
        from: {
            marginLeft: '-50%'
        },
        to: {
            marginLeft: '100%'
        }
    },
    '@keyframes slideLeft': {
        from: {
            marginLeft: '100%'
        },
        to: {
            marginLeft: '-50%'
        }
    },
    '02d': {
        position: 'fixed',
        minHeight: '100vh',
        width: '100vw',
        zIndex: '-19',
        backgroundColor: 'rgba(0,0,0,0.1)'
    },
    '02n': {
        position: 'fixed',
        minHeight: '100vh',
        width: '100vw',
        zIndex: '-19',
        backgroundColor: 'rgba(0,0,0,0.1)'
    },
    '03d': {
        position: 'fixed',
        minHeight: '100vh',
        width: '100vw',
        zIndex: '-19',
        backgroundColor: 'rgba(0,0,0,0.20)'
    },
    '03n': {
        position: 'fixed',
        minHeight: '100vh',
        width: '100vw',
        zIndex: '-19',
        backgroundColor: 'rgba(0,0,0,0.20)'
    },
    '04d': {
        position: 'fixed',
        minHeight: '100vh',
        width: '100vw',
        zIndex: '-19',
        backgroundColor: 'rgba(0,0,0,0.35)'
    },
    '04n': {
        position: 'fixed',
        minHeight: '100vh',
        width: '100vw',
        zIndex: '-19',
        backgroundColor: 'rgba(0,0,0,0.35)'
    },
    '09d': {
        position: 'fixed',
        minHeight: '100vh',
        width: '100vw',
        zIndex: '-19',
        backgroundColor: 'rgba(0,0,0,0.40)'
    },
    '09n': {
        position: 'fixed',
        minHeight: '100vh',
        width: '100vw',
        zIndex: '-19',
        backgroundColor: 'rgba(0,0,0,0.40)'
    },
})

function BackgroundAnimation(props) {
    const style = AnimationStyles();
    let { code } = props;

    code = '09d'

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

            return (
                <div className={style[code]}>
                    <img src={Sun} alt='Sun' className={style.sun} />
                    <div className={style.clouds}>
                        <img src={LightCloud} alt='cloud' className={style.cloud0} />
                        <img src={LightCloud} alt='cloud' className={style.cloud1} />
                        <img src={LightCloud} alt='cloud' className={style.cloud2} />
                        <img src={LightCloud} alt='cloud' className={style.cloud3} />
                        <img src={LightCloud} alt='cloud' className={style.cloud4} />
                        <img src={LightCloud} alt='cloud' className={style.cloud5} />
                    </div>
                </div>
            )
        case '02n':
            console.log('few clouds night');
            return (
                <div className={style[code]}>
                    <img src={Moon} alt='Moon' className={style.moon} />
                    <div className={style.clouds}>
                        <img src={LightCloud} alt='cloud' className={style.cloud0} />
                        <img src={LightCloud} alt='cloud' className={style.cloud1} />
                        <img src={LightCloud} alt='cloud' className={style.cloud2} />
                        <img src={LightCloud} alt='cloud' className={style.cloud3} />
                        <img src={LightCloud} alt='cloud' className={style.cloud4} />
                        <img src={LightCloud} alt='cloud' className={style.cloud5} />
                    </div>
                </div>
            )
        case '03d':
            console.log('scattered clouds day');
            return (
                <div className={style[code]}>
                    <div className={style.clouds}>
                        <img src={LightCloud} alt='cloud' className={style.cloud0} />
                        <img src={LightCloud} alt='cloud' className={style.cloud1} />
                        <img src={LightCloud} alt='cloud' className={style.cloud2} />
                        <img src={LightCloud} alt='cloud' className={style.cloud3} />
                        <img src={LightCloud} alt='cloud' className={style.cloud4} />
                        <img src={LightCloud} alt='cloud' className={style.cloud5} />
                        <img src={LightCloud} alt='cloud' className={style.cloud6} />
                        <img src={LightCloud} alt='cloud' className={style.cloud7} />
                        <img src={LightCloud} alt='cloud' className={style.cloud8} />
                        <img src={LightCloud} alt='cloud' className={style.cloud9} />
                        <img src={LightCloud} alt='cloud' className={style.cloud10} />
                        <img src={LightCloud} alt='cloud' className={style.cloud11} />
                    </div>
                </div>
            )
        case '03n':
            console.log('scattered clouds night');
            return (
                <div className={style[code]}>
                    <div className={style.clouds}>
                        <img src={LightCloud} alt='cloud' className={style.cloud0} />
                        <img src={LightCloud} alt='cloud' className={style.cloud1} />
                        <img src={LightCloud} alt='cloud' className={style.cloud2} />
                        <img src={LightCloud} alt='cloud' className={style.cloud3} />
                        <img src={LightCloud} alt='cloud' className={style.cloud4} />
                        <img src={LightCloud} alt='cloud' className={style.cloud5} />
                        <img src={LightCloud} alt='cloud' className={style.cloud6} />
                        <img src={LightCloud} alt='cloud' className={style.cloud7} />
                        <img src={LightCloud} alt='cloud' className={style.cloud8} />
                        <img src={LightCloud} alt='cloud' className={style.cloud9} />
                        <img src={LightCloud} alt='cloud' className={style.cloud10} />
                        <img src={LightCloud} alt='cloud' className={style.cloud11} />
                    </div>
                </div>
            )
        case '04d':
            console.log('broken clouds day');
            return (
                <div className={style[code]}>
                    <div className={style.clouds}>
                        <img src={LightCloud} alt='cloud' className={style.cloud0} />
                        <img src={DarkCloud} alt='cloud' className={style.cloud1} />
                        <img src={LightCloud} alt='cloud' className={style.cloud2} />
                        <img src={DarkCloud} alt='cloud' className={style.cloud3} />
                        <img src={LightCloud} alt='cloud' className={style.cloud4} />
                        <img src={DarkCloud} alt='cloud' className={style.cloud5} />
                        <img src={LightCloud} alt='cloud' className={style.cloud6} />
                        <img src={DarkCloud} alt='cloud' className={style.cloud7} />
                        <img src={LightCloud} alt='cloud' className={style.cloud8} />
                        <img src={DarkCloud} alt='cloud' className={style.cloud9} />
                        <img src={DarkCloud} alt='cloud' className={style.cloud10} />
                        <img src={LightCloud} alt='cloud' className={style.cloud11} />
                    </div>
                </div>
            )
        case '04n':
            console.log('broken clouds night');
            return (
                <div className={style[code]}>
                    <div className={style.clouds}>
                        <img src={LightCloud} alt='cloud' className={style.cloud0} />
                        <img src={DarkCloud} alt='cloud' className={style.cloud1} />
                        <img src={LightCloud} alt='cloud' className={style.cloud2} />
                        <img src={DarkCloud} alt='cloud' className={style.cloud3} />
                        <img src={LightCloud} alt='cloud' className={style.cloud4} />
                        <img src={DarkCloud} alt='cloud' className={style.cloud5} />
                        <img src={LightCloud} alt='cloud' className={style.cloud6} />
                        <img src={DarkCloud} alt='cloud' className={style.cloud7} />
                        <img src={LightCloud} alt='cloud' className={style.cloud8} />
                        <img src={DarkCloud} alt='cloud' className={style.cloud9} />
                        <img src={DarkCloud} alt='cloud' className={style.cloud10} />
                        <img src={LightCloud} alt='cloud' className={style.cloud11} />
                    </div>
                </div>
            )
        case '09d':
            console.log('shower rain day');
            return (
                <div className={style[code]}>
                    <div className={style.clouds}>
                        <img src={LightCloud} alt='cloud' className={style.cloud0} />
                        <img src={DarkCloud} alt='cloud' className={style.cloud1} />
                        <img src={LightCloud} alt='cloud' className={style.cloud2} />
                        <img src={DarkCloud} alt='cloud' className={style.cloud3} />
                        <img src={LightCloud} alt='cloud' className={style.cloud4} />
                        <img src={DarkCloud} alt='cloud' className={style.cloud5} />
                        <img src={LightCloud} alt='cloud' className={style.cloud6} />
                        <img src={DarkCloud} alt='cloud' className={style.cloud7} />
                        <img src={LightCloud} alt='cloud' className={style.cloud8} />
                        <img src={DarkCloud} alt='cloud' className={style.cloud9} />
                        <img src={DarkCloud} alt='cloud' className={style.cloud10} />
                        <img src={LightCloud} alt='cloud' className={style.cloud11} />
                    </div>
                </div>
            )
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