import './EventsModal.css';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';


import { getAllEvents } from '../../api/events.api';
import EventCard from '../EventCard/EventCard';

import Grid from '@mui/material/Grid';

const AddEventModal = () => {


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "70rem",
        height: '42rem',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    // eslint-disable-next-line
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

        <Modal open={open} >
            <Box sx={style} className="eventsModal" >
                <Typography variant="h4" component="h2" sx={{ mb: 3, fontWeight: 600 }} >
                    EVENTOS
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
            </Box>
        </Modal>
    )
}

export default AddEventModal