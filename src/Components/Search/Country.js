// Components
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

// Data
import countries from '../../Data/Countries';

export default function Country(props) {

    const { setCountryCode } = props;

    function handleChange(e) {
        console.log('Changing Country')
        if(e.target.childNodes.length < 2) {
            setCountryCode('');
        } else {
            const code = e.target.childNodes[0].alt;
            setCountryCode(code)
        }

    }

    return (
        <Autocomplete
            onChange={handleChange}
            sx={{ width: '35%' }}
            options={countries}
            autoHighlight
            getOptionLabel={(option) => option.code}
            renderOption={(props, option) => (
            <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                <img
                loading="lazy"
                width="20"
                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                alt={option.code}
                />
                ({option.code})
            </Box>
            )}
            renderInput={(params) => (
            <TextField
                {...params}
                label="Country"
                size="small"
                id='Country'
                inputProps={{
                ...params.inputProps,
                autoComplete: 'off', // disable autocomplete and autofill
                }}
            />
            )}
        />
    );
}

