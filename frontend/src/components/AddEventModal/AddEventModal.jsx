import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Stack, Button, Fab } from '@mui/material';
import TextAreaDescription from '../TextAreaDescription/TextAreaDescription';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import CloseIcon from '@mui/icons-material/Close';

const AddEventModal = () => {


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "80%",
        height: '90%',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };


    const [open, setOpen] = useState(true);


    // TextArea





    return (



        <>


            <Modal open={open}              >
                <Box sx={style}>

                    <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                        <Typography variant="h4" component="h2" >
                            Crear evento
                        </Typography>


                        <Button
                            color='error'
                            component={Link} to={"/"}
                            variant='text'
                            sx={{
                                position: 'absolute',
                                top: 10,
                                right: 10,
                                borderRadius: 1

                            }} >
                            <CloseIcon sx={{}} />
                        </Button>

                    </Stack>
                    <Box
                        component="form"
                        sx={{ m: 1, width: "50%" }}
                        noValidate
                        autoComplete="off"
                    >
                        <Stack sx={{ marginTop: "2rem" }}>
                            <Typography variant='h6'>Titulo del Evento</Typography>
                            <TextField label="Ej: Evento Tech" variant="standard" />
                        </Stack>

                        <Stack sx={{ marginTop: "2rem" }}>
                            <Typography variant='h6'>Ubicación del Evento</Typography>
                            <TextField label="Ej: Centro Cultural Konex" variant="standard" />
                        </Stack>

                        <Stack sx={{ marginTop: "2rem" }}>
                            <Typography variant='h6'>Descripción</Typography>
                            <TextAreaDescription />
                        </Stack>

                    </Box>

                    <Stack sx={{ width: "20rem", margin: "0 auto", marginTop: "3rem" }}>
                        <Fab variant='contained' color='success'
                            sx={{
                                width: "100%",
                                fontSize: "1.4rem",
                                fontWeight: "600",
                                color: "white",
                                borderRadius: "1rem"

                            }}
                        >CREAR EVENTO</Fab>
                    </Stack>
                </Box>

            </Modal>




        </>




    )
}

export default AddEventModal