
import { Stack } from '@mui/material'
import { useParams } from 'react-router-dom'
import AddButton from '../AddButton/AddButton'
import DeleteButton from "../DeleteButton/DeleteButton"
import ModifyButton from "../ModifyButton/ModifyButton"

const ButtonsArea = ({ handleFormSubmit, setOpen, formValues, setOpenToastUpdate, setOpenToastDel }) => {

    const params = useParams()

    return (
        <Stack sx={{ width: "35rem", margin: "0 auto", marginTop: "3rem", flexDirection: "row", gap: 5 }}>
            {params.id ? (
                <>
                    <ModifyButton params={params} setOpen={setOpen} formValues={formValues} setOpenToastUpdate={setOpenToastUpdate} />
                    <DeleteButton params={params} setOpen={setOpen} setOpenToastDel={setOpenToastDel} />
                </>
            ) : (
                <AddButton handleFormSubmit={handleFormSubmit} />)}
        </Stack>
    );
}

export default ButtonsArea