import "./AddEventModal.css"
import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Stack, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { DateInput } from '../DateInput/DateInput';
import PriceInput from '../PriceInput/PriceInput';
import { addEvent, getEvent } from '../../api/events.api';
import ButtonsArea from '../ButtonsArea/ButtonsArea';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AddEventModal = () => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "55rem",
        height: '35rem',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };


    const navigate = useNavigate();
    const params = useParams()
    const [open, setOpen] = useState(true);
    const [openToastError, setOpenToastError] = useState(false);
    const [openToastOk, setOpenToastOk] = useState(false);
    const [openToastUpdate, setOpenToastUpdate] = useState(false);
    const [openToastDel, setOpenToastDel] = useState(false);



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

    const handleCloseToast = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenToastError(false);
        setOpenToastOk(false);
        setOpenToastUpdate(false);
        setOpenToastDel(false);

    };

    const handleFormSubmit = async () => {
        try {

            if (formValues.titulo && formValues.descripcion && formValues.ubicacion && formValues.fecha && formValues.precio !== "") {
                setOpenToastOk(true)
                await addEvent(formValues);
                
            } else {
                setOpenToastError(true)
            }
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
        }
    };


    useEffect(() => {

        async function eventData() {

            if (params.id) {
                const res = await getEvent(params.id);
                console.log(res.data)
                setFormValues(res.data)
            }
        };

        eventData();
    }, [params.id]);


    return (

        <>


            <Modal open={open} >

                <Stack sx={style}  >
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
                                    value={formValues.titulo}
                                    onChange={handleInputChange} />
                            </Stack>


                            <Stack sx={{ marginTop: "2rem" }}>
                                <Typography variant='h6' sx={{ mb: "1rem" }}>Descripción</Typography>
                                <TextField label="Descripción del evento"
                                    variant="filled"
                                    name="descripcion"
                                    value={formValues.descripcion}
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
                                    value={formValues.ubicacion}
                                    onChange={handleInputChange}
                                />
                            </Stack>

                            <Stack>
                                <Typography variant='h6'>Fecha del evento</Typography>
                                <DateInput name="fecha" handleInputChange={handleInputChange} formValues={formValues} />
                            </Stack>

                            <PriceInput handleInputChange={handleInputChange} formValues={formValues} />

                        </Stack>

                    </Stack>

                    <ButtonsArea
                        handleFormSubmit={handleFormSubmit}
                        setOpen={setOpen}
                        formValues={formValues}
                        setOpenToastUpdate={setOpenToastUpdate}
                        setOpenToastError={setOpenToastError}
                        setOpenToastDel={setOpenToastDel}
                    />

                </Stack>

            </Modal>

            <Snackbar open={openToastError} autoHideDuration={6000} onClose={handleCloseToast}>
                <Alert onClose={handleCloseToast} severity="error" sx={{ width: '100%' }}>
                    Faltan llenar campos del formulario!
                </Alert>
            </Snackbar>

            <Snackbar open={openToastUpdate} autoHideDuration={6000} onClose={handleCloseToast}>
                <Alert onClose={handleCloseToast} severity="warning" sx={{ width: '100%' }}>
                    Evento modificado con exito!
                </Alert>
            </Snackbar>

            <Snackbar open={openToastOk} autoHideDuration={6000} onClose={handleCloseToast}>
                <Alert onClose={handleCloseToast} severity="success" sx={{ width: '100%' }}>
                    Evento creado con exito!
                </Alert>
            </Snackbar>

            <Snackbar open={openToastDel} autoHideDuration={6000} onClose={handleCloseToast}>
                <Alert onClose={handleCloseToast} severity="error" sx={{ width: '100%' }}>
                    Evento eliminado con exito!
                </Alert>
            </Snackbar>



        </>




    )
}

export default AddEventModal