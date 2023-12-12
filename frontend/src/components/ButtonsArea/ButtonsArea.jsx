import { Stack } from '@mui/material'
import AddButton from '../AddButton/AddButton'
import { useParams } from 'react-router-dom'
import DeleteButton from "../DeleteButton/DeleteButton"
import ModifyButton from "../ModifyButton/ModifyButton"



const ButtonsArea = ({ handleFormSubmit }) => {

    const params = useParams()



    return (



        <Stack sx={{ width: "35rem", margin: "0 auto", marginTop: "3rem", flexDirection: "row", gap: 5 }}>



            {params.id ? (
                <>
                    <ModifyButton />
                    <DeleteButton />
                </>
            ) : (

                <AddButton handleFormSubmit={handleFormSubmit} />)}


            {/* {params.id ? (
                <Typography variant="h4" component="h2" >
                    Modificar evento
                </Typography>
            ) :
                (<Typography variant="h4" component="h2" >
                    Crear evento
                </Typography>)} */}

        </Stack>

    )
}

export default ButtonsArea