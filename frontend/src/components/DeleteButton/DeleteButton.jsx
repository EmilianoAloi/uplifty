import { Fab } from '@mui/material';


const DeleteButton = () => {
  return (

    <>

      <Fab variant='contained' color='error' 
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