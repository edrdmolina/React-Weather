// Hooks
import { makeStyles } from '@mui/styles';

// Styles
const backgroundStyles = makeStyles({
    background: {
        position: 'absolute',
        minHeight: '100vh',
        width: '100vw',
        backgroundColor: 'rgb(0,169,169)',
        zIndex: '-1',
    }
})

function Background(props) {
    const classes = backgroundStyles();
    return (
        <div className={classes.background}></div>
    )
}

export default Background;