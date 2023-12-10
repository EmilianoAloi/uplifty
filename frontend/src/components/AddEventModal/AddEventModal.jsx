import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Stack, Button, Fab } from '@mui/material';
import TextAreaDescription from '../TextAreaDescription/TextAreaDescription';
import CloseIcon from '@mui/icons-material/Close';
import { DateInput } from '../DateInput/DateInput';
import PriceInput from '../PriceInput/PriceInput';

const AddEventModal = () => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "60%",
        height: '80%',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };


    const [open, setOpen] = useState(true);



    return (


        <>
            <Modal open={open} >
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
                    <Stack
                        component="form"
                        sx={{ m: 1, width: "90%" }}
                        noValidate
                        autoComplete="off"
                        flexDirection="row"
                        justifyContent="space-between"
                        alignItems="start"
                    >


                        <Stack sx={{ flexDirection: "column", width: "50%" }}>
                            <Stack sx={{ marginTop: "2rem" }}>
                                <Typography variant='h6'>Titulo del Evento</Typography>
                                <TextField label="Ej: Evento Tech" variant="standard" />
                            </Stack>


                            <Stack sx={{ marginTop: "2rem" }}>
                                <Typography variant='h6'>Descripción</Typography>
                                <TextAreaDescription />
                            </Stack>

                        </Stack>

                        <Stack sx={{ marginTop: "2rem", gap: 1 }}>


                            <Stack sx={{ marginBottom: "2rem" }}>
                                <Typography variant='h6'>Ubicación del Evento</Typography>
                                <TextField label="Ej: Centro Cultural Konex" variant="standard" />
                            </Stack>

                            <Stack>
                                <Typography variant='h6'>Fecha del evento</Typography>
                                <DateInput />
                            </Stack>

                            <PriceInput />

                        </Stack>

                    </Stack>

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