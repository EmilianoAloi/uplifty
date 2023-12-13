import './EventCard.css';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Stack, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

import PlaceIcon from '@mui/icons-material/Place';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


const EventCard = ({ evento }) => {


    return (
        <>


            <Link to={`/event/${evento.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Card className='card' sx={{ backgroundColor: "#D9FFF8", minHeight: "10rem", color: "black", padding:0, borderRadius:"20px" }}>
                    <CardContent>
                        <Grid container spacing={2} sx={{ flexDirection: "" }}>
                            <Grid item xs={12} sm={6} >
                                <Stack sx={{ gap: 0.3 }}>
                                    <Typography sx={{ fontSize: 12 }} color="text.secondary">
                                        <CalendarMonthIcon fontSize="12px" /> {evento.fecha}
                                    </Typography>

                                    <Typography variant="body2" fontSize="12px" color="text.secondary" sx={{mb:1}}>
                                        <PlaceIcon fontSize="12px" /> {evento.ubicacion}
                                    </Typography>
                                    <Typography variant="h5" component="div" sx={{ fontWeight: 700 }}>
                                        {evento.titulo}
                                    </Typography>


                                </Stack>
                                <Typography variant="body2" fontSize="20px" sx={{ pt: 1}}>
                                    ${evento.precio}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6} sx={{  width: "20rem", alignSelf:"start", p:2 }}>
                                <Typography sx={{fontSize:"14px", fontWeight:600, pb:0.4}}>Descripcion:</Typography>
                                <Typography fontSize="12px" sx={{ fontStyle:"oblique" }} >
                                    {evento.descripcion}
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Link>

        </>
    )
}

export default EventCard