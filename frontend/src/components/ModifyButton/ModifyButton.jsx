import { Fab } from '@mui/material';
import { updateEvent } from '../../api/events.api';
import { useNavigate } from 'react-router-dom';

const ModifyButton = ({ params, setOpen, formValues, setOpenToastUpdate }) => {

    const navigate = useNavigate()
    const handleClick = () => {
        updateEvent(params.id, formValues);
        setOpenToastUpdate(true)
        // setOpen(false);

        setTimeout(() => {
            navigate("/showevents");
        }, 2000);

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