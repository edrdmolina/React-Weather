// Hooks
import { makeStyles } from '@mui/styles';

// Icons
import LightCloud from '../../Icons/LightCloud.svg';
import DarkCloud from '../../Icons/DarkCloud.svg';

const BrokenCloudsStyles = makeStyles({
    background: {
        position: 'fixed',
        minHeight: '100vh',
        width: '100vw',
        zIndex: '-19',
        backgroundColor: 'rgba(0,0,0,0.35)'
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
    cloud5: { animation: '$slideRight 52s linear Infinite', position: 'absolute', transform: 'scale(1.1)', top: '55%', left: '-5%',},
    cloud6: { animation: '$slideLeft 53s linear Infinite', position: 'absolute', transform: 'scale(1.2)', top: '25%', left: '30%',},
    cloud7: { animation: '$slideLeft 50s linear Infinite', position: 'absolute', transform: 'scale(0.8)', top: '50%', left: '40%',},
    cloud8: { animation: '$slideLeft 58s linear Infinite', position: 'absolute', transform: 'scale(1.3)', top: '75%', left: '55%',},
    cloud9: { animation: '$slideLeft 52s linear Infinite', position: 'absolute', transform: 'scale(0.9)', top: '100%', left: '5%',},
    cloud10: { animation: '$slideLeft 52s linear Infinite', position: 'absolute', transform: 'scale(1.1)', top: '55%', left: '25%',},
    cloud11: { animation: '$slideLeft 52s linear Infinite', position: 'absolute', transform: 'scale(1.1)', top: '55%', left: '25%',},
    '@keyframes slideRight': {
        from: {
            marginLeft: '-50%',
            opacity: '1'
        },
        to: {
            marginLeft: '100%',
            opacity: '0.25'
        }
    },
    '@keyframes slideLeft': {
        from: {
            marginLeft: '100%',
            opacity: '1'
        },
        to: {
            marginLeft: '-50%',
            opacity: '0.25'
        }
    },
})

function BrokenClouds() {
    const style = BrokenCloudsStyles();
    return (
        <div className={style.background}>
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
}

export default BrokenClouds;