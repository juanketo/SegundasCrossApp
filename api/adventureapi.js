import axios from "axios"

export const adventureapi = axios.create({
    baseURL: "http://localhost:8001/api"
})