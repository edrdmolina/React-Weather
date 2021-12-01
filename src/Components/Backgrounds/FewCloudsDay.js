// Hooks
import { makeStyles } from '@mui/styles';

// Icons
import Sun from '../../Icons/Sun.svg';
import LightCloud from '../../Icons/LightCloud.svg';

// Styles
const FewCloudsDayStyles = makeStyles({
    background: {
        position: 'fixed',
        minHeight: '100vh',
        width: '100vw',
        zIndex: '-19',
        backgroundColor: 'rgba(0,0,0,0.1)'
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
        top: '55%', left: '-25%',
    },
    '@keyframes slideRight': {
        from: {
            marginLeft: '-50%'
        },
        to: {
            marginLeft: '100%'
        }
    },
})

function FewCloudsDay() {
    const style = FewCloudsDayStyles();
    return (
        <div className={style.background}>
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
}

export default FewCloudsDay;