import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, Stack } from '@mui/material';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';


import { getAllEvents } from '../../api/events.api';
import EventCard from '../EventCard/EventCard';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const AddEventModal = () => {


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "95%",
        height: '90%',
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


    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));



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



                    <Box sx={{
                        width: '100%',
                        maxHeight: 'calc(95% - 1px)', 
                        overflowY: 'auto',
                    }}>
                        <Grid container rowSpacing={1} columnSpacing={3}>
                            {events.map((evento) => (
                                <Grid item key={evento.id} xs={12} md={6}>
                                    <EventCard evento={evento} />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>





                    {/* 
                    <Stack>

                        <Stack sx={{ flexDirection: "column", justifyContent: 'center', maxWidth: "100%", gap: 1 }}>
                            {events.map(evento => (
                                <EventCard key={evento.id} evento={evento} />
                            ))}
                        </Stack>


                    </Stack> */}






                </Box>
            </Modal>



        </>




    )
}

export default AddEventModal