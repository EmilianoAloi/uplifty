import * as React from 'react';
import { useState } from 'react';
import { Stack } from '@mui/material'
import AddButton from '../AddButton/AddButton'
import { useParams } from 'react-router-dom'
import DeleteButton from "../DeleteButton/DeleteButton"
import ModifyButton from "../ModifyButton/ModifyButton"
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';



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