import { Stack } from '@mui/material'
import AddButton from '../AddButton/AddButton'

const ButtonsArea = ({ handleFormSubmit }) => {
    return (

        <Stack sx={{ width: "20rem", margin: "0 auto", marginTop: "3rem" }}>
            <AddButton handleFormSubmit={handleFormSubmit} />
        </Stack>

    )
}

export default ButtonsArea