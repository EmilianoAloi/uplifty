import { Stack } from '@mui/material'
import AddButton from '../AddButton/AddButton'
import { useParams } from 'react-router-dom'
import DeleteButton from "../DeleteButton/DeleteButton"
import ModifyButton from "../ModifyButton/ModifyButton"



const ButtonsArea = ({ handleFormSubmit, setOpen, formValues }) => {

    const params = useParams()



    return (



        <Stack sx={{ width: "35rem", margin: "0 auto", marginTop: "3rem", flexDirection: "row", gap: 5 }}>



            {params.id ? (
                <>
                    <ModifyButton params={params} setOpen={setOpen} formValues={formValues}/>
                    <DeleteButton params={params} setOpen={setOpen}/>
                </>
            ) : (

                <AddButton handleFormSubmit={handleFormSubmit} />)}



        </Stack>

    )
}

export default ButtonsArea