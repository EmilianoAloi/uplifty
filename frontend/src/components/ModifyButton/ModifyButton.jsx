import { Fab } from '@mui/material';

const ModifyButton = () => {

    return (
        <><Fab variant='contained' color='error' onClick
            sx={{
                width: "100%",
                fontSize: "1.4rem",
                fontWeight: "600",
                color: "white",
                borderRadius: "1rem"
            }}
        >MODIFICAR EVENTO</Fab>
        </>

    )
}

export default ModifyButton