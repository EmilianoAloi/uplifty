import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, Stack } from '@mui/material';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';


import { getAllEvents } from '../../api/eventos.api';

const AddEventModal = () => {


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "80%",
        height: '80%',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const [open, setOpen] = useState(true);

    const [events, setEvents] = useState([]);

    useEffect(() => {
        async function loadEvents() {
            const res = await getAllEvents();
            setEvents(res.data);
        }
        loadEvents();
    }, []);





    return (



        <>


            <Modal
                open={open}
            // onClose={handleClose}
            >
                <Box sx={style}>
                    <Typography variant="h4" component="h2" >
                        Eventos
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



                    <Stack>


                        <Stack>
                            {events.map(e => (
                                <div key={e.id}>
                                    <h1>{e.titulo}</h1>
                                    <p>{e.descripcion}</p>
                                </div>

                            ))}

                        </Stack>


                    </Stack>






                </Box>
            </Modal>



        </>




    )
}

export default AddEventModal