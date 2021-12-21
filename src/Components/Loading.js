// Hooks
import { makeStyles } from '@mui/styles';

// Icons
import Sun from '../Icons/Sun.svg'

// Styles
const loadingStyles = makeStyles({
    loading: {
        height: '100vh',
    },
    content: {
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
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
    const { updateLocationData } = props;
    const classes = loadingStyles();

    return (
        <div className={classes.loading}>
            <div className={classes.content}>
                <h1 className={classes.heading}>React-Weather</h1>
                <img className={classes.spinner} src={Sun} alt='Sun'/>
            </div>
        </div>
    )
}

export default Loading;