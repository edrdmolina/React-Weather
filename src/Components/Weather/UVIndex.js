// Hooks
import { makeStyles } from '@mui/styles';

// Components
import LightModeIcon from '@mui/icons-material/LightMode';

const uvIndexStyles = makeStyles({
    box: {
        width: '45%',
        maxWidth: '225px',
        aspectRatio: '1 / 1',
        backgroundColor: 'rgba(15,75,255,0.15)',
        boxShadow: '3px 3px 10px rgba(0,0,0,0.5)',
        borderRadius: '10px',
        margin: '1rem 0',
        color: 'white',
    },
    tag: {
        color: 'rgba(225,225,225,1.0)',
        height: '40px',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        '& span': {
            marginLeft: '1rem'
        }
    },
    tagIcon: {
        verticalAlign: 'bottom',
    },
    UVIndex: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-evenly',
        width: '90%',
        maxHeight: '210px',
        aspectRatio: '1.25 / 1',
        margin: '0 auto',
    },
    index: {
        fontSize: '30px',

    },
    level: {
        fontSize: '20px',
    },
    range: {
        margin: '2rem 0',
        width: '100%',
        height: '8px',
        borderRadius: '5px',
        background: 'linear-gradient(left, rgba(0, 255, 0, 1), rgba(255, 255, 0, 1), rgba(255, 150, 0, 1), rgba(255, 50, 0, 1), rgba(255,10,160,1))', 
    },
    point: {
        backgroundColor: 'rgb(255,255,255)',
        height: '6px',
        width: '6px',
        borderRadius: '50%',
        border: '2px solid rgba(0,0,255,0.40)',
    }
    
})

function UVIndex(props) {
    const classes = uvIndexStyles();
    const { uvi } = props;

    let level = '';
    if(uvi < 3) level = 'Low';
    else if(uvi < 6) level = 'Moderate';
    else if(uvi < 8) level = 'High';
    else if(uvi < 11) level = 'Very High';
    else level = 'Extreme';
    
    let point = ((uvi * 10)) + '%' 

    return (
        <div className={classes.box}>
            <div className={classes.tag}>
                <span>
                    < LightModeIcon fontSize='small' className={classes.tagIcon} /> UV Index
                </span>
            </div>
            <div className={classes.UVIndex}>
                <div className={classes.index}>
                    {uvi}
                </div>
                <div className={classes.level}>
                    {level}
                </div>
                <div className={classes.range}>
                    <div className={classes.point} style={{marginLeft: point}}>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UVIndex;