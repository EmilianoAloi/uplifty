import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

export const DateInput = ({ handleInputChange }) => {


    const handleChange = (date) => {
        const dateString = date.format("DD-MM-YYYY");


        handleInputChange({
            target: {
                name: "fecha",
                value: dateString,
            },
        });
    };


    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker name="fecha" onChange={handleChange} />
        </LocalizationProvider>)
}


