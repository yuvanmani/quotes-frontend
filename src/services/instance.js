import axios from "axios";

const baseURL = "https://quotes-backend-t5bo.onrender.com/api/v1";

const instance = axios.create({
    baseURL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    withCredentials: true
})

export default instance