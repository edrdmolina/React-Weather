// Components
import { FormControl, OutlinedInput, InputLabel, IconButton, InputAdornment } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

function Address(props) {
    const { address, setAddress, clearAddress } = props;

    return (
        <FormControl variant="outlined" size="small" sx={{ width: '45%' }}>
          <InputLabel htmlFor="address">Address or Zip Code</InputLabel>
          <OutlinedInput
            id="address"
            type='text'
            value={address}
            onChange={setAddress}
            autoComplete="off"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={clearAddress}
                  edge="end"
                >
                  <ClearIcon />
                </IconButton>
              </InputAdornment>
            }
            label="Address or Zip Code"
          />
        </FormControl>
    )
}

export default Address;