import { Stack, Button } from "@mui/material"


const NavBar = () => {
    return (
        <Stack component="nav" className="navBar" justifyContent="center" sx={{ flexDirection: "row", gap: 2 }}>
            <Button variant="contained" >AGREGAR</Button>
            <Button variant="contained">EVENTOS</Button>
        </Stack>
    )
}

export default NavBar