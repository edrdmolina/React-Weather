// Hooks
import { makeStyles } from '@mui/styles';

// Icons
import Sun from '../Icons/Sun.svg'

// Styles
const loadingStyles = makeStyles({
    loading: {
        display: 'flex',
        height: '100vh',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        color: 'whitesmoke',
        fontFamily: 'Lobster-Regular',
        fontSize: '50px',
    },
    spinner: {
        height: '300px',
        width: '300px',
        animation: '$spinClockWise 15s linear Infinite',
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
    }
})

function Loading(props) {
    
    const classes = loadingStyles();

    return (
        <div className={classes.loading}>
            <h1 className={classes.heading}>React-Weather</h1>
            <img className={classes.spinner} src={Sun} alt='Sun'/>
        </div>
    )
}

export default Loading;