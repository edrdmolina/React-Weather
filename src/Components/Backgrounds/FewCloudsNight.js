// Hooks
import { makeStyles } from '@mui/styles';

// Icons
import Moon from '../../Icons/Moon.svg';
import LightCloud from '../../Icons/LightCloud.svg';

// Styles
const FewCloudsNightStyles = makeStyles({
    background: {
        position: 'fixed',
        minHeight: '100vh',
        width: '100vw',
        zIndex: '-19',
        backgroundColor: 'rgba(0,0,0,0.1)'
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
    cloud0: { 
        animation: '$slideRight 55s linear Infinite', 
        position: 'absolute', transform: 'scale(1)' 
    },
    cloud1: { 
        animation: '$slideRight 53s linear Infinite', 
        position: 'absolute', transform: 'scale(1.2)', 
        top: '25%', left: '10%',
    },
    cloud2: { 
        animation: '$slideRight 50s linear Infinite', 
        position: 'absolute', transform: 'scale(0.8)', 
        top: '50%', left: '25%',
    },
    cloud3: { 
        animation: '$slideRight 58s linear Infinite', 
        position: 'absolute', transform: 'scale(1.3)', 
        top: '75%', left: '15%',
    },
    cloud4: { 
        animation: '$slideRight 52s linear Infinite', 
        position: 'absolute', transform: 'scale(0.9)', 
        top: '100%', left: '5%',
    },
    cloud5: { 
        animation: '$slideRight 52s linear Infinite', 
        position: 'absolute', transform: 'scale(1.1)', 
        top: '55%', left: '-5%',
    },
    '@keyframes slideRight': {
        from: {
            marginLeft: '-50%',
            opacity: '0'
        },
        '25%': { opacity: '0.35' },
        '50%': { opacity: '0.75' },
        '75%': { opacity: '0.35' },
        to: {
            marginLeft: '100%',
            opacity: '0'
        }
    },
})

function FewCloudsNight() {
    const style = FewCloudsNightStyles();
    return (
        <div className={style.background}>
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
}

export default FewCloudsNight;