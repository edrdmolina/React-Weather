// Hooks
import { makeStyles } from '@mui/styles';

// Icon
import Sun from '../../Icons/Sun.svg';

//  Styles
const ClearDayStyles = makeStyles({
    background: {
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
})

function ClearDay(){
    const style = ClearDayStyles();
    return (
        <div className={style.background}>
            <img src={Sun} alt='Sun' className={style.sun} />
        </div>
    )
}

export default ClearDay;