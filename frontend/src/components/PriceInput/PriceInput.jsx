import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { Typography } from '@mui/material';


const PriceInput = ({ handleInputChange, formValues }) => {
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <FormControl fullWidth sx={{ mt: 3 }} variant="standard">
                <Typography variant='h5'>Importe</Typography>
                <Input
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    onChange={handleInputChange}
                    name="precio"
                    value={formValues.precio}
                />
            </FormControl>
        </Box>
    );
}

export default PriceInput