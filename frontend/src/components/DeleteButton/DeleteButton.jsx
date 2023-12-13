import { Fab } from '@mui/material';
import { delEvent } from '../../api/events.api';
import { useNavigate } from 'react-router-dom';

const DeleteButton = ({ params, setOpen, setOpenToastDel }) => {

  const navigate = useNavigate()


  const handleClick = () => {
    delEvent(params.id)
    setOpenToastDel(true)
    setOpen(false);

    setTimeout(() => {
      navigate("/");
  }, 1000);
  
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