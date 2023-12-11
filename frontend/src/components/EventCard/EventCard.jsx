import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';






const EventCard = ({ evento }) => {



    return (
        <>



            <Card sx={{ width: "100%", backgroundColor: "#D9FFF8", minHeight:"10rem", maxHeight:"10rem" }}>
                <CardContent >
                    <Stack sx={{ flexDirection:"row", gap: 10, alignItems:"center" }}>

                        <Stack sx={{gap:1, }}>
                            <Typography sx={{ fontSize: 10 }} color="text.secondary" > {evento.fecha} </Typography>
                            <Typography variant="h5" component="div">{evento.titulo}</Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">{evento.ubicacion}</Typography>
                        </Stack>

                        <Typography variant="body2" fontSize="12px" maxWidth="100%"> {evento.descripcion} </Typography>

                    </Stack>
                </CardContent>
                {/* <CardActions>
                    <Button size="small">MODIFICAR</Button>
                    <Button size="small" color='error' >ELIMINAR</Button>
                </CardActions> */}
            </Card>






        </>
    )
}

export default EventCard