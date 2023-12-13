import AddIcon from '@mui/icons-material/Add';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Stack, Fab } from "@mui/material"
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <Stack
            component="nav"
            className="navBar"
            sx={{
                flexDirection: "row",
                marginBottom: "5%",
                gap: 2,
                position: "absolute",
                bottom: "0",
                left: 0,
                right: 0,
                justifyContent: "center",
            }}>
            <Fab color="secondary"
                variant="extended"
                component={NavLink} to={"/addevent"}
                aria-label="add"
            >
                <AddIcon sx={{ mr: 1 }} />
                Agregar Evento
            </Fab>
            <Fab color="secondary"
                variant="extended"
                aria-label="add"
                component={NavLink} to={"/showevents"}
            >
                <CalendarMonthIcon sx={{ mr: 1 }} />
                Mostrar Eventos
            </Fab>
        </Stack>
    )
}

export default NavBar