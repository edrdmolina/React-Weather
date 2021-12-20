// Components
import ClearDay from './Backgrounds/ClearDay';
import ClearNight from './Backgrounds/ClearNight';
import FewCloudsDay from './Backgrounds/FewCloudsDay';
import FewCloudsNight from './Backgrounds/FewCloudsNight';
import ScatteredClouds from './Backgrounds/ScatteredClouds';
import BrokenClouds from './Backgrounds/BrokenClouds';
import ShowerRain from './Backgrounds/ShowerRain';
import Lightning from './Backgrounds/Lightning';
import SnowFall from './Backgrounds/SnowFall';
import Mist from './Backgrounds/Mist';

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
            return ( 
                <div>
                    < BrokenClouds />
                    < ShowerRain /> 
                    < Lightning />
                </div>
            )
        case '13d':
            return ( 
                <div>
                    < ScatteredClouds />
                    < SnowFall />
                </div>
            )
        case '13n':
            return ( 
                <div>
                    < ScatteredClouds />
                    < SnowFall />
                </div>
            )
        case '50d':
            return (
                <div>
                    < ClearDay />
                    < Mist />
                </div>
            )
        case '50n':
            return (
                <div>
                    < ClearNight />
                    < Mist />
                </div>
            )
        default: 
            break;
    }
}

export default BackgroundAnimation;