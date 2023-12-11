import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { Typography } from '@mui/material';


const PriceInput = () => {



    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
            <Typography variant='h6'>Importe</Typography>

                <Input
                    id="standard-adornment-amount"
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                />
            </FormControl>
        </Box>
    );
}

export default PriceInput