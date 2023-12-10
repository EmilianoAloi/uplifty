import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

export const DateInput = () => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker />
        </LocalizationProvider>)
}


