import { Fab } from '@mui/material';
import { updateEvent } from '../../api/events.api';

const ModifyButton = ({ params, setOpen, formValues }) => {

    const handleClick = () => {
        updateEvent(params.id, formValues);
        setOpen(false);

    };



    return (
        <><Fab variant='contained' color='warning' onClick={handleClick}
            sx={{
                width: "100%",
                fontSize: "1.2rem",
                fontWeight: "600",
                color: "white",
                borderRadius: "1rem"
            }}
        >MODIFICAR EVENTO</Fab>
        </>

    )
}

export default ModifyButton