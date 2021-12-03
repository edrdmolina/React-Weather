// Hooks
import { makeStyles } from '@mui/styles';

const lightningStyles = makeStyles({
    lightning: {
        position: 'fixed',
        minHeight: '100vh',
        width: '100vw',
        zIndex: '-19',
        backgroundColor: 'rgba(200,200,200,0.15)',
        animation: '$flash 10s linear infinite',
    },
    '@keyframes flash': {
        '0%' : { opacity: '0' },
        '20%' : { opacity: '0' },
        '21%' : { opacity: '1' },
        '22%' : { opacity: '0' },
        '30%' : { opacity: '0' },
        '31%' : { opacity: '1' },
        '32%' : { opacity: '0' },
        '80%' : { opacity: '0' },
        '81%' : { opacity: '1' },
        '82%' : { opacity: '0' },
        '100%' : { opacity: '0' },
    } 
})

function Lightning() {
    const style = lightningStyles();    

    return (
        <div className={style.lightning} />
    )
}

export default Lightning;