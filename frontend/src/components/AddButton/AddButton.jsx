import { Fab } from '@mui/material';

const AddButton = ({ handleFormSubmit }) => {
    return (
        <Fab variant='contained' color='success' onClick={handleFormSubmit}
            sx={{
                width: "18rem",
                fontSize: "1.4rem",
                fontWeight: "600",
                color: "white",
                borderRadius: "1rem",
                margin:"0 auto"
            }}
        >CREAR EVENTO</Fab>)
}

export default AddButton