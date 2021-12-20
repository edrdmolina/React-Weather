// Hooks
import { makeStyles } from '@mui/styles';

// Icon
import LightCloud from '../../Icons/LightCloud.svg'

const mistStyles = makeStyles({
    background: {
        height: '100vh',
        width: '100vw',
        backgroundColor: 'rgba(50,50,50,0.35)'
    },
    cloud: {
        position: 'fixed',
        animationName: '$floatLeft',
        animationDuration: '50s',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'linear',
    },
    '@keyframes floatLeft' : {
        from: {
            marginLeft: '0px'
        },
        to: {
            marginLeft: '-250vw'
        }
    }

})

function Mist() {
    const styles = mistStyles();

    const mistOne = new Array(15).fill(LightCloud).map((c,i) => {
        const style = {
            top: `${getRand(1,85) - 10}vh`,
            left: `${getRand(1,85) + 100}vw`,
        }

        return (
            <img src={c} alt='Mist' className={styles.cloud} style={style} key={i} />
        )
    })
    const mistTwo = new Array(50).fill(LightCloud).map((c,i) => {
        const style = {
            position: 'fixed',
            top: `${getRand(1,85) - 10}vh`,
            left: `${getRand(1,85) -10}vw`,
            // animationDelay: '25s',
        }

        return (
            <img src={c} alt='Mist' style={style} key={i} />
        )
    })


    return (
        <div className={styles.background}>
            {mistOne}
            {mistTwo}
        </div>
    )
}

export default Mist;

const getRand = (min, max) => Math.floor((Math.random() * (max - 1)) + min );