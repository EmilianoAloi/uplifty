import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './EventCard.css';






const EventCard = ({ evento }) => {


    return (
        <>
            <Box component={Link} to={`/event/${evento.id}`} >
                <Card className='card' sx={{ width: "100%", backgroundColor: "#D9FFF8", minHeight: "10rem", maxHeight: "10rem", color: "black" }} >
                    <CardContent  >
                        <Stack sx={{ flexDirection: "row", gap: 10, alignItems: "center", color: "black" }} >
                            <Stack sx={{ gap: 1 }}>
                                <Typography sx={{ fontSize: 10 }} color="text.secondary" > {evento.fecha} </Typography>
                                <Typography variant="h5" component="div">{evento.titulo}</Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">{evento.ubicacion}</Typography>
                                <Typography variant="body2" fontSize="12px" maxWidth="100%"> {evento.precio} </Typography>
                            </Stack>
                            <Typography variant="body2" fontSize="12px" maxWidth="100%"> {evento.descripcion} </Typography>
                        </Stack>
                    </CardContent>
                </Card>
            </Box>
        </>
    )
}

export default EventCard