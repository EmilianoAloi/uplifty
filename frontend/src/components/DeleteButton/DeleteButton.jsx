import { Fab } from '@mui/material';
import { delEvent } from '../../api/events.api';

const DeleteButton = ({ params, setOpen }) => {

  const handleClick = () => {
    delEvent(params.id)
    setOpen(false);

  }
  return (

    <>

      <Fab variant='contained' color='error'
        onClick={handleClick}
        sx={{
          width: "100%",
          fontSize: "1.2rem",
          fontWeight: "600",
          color: "white",
          borderRadius: "1rem"
        }}
      >ELIMINAR EVENTO</Fab>

    </>
  )
}

export default DeleteButton