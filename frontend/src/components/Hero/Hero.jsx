import fondo from "../../assets/images/fondo.jpg"
import { Stack } from '@mui/material'
import "./Hero.css"


const Hero = () => {
  return (
    <Stack component="section" className="fondo">

      <img src={fondo} alt="fondo" />


    </Stack>)
}

export default Hero