import axios from "axios"


const eventsApi = axios.create({
   baseURL: "http://localhost:8000/api/v1/eventos/"
})

export const getAllEvents = () => {
   return eventsApi.get("/");
};

export const getEvent = (id) => {
   return eventsApi.get(`/${id}/`)
}

export const addEvent = (formValues) => {
   return eventsApi.post("/", formValues);
};

export const delEvent = (id) => {
   return eventsApi.delete(`/${id}`);
}

export const updateEvent = (id, event) => {
   return eventsApi.put(`/${id}/`, event);
}