// Components
import FmdGoodIcon from '@mui/icons-material/FmdGood';

// Hooks
import { makeStyles } from '@mui/styles';

// Styles
const toggleStyles = makeStyles({
    toggle: {
        color: 'whitesmoke',
        margin: '25px',

        '&:hover': {
            transform: 'scale(1.05)',
            cursor: 'pointer',
        }
    }
})

export default function ToggleSearch(props) {
    const classes = toggleStyles();
    const { toggleFunction } = props;
    return (
        <FmdGoodIcon onClick={toggleFunction} className={classes.toggle} />
    )
}