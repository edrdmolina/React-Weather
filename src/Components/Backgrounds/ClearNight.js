// Hooks
import { makeStyles } from '@mui/styles';

// Icon
import Moon from '../../Icons/Moon.svg';

// Styles
const ClearNightStyles = makeStyles({
    background: {
        position: 'fixed',
        minHeight: '100vh',
        width: '100vw',
        zIndex: '-19', 
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
})

function ClearNight() {
    const style = ClearNightStyles();

    return (
        <div className={style.background}>
            <img src={Moon} alt='Moon' className={style.moon} />
        </div>
    )
}

export default ClearNight;