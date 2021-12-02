// Hooks
import { makeStyles } from '@mui/styles';

// https://codepen.io/arickle/pen/XKjMZY?editors=0010
const ShowerRainStyles = makeStyles({
    background: {
        position: 'fixed',
        minHeight: '100vh',
        width: '100vw',
        zIndex: '-18',
    },
    drop: {
        position: 'absolute',
        animation: '$drop 0.5s linear infinite',
        height: '120px',
        width: '15px',
        zIndex: '-18',
        bottom: '100%',
    },
    '@keyframes drop': {
        '0%': {
            transform: 'translateY(0vh)'
        },
        '75%': {
            transform: 'translateY(90vh)'
        },
        '100%': {
            transform: 'translateY(100vh)'
        }
    },
    stem: {
        width: '1px',
        height: '60%',
        marginLeft: '7px',
        background: 'linear-gradient(to bottom, rgba(255,255,255, 0), rgba(255,255,255, 0.25))',
        animation: '$stem 0.5s linear infinite',
    },
    '@keyframes stem': {
        '0%': {
            opacity: '1',
        },
        '65%': {
            opacity: '1',
        },
        '75%': {
            opacity: '0',
        },
        '100%': {
            opacity: '0',
        },
    }
})

function ShowerRain() {
    const style = ShowerRainStyles();

    const rainDrops = new Array(12).fill(null).map((n,i) => {
        const randomHundred = getRand(1,98);
        const randomFive = getRand(2,5);

        const dropStyles = {
            left: `${randomHundred}%`,
            bottom: `${randomFive + randomFive - 1 + 100}%`,
            animationDelay: `0.${randomHundred}s`,
            animationDuration: `0.5${randomHundred}s`
        }

        return (
            <div className={style.drop} style={dropStyles} key={i}>
                <div className={style.stem} />
            </div>
        )
    })

    const moreDrops = new Array(12).fill(null).map((n,i) => {
        const randomHundred = getRand(1,98);
        const randomFive = getRand(2,5);

        const dropStyles = {
            right: `${randomHundred}%`,
            bottom: `${randomFive + randomFive - 1 + 100}%`,
            animationDelay: `0.${randomHundred}s`,
            animationDuration: `0.5${randomHundred}s`
        }

        return (
            <div className={style.drop} style={dropStyles} key={i}>
                <div className={style.stem} />
            </div>
        )
    })

    return (
        <div className={style.background}>
            { rainDrops }
            { moreDrops }
        </div>
    )
}

export default ShowerRain;

const getRand = (min, max) => Math.floor((Math.random() * (max - 1)) + min );
