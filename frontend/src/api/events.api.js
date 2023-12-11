import axios from "axios"


const eventsApi = axios.create({
   baseURL: "http://localhost:8000/api/v1/eventos/"
})

export const getAllEvents = () => {
   return eventsApi.get("/");
};

export const addEvent = (formValues) => {
   return eventsApi.post("/", formValues);
};