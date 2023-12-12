import { Fab } from '@mui/material';

const AddButton = ({ handleFormSubmit }) => {
    return (
        <Fab variant='contained' color='success' onClick={handleFormSubmit}
            sx={{
                width: "100%",
                fontSize: "1.4rem",
                fontWeight: "600",
                color: "white",
                borderRadius: "1rem"
            }}
        >CREAR EVENTO</Fab>)
}

export default AddButton