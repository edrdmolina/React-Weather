// Hooks
// import { makeStyles } from '@mui/styles';

// Styles


function Current(props) {
    const { locationData, current, daily } = props
    
    let weather = 'N/A';
    let min = 'N/A';
    let max = 'N/A';
    if(current) weather = current.weather[0].main;
    if(daily) {
        min = Math.abs(parseInt(daily[0].temp.min));
        max = Math.abs(parseInt(daily[0].temp.max));
    }

    return (
        <div className='Current'>
            <div className='current-location'>
                { locationData ? locationData.city : 'N/A' }
            </div>
            <div className='current-temp'>
                { current ? Math.abs(parseInt(current.temp)) : 'N/A'}
            </div>
            <div className='current-weather'>
                { weather }
            </div>
            <div className='current-min'>
                L: {min}
            </div>
            <div className='current-max'>
                H: {max}
            </div>
        </div>
    )
}

export default Current;