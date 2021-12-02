// Components
import ClearDay from './Backgrounds/ClearDay';
import ClearNight from './Backgrounds/ClearNight';
import FewCloudsDay from './Backgrounds/FewCloudsDay';
import FewCloudsNight from './Backgrounds/FewCloudsNight';
import ScatteredClouds from './Backgrounds/ScatteredClouds';
import BrokenClouds from './Backgrounds/BrokenClouds';
import ShowerRain from './Backgrounds/ShowerRain';
import Lightning from './Backgrounds/Lightning';

function BackgroundAnimation(props) {
    let { code } = props;

    code = '11d'

    switch(code) {
        case '01d':
            return ( < ClearDay /> )
        case '01n':
            return ( < ClearNight /> )
        case '02d':
            return ( < FewCloudsDay /> )
        case '02n':
            return ( <FewCloudsNight /> )
        case '03d':
            return ( < ScatteredClouds /> )
        case '03n':
            return ( < ScatteredClouds /> )
        case '04d':
            return ( < BrokenClouds /> )
        case '04n':
            return ( < BrokenClouds /> )
        case '09d':
            return ( 
                <div>
                    < BrokenClouds />
                    < ShowerRain /> 
                </div>
            )
        case '09n':
            return ( 
                <div>
                    < BrokenClouds />
                    < ShowerRain /> 
                </div>
            )
        case '10d':
            return (
                <div>
                    < ClearDay />
                    < BrokenClouds />
                    < ShowerRain />
                </div>
            )
        case '10n':
            return (
                <div>
                    < ClearNight />
                    < BrokenClouds />
                    < ShowerRain />
                </div>
            )
        case '11d':
            return ( 
                <div>
                    < BrokenClouds />
                    < ShowerRain /> 
                    < Lightning />
                </div>
            )
        case '11n':
            console.log('thunderstorm night');
            break;
        case '13d':
            console.log('snow day');
            break;
        case '13n':
            console.log('snow night');
            break;
        case '50d':
            console.log('mist day');
            break;
        case '50n':
            console.log('mist night');
            break;
        default: 
            break;
    }
}

export default BackgroundAnimation;