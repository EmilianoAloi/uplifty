import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs';

export const DateInput = ({ handleInputChange, formValues }) => {


    const handleChange = (date) => {
        const dateString = date.format("YYYY-MM-DD");

        handleInputChange({
            target: {
                name: "fecha",
                value: dateString,
            },
        });
    };


    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker name="fecha" onChange={handleChange} value={dayjs(formValues.fecha)} />
        </LocalizationProvider>)
}


