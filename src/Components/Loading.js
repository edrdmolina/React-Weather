// Libraries

// Icons
import Sun from '../Icons/Sun.svg'


function Loading(props) {

    return (
        <div>
            <input type='text' placeholder='Zip Code' />
            <img className='Spinner' src={Sun} alt='Sun'/>
        </div>
    )
}

export default Loading;