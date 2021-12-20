// Hooks
import { makeStyles } from '@mui/styles';

// Styles
// https://codepen.io/codeconvey/pen/xRzQay?editors=1100
const snowFallStyles = makeStyles({
    background: {
        position: 'fixed',
        height: '100vh',
        width: '100vw',
    },
    snowFlake: {
        color: 'snow',
        fontSize: '10px',
        position: 'fixed',
        top: '-10px',
        animationName: '$snowFall, $snowDrift',
        animationDuration: '15s, 5s',
        animationTimingFunction: 'linear, ease-in-out',
        animationIterationCount: 'infinite, infinite',
        animationPlayState: 'running, running',
    },
    '@keyframes snowFall': {
        from: { top: '-5%' },
        to: { top: '100%' }
    },
    '@keyframes snowDrift' : {
        from: { transform: 'translateX(-10px)' },
        '50%': { transform: 'translateX(80px)' },
        to: { transform: 'translateX(-10px)' },
    }

})

function SnowFall() {
    const styles= snowFallStyles();

    const snowFlakes = new Array(20).fill('❅').map((flake,i) => {
        const style = { 
            left: `${getRand(1,98)}vw`,
            animationDelay: `${getRand(1,20)}s` 
        }
        return (
            <div className={styles.snowFlake} style={style}>{flake}</div>
        )
    })

    return (
        <div className={styles.background}>
            { snowFlakes }
        </div>
    )
}

export default SnowFall;

const getRand = (min, max) => Math.floor((Math.random() * (max - 1)) + min );