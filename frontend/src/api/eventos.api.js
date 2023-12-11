import axios from "axios"

export const getAllEvents = () => {
   return axios.get("http://localhost:8000/api/v1/eventos/")
};