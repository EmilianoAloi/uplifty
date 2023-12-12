import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Stack, Button, Fab } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { DateInput } from '../DateInput/DateInput';
import PriceInput from '../PriceInput/PriceInput';
import { addEvent } from '../../api/events.api';
import ButtonsArea from '../ButtonsArea/ButtonsArea';

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

    const params = useParams()


    const [open, setOpen] = useState(true);

    const [formValues, setFormValues] = useState({
        titulo: '',
        descripcion: '',
        precio: '',
        fecha: '',
        ubicacion: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };



    const handleFormSubmit = async () => {
        try {
            console.log('Formulario enviado:', formValues);
            await addEvent(formValues);

            setOpen(false);
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
        }
    };

    return (


        <>
            <Modal open={open} >
                <Box sx={style}>

                    <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                    {params.id ? (
                <Typography variant="h4" component="h2" >
                    Modificar evento
                </Typography>
            ) :
                (<Typography variant="h4" component="h2" >
                    Crear evento
                </Typography>)}

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
                                <TextField
                                    label="Ej: Evento Tech"
                                    variant="standard"
                                    name="titulo"
                                    onChange={handleInputChange} />
                            </Stack>


                            <Stack sx={{ marginTop: "2rem" }}>
                                <Typography variant='h6' sx={{ mb: "1rem" }}>Descripción</Typography>
                                <TextField label="Descripción del evento"
                                    variant="filled"
                                    name="descripcion"
                                    multiline
                                    rows={5}
                                    onChange={handleInputChange}
                                />

                            </Stack>

                        </Stack>

                        <Stack sx={{ marginTop: "2rem", gap: 1 }}>


                            <Stack sx={{ marginBottom: "2rem" }}>
                                <Typography variant='h6'>Ubicación del Evento</Typography>
                                <TextField label="Ej: Centro Cultural Konex"
                                    variant="standard"
                                    name="ubicacion"
                                    onChange={handleInputChange}
                                />
                            </Stack>

                            <Stack>
                                <Typography variant='h6'>Fecha del evento</Typography>
                                <DateInput name="fecha" handleInputChange={handleInputChange} />
                            </Stack>

                            <PriceInput handleInputChange={handleInputChange} />

                        </Stack>

                    </Stack>

                    <ButtonsArea handleFormSubmit={handleFormSubmit} />

                </Box>

            </Modal>




        </>




    )
}

export default AddEventModal