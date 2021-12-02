// Hooks
import { makeStyles } from '@mui/styles';

const lightningStyles = makeStyles({
    lightning: {
        position: 'fixed',
        minHeight: '100vh',
        width: '100vw',
        zIndex: '-19',
        animation: 'lightning 4s linear infinite',
    },
    '@keyframes lightning': {
        '0%' : { backgroundColor: 'rgba(255,255,255,0)'},
        '20%' : { backgroundColor: 'rgba(255,255,255,0)'},
        '21%' : { backgroundColor: 'rgba(255,255,255,0.5)'},
        '25%' : { backgroundColor: 'rgba(255,255,255,0.5)'},
        '30%' : { backgroundColor: 'rgba(255,255,255,0)'},
        '31%' : { backgroundColor: 'rgba(255,255,255,0.5)'},
        '35%' : { backgroundColor: 'rgba(255,255,255,0.5)'},
        '100%' : { backgroundColor: 'rgba(255,255,255,0)'},
    } 
})

function Lightning() {
    const style = lightningStyles();    

    return (
        <div className={style.lightning} />
    )
}

export default Lightning;